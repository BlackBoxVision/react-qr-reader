import { useEffect } from 'react';
import { BrowserQRCodeReader, Result } from '@zxing/library';

export type DebugDataTypes = 'raw_data' | 'load' | 'value' | 'error';

export type UseQrReaderHook = (props: UseQrReaderHookProps) => void;
export type DebugFunction = (data: any, type: DebugDataTypes) => void;
export type OnResultFunction = (result: Result, error: Error) => void;

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
   * It enables debug logs to see what's going on with the QrReader
   */
  debug?: DebugFunction;
};

export const useQrReader: UseQrReaderHook = ({
  facingMode,
  onResult,
  debug,
}) => {
  useEffect(() => {
    const codeReader = new BrowserQRCodeReader(500);

    if (!codeReader.isMediaDevicesSuported) {
      if (typeof onResult === 'function') {
        onResult(null, new Error('media devices is not supported'));
      }
    }

    codeReader.getVideoInputDevices().then((videoInputDevices) => {
      const deviceId = videoInputDevices[0].deviceId;

      codeReader.decodeFromInputVideoDeviceContinuously(
        deviceId,
        'video',
        (result, error) => {
          if (typeof onResult === 'function') {
            onResult(result, error);
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
