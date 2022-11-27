import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Rate</a>
          </Link>
        </li>
        <li>
          <Link href="https://bri.co.id">
            <a>Grup BRI</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Selamat Datang di\n'}
            <span className="text-primary-500">BRI Remittance</span>
          </>
        }
        description="Layanan terpercaya lintas negeri."
        button={
          <Link href="https://app.brchongkong.com">
            <a target="_blank" rel="noopener noreferrer">
              <Button xl>Buka aplikasi</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
