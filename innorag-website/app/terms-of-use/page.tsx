import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for innorag Technologies - Legal terms and conditions for using our AI and data analytics services.',
};

export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Use</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 mb-8">
          <strong>Effective Date:</strong> September 2, 2025<br />
          <strong>Last Updated:</strong> September 2, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-700 mb-4">
            By accessing or using the services provided by innorag Technologies (OPC) Private Limited (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
            you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms of Use (&quot;Terms&quot;). These Terms govern your use of our 
            website <a href="https://www.innorag.com" className="text-blue-600 hover:underline">www.innorag.com</a> and all related 
            services, including our AI-powered Retrieval-Augmented Generation (RAG) solutions, data analytics services, 
            and integrations with various third-party platforms and service providers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Services</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">2.1 Core Services</h3>
          <p className="text-slate-700 mb-4">innorag Technologies provides:</p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>AI-powered Retrieval-Augmented Generation (RAG) solutions</li>
            <li>Data analytics and business intelligence services</li>
            <li>Software support and consulting</li>
            <li>Research and development services</li>
            <li>Integration services with various platforms and service providers</li>
          </ul>

          <h3 className="text-xl font-medium text-slate-800 mb-3">2.2 Platform Integrations</h3>
          <p className="text-slate-700 mb-4">
            Our services may integrate with various third-party platforms and service providers 
            to provide enhanced analytics and AI capabilities. Such integrations are subject to the respective 
            third-party terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. User Obligations and Responsibilities</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">3.1 Acceptable Use</h3>
          <p className="text-slate-700 mb-4">You agree to:</p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>Use our services in compliance with all applicable laws and regulations</li>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security and confidentiality of your account credentials</li>
            <li>Use our services only for legitimate business purposes</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h3 className="text-xl font-medium text-slate-800 mb-3">3.2 Prohibited Activities</h3>
          <p className="text-slate-700 mb-4">You must not:</p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>Use our services for any illegal or unauthorized purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt our services</li>
            <li>Reverse engineer, decompile, or disassemble our software</li>
            <li>Use our services to process data that violates third-party rights</li>
            <li>Transmit malicious code or harmful content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Processing and Privacy</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">4.1 Customer Data</h3>
          <p className="text-slate-700 mb-4">
            You retain ownership of all data, content, and materials you provide to us (&quot;Customer Data&quot;). 
            You grant us a limited, non-exclusive license to process Customer Data solely to provide our services 
            and as outlined in our Privacy Policy.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">4.2 Data Security</h3>
          <p className="text-slate-700 mb-4">
            We implement industry-standard security measures to protect Customer Data, including encryption, 
            access controls, and regular security assessments. However, you acknowledge that no security 
            measure is 100% secure.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">4.3 Third-Party Processing</h3>
          <p className="text-slate-700 mb-4">
            Our services may involve processing data through third-party platforms and service providers. 
            We ensure that such third parties maintain appropriate data protection standards and comply 
            with applicable privacy laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">5.1 Our IP</h3>
          <p className="text-slate-700 mb-4">
            All intellectual property rights in our services, including software, algorithms, documentation, 
            and methodologies, remain our exclusive property or that of our licensors.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">5.2 Customer IP</h3>
          <p className="text-slate-700 mb-4">
            You retain all intellectual property rights in Customer Data. We claim no ownership over your data, 
            content, or business information.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">5.3 Generated Outputs</h3>
          <p className="text-slate-700 mb-4">
            Outputs generated by our RAG solutions and analytics services using Customer Data are provided 
            to you for your business use, subject to these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Service Availability and Performance</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">6.1 Service Levels</h3>
          <p className="text-slate-700 mb-4">
            We strive to provide reliable and high-quality services. However, we do not guarantee uninterrupted 
            or error-free service availability. Specific service level agreements may be outlined in separate 
            commercial agreements.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">6.2 Maintenance</h3>
          <p className="text-slate-700 mb-4">
            We may perform scheduled maintenance that may temporarily affect service availability. 
            We will provide reasonable notice of planned maintenance activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Payment and Billing</h2>
          <p className="text-slate-700 mb-4">
            Payment terms for our services are specified in separate commercial agreements or invoices. 
            All fees are exclusive of applicable taxes unless otherwise stated. Late payments may be subject 
            to interest charges and service suspension.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Limitation of Liability</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">8.1 Disclaimer</h3>
          <p className="text-slate-700 mb-4">
            OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, 
            WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, 
            FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">8.2 Limitation</h3>
          <p className="text-slate-700 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL INNORAG TECHNOLOGIES BE LIABLE 
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT 
            LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">8.3 Cap</h3>
          <p className="text-slate-700 mb-4">
            Our total liability shall not exceed the amount paid by you for our services in the twelve months 
            preceding the event giving rise to the claim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Indemnification</h2>
          <p className="text-slate-700 mb-4">
            You agree to indemnify and hold harmless innorag Technologies from any claims, damages, or expenses 
            arising from your use of our services, violation of these Terms, or infringement of third-party rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Termination</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">10.1 By Either Party</h3>
          <p className="text-slate-700 mb-4">
            Either party may terminate these Terms with appropriate notice as specified in separate agreements. 
            We may suspend or terminate services immediately for violations of these Terms.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">10.2 Effect of Termination</h3>
          <p className="text-slate-700 mb-4">
            Upon termination, your right to use our services ceases immediately. We will provide reasonable 
            assistance in data retrieval subject to applicable data retention policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Compliance and Regulatory</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">11.1 Data Protection</h3>
          <p className="text-slate-700 mb-4">
            We comply with applicable data protection laws and regulations. Our data processing activities 
            are governed by our Privacy Policy and applicable data protection agreements.
          </p>

          <h3 className="text-xl font-medium text-slate-800 mb-3">11.2 Export Controls</h3>
          <p className="text-slate-700 mb-4">
            Our services are subject to export control laws. You agree to comply with all applicable 
            export and import regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Modifications</h2>
          <p className="text-slate-700 mb-4">
            We may modify these Terms from time to time. We will provide notice of material changes 
            by posting updated Terms on our website. Continued use of our services after such changes 
            constitutes acceptance of the modified Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Governing Law and Jurisdiction</h2>
          <p className="text-slate-700 mb-4">
            These Terms are governed by the laws of India. Any disputes arising from or relating to these 
            Terms shall be subject to the exclusive jurisdiction of the courts located in India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Contact Information</h2>
          <p className="text-slate-700 mb-4">
            For questions regarding these Terms of Use, please contact us:
          </p>
          <div className="bg-slate-100 p-4 rounded-lg">
            <p className="text-slate-800 font-medium">innorag Technologies (OPC) Private Limited</p>
            <p className="text-slate-700">Email: <a href="mailto:contact@innorag.com" className="text-blue-600 hover:underline">contact@innorag.com</a></p>
            <p className="text-slate-700">Website: <a href="https://www.innorag.com" className="text-blue-600 hover:underline">www.innorag.com</a></p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">15. Severability</h2>
          <p className="text-slate-700 mb-4">
            If any provision of these Terms is found to be unenforceable, the remaining provisions 
            shall continue in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">16. Entire Agreement</h2>
          <p className="text-slate-700 mb-4">
            These Terms, together with our Privacy Policy and any separate commercial agreements, 
            constitute the entire agreement between you and innorag Technologies regarding the use of our services.
          </p>
        </section>
      </div>
    </div>
  );
}