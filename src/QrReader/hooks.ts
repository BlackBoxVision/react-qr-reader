import { MutableRefObject, useEffect, useRef } from 'react';
import { BrowserQRCodeReader, IScannerControls } from '@zxing/browser';

import { UseQrReaderHook } from '../types';

import { isMediaDevicesSupported, isValidType, isValidValue } from './utils';

// TODO: add support for debug logs
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

    if (
      !isMediaDevicesSupported() &&
      isValidType(onResult, 'onResult', 'function')
    ) {
      const message =
        'MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"';

      onResult(null, new Error(message), codeReader);
    }

    if (
      isValidType(facingMode, 'facingMode', 'string') &&
      isValidValue(facingMode, 'facingMode', [
        'user',
        'left',
        'right',
        'environment',
      ])
    ) {
      // TODO: add support for passing additional props to constraints
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode,
        },
      };

      codeReader
        .decodeFromConstraints(constraints, videoId, (result, error) => {
          if (isValidType(onResult, 'onResult', 'function')) {
            onResult(result, error, codeReader);
          }
        })
        .then((controls: IScannerControls) => (controlsRef.current = controls))
        .catch((error: Error) => {
          if (isValidType(onResult, 'onResult', 'function')) {
            onResult(null, error, codeReader);
          }
        });
    }

    return () => {
      controlsRef.current?.stop();
    };
  }, []);
};
