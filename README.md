# Onset — gear rental & talent booking

A no-login marketplace: people list production equipment for rent, and separately
register as bookable talent; clients submit rental requests / bids with their own
contact details. Static site (HTML/CSS/JS) + Supabase backend.

## 1. Set up Supabase

1. Open your project → **SQL Editor** → paste the contents of `supabase-schema.sql` → **Run**.
   This creates the 4 tables, turns on Row Level Security with public-but-safe policies,
   and creates two public storage buckets (`equipment-images`, `talent-images`) for photos.
2. Nothing else needed — the anon key already in `app.js` is safe to use publicly;
   it only has the permissions the SQL script grants it.

**Privacy note on what's public vs private:**
- `equipment` and `talent_profiles` are publicly readable (that's the point — people browse them).
- `rental_requests` and `talent_bids` are **insert-only** for visitors — nobody can read other
  people's contact info or bids through the site. View them yourself in Supabase's
  **Table Editor**.

## 2. Deploy to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop the folder into Vercel's dashboard).
2. In Vercel: **Add New Project** → import the repo → Framework preset: **Other** (it's a
   static site, no build step) → Deploy.
3. That's it — no environment variables needed since this is a public anon key by design.

## Files

- `index.html` — homepage, links to both marketplaces
- `rental.html` — gear listings, "list your gear" form, rental request modal
- `talent.html` — talent profiles, registration form, bid modal
- `app.js` — Supabase client + shared helpers (image upload, formatting)
- `styles.css` — shared design system
- `supabase-schema.sql` — run once in Supabase

## What was intentionally left out

The original brief mentioned buying/selling bulk email and phone number lists as a
product on the site. That's not included — a marketplace for trading contact lists
is functionally spam/scam infrastructure and conflicts with data protection law in
most places (GDPR-style rules, Bahrain's PDPL, CAN-SPAM/TCPA elsewhere), and would
likely get the project pulled by Vercel/Supabase under their terms of service too.
The rest of the brief (gear rental, talent bidding, 20% USDT deposit acknowledgment)
is built as described.

## Possible next steps

- An admin view (simple password-protected page, or just use Supabase's Table Editor)
  to manage/delete listings.
- Email notifications on new requests/bids (Supabase Edge Function + Resend or similar).
- Search box for listings, pagination once volume grows.
