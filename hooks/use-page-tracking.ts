'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function usePageTracking() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (pathname && window.gtag) {
                window.gtag('config', 'G-B9Q1YPWKVG', {
                    page_path: pathname + searchParams.toString(),
                });
            }
        }
    }, [pathname, searchParams]);
} 