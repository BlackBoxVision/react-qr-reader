import { MutableRefObject, useEffect, useRef } from 'react';
import { BrowserQRCodeReader, IScannerControls } from '@zxing/browser';

import { UseQrReaderHook, CodeReaderError } from '../types';

import * as BrowserHelpers from './utils';

export const useQrReader: UseQrReaderHook = ({
  facingMode,
  scanDelay,
  onResult,
  videoId,
}) => {
  const controlsRef: MutableRefObject<IScannerControls> = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader(null, {
      delayBetweenScanAttempts: scanDelay,
    });

    if (!BrowserHelpers.isMediaDevicesSupported()) {
      if (typeof onResult === 'function') {
        onResult(null, 'NoMediaDevicesSupportException');
      }
    }

    BrowserQRCodeReader.listVideoInputDevices()
      .then((videoInputDevices: MediaDeviceInfo[]) =>
        BrowserHelpers.getDeviceId(videoInputDevices, facingMode)
      )
      .then((deviceId: string) =>
        codeReader.decodeFromVideoDevice(deviceId, videoId, (result, error) => {
          const exception =
            (error && (error.name as CodeReaderError)) || error.name;

          if (typeof onResult === 'function') {
            onResult(result, exception, codeReader);
          }
        })
      )
      .then((controls: IScannerControls) => (controlsRef.current = controls))
      .catch((err: Error) => {
        if (typeof onResult === 'function') {
          onResult(null, err, codeReader);
        }
      });

    return () => {
      controlsRef.current?.stop();
    };
  }, []);
};
