import styles from './styles';

import * as React from 'react';

import { useQrReader, OnResultFunction } from './hooks';

export type QrReaderProps = {
  /**
   * The camera to use, especify 'user' for front camera or 'environment' for back camera.
   */
  facingMode: VideoFacingModeEnum;
  /**
   * ClassName for the container element.
   */
  className?: string;
  /**
   * Called when an error occurs.
   */
  onResult?: OnResultFunction;
  /**
   * Styling for the container element. Warning The preview will always keep its 1:1 aspect ratio.
   */
  style?: any;
  /**
   * Property that represents the view finder component
   */
  ViewFinder?: (props: any) => React.ReactElement<any, any> | null;
  /**
   * Property that represents the scan period
   */
  scanDelay?: number;
  /**
   * Property that represents the ID of the video element
   */
  videoId?: string;
};

export const QrReader: React.FunctionComponent<QrReaderProps> = ({
  facingMode,
  ViewFinder,
  className,
  scanDelay,
  onResult,
  videoId,
  style,
}: QrReaderProps) => {
  const videoStyle = {
    ...styles.videoPreview,
    transform: facingMode === 'user' && 'scaleX(-1)',
  } as any;

  useQrReader({
    facingMode,
    scanDelay,
    onResult,
    videoId,
  });

  return (
    <section className={className} style={style}>
      <section style={styles.container as any}>
        {!!ViewFinder && <ViewFinder />}
        <video id={videoId} muted style={videoStyle} />
      </section>
    </section>
  );
};

QrReader.displayName = 'QrReader';
QrReader.defaultProps = {
  facingMode: 'environment',
  videoId: 'video',
  scanDelay: 500,
};

export default QrReader;
