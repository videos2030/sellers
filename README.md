# Onset — gear rental & talent booking (Arabic-first, bilingual)

A no-login marketplace: people list production equipment for rent (or you seed
your own rental catalog), and separately register as bookable talent; clients
submit rental requests / bids with their own contact details. Static site
(HTML/CSS/JS) + Supabase backend. Arabic is the default language, with a one-
click toggle to English on every page.

## 1. Set up Supabase

1. Open your project → **SQL Editor** → paste the contents of `supabase-schema.sql` → **Run**.
   This creates the 4 tables, turns on Row Level Security with public-but-safe
   policies, creates two public storage buckets (`equipment-images`,
   `talent-images`) for photos, and creates a `talent_bids_public` view that
   safely exposes just the bidder's name + amount (never their email/phone)
   so bids show up publicly on the talent page like a live auction.
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

**Privacy note on what's public vs private:**
- `equipment` and `talent_profiles` are publicly readable (that's the point — people browse them).
- `rental_requests` and `talent_bids` are **insert-only** for visitors — nobody can read other
  people's contact info or full bid rows through the site.
- `talent_bids_public` is a **read-only view** exposing only `client_name` +
  `bid_amount` + `created_at` — this is what powers the public "top bid" /
  "recent bids" list on each talent card, without leaking email or phone.

## 2. Deploy to Vercel

1. Push this folder to a GitHub repo (or drag-and-drop the folder into Vercel's dashboard).
2. In Vercel: **Add New Project** → import the repo → Framework preset: **Other** (it's a
   static site, no build step) → Deploy.
3. That's it — no environment variables needed since this is a public anon key by design.

## Files

- `index.html` — homepage, links to both marketplaces
- `rental.html` — gear listings, "list your gear" form, rental request modal
- `talent.html` — talent profiles with public bid leaderboard, registration form, bid modal
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
