import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// ---- Supabase project config ----
const SUPABASE_URL = 'https://vssedyrcnfjrzmibknhg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzc2VkeXJjbmZqcnptaWJrbmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzOTk1NjMsImV4cCI6MjA5ODk3NTU2M30.TTQ8-AaYGxGgAScH7US84N6d57jGj16dsIvMTMwming';

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==========================================================
// i18n — Arabic default, English toggle
// ==========================================================

export const DICT = {
  'nav.gear':        { ar: 'المعدات', en: 'Gear' },
  'nav.talent':       { ar: 'الموديلات', en: 'Talent' },
  'nav.langBtn':      { ar: 'English', en: 'العربية' },

  // ---- Home ----
  'home.tag':         { ar: 'أجّر المعدات النائمة في شنطتك، واحجز الموديل التي تحتاجها حملتك — كل شيء في مكان واحد وبدون أي تسجيل حساب.', en: 'Rent out the gear sitting in your case. Book the talent your campaign needs. One place, no account required.' },
  'home.plate1':      { ar: 'المعدات · كاميرات، إضاءة، صوت، كابلات ومهمات ميدانية', en: 'GEAR · cameras, lighting, audio, cables & field kit' },
  'home.plate2':      { ar: 'الموديلات · مزايدة وحجز مباشر أمام الكاميرا', en: 'TALENT · on-camera bidding & booking' },
  'home.plate3':      { ar: 'بدون تسجيل دخول · مجرد فورم', en: 'NO SIGN-IN · just a form' },
  'home.chooseLane':  { ar: 'اختر وجهتك', en: 'Choose a lane' },
  'home.whereStart':  { ar: 'من وين تبي تبدأ؟', en: 'Where do you want to start?' },
  'home.laneGearTab': { ar: 'المعدات', en: 'Equipment' },
  'home.laneGearH':   { ar: 'أجّر معدات', en: 'Rent Gear' },
  'home.laneGearP':   { ar: 'تصفّح كاميرات وعدسات وإضاءة وصوت وكابلات وملحقات متوفرة الآن للتأجير والشحن — أو أضف معداتك الخاصة للتأجير خلال دقائق.', en: 'Browse cameras, lenses, lighting, audio, cables and accessories available now to rent and ship — or list your own gear in a couple of minutes.' },
  'home.laneGearGo':  { ar: 'تصفّح المعدات ←', en: 'Browse gear →' },
  'home.laneTalTab':  { ar: 'موديلات وممثلين', en: 'Models & talent' },
  'home.laneTalH':    { ar: 'احجز موديل', en: 'Book Talent' },
  'home.laneTalP':    { ar: 'تصفّح الموديلات المسجّلين لتمثيل حملات ومنتجات، وقدّم مزايدتك مع ميزانيتك وتفاصيل التصوير.', en: 'Look through talent registered to represent products and campaigns, then submit a bid with your budget and shoot details.' },
  'home.laneTalGo':   { ar: 'تصفّح الموديلات ←', en: 'Browse talent →' },
  'home.howEyebrow':  { ar: 'كيف تعمل المنصة', en: 'How it works' },
  'home.howTitle':    { ar: 'بسيطة للطرفين', en: 'Simple on both sides' },
  'home.step1':       { ar: 'الخطوة ١', en: 'Step 1' },
  'home.step1H':      { ar: 'انشر أو تصفّح', en: 'Post or browse' },
  'home.step1P':      { ar: 'أضف معدة أو ملف موديل بفورم واحد — أو تصفّح ما هو منشور بالفعل.', en: 'List a piece of gear or a talent profile in one form — or browse what\u2019s already listed.' },
  'home.step2':       { ar: 'الخطوة ٢', en: 'Step 2' },
  'home.step2H':      { ar: 'أرسل طلبك', en: 'Send a request' },
  'home.step2P':      { ar: 'المستأجرون والعملاء يرسلون طلبهم أو مزايدتهم مع بياناتهم مباشرة لصاحب المعدة أو الموديل.', en: 'Renters and clients submit a request or bid with their contact details directly to the owner.' },
  'home.step3':       { ar: 'الخطوة ٣', en: 'Step 3' },
  'home.step3H':      { ar: 'أكّدوا مباشرة', en: 'Confirm off-platform' },
  'home.step3P':      { ar: 'التأكيد النهائي للمواعيد والأسعار والدفعة المقدّمة يتم بالاتصال المباشر.', en: 'Owners follow up by phone or email to confirm dates, rates, and any deposit before work begins.' },
  'footer.tag':       { ar: 'ONSET — سوق تأجير معدات الإنتاج وحجز الموديلات', en: 'ONSET — production gear & talent marketplace' },
  'footer.built':     { ar: 'مبني على Supabase · منشور على Vercel', en: 'Built on Supabase · Deployed on Vercel' },

  // ---- Rental page ----
  'rental.eyebrow':   { ar: 'سوق المعدات', en: 'Equipment marketplace' },
  'rental.h1':        { ar: 'المعدات', en: 'GEAR' },
  'rental.tag':        { ar: 'كاميرات، عدسات، إضاءة، صوت، كابلات ومهمات ميدانية — جاهزة للتأجير والشحن مباشرة من أصحاب شركات الإنتاج.', en: 'Cameras, lenses, lighting, audio, cables and field kit — available direct from other production owners, ready to ship.' },
  'rental.available': { ar: 'متوفر الآن', en: 'Available now' },
  'rental.browse':    { ar: 'تصفّح القوائم', en: 'Browse listings' },
  'rental.listBtn':   { ar: 'أضف معداتك', en: 'List your gear' },
  'rental.chipAll':   { ar: 'الكل', en: 'All' },
  'rental.loading':   { ar: 'جاري تحميل القوائم…', en: 'Loading listings…' },
  'rental.empty':     { ar: 'لا توجد قوائم في هذا التصنيف بعد. كن أول من يضيف معدة أدناه.', en: 'No listings in this category yet. Be the first — list your gear below.' },
  'rental.error':     { ar: 'تعذّر تحميل القوائم الآن.', en: 'Could not load listings right now.' },
  'rental.perDay':    { ar: '/ يوم', en: '/ day' },
  'rental.onRequest': { ar: 'السعر عند الطلب', en: 'Price on request' },
  'rental.listedBy':  { ar: 'بواسطة', en: 'Listed by' },
  'rental.reqBtn':     { ar: 'اطلب التأجير', en: 'Request to rent' },
  'rental.ships':      { ar: '🚚 يشحن لباب منزلك', en: '🚚 Ships to you' },
  'rental.ownEq':      { ar: 'عندك معدات؟', en: 'Own equipment?' },
  'rental.listTitle':  { ar: 'أضف معداتك للتأجير', en: 'List your gear' },
  'rental.listP':      { ar: 'أضف قائمة ليجدها المستأجرون ويتواصلون معك. بياناتك تُرسل للمستأجر فقط عند إرسال طلب — لا شيء يُشارك خارج الموقع.', en: 'Add a listing so renters can find it and reach out. Your contact details go to the renter when they submit a request — nothing is shared beyond this site.' },
  'rental.formSub':    { ar: 'فورم الإضافة', en: 'Listing form' },
  'lbl.yourName':      { ar: 'اسمك الكامل', en: 'Your name' },
  'ph.fullName':       { ar: 'الاسم الكامل', en: 'Full name' },
  'lbl.email':         { ar: 'البريد الإلكتروني', en: 'Email' },
  'lbl.mobile':        { ar: 'رقم الجوال (مع رمز الدولة)', en: 'Mobile number (with country code)' },
  'lbl.category':      { ar: 'التصنيف', en: 'Category' },
  'ph.selectCategory': { ar: 'اختر تصنيفاً', en: 'Select a category' },
  'lbl.itemTitle':     { ar: 'اسم القطعة', en: 'Item title' },
  'ph.itemTitle':      { ar: 'مثال: كاميرا Sony FX3 السينمائية', en: 'e.g. Sony FX3 Cinema Camera' },
  'lbl.description':   { ar: 'الوصف', en: 'Description' },
  'ph.eqDesc':         { ar: 'الحالة، الملحقات المرفقة، مكان الاستلام…', en: 'Condition, included accessories, pickup location…' },
  'lbl.pricePerDay':   { ar: 'السعر لليوم الواحد (USD)', en: 'Price per day (USD)' },
  'lbl.photo':         { ar: 'صورة', en: 'Photo' },
  'lbl.shipsToggle':   { ar: 'أوافق على شحن هذه القطعة لعملاء خارج مدينتي', en: 'I\u2019m willing to ship this item to renters' },
  'rental.submitBtn':  { ar: 'أضف القائمة', en: 'Submit listing' },
  'status.uploading':  { ar: 'جاري الرفع…', en: 'Uploading…' },
  'rental.submitOk':   { ar: 'تمت إضافة القائمة، وتظهر الآن أعلاه.', en: 'Listing submitted. It now appears above.' },
  'rental.submitErr':  { ar: 'حدث خطأ أثناء إضافة القائمة. حاول مرة أخرى.', en: 'Something went wrong submitting your listing. Please try again.' },
  'modal.itemLbl':     { ar: 'القطعة', en: 'Item' },
  'modal.reqTitle':    { ar: 'اطلب التأجير', en: 'Request to rent' },
  'lbl.startDate':     { ar: 'تاريخ البداية', en: 'Start date' },
  'lbl.endDate':       { ar: 'تاريخ النهاية', en: 'End date' },
  'lbl.messageOpt':    { ar: 'ملاحظات (اختياري)', en: 'Message (optional)' },
  'ph.reqMessage':     { ar: 'أي شيء يحتاج صاحب المعدة معرفته', en: 'Anything the owner should know' },
  'modal.reqNotice':   { ar: 'سيتواصل معك صاحب المعدة مباشرة عبر البريد أو الجوال لتأكيد التوفر والسعر النهائي وتفاصيل الاستلام أو الشحن.', en: 'The owner will contact you directly by email or phone to confirm availability, final price, and pickup or shipping details.' },
  'rental.sendReq':    { ar: 'أرسل الطلب', en: 'Send request' },
  'status.sending':    { ar: 'جاري الإرسال…', en: 'Sending…' },
  'rental.reqOk':      { ar: 'تم إرسال طلبك، سيتواصل معك صاحب المعدة مباشرة.', en: 'Request sent. The owner will contact you directly.' },
  'rental.reqErr':     { ar: 'تعذّر إرسال طلبك. حاول مرة أخرى.', en: 'Could not send your request. Please try again.' },

  // ---- Talent page ----
  'talent.eyebrow':    { ar: 'سوق الموديلات', en: 'Talent marketplace' },
  'talent.h1':         { ar: 'الموديلات', en: 'TALENT' },
  'talent.tag':        { ar: 'تصفّح موديلات مسجّلين لتمثيل منتجات وحملات، ثم قدّم مزايدتك مع ميزانيتك وتفاصيل التصوير.', en: 'Browse people registered to represent products and campaigns, then submit a bid with your budget and shoot brief.' },
  'talent.registered': { ar: 'موديلات مسجّلون', en: 'Registered talent' },
  'talent.browseProf': { ar: 'تصفّح الملفات', en: 'Browse profiles' },
  'talent.registerBtn':{ ar: 'سجّل كموديل', en: 'Register as talent' },
  'talent.loading':    { ar: 'جاري تحميل الملفات…', en: 'Loading profiles…' },
  'talent.empty':      { ar: 'لا يوجد موديلات مسجّلون بعد. كن أول من ينضم أدناه.', en: 'No talent registered yet. Be the first to join below.' },
  'talent.error':      { ar: 'تعذّر تحميل الملفات الآن.', en: 'Could not load profiles right now.' },
  'talent.rateOnReq':  { ar: 'السعر عند الطلب', en: 'Rate on request' },
  'talent.bidBtn':     { ar: 'قدّم مزايدة', en: 'Submit a bid' },
  'talent.topBid':     { ar: 'أعلى مزايدة', en: 'Top bid' },
  'talent.noBids':     { ar: 'لا توجد مزايدات بعد — كن أول من يزايد', en: 'No bids yet — be the first' },
  'talent.bidsCount':  { ar: 'مزايدة', en: 'bid' },
  'talent.bidsCountPl':{ ar: 'مزايدات', en: 'bids' },
  'talent.wantBooked': { ar: 'تبي تنحجز؟', en: 'Want to be booked?' },
  'talent.regTitle':   { ar: 'سجّل كموديل', en: 'Register as talent' },
  'talent.regP':       { ar: 'اسمك وتصنيفك وصورتك تظهر للعملاء ليجدوك. بريدك ورقمك يبقيان خاصين ويُستخدمان فقط لإشعارك بالمزايدات.', en: 'Your name, category and photo appear publicly so clients can find you. Your email and phone stay private and are only used by the site to notify you about bids.' },
  'talent.formSub':    { ar: 'فورم التسجيل', en: 'Registration form' },
  'lbl.emailPrivate':  { ar: 'البريد الإلكتروني (خاص)', en: 'Email (private)' },
  'lbl.mobilePrivate': { ar: 'رقم الجوال، مع رمز الدولة (خاص)', en: 'Mobile, with country code (private)' },
  'lbl.shortBio':      { ar: 'نبذة مختصرة', en: 'Short bio' },
  'ph.bio':            { ar: 'الخبرة، حملات سابقة، اللغات…', en: 'Experience, previous campaigns, languages…' },
  'lbl.refRate':       { ar: 'السعر المرجعي (اختياري)', en: 'Reference rate (optional)' },
  'ph.refRate':        { ar: 'مثال: يبدأ من $300 للحملة', en: 'e.g. From $300 / campaign' },
  'talent.submitBtn':  { ar: 'أضف الملف', en: 'Submit profile' },
  'talent.submitOk':   { ar: 'تم إضافة ملفك، ويظهر الآن أعلاه.', en: 'Profile submitted. It now appears above.' },
  'talent.submitErr':  { ar: 'حدث خطأ أثناء إضافة ملفك. حاول مرة أخرى.', en: 'Something went wrong submitting your profile. Please try again.' },
  'modal.talentLbl':   { ar: 'الموديل', en: 'Talent' },
  'modal.bidTitle':    { ar: 'قدّم مزايدة', en: 'Submit a bid' },
  'lbl.bidAmount':     { ar: 'مزايدتك (USD، إجمالي ميزانية الحملة)', en: 'Your bid (USD, total campaign budget)' },
  'lbl.campaignDet':   { ar: 'تفاصيل الحملة', en: 'Campaign details' },
  'ph.campaignDet':    { ar: 'المنتج، مواعيد التصوير، الموقع، حقوق الاستخدام المطلوبة…', en: 'Product, shoot dates, location, usage rights needed…' },
  'modal.bidNotice':   { ar: 'بإرسالك هذه المزايدة، فإنك توافق على أنه في حال قبولها سيصلك بريد يوضح التكلفة النهائية التي يحددها الموديل، وأن ٢٠٪ من هذا المبلغ مستحقة مقدماً بعملة USDT (شبكة ERC-20) قبل بدء العمل. الباقي يُتفق عليه مباشرة مع الموديل.', en: 'By submitting, you acknowledge that if this bid is accepted, the site will email you the final total cost the talent charges, and that 20% of that amount is due upfront in USDT (ERC-20) before work begins. The remaining balance is arranged directly with the talent.' },
  'talent.sendBid':    { ar: 'أرسل المزايدة', en: 'Submit bid' },
  'talent.bidOk':      { ar: 'تم إرسال مزايدتك، وسيتم التواصل معك بخصوص الخطوات التالية.', en: 'Bid submitted. You will be contacted about next steps.' },
  'talent.bidErr':     { ar: 'تعذّر إرسال مزايدتك. حاول مرة أخرى.', en: 'Could not submit your bid. Please try again.' },
  'talent.recentBids': { ar: 'آخر المزايدات', en: 'Recent bids' },
};

const CATEGORY_LABELS = {
  // Gear categories
  'Cameras':                 { ar: 'كاميرات',                 en: 'Cameras' },
  'Lenses':                  { ar: 'عدسات',                   en: 'Lenses' },
  'Lighting':                { ar: 'إضاءة',                   en: 'Lighting' },
  'Audio':                   { ar: 'صوتيات',                  en: 'Audio' },
  'Grip & Rigging':          { ar: 'جريب وتثبيت',             en: 'Grip & Rigging' },
  'Drones':                  { ar: 'درونز',                   en: 'Drones' },
  'Monitors & Video':        { ar: 'شاشات وفيديو',            en: 'Monitors & Video' },
  'Computers & Storage':     { ar: 'أجهزة وتخزين',            en: 'Computers & Storage' },
  'Studio & Decor':          { ar: 'استوديو وديكور',          en: 'Studio & Decor' },
  'Cables & Connectors':     { ar: 'كابلات وتوصيلات',         en: 'Cables & Connectors' },
  'Adapters':                { ar: 'محوّلات',                 en: 'Adapters' },
  'Mounting & Rigging Tools':{ ar: 'أدوات تثبيت وتنظيم',      en: 'Mounting & Rigging Tools' },
  'Cleaning & Maintenance':  { ar: 'تنظيف وصيانة',            en: 'Cleaning & Maintenance' },
  'Storage & Transport':     { ar: 'تخزين ونقل',              en: 'Storage & Transport' },
  'On-Location & Shade':     { ar: 'خيمة إنتاج وتظليل ميداني', en: 'On-Location & Shade' },
  'Forgotten Essentials':    { ar: 'أساسيات لا تُنسى',        en: 'Forgotten Essentials' },
  'Other':                   { ar: 'أخرى',                    en: 'Other' },
  // Talent categories
  'Product / Commercial':    { ar: 'منتجات / إعلانات',        en: 'Product / Commercial' },
  'Fashion':                 { ar: 'أزياء',                   en: 'Fashion' },
  'Fitness':                 { ar: 'لياقة',                   en: 'Fitness' },
  'Podcast Host':            { ar: 'مقدّم بودكاست',           en: 'Podcast Host' },
  'Voiceover':               { ar: 'تعليق صوتي',              en: 'Voiceover' },
  'Presenter':               { ar: 'مقدّم برامج',             en: 'Presenter' },
};

export const GEAR_CATEGORIES = ['Cameras','Lenses','Lighting','Audio','Grip & Rigging','Drones','Monitors & Video','Computers & Storage','Studio & Decor','Cables & Connectors','Adapters','Mounting & Rigging Tools','Cleaning & Maintenance','Storage & Transport','On-Location & Shade','Forgotten Essentials','Other'];
export const TALENT_CATEGORIES = ['Product / Commercial','Fashion','Fitness','Podcast Host','Voiceover','Presenter','Other'];

let currentLang = localStorage.getItem('onset_lang') || 'ar';

export function getLang() { return currentLang; }

export function catLabel(cat) {
  const entry = CATEGORY_LABELS[cat];
  if (!entry) return cat;
  return entry[currentLang] || entry.en;
}

export function t(key) {
  const entry = DICT[key];
  if (!entry) return key;
  return entry[currentLang] || entry.en || entry.ar;
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    // for strings containing a <b> tag etc — value pulled from DICT, safe (static copy, not user input)
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.textContent = t('nav.langBtn');
}

// Functions any page can register to re-render dynamic (DB-driven) content
// whenever the language changes, so cards/badges swap too.
const rerenderCallbacks = [];
export function onLangChange(fn) { rerenderCallbacks.push(fn); }

export function initI18n() {
  applyStaticTranslations();
  const langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('onset_lang', currentLang);
      applyStaticTranslations();
      rerenderCallbacks.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
    });
  }
}

// ==========================================================
// small utilities shared by rental.html and talent.html
// ==========================================================

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

/**
 * Reads the public, contact-info-free bid leaderboard for one or all
 * talent profiles from the `talent_bids_public` view (see supabase-schema.sql).
 * Returns { byTalent: Map<talent_id, {top, list}> }
 */
export async function loadPublicBids() {
  const { data, error } = await sb
    .from('talent_bids_public')
    .select('talent_id,client_name,bid_amount,created_at')
    .order('bid_amount', { ascending: false });
  const byTalent = new Map();
  if (error) { console.error(error); return byTalent; }
  (data || []).forEach(row => {
    if (!byTalent.has(row.talent_id)) byTalent.set(row.talent_id, []);
    byTalent.get(row.talent_id).push(row);
  });
  return byTalent;
}
