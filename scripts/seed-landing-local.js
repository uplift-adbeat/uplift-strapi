'use strict';

const { createStrapi, compileStrapi } = require('@strapi/strapi');

const LANDING_PAGE_UID = 'api::landing-page.landing-page';

const entries = {
  en: {
    seo: {
      metaTitle: 'Uplift | Elevator advertising across Tbilisi',
      metaDescription:
        'Run localized ad campaigns on elevator screens across Tbilisi buildings with simple pricing and fast launch support.',
    },
    nav: {
      brandText: 'Uplift',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
      ],
      primaryCtaLabel: 'Start advertising',
    },
    hero: {
      eyebrow: 'Now live across Tbilisi buildings',
      headline: "Your brand,\ninside Tbilisi's\nelevators.",
      subheadline:
        "Uplift places your ads on digital screens inside the city's most-visited buildings. A captive audience — no skipping, no scrolling past.",
      primaryCtaLabel: 'Start advertising',
      secondaryCtaLabel: 'See our locations',
      socialProof: '50+ buildings · 200+ screens · Tbilisi-wide',
    },
    features: {
      eyebrow: 'Why Uplift',
      heading: "Advertising that\ncan't be ignored.",
      items: [
        {
          iconKey: 'monitor',
          title: 'Prime elevator placement',
          description:
            'Your ads appear on screens inside elevator lobbies and cabins of premium residential and commercial buildings. A captive audience with no option to skip.',
        },
        {
          iconKey: 'map-pin',
          title: 'Target by location',
          description:
            'Choose specific buildings, neighborhoods, or districts of Tbilisi. Reach residents in Saburtalo, shoppers in Vake, or commuters city-wide.',
        },
        {
          iconKey: 'layout-grid',
          title: 'Flexible campaign formats',
          description:
            'Run full-screen ads or book a rotation slot. Daily, weekly, or monthly durations — no long-term contracts required.',
        },
        {
          iconKey: 'chart',
          title: 'Real-time impressions',
          description:
            "Track your campaign's reach from a live dashboard. Impression counts and active screen status update daily.",
        },
      ],
    },
    steps: {
      eyebrow: 'How it works',
      heading: 'Advertising\nmade simple.',
      intro:
        'From creative upload to live campaign in less than 24 hours. No technical setup, no contract lock-in.',
      items: [
        {
          number: '01',
          title: 'Choose your locations',
          description:
            'Browse our building map across Tbilisi. Select specific buildings, neighborhoods, or districts that match your target audience.',
        },
        {
          number: '02',
          title: 'Upload your creative',
          description:
            'Provide your ad in the supported formats. Our team reviews it quickly and schedules it for your chosen campaign dates.',
        },
        {
          number: '03',
          title: 'Go live and track results',
          description:
            'Your campaign runs across your selected screens. Monitor impressions and reach through your personal campaign dashboard.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      heading: 'Simple pricing\nfor local campaigns.',
      body:
        'Start with a single elevator monitor for a single day at 1 GEL. If you need a district-wide rollout, multi-building schedule, or a larger purchase, we prepare custom pricing for volume campaigns.',
      stats: [
        { value: '1', label: 'Monitor' },
        { value: '1', label: 'Day' },
        { value: '1 GEL', label: 'Base rate' },
      ],
      note: 'Custom pricing is available for bulk placements, longer schedules, and multi-building packages.',
      ctaLabel: 'Request campaign pricing',
      imageAlt: 'Uplift elevator advertising monitors',
      caption: 'Portrait elevator monitors designed for high-visibility indoor ad placements.',
    },
    waitlist: {
      heading: 'Advertise with Uplift.',
      body:
        'Join our early advertiser list and lock in preferred rates before we open to the public.',
      emailPlaceholder: 'you@company.com',
      submitLabel: 'Join waitlist',
      successMessage: "You're on the list — we'll be in touch soon.",
      disclaimer: 'No spam. Unsubscribe anytime.',
      invalidEmailMessage: 'Please enter a valid email address.',
    },
    footer: {
      links: [
        { label: 'Terms', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Contact', href: 'mailto:hello@uplift.ge' },
      ],
      contactText: 'hello@uplift.ge',
    },
  },
  ka: {
    seo: {
      metaTitle: 'Uplift | ლიფტის ეკრანებზე რეკლამა თბილისში',
      metaDescription:
        'გაუშვით ლოკალური სარეკლამო კამპანიები თბილისის კორპუსების ლიფტის ეკრანებზე მარტივი ტარიფებით და სწრაფი გაშვებით.',
    },
    nav: {
      brandText: 'Uplift',
      links: [
        { label: 'უპირატესობები', href: '#features' },
        { label: 'როგორ მუშაობს', href: '#how-it-works' },
        { label: 'ფასები', href: '#pricing' },
      ],
      primaryCtaLabel: 'დაიწყე რეკლამა',
    },
    hero: {
      eyebrow: 'უკვე აქტიურია თბილისის შენობებში',
      headline: 'შენი ბრენდი,\nთბილისის\nლიფტებში.',
      subheadline:
        'Uplift განათავსებს შენს რეკლამას ციფრულ ეკრანებზე ქალაქის ყველაზე ხალხმრავალ შენობებში. აუდიტორია, რომელიც ვერ გადაახტება და ვერ ჩასქროლავს.',
      primaryCtaLabel: 'დაიწყე რეკლამა',
      secondaryCtaLabel: 'იხილე ლოკაციები',
      socialProof: '50+ შენობა · 200+ ეკრანი · მთელი თბილისი',
    },
    features: {
      eyebrow: 'რატომ Uplift',
      heading: 'რეკლამა,\nრომელსაც ვერ გამოტოვებენ.',
      items: [
        {
          iconKey: 'monitor',
          title: 'პრემიუმ ლიფტის განთავსება',
          description:
            'შენი რეკლამა გამოჩნდება ეკრანებზე ლიფტის ჰოლებსა და კაბინებში, პრემიუმ საცხოვრებელ და კომერციულ შენობებში. აუდიტორია ვერ გამოტოვებს მას.',
        },
        {
          iconKey: 'map-pin',
          title: 'თარგეთირება ლოკაციით',
          description:
            'შეარჩიე კონკრეტული შენობები, უბნები ან რაიონები თბილისში. მიაწვდინე ხმა საბურთალოს მაცხოვრებლებს, ვაკის მყიდველებს ან მთელ ქალაქს.',
        },
        {
          iconKey: 'layout-grid',
          title: 'მოქნილი კამპანიის ფორმატები',
          description:
            'გაუშვი სრულეკრანიანი რეკლამა ან დაჯავშნე როტაციის სლოტი. ყოველდღიური, კვირეული ან თვიური განრიგი გრძელვადიანი კონტრაქტის გარეშე.',
        },
        {
          iconKey: 'chart',
          title: 'იმპრესიები რეალურ დროში',
          description:
            'თვალი ადევნე კამპანიის შედეგებს ცოცხალი დაფიდან. იმპრესიები და აქტიური ეკრანების სტატუსი ყოველდღიურად ახლდება.',
        },
      ],
    },
    steps: {
      eyebrow: 'როგორ მუშაობს',
      heading: 'რეკლამა,\nმარტივად.',
      intro:
        'კრეატივის ატვირთვიდან პირდაპირ ეთერში გაშვებამდე 24 საათზე ნაკლებში. ტექნიკური სეთაფისა და ხანგრძლივი კონტრაქტის გარეშე.',
      items: [
        {
          number: '01',
          title: 'აირჩიე ლოკაციები',
          description:
            'დაათვალიერე ჩვენი შენობების რუკა თბილისში. შეარჩიე შენობები, უბნები ან რაიონები, რომლებიც შენს აუდიტორიას შეესაბამება.',
        },
        {
          number: '02',
          title: 'ატვირთე კრეატივი',
          description:
            'მოგვაწოდე რეკლამა მხარდაჭერილ ფორმატში. ჩვენი გუნდი სწრაფად ამოწმებს და გეგმავს განთავსებას არჩეულ თარიღებზე.',
        },
        {
          number: '03',
          title: 'გაუშვი და აკონტროლე შედეგი',
          description:
            'კამპანია გაეშვება შენს არჩეულ ეკრანებზე. იმპრესიებსა და დაფარვას პერსონალური დაფიდან დააკვირდები.',
        },
      ],
    },
    pricing: {
      eyebrow: 'ფასები',
      heading: 'მარტივი ტარიფები\nლოკალური კამპანიებისთვის.',
      body:
        'დაიწყე ერთი ლიფტის მონიტორით ერთი დღით სულ 1 ლარად. თუ გჭირდება რაიონული გაშლა, მრავალშენობიანი განრიგი ან დიდი მოცულობა, მოვამზადებთ ინდივიდუალურ შეთავაზებას.',
      stats: [
        { value: '1', label: 'მონიტორი' },
        { value: '1', label: 'დღე' },
        { value: '1 GEL', label: 'საბაზო ფასი' },
      ],
      note: 'ინდივიდუალური ფასები ხელმისაწვდომია დიდი მოცულობის, გრძელი განრიგისა და მრავალშენობიანი პაკეტებისთვის.',
      ctaLabel: 'მოითხოვე ფასი',
      imageAlt: 'Uplift-ის ლიფტის სარეკლამო მონიტორები',
      caption: 'პორტრეტული ლიფტის მონიტორები მაღალი ხილვადობის შიდა რეკლამისთვის.',
    },
    waitlist: {
      heading: 'განათავსე რეკლამა Uplift-ში.',
      body:
        'დაემატე ადრეული რეკლამოდამკვეთების სიას და დაიფიქსირე სასურველი ტარიფები საჯარო გახსნამდე.',
      emailPlaceholder: 'you@company.com',
      submitLabel: 'დამატება',
      successMessage: 'თქვენ სიაში ხართ — მალე დაგიკავშირდებით.',
      disclaimer: 'სპამი არა. ნებისმიერ დროს შეგიძლია გაუქმება.',
      invalidEmailMessage: 'გთხოვ, მიუთითე სწორი ელფოსტა.',
    },
    footer: {
      links: [
        { label: 'წესები', href: '#' },
        { label: 'კონფიდენციალურობა', href: '#' },
        { label: 'კონტაქტი', href: 'mailto:hello@uplift.ge' },
      ],
      contactText: 'hello@uplift.ge',
    },
  },
};

async function ensureLocale(strapi, code, name) {
  const existing = await strapi.db.query('plugin::i18n.locale').findOne({
    where: { code },
  });

  if (existing) return existing;

  return strapi.db.query('plugin::i18n.locale').create({
    data: { code, name },
  });
}

async function upsertLandingPage(strapi, locale, data) {
  const service = strapi.documents(LANDING_PAGE_UID);
  const existing = await service.findFirst({ locale, status: 'draft' });

  if (!existing) {
    const created = await service.create({
      locale,
      status: 'published',
      data,
    });
    console.log(`Created landing page for locale ${locale} (${created.documentId}).`);
    return;
  }

  await service.update({
    documentId: existing.documentId,
    locale,
    data,
  });

  await service.publish({
    documentId: existing.documentId,
    locale,
  });

  console.log(`Updated landing page for locale ${locale} (${existing.documentId}).`);
}

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  await ensureLocale(app, 'ka', 'Georgian (ka)');
  await upsertLandingPage(app, 'en', entries.en);
  await upsertLandingPage(app, 'ka', entries.ka);

  await app.destroy();
  process.exit(0);
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
