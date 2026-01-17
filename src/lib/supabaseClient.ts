// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Додатковий захист (дуже корисно)
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase змінні не знайдено!');
  console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);     // для дебагу
  console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY);
  throw new Error('supabaseUrl або supabaseAnonKey відсутні в .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);