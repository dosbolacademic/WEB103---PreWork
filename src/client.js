import { createClient } from '@supabase/supabase-js';

// 🔑 Replace with your actual values from Supabase dashboard
const URL = 'https://rklwmoqaumsufhasufsi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrbHdtb3FhdW1zdWZoYXN1ZnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNDUxMjAsImV4cCI6MjA2NjgyMTEyMH0.G420qb1gt7H3WLCehDWpZ6xVQ8G-8KU3KnD0NKfaIBg';

export const supabase = createClient(URL, API_KEY);