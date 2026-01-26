// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);          // або { top: 0, behavior: 'instant' }
    // або плавно: window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}