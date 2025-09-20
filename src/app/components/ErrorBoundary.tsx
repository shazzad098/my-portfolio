// src/app/components/ErrorBoundary.tsx
'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Handle chunk load errors
    const handleChunkError = (event: any) => {
      if (event.reason && event.reason.name === 'ChunkLoadError') {
        console.log('Chunk load error occurred, reloading...');
        window.location.reload();
      }
    };

    window.addEventListener('unhandledrejection', handleChunkError);
    
    return () => {
      window.removeEventListener('unhandledrejection', handleChunkError);
    };
  }, []);

  return <>{children}</>;
}