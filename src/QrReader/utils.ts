export const isMediaDevicesSupported = () => {
  const isMediaDevicesSupported =
    typeof navigator !== 'undefined' && !!navigator.mediaDevices;

  if (!isMediaDevicesSupported) {
    console.warn(
      `[ReactQrReader]: MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"`
    );
  }

  return isMediaDevicesSupported;
};

export const isValidType = (value: any, name: string, type: string) => {
  const isValid = typeof value === type;

  if (!isValid) {
    console.warn(
      `[ReactQrReader]: Expected "${name}" to be a of type "${type}".`
    );
  }

  return isValid;
};

export const isValidValue = (value: any, name: string, values: any[]) => {
  const hasValue = values.find((v) => v === value);

  if (!hasValue) {
    console.warn(
      `[ReactQrReader]: Expected "${name}" to have one of the following values: "${JSON.stringify(
        values
      )}".`
    );
  }

  return hasValue;
};
