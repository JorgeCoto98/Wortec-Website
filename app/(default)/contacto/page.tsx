export const metadata = {
  title: 'Servicios - Wortec Darktec Landing',
  description: 'Conoce los servicios que ofrecemos en Wortec.',
};

import PageIllustration from '@/components/page-illustration';
import Hero from '@/components/hero-home';
import Features from '@/components/features';
import Workflows from '@/components/workflows';
import Cta from '@/components/cta';
import Services from '@/components/services';

export default function Contacto() {
  return (
    <>
      <PageIllustration />
      <Hero/>
      <Features />
      <Workflows />
      <Services />
      <Cta />
    </>
  );
}
