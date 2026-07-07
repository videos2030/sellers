# Onset — gear rental, talent booking & influencer campaigns (Arabic-first, bilingual)

A no-login marketplace with three lanes:
- **Gear** — people list production equipment for rent (or you seed your own rental catalog).
- **Talent** — models/actors register; clients submit bids with a public name+amount leaderboard.
- **Campaigns** — influencers register with a rate per 1,000 views and links to past
  campaign videos (YouTube/Instagram/TikTok/X/Facebook); anyone can submit their own
  short-video link to join a campaign, and their name + video link show up publicly.

Everyone submits their own contact details directly; nothing needs a login. Static
site (HTML/CSS/JS) + Supabase backend. Arabic is the default language, with a
one-click toggle to English on every page.

## 1. Set up Supabase

1. Open your project → **SQL Editor** → paste the contents of `supabase-schema.sql` → **Run**.
   This creates the 6 tables (equipment, rental_requests, talent_profiles,
   talent_bids, influencers, campaign_submissions), turns on Row Level Security
   with public-but-safe policies, creates three public storage buckets
   (`equipment-images`, `talent-images`, `influencer-images`) for photos, and
   creates two safe public views — `talent_bids_public` and
   `campaign_submissions_public` — that expose only the bidder/submitter's
   name (+ amount, or + platform/video link) and never their email/phone, so
   bids and campaign video submissions show up publicly like a live feed.
   Safe to re-run if you already ran an older version of this file.
2. (Optional but recommended) Open `seed-equipment-catalog.sql`, edit the
   three lines at the top (`owner_name`, `owner_email`, `owner_phone` — your
   business's own contact info), then run it once in the SQL Editor. This
   populates the catalog with ~65 ready-to-rent items across cables &
   connectors, adapters, mounting/rigging tools, cleaning & maintenance,
   storage & transport, on-location/shade gear, and easy-to-forget spares —
   all marked "ships to you" (`ships_available = true`) so they're not
   limited to local pickup.
3. Nothing else needed — the anon key already in `app.js` is safe to use
   publicly; it only has the permissions the SQL script grants it.

### Adding your own models/talent — no admin panel needed

You don't need to build a dashboard. To add a model's photo and info
yourself instead of having them register through the public form:

1. Supabase → **Storage** → `talent-images` bucket → upload the photo →
   copy its **public URL**.
2. Supabase → **Table Editor** → `talent_profiles` → **Insert row** → fill in
   `name`, `category`, `bio`, `rate_reference`, `contact_email`,
   `contact_phone`, and paste the photo URL into `image_url` → Save.

It appears on the talent page immediately, exactly like a self-registered
profile — clients can bid on it right away.

The same trick works for influencers: upload their photo to the
`influencer-images` bucket, then **Insert row** in the `influencers` table
with `name`, `bio`, `rate_per_1000_views`, `contact_email`, `contact_phone`,
`image_url`, and any of `youtube_url` / `instagram_url` / `tiktok_url` /
`x_url` / `facebook_url` you have examples for.

**Privacy note on what's public vs private:**
- `equipment`, `talent_profiles` and `influencers` are publicly readable (that's the point — people browse them).
- `rental_requests`, `talent_bids` and `campaign_submissions` are **insert-only** for visitors —
  nobody can read other people's contact info or full rows through the site.
- `talent_bids_public` exposes only `client_name` + `bid_amount` + `created_at`
  (powers the "top bid" / "recent bids" list on each talent card).
- `campaign_submissions_public` exposes only `submitter_name` + `platform` +
  `video_url` + `created_at` (powers the public submitted-videos list on each
  campaign card) — the submitter's optional email stays private in the base table.

## 2. Deploy to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop the folder into Vercel's dashboard).
2. In Vercel: **Add New Project** → import the repo → Framework preset: **Other** (it's a
   static site, no build step) → Deploy.
3. That's it — no environment variables needed since this is a public anon key by design.

## Files

- `index.html` — homepage, links to all three lanes
- `rental.html` — gear listings, "list your gear" form, rental request modal
- `talent.html` — talent profiles with public bid leaderboard, registration form, bid modal
- `campaigns.html` — influencer campaigns with public submitted-video feed, registration form, submit-video modal
- `app.js` — Supabase client, Arabic/English dictionary + language switcher, shared helpers
- `styles.css` — shared design system (adds RTL/Arabic typography rules)
- `supabase-schema.sql` — run once in Supabase (safe to re-run)
- `seed-equipment-catalog.sql` — optional one-time seed for your own rental inventory

## Language

Arabic is the default (`dir="rtl"`, Tajawal/Cairo fonts). The **English**
button top-right switches the whole page — copy, categories, card labels,
and form fields — instantly, no reload, and remembers the choice for next
visit. All UI strings live in the `DICT` object at the top of `app.js`, so
adding a third language later just means adding another key per entry.

## What was intentionally left out

The original brief mentioned buying/selling bulk email and phone number lists as a
product on the site. That's not included — a marketplace for trading contact lists
is functionally spam/scam infrastructure and conflicts with data protection law in
most places (GDPR-style rules, Bahrain's PDPL, CAN-SPAM/TCPA elsewhere), and would
likely get the project pulled by Vercel/Supabase under their terms of service too.
The rest of the brief (gear rental incl. your cables/adapters/rigging/cleaning/
storage/tent/spares catalog, talent bidding with a public leaderboard, bilingual
AR/EN UI, 20% USDT deposit acknowledgment) is built as described.

## Possible next steps

- An admin view (simple password-protected page, or just use Supabase's Table Editor)
  to manage/delete listings.
- Email notifications on new requests/bids (Supabase Edge Function + Resend or similar).
- Search box for listings, pagination once volume grows.
- A dedicated `talent_categories`/`equipment_categories` table if you want to
  add/rename categories without editing `app.js`.
