import { useEffect } from 'react';
import { BrowserQRCodeReader } from '@zxing/library';

import { getDeviceId } from './utils';
import { UseQrReaderHook, CodeReaderError } from '../types';

// TODO: implement dependencies in a way that video stream doesn't flashback
export const useQrReader: UseQrReaderHook = ({
  facingMode,
  scanDelay,
  onResult,
  videoId,
}) => {
  useEffect(() => {
    const codeReader = new BrowserQRCodeReader(scanDelay);

    if (!codeReader.isMediaDevicesSuported) {
      if (typeof onResult === 'function') {
        onResult(null, 'NoMediaDevicesSupportException');
      }
    }

    codeReader.getVideoInputDevices().then(async (videoInputDevices) => {
      const deviceId = await getDeviceId(videoInputDevices, facingMode);

      codeReader.decodeFromInputVideoDeviceContinuously(
        deviceId,
        videoId,
        (result, error) => {
          const exception = (error && (error.name as CodeReaderError)) || null;

          if (typeof onResult === 'function') {
            onResult(result, exception, codeReader);
          }
        }
      );
    });

    return () => {
      codeReader.stopContinuousDecode();
      codeReader.stopAsyncDecode();
    };
  }, []);
};
