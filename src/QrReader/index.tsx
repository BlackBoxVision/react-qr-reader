import * as React from 'react';

import styles from './styles';
import { useQrReader } from './hooks';
import { QrReaderProps } from '../types';

export const QrReader: React.FC<QrReaderProps> = ({
  constraints,
  ViewFinder,
  className,
  scanDelay,
  onResult,
  videoId,
  style,
}) => {
  const videoStyle = {
    ...styles.videoPreview,
    transform: constraints?.facingMode === 'user' && 'scaleX(-1)',
  } as any;

  useQrReader({
    constraints,
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
  constraints: {
    facingMode: 'user',
  },
  videoId: 'video',
  scanDelay: 500,
};
