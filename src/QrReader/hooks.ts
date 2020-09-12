import { useEffect } from 'react';
import { BrowserQRCodeReader, Result } from '@zxing/library';

export type UseQrReaderHook = (props: UseQrReaderHookProps) => void;
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
   * Property that represents the scan period
   */
  scanDelay?: number;
  /**
   * Property that represents the ID of the video element
   */
  videoId?: string;
};

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
        onResult(null, new Error('media devices is not supported'));
      }
    }

    codeReader.getVideoInputDevices().then((videoInputDevices) => {
      // TODO: get device camera by facing-mode
      const deviceId = videoInputDevices[0].deviceId;

      codeReader.decodeFromInputVideoDeviceContinuously(
        deviceId,
        videoId,
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
  }, [scanDelay, videoId, facingMode, onResult]);
};
