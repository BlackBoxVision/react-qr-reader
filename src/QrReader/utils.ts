import { Device } from 'types';

export const getDeviceId = async (
  videoInputDevices: MediaDeviceInfo[],
  facingMode: VideoFacingModeEnum
): Promise<string> => {
  const devices: Device[] = [];

  for (let videoInputDevice of videoInputDevices) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: {
            exact: videoInputDevice.deviceId,
          },
        },
      });

      const [track] = stream.getVideoTracks();

      let settings: MediaTrackSettings = null;

      if (!!track) {
        settings = track.getSettings();
        track.getCapabilities();

        track.stop();
      }

      devices.push({
        deviceId: videoInputDevice.deviceId,
        facingMode: settings?.facingMode || facingMode,
        hasStreamingSupport: true,
      });
    } catch (err) {
      devices.push({
        deviceId: videoInputDevice.deviceId,
        facingMode: null,
        hasStreamingSupport: false,
      });
    }
  }

  const [device] = devices.filter(
    (device) => device.hasStreamingSupport && device.facingMode === facingMode
  );

  if (!device) {
    throw new Error('No video input devices found');
  }

  return device.deviceId;
};

export const isMediaDevicesSupported = () => {
  return typeof navigator !== 'undefined' && !!navigator.mediaDevices;
};
