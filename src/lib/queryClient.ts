// src/lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,     // 5 хвилин — дані "свіжі"
      gcTime: 1000 * 60 * 30,        // 30 хвилин — не видаляти з кешу
      refetchOnWindowFocus: false,   // не перезавантажувати при фокусі вікна
      retry: 1,                      // 1 спроба повтору при помилці
    },
  },
});