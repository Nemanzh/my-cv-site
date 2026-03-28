'use client';

import { useReportWebVitals } from 'next/web-vitals';

type ReportWebVitalsCallback = Parameters<typeof useReportWebVitals>[0];

const reportWebVitals: ReportWebVitalsCallback = (metric) => {
  const body = JSON.stringify({
    id: metric.id,
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    navigationType: metric.navigationType,
    url: window.location.href,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/web-vitals', body);
    return;
  }

  fetch('/api/web-vitals', {
    body,
    method: 'POST',
    keepalive: true,
    headers: {
      'content-type': 'application/json',
    },
  }).catch(() => {
    // Ignore networking errors from background vitals reporting.
  });
};

export default function WebVitals() {
  useReportWebVitals(reportWebVitals);
  return null;
}
