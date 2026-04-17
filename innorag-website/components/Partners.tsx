'use client';

import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const Partners = () => {
  const partners = [
    {
      name: 'Databricks',
      logo: '/databricks-logo.svg',
      description: 'Unified Data Analytics Platform',
      href: 'https://databricks.com'
    },
    {
      name: 'Razorpay',
      logo: '/razorpay_logo.jpeg',
      description: 'Complete Payment Solutions',
      href: 'https://razorpay.com'
    }
  ];

  return (
    <section className="text-center py-20">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technology Partners</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          We collaborate with industry leaders to deliver cutting-edge solutions
        </p>
      </AnimatedSection>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {partners.map((partner) => (
          <StaggerItem key={partner.name}>
            <a
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 block"
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={180}
                  height={60}
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-slate-600">{partner.description}</p>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatedSection delay={0.3}>
        <div className="mt-12 p-6 bg-blue-50 rounded-lg max-w-3xl mx-auto">
          <p className="text-slate-700">
            As official partners with <span className="font-semibold">Databricks</span> and <span className="font-semibold">Razorpay</span>,
            we leverage their powerful platforms to build innovative data and payment solutions for our clients.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Partners;
