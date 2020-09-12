import styles from './styles';

import * as React from 'react';

import {
  useQrReader,
  DebugFunction,
  OnResultFunction,
} from './hooks/useQrReader';

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
   * Function that takes a context and gives you the choice to log
   */
  debug?: DebugFunction;
  /**
   * Property that represents the view finder component
   */
  ViewFinder: (props: any) => React.ReactElement<any, any> | null;
};

export const QrReader: React.FunctionComponent<QrReaderProps> = ({
  facingMode,
  ViewFinder,
  className,
  onResult,
  style,
  debug,
}: QrReaderProps) => {
  const videoStyle = {
    ...styles.videoPreview,
    transform: facingMode === 'user' && 'scaleX(-1)',
  } as any;

  useQrReader({
    facingMode,
    onResult,
    debug,
  });

  return (
    <section className={className} style={style}>
      <section style={styles.container as any}>
        {!!ViewFinder && <ViewFinder />}
        <video id="video" muted style={videoStyle} />
      </section>
    </section>
  );
};

QrReader.displayName = 'QrReader';
QrReader.defaultProps = {
  facingMode: 'environment',
};

export default QrReader;
