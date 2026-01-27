'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Riocan from '@/app/work-components/Riocan';
import Walkers from '@/app/work-components/Walkers';
import Glad from '@/app/work-components/Glad';
import Rogers from '@/app/work-components/Rogers';

// Import all work components
const componentsMap: { [key: string]: React.FC } = {
  'riocan-living': Riocan,
  'walkers':Walkers,
  'glad-takeaways':Glad,
  'rogers':Rogers
};

export default function WorkPage() {
  const params = useParams();
  const slug = params.slug;

  const WorkComponent = componentsMap[slug];

  if (!WorkComponent) {
    return <div className="p-8">Work not found.</div>;
  }

  return <WorkComponent />;
}
