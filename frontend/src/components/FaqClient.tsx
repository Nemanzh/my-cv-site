'use client';

import dynamic from 'next/dynamic';

const Faq = dynamic(() => import('./Faq'), { ssr: false });

export default function FaqClient() {
  return <Faq />;
}
