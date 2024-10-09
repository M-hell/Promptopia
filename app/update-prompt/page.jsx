import React, { Suspense } from 'react';
import UpdatePrompt from './UpdatePrompt';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
}
