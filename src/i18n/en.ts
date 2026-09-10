import type { ar } from './ar';

/* The Arabic dictionary is the source of truth for shape; English must match it. */
type Dict = { -readonly [K in keyof typeof ar]: any };

export const en: Dict = {
  meta: {
    title: 'Zaagl | AI chat agents for your website',
    description:
      'Give your AI precise context with RAG and document integration. Upload your files or connect Google Drive to create a specialist expert for your brand.',
  },
  common: {
    langLabel: 'العربية',
    themeToLight: 'Light mode',
    themeToDark: 'Dark mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
  },
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    faq: 'FAQ',
    demo: 'Request a demo',
    cta: 'Start now',
  },
  hero: {
    badge: 'Available now',
    titleTop: 'Build AI chat agents',
    titleBottom: 'for your site in minutes',
    subtitle:
      'Give your AI precise context with RAG and document integration. Upload your files or connect Google Drive to create a specialist expert for your brand.',
    ctaPrimary: 'Start free now',
    ctaSecondary: 'Request a demo',
    trust: 'No credit card required · Free plan to start · No-code setup',
    console: {
      url: 'app.zaagl.com/dashboard',
      sourcesTitle: 'Knowledge sources',
      sources: ['Upload PDF files', 'Add a website URL', 'Google Drive'],
      indexed: 'Indexed',
      agentName: 'Zaagl assistant',
      agentStatus: 'Online',
      messages: [
        { from: 'agent', text: 'Hi! How can I help you today?' },
        { from: 'user', text: 'Tell me about pricing.' },
        { from: 'agent', text: 'Our plans start at $0 per month for small projects.' },
      ],
      inputPlaceholder: 'Type your message...',
      citedFrom: 'From: pricing.pdf',
    },
  },
  capabilities: {
    tag: 'Core capabilities',
    title: 'Everything you need to automate customer support',
    subtitle: 'Knowledge base, one script, and a full dashboard — all on one platform.',
    items: [
      {
        title: 'Multiple AI agents',
        body: 'Create and manage several specialised AI agents for different departments or sites from one central account.',
        icon: 'agents',
      },
      {
        title: 'RAG-powered knowledge base',
        body: 'Upload your files or connect Google Drive. RAG technology delivers 99% accuracy grounded in your company’s own facts.',
        icon: 'knowledge',
      },
      {
        title: 'One-script integration',
        body: 'All it takes is a single script. Copy it, paste it into your site, and your agent is live immediately — no code.',
        icon: 'script',
      },
      {
        title: 'A complete dashboard',
        body: 'Track conversation history, sentiment analysis and agent performance through a clean, simple interface.',
        icon: 'dashboard',
      },
    ],
  },
  features: [
    {
      tag: 'Knowledge base',
      title: 'An agent that knows your company, not the internet',
      body: 'RAG grounds every answer in your own documents — 99% accuracy based on your company’s facts, not guesswork.',
      points: [
        'Upload PDF files straight from your machine',
        'Connect Google Drive and keep sources current',
        'Add website URLs to index their content',
        'Every answer traces back to a source in your knowledge base',
      ],
      link: 'Start free now',
      visual: 'knowledge',
    },
    {
      tag: 'Setup',
      title: 'One script, and you’re done',
      body: 'All it takes is a single script. Copy it, paste it into your site, and your agent is live immediately — no code.',
      points: [
        'Works with any site or platform',
        'No technical experience needed',
        'Configure the agent from a simple dashboard',
        'Live in minutes, not days',
      ],
      link: 'Request a demo',
      visual: 'script',
    },
    {
      tag: 'Dashboard',
      title: 'See every conversation and every sentiment',
      body: 'Track conversation history, sentiment analysis and agent performance through a clean, simple interface.',
      points: [
        'A full log of every conversation',
        'Customer sentiment analysis',
        'Event tracking and Webhooks',
        'Regular reports on agent performance',
      ],
      link: 'See the plans',
      visual: 'analytics',
    },
  ],
  integrations: {
    tag: 'Sources & integrations',
    title: 'Connect Zaagl to the sources you already have',
    body: 'Connect Zaagl to your documents by uploading them directly, or integrate sources like Google Drive and website URLs to build a precise knowledge base.',
    link: 'Learn more',
    nodes: ['PDF files', 'Google Drive', 'Website URLs', 'APIs', 'Webhooks', 'Event tracking'],
    center: 'Zaagl',
  },
  pricing: {
    tag: 'Pricing',
    title: 'Choose the plan that fits you',
    subtitle: 'Every plan includes support and the core features.',
    perMonth: '/ month',
    popular: 'Most popular',
    cta: 'Start now',
    plans: [
      {
        name: 'Basic',
        price: '25',
        currency: 'USD',
        body: 'Ideal for small companies and new sites that want to start using AI for customer service.',
        popular: false,
        features: [
          'AI agents: 2',
          'Knowledge files: 2',
          'Event tracking support',
          'Fast, easy setup',
          'Standard support',
        ],
      },
      {
        name: 'Advanced',
        price: '49.99',
        currency: 'USD',
        body: 'Ideal for growing companies that need more automation and deeper integration with their systems.',
        popular: true,
        features: [
          'AI agents: 10',
          'Knowledge files: 10',
          'Event tracking support',
          'Detailed monthly reports',
          'Event tracking via Webhook',
          'External API integrations: 10',
          'Priority support',
        ],
      },
      {
        name: 'Professional',
        price: '99.99',
        currency: 'USD',
        body: 'Ideal for large companies, platforms and SaaS systems that need unlimited capability and high scalability.',
        popular: false,
        features: [
          'AI agents: unlimited',
          'Knowledge files: 100',
          'Event tracking support',
          'Advanced weekly reports',
          'Event tracking via Webhook',
          'Unlimited API integrations',
          'Highest support priority',
          'High performance tuned for large systems',
        ],
      },
    ],
  },
  testimonials: {
    tag: 'Customer reviews',
    title: 'What our customers say about Zaagl',
    subtitle:
      'Companies of every size rely on Zaagl to automate support conversations and improve their customer experience.',
    verified: 'Verified',
    items: [
      {
        quote:
          'We automated more than 60% of repeat customer enquiries without affecting customer satisfaction or our brand tone.',
        name: 'Sarah Al-Mutairi',
        role: 'Head of Customer Success at a SaaS company',
      },
      {
        quote:
          'After connecting Zaagl to our knowledge base, average response time dropped from minutes to seconds while answer quality held.',
        name: 'Ahmed Al-Qahtani',
        role: 'Customer Experience Manager at an e-commerce store',
      },
    ],
  },
  faq: {
    tag: 'FAQ',
    title: 'Questions people ask a lot',
    subtitle:
      'Answers to the most common questions about the Zaagl platform, how it works, pricing, and privacy.',
    items: [
      {
        q: 'What is Zaagl?',
        a: 'Zaagl is a platform that helps you build AI-powered chat agents for your website using RAG and document integration, with no programming experience needed.',
      },
      {
        q: 'Do I need technical experience to use Zaagl?',
        a: 'No. All you need is to copy a short script and paste it into your site. The agent is configured through a simple dashboard.',
      },
      {
        q: 'How does Zaagl handle my data and files?',
        a: 'We use your data only to train your own chat agents and run the service. We do not sell your data or use it for marketing outside your account.',
      },
      {
        q: 'Can I try the service for free?',
        a: 'Yes. You can start on a free plan to test the platform and build your first chat agent before moving to a paid plan when you need to.',
      },
      {
        q: 'Can Zaagl connect to external platforms or sources?',
        a: 'You can connect Zaagl to your documents by uploading them directly, or integrate sources such as Google Drive and website URLs to build a precise knowledge base.',
      },
    ],
  },
  cta: {
    title: 'Ready to transform your customer experience?',
    body: 'Join the companies using Zaagl to turn customer enquiries into fast, professional experiences.',
    button: 'Start now',
    note: 'No credit card required. Cancel any time.',
  },
  footer: {
    about: 'AI solutions to accelerate your business and make smarter decisions.',
    rights: 'Zaagl AI. All rights reserved.',
    columns: [
      {
        title: 'Quick links',
        links: [
          { label: 'Features', href: '/#features' },
          { label: 'Pricing', href: '/#pricing' },
          { label: 'Request a demo', href: 'https://zaagl.com/request-demo' },
          { label: 'Start now', href: 'https://zaagl.com/signup' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Terms & conditions', href: 'https://zaagl.com/terms' },
          { label: 'Privacy policy', href: 'https://zaagl.com/privacy' },
          { label: 'FAQ', href: '/#faq' },
        ],
      },
    ],
  },
};
