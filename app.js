import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// ---- Supabase project config ----
const SUPABASE_URL = 'https://vssedyrcnfjrzmibknhg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzc2VkeXJjbmZqcnptaWJrbmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzOTk1NjMsImV4cCI6MjA5ODk3NTU2M30.TTQ8-AaYGxGgAScH7US84N6d57jGj16dsIvMTMwming';

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ---- small utilities shared by rental.html and talent.html ----

export function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function setStatus(el, msg, kind) {
  el.textContent = msg;
  el.className = 'status-msg' + (kind ? ' ' + kind : '');
}

/**
 * Uploads a single File to a public Supabase Storage bucket and
 * returns its public URL. Returns null if no file was chosen.
 */
export async function uploadImage(bucket, file) {
  if (!file) return null;
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name}`.replace(/\s+/g, '-');
  const { error } = await sb.storage.from(bucket).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  });
  if (error) throw error;
  const { data } = sb.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

export function formatMoney(n) {
  if (n == null || n === '') return '—';
  return `$${Number(n).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
}
