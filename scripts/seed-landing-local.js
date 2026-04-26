'use strict';

const { createStrapi, compileStrapi } = require('@strapi/strapi');

const LANDING_PAGE_UID = 'api::landing-page.landing-page';

const entries = {
  en: {
    seo: {
      metaTitle: 'Uplift | Premium elevator advertising network in Tbilisi',
      metaDescription:
        'Run targeted ad campaigns on digital elevator screens across Tbilisi. Custom campaign packages for clinics, real estate, retail, restaurants, and more.',
    },
    nav: {
      brandText: 'Uplift',
      links: [
        { label: 'Network', href: '#network' },
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Pricing', href: '#pricing' },
      ],
      primaryCtaLabel: 'Talk to sales',
    },
    network: {
      eyebrow: 'Network Coverage',
      heading: "50+ buildings across\nevery district of Tbilisi.",
      body:
        "Uplift operates a growing network of high-visibility elevator screens in premium residential and commercial buildings. Each screen reaches a captive audience that can't skip, scroll past, or turn away. Campaigns are placed where your customers live, work, and shop.",
      stats: [
        { value: '50+', label: 'Buildings' },
        { value: '200+', label: 'Screens' },
        { value: 'Tbilisi-wide', label: 'Coverage' },
      ],
    },
    hero: {
      eyebrow: 'Premium elevator advertising in Tbilisi',
      headline: "Your brand,\nin front of the\naudiences that matter.",
      subheadline:
        "Uplift connects businesses with captive audiences on digital elevator screens across Tbilisi's most-visited residential and commercial buildings. Managed campaigns — you provide the creative, we handle everything else.",
      primaryCtaLabel: 'Talk to sales',
      secondaryCtaLabel: 'Explore the network',
      socialProof: 'Trusted by clinics, real estate, retail, and restaurant brands',
    },
    features: {
      eyebrow: 'Why Uplift',
      heading: "Advertising that\nreaches real audiences.",
      items: [
        {
          iconKey: 'monitor',
          title: 'Premium building placement',
          description:
            'Your ads appear on digital screens inside elevator lobbies and cabins of high-traffic residential and commercial buildings. A captive audience that sees your message every day.',
        },
        {
          iconKey: 'map-pin',
          title: 'Precise location targeting',
          description:
            'Select specific buildings, neighborhoods, or entire districts. Reach residents in Saburtalo, shoppers in Vake, office workers in the city center, or cover the whole city.',
        },
        {
          iconKey: 'layout-grid',
          title: 'Managed campaign service',
          description:
            'Our team handles campaign planning, creative review, scheduling, and delivery. You focus on your business — we ensure your ads run on the right screens at the right time.',
        },
        {
          iconKey: 'chart',
          title: 'Campaign reporting',
          description:
            'Receive a campaign recap with delivery confirmation, screen coverage, and performance summary after your campaign completes. Transparent results you can share with your team.',
        },
      ],
    },
    steps: {
      eyebrow: 'How it works',
      heading: 'From brief\nto live campaign.',
      intro:
        'A simple process managed by our team. No technical setup required — you share your goals and creative, we handle distribution and delivery.',
      items: [
        {
          number: '01',
          title: 'Talk to our team',
          description:
            'Share your campaign goals, target audience, preferred locations, budget, and timeline. We recommend the best package for your objectives.',
        },
        {
          number: '02',
          title: 'Provide your creative',
          description:
            'Send us your ad in the supported formats. Our team reviews it for quality and compatibility, then schedules it for your chosen campaign dates and screens.',
        },
        {
          number: '03',
          title: 'We launch and deliver',
          description:
            'Your campaign runs on your selected screens. You receive a campaign recap with delivery confirmation and coverage summary after completion.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      heading: 'Custom packages\nfor your campaign goals.',
      body:
        'Every campaign is different. We build pricing around your target locations, campaign duration, number of screens, and frequency. Whether you need a single-building launch or a city-wide rollout, we prepare a package that fits your budget.',
      stats: [
        { value: 'Location-based', label: 'Pricing' },
        { value: 'Flexible', label: 'Duration' },
        { value: 'Custom', label: 'Packages' },
      ],
      note: 'Contact our team for a tailored proposal. Volume discounts available for multi-building and long-term campaigns.',
      ctaLabel: 'Request a proposal',
      imageAlt: 'Uplift elevator advertising monitors',
      caption: 'High-visibility portrait elevator screens placed in premium Tbilisi buildings.',
    },
    waitlist: {
      heading: 'Start your campaign.',
      body:
        'Tell us about your advertising goals. Our team will prepare a custom campaign proposal based on your target audience, preferred locations, and budget.',
      namePlaceholder: 'Your name',
      companyPlaceholder: 'Company name',
      emailPlaceholder: 'you@company.com',
      phonePlaceholder: 'Phone number',
      messagePlaceholder: 'Tell us about your campaign goals, target audience, and any specific requirements',
      submitLabel: 'Send inquiry',
      successMessage: 'Thank you. We will review your inquiry and get back to you within one business day.',
      disclaimer: 'Your information is only used to prepare your campaign proposal.',
      invalidEmailMessage: 'Please enter a valid email address.',
      requiredFieldMessage: 'Please fill in all required fields.',
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
      metaTitle: 'Uplift | პრემიუმ ლიფტის რეკლამა თბილისში',
      metaDescription:
        'განათავსეთ მიზნობრივი სარეკლამო კამპანიები ციფრულ ლიფტის ეკრანებზე მთელი თბილისის მასშტაბით. ინდივიდუალური პაკეტები კლინიკებისთვის, უძრავი ქონებისთვის, საცალო ვაჭრობისთვის, რესტორნებისთვის.',
    },
    nav: {
      brandText: 'Uplift',
      links: [
        { label: 'ქსელი', href: '#network' },
        { label: 'უპირატესობები', href: '#features' },
        { label: 'როგორ მუშაობს', href: '#how-it-works' },
        { label: 'ფასები', href: '#pricing' },
      ],
      primaryCtaLabel: 'დაგვიკავშირდით',
    },
    network: {
      eyebrow: 'ქსელის დაფარვა',
      heading: '50+ შენობა\nთბილისის ყველა რაიონში.',
      body:
        'Uplift მართავს მზარდ ქსელს მაღალი ხილვადობის ლიფტის ეკრანებით პრემიუმ საცხოვრებელ და კომერციულ შენობებში. თითოეული ეკრანი აღწევს აუდიტორიამდე, რომელიც ვერ გადაახტება, ვერ ჩასქროლავს ან ვერ გვერდს აუვლის. კამპანიები განთავსებულია იქ, სადაც თქვენი მომხმარებლები ცხოვრობენ, მუშაობენ და ყიდულობენ.',
      stats: [
        { value: '50+', label: 'შენობა' },
        { value: '200+', label: 'ეკრანი' },
        { value: 'მთელი თბილისი', label: 'დაფარვა' },
      ],
    },
    hero: {
      eyebrow: 'პრემიუმ ლიფტის რეკლამა თბილისში',
      headline: 'თქვენი ბრენდი,\nაუდიტორიის\nთვალწინ.',
      subheadline:
        'Uplift აკავშირებს ბიზნესებს აუდიტორიასთან ციფრულ ლიფტის ეკრანებზე თბილისის ყველაზე ხალხმრავალ საცხოვრებელ და კომერციულ შენობებში. მართული კამპანიები — თქვენ გვაწვდით კრეატივს, ჩვენ ვუზრუნველყოფთ ყველაფერ დანარჩენს.',
      primaryCtaLabel: 'დაგვიკავშირდით',
      secondaryCtaLabel: 'გაეცანით ქსელს',
      socialProof: 'სანდო კლინიკების, უძრავი ქონების, საცალო ვაჭრობისა და რესტორნების ბრენდების მიერ',
    },
    features: {
      eyebrow: 'რატომ Uplift',
      heading: 'რეკლამა, რომელიც\nაღწევს რეალურ აუდიტორიამდე.',
      items: [
        {
          iconKey: 'monitor',
          title: 'პრემიუმ შენობებში განთავსება',
          description:
            'თქვენი რეკლამა გამოჩნდება ციფრულ ეკრანებზე ლიფტის ჰოლებსა და კაბინებში, მაღალი ტრაფიკის მქონე საცხოვრებელ და კომერციულ შენობებში. აუდიტორია, რომელიც ყოველდღე ხედავს თქვენს გზავნილს.',
        },
        {
          iconKey: 'map-pin',
          title: 'ზუსტი ლოკაციის თარგეთირება',
          description:
            'შეარჩიეთ კონკრეტული შენობები, უბნები ან მთლიანი რაიონები. მიაწვდინეთ ხმა საბურთალოს მაცხოვრებლებს, ვაკის მყიდველებს, ცენტრის ოფისის თანამშრომლებს ან დაფარეთ მთელი ქალაქი.',
        },
        {
          iconKey: 'layout-grid',
          title: 'მართული კამპანიის სერვისი',
          description:
            'ჩვენი გუნდი უზრუნველყოფს კამპანიის დაგეგმვას, კრეატივის შემოწმებას, განრიგს და მიწოდებას. თქვენ ფოკუსირდებით თქვენს ბიზნესზე — ჩვენ ვუზრუნველყოფთ, რომ თქვენი რეკლამა სწორ ეკრანებზე სწორ დროს გაეშვას.',
        },
        {
          iconKey: 'chart',
          title: 'კამპანიის ანგარიშგება',
          description:
            'კამპანიის დასრულების შემდეგ მიიღებთ შეჯამებას მიწოდების დადასტურებით, ეკრანის დაფარვით და შედეგების რეზიუმეთი. გამჭვირვალე შედეგები, რომელთა გაზიარებაც შეგიძლიათ თქვენს გუნდთან.',
        },
      ],
    },
    steps: {
      eyebrow: 'როგორ მუშაობს',
      heading: 'ბრიფიდან\nპირდაპირ ეთერამდე.',
      intro:
        'მარტივი პროცესი, რომელსაც ჩვენი გუნდი მართავს. ტექნიკური სეთაფი არ არის საჭირო — თქვენ გვიზიარებთ მიზნებსა და კრეატივს, ჩვენ ვუზრუნველყოფთ გავრცელებასა და მიწოდებას.',
      items: [
        {
          number: '01',
          title: 'დაგვიკავშირდით',
          description:
            'გაგვიზიარეთ თქვენი კამპანიის მიზნები, სამიზნე აუდიტორია, სასურველი ლოკაციები, ბიუჯეტი და ვადები. ჩვენ შემოგთავაზებთ საუკეთესო პაკეტს თქვენი მიზნებისთვის.',
        },
        {
          number: '02',
          title: 'მოგვაწოდეთ კრეატივი',
          description:
            'გამოგვიგზავნეთ თქვენი რეკლამა მხარდაჭერილ ფორმატში. ჩვენი გუნდი ამოწმებს ხარისხსა და თავსებადობას, შემდეგ გეგმავს განთავსებას თქვენს მიერ არჩეულ თარიღებსა და ეკრანებზე.',
        },
        {
          number: '03',
          title: 'ჩვენ ვუშვებთ და ვაწვდით',
          description:
            'თქვენი კამპანია გაეშვება არჩეულ ეკრანებზე. დასრულების შემდეგ მიიღებთ კამპანიის შეჯამებას მიწოდების დადასტურებითა და დაფარვის რეზიუმეთი.',
        },
      ],
    },
    pricing: {
      eyebrow: 'ფასები',
      heading: 'ინდივიდუალური პაკეტები\nთქვენი კამპანიის მიზნებისთვის.',
      body:
        'ყველა კამპანია განსხვავებულია. ჩვენ ვაშენებთ ფასს თქვენი სამიზნე ლოკაციების, კამპანიის ხანგრძლივობის, ეკრანების რაოდენობისა და სიხშირის მიხედვით. იქნება ეს ერთი შენობის გაშვება თუ მთელი ქალაქის დაფარვა, ჩვენ მოვამზადებთ პაკეტს, რომელიც თქვენს ბიუჯეტს შეესაბამება.',
      stats: [
        { value: 'ლოკაციაზე', label: 'ფასწარმოქმნა' },
        { value: 'მოქნილი', label: 'ხანგრძლივობა' },
        { value: 'ინდივიდუალური', label: 'პაკეტები' },
      ],
      note: 'დაგვიკავშირდით ინდივიდუალური შემოთავაზებისთვის. მოცულობის ფასდაკლებები ხელმისაწვდომია მრავალშენობიანი და გრძელვადიანი კამპანიებისთვის.',
      ctaLabel: 'მოითხოვეთ შემოთავაზება',
      imageAlt: 'Uplift-ის ლიფტის სარეკლამო მონიტორები',
      caption: 'მაღალი ხილვადობის პორტრეტული ლიფტის ეკრანები განთავსებული პრემიუმ თბილისის შენობებში.',
    },
    waitlist: {
      heading: 'დაიწყეთ თქვენი კამპანია.',
      body:
        'გვითხარით თქვენი სარეკლამო მიზნების შესახებ. ჩვენი გუნდი მოამზადებს ინდივიდუალურ კამპანიის შემოთავაზებას თქვენი სამიზნე აუდიტორიის, სასურველი ლოკაციებისა და ბიუჯეტის მიხედვით.',
      namePlaceholder: 'თქვენი სახელი',
      companyPlaceholder: 'კომპანიის სახელი',
      emailPlaceholder: 'you@company.com',
      phonePlaceholder: 'ტელეფონის ნომერი',
      messagePlaceholder: 'გვითხარით თქვენი კამპანიის მიზნების, სამიზნე აუდიტორიისა და კონკრეტული მოთხოვნების შესახებ',
      submitLabel: 'გაგზავნეთ შეკითხვა',
      successMessage: 'გმადლობთ. ჩვენ განვიხილავთ თქვენს შეკითხვას და დაგიკავშირდებით ერთი სამუშაო დღის განმავლობაში.',
      disclaimer: 'თქვენი ინფორმაცია გამოყენებული იქნება მხოლოდ კამპანიის შემოთავაზების მოსამზადებლად.',
      invalidEmailMessage: 'გთხოვთ, მიუთითოთ სწორი ელფოსტა.',
      requiredFieldMessage: 'გთხოვთ, შეავსოთ ყველა სავალდებულო ველი.',
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
