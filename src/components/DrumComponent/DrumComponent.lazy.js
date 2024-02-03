import React, { lazy, Suspense } from 'react';

const LazyDrumComponent = lazy(() => import('./DrumComponent'));

const DrumComponent = props => (
  <Suspense fallback={null}>
    <LazyDrumComponent {...props} />
  </Suspense>
);

export default DrumComponent;
