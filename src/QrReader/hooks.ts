import { useEffect } from 'react';
import { BrowserQRCodeReader, Result } from '@zxing/library';

import { getDeviceId } from './utils';

export type CodeReaderError =
  | 'FormatException'
  | 'NotFoundException'
  | 'ChecksumException'
  | 'NoMediaDevicesSupportException';

export type UseQrReaderHook = (props: UseQrReaderHookProps) => void;
export type OnResultFunction = (
  result?: Result,
  error?: CodeReaderError,
  codeReader?: BrowserQRCodeReader
) => void;

export type UseQrReaderHookProps = {
  /**
   * The camera to use, especify 'user' for front camera or 'environment' for back camera.
   */
  facingMode?: VideoFacingModeEnum;
  /**
   * Callback for retrieving the result
   */
  onResult?: OnResultFunction;
  /**
   * Property that represents the scan period
   */
  scanDelay?: number;
  /**
   * Property that represents the ID of the video element
   */
  videoId?: string;
};

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
