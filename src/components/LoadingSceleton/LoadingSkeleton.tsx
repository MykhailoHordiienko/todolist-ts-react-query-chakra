import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingSkeleton = () => (
  <ContentLoader
    className="m-auto"
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
    foregroundColor="#facc15"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
);

export default LoadingSkeleton;
