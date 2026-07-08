// Vercel Serverless Function — /api/config
//
// Reads the Supabase project URL and anon key from Vercel's Environment
// Variables (Project → Settings → Environment Variables) and hands them
// to the browser at page load. This keeps the values out of the repo/
// source files while still ending up in client-side JS — which is normal
// and expected for the Supabase anon key: it's meant to be public, and
// access is actually controlled by the Row Level Security policies in
// supabase-schema.sql, not by hiding this key.
//
// Set these two env vars in Vercel (any environment — Production/Preview/
// Development). Names must match exactly:
//   NEXT_PUBLIC_SUPABASE_URL
//   NEXT_PUBLIC_SUPABASE_ANON_KEY
// (The "NEXT_PUBLIC_" prefix has no special meaning here — this isn't
// Next.js — it's just the variable name you already used, which is fine.)

module.exports = (req, res) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    res.status(500).json({
      error: 'Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY in this deployment\'s Environment Variables.',
    });
    return;
  }

  // Not user-specific and not sensitive to cache, but config could change
  // between deploys, so don't let CDNs/browsers cache it too long.
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ supabaseUrl, supabaseAnonKey });
};
