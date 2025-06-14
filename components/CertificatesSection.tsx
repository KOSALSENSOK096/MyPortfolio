
import React from 'react';
import Section from './Section';
import CertificateItem from './CertificateItem';
import { Certificate } from '../types';

interface CertificatesSectionProps {
  certificates: Certificate[];
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ certificates }) => {
  return (
    <Section id="certificates" title="Certifications" className="bg-white dark:bg-gray-800">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div key={cert.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`}}>
            <CertificateItem certificate={cert} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CertificatesSection;
