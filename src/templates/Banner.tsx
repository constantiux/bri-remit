import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Sekarang bisa bertransaksi dengan mudah dan simpel"
      subtitle="tanpa repot-repot datang ke cabang"
      button={
        <Link href="https://app.brchongkong.com">
          <a target="_blank" rel="noopener noreferrer">
            <Button>Coba aplikasi</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
