// useGA4.ts
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

const GA_MEASUREMENT_ID: string = 'G-0GMJJTPG06';

const useGA4 = (): void => {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize GA4
    const initializeGA4 = (): void => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]): void {
        window.dataLayer.push(args);
      }

      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });
    };

    const prevScript = document.getElementById("gaTag");

    if (!prevScript) {
      // Dynamically inject the GA4 script
      const scriptUrl: string = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      const script: HTMLScriptElement = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      script.id = "gaTag";
      document.head.appendChild(script);

      script.onload = () => {
        initializeGA4();
      };
    } else {
      prevScript.onload = () => {
        initializeGA4();
      }
    }

  }, [pathname]);
};

export default useGA4;
