'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-B9Q1YPWKVG';

export function usePageTracking() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname && window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: pathname + searchParams.toString(),
                stream_id: '10160486836',
                stream_name: 'LTD',
                site_url: 'https://ltd.eshway.com'
            });
        }
    }, [pathname, searchParams]);
} 