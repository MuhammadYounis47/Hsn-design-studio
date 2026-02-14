'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Riocan from '@/app/work-components/Riocan';
import Walkers from '@/app/work-components/Walkers';
import Glad from '@/app/work-components/Glad';
import Rogers from '@/app/work-components/Rogers';
import Colliers from '@/app/work-components/Colliers';
import RoyalBankPlaza from '@/app/work-components/RoyalBankPlaza';

// Import all work components
const componentsMap: { [key: string]: React.FC } = {
  'riocan-living': Riocan,
  'walkers':Walkers,
  'glad-takeaways':Glad,
  'rogers':Rogers,
  'colliers-rise-program':Colliers,
  'royal-bank-plaza':RoyalBankPlaza,
};

export default function WorkPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const WorkComponent = componentsMap[slug as string];

  if (!WorkComponent) {
    return <div className="p-8">Work not found.</div>;
  }

  return <WorkComponent />;
}
