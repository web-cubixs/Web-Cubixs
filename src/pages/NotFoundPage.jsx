import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { Button } from '../components/common/Button';


export const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="font-display font-black text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            404
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Button to="/" variant="primary" size="md" showArrow>
              RETURN HOME
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
