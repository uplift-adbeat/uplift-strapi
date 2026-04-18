import type { Schema, Struct } from '@strapi/strapi';

export interface LandingFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_feature_items';
  info: {
    displayName: 'Feature Item';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    iconKey: Schema.Attribute.Enumeration<
      ['monitor', 'map-pin', 'layout-grid', 'chart']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_features_sections';
  info: {
    displayName: 'Features Section';
    icon: 'bulletList';
  };
  attributes: {
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'landing.feature-item', true>;
  };
}

export interface LandingFooter extends Struct.ComponentSchema {
  collectionName: 'components_landing_footers';
  info: {
    displayName: 'Footer';
    icon: 'discuss';
  };
  attributes: {
    contactText: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'landing.link', true>;
  };
}

export interface LandingHero extends Struct.ComponentSchema {
  collectionName: 'components_landing_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.Text & Schema.Attribute.Required;
    primaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    socialProof: Schema.Attribute.String & Schema.Attribute.Required;
    subheadline: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LandingLink extends Struct.ComponentSchema {
  collectionName: 'components_landing_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingNav extends Struct.ComponentSchema {
  collectionName: 'components_landing_navs';
  info: {
    displayName: 'Navigation';
    icon: 'apps';
  };
  attributes: {
    brandText: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'landing.link', true>;
    primaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_pricing_sections';
  info: {
    displayName: 'Pricing Section';
    icon: 'priceTag';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    caption: Schema.Attribute.Text & Schema.Attribute.Required;
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.Text & Schema.Attribute.Required;
    stats: Schema.Attribute.Component<'landing.pricing-stat', true>;
  };
}

export interface LandingPricingStat extends Struct.ComponentSchema {
  collectionName: 'components_landing_pricing_stats';
  info: {
    displayName: 'Pricing Stat';
    icon: 'chartPie';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingStepItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_step_items';
  info: {
    displayName: 'Step Item';
    icon: 'numberList';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LandingStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_steps_sections';
  info: {
    displayName: 'Steps Section';
    icon: 'walk';
  };
  attributes: {
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    intro: Schema.Attribute.Text & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'landing.step-item', true>;
  };
}

export interface LandingWaitlist extends Struct.ComponentSchema {
  collectionName: 'components_landing_waitlists';
  info: {
    displayName: 'Waitlist';
    icon: 'mail';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
    disclaimer: Schema.Attribute.String & Schema.Attribute.Required;
    emailPlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    invalidEmailMessage: Schema.Attribute.String & Schema.Attribute.Required;
    submitLabel: Schema.Attribute.String & Schema.Attribute.Required;
    successMessage: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'landing.feature-item': LandingFeatureItem;
      'landing.features-section': LandingFeaturesSection;
      'landing.footer': LandingFooter;
      'landing.hero': LandingHero;
      'landing.link': LandingLink;
      'landing.nav': LandingNav;
      'landing.pricing-section': LandingPricingSection;
      'landing.pricing-stat': LandingPricingStat;
      'landing.step-item': LandingStepItem;
      'landing.steps-section': LandingStepsSection;
      'landing.waitlist': LandingWaitlist;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
