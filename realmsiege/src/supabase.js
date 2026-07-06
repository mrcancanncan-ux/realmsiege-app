import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://drzpwpkvrtmyztbmdsgu.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyenB3cGt2cnRteXp0Ym1kc2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2OTU2MzIsImV4cCI6MjA5ODI3MTYzMn0.BFTxh8pPUCDdKHXhDzZCuRapwuDLgxdXGr1xEaPEXcw';
export const sb = createClient(SUPABASE_URL, SUPABASE_ANON);
