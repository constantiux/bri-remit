import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Layanan remittance #1 dari Indonesia sejak 1895"
    description="Kami senantiasa melayani dengan sepenuh hati berbagai kebutuhan finansial lintas negeri"
  >
    <VerticalFeatureRow
      title="Transfer Dana"
      description="Nikmati layanan transfer uang ke kerabat dan teman atau keperluan lainnya ke sesama rekening BRI atau antar bank."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Kirim Uang"
      description="Nabung pangkal kaya; adalah sebuah frasa yang diajarkan sejak dini oleh guru dan orang tua. Solusi kami menawarkan nabung dolar dengan rate kompetitif."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Kebebasan Finansial"
      description="Kami sepenuhnya mendukung kebebasan finansial seluruh nasabah. Melalui produk dana penisun DPLK Grup BRI serta deposito, nasabah dapat menyisikan pendapatan dengan imbalan yang lebih besar dan risiko minim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
