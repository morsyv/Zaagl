import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Capabilities } from '@/components/sections/Capabilities';
import { FeatureRows } from '@/components/sections/FeatureRows';
import { Integrations } from '@/components/sections/Integrations';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Footer } from '@/components/sections/Footer';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const l = locale as Locale;
  const d = getDictionary(l);

  return (
    <>
      <Header d={d} locale={l} />
      <main id="main">
        <Hero d={d} locale={l} />
        <Capabilities d={d} />
        <FeatureRows d={d} locale={l} />
        <Integrations d={d} />
        <Pricing d={d} />
        <Testimonials d={d} />
        <Faq d={d} />
        <CtaBanner d={d} />
      </main>
      <Footer d={d} locale={l} />
    </>
  );
}
