import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for innorag Technologies - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 mb-8">
          <strong>Effective Date:</strong> September 2, 2025<br />
          <strong>Last Updated:</strong> September 2, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
          <p className="text-slate-700 mb-4">
            innorag Technologies (OPC) Private Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            <a href="https://www.innorag.com" className="text-blue-600 hover:underline"> www.innorag.com</a> or use our services, 
            including our AI-powered Retrieval-Augmented Generation (RAG) solutions and data analytics services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">2.1 Personal Information</h3>
          <p className="text-slate-700 mb-4">We may collect the following personal information:</p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>Name, email address, and contact information</li>
            <li>Company name and job title</li>
            <li>Professional background and interests</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-medium text-slate-800 mb-3">2.2 Technical Information</h3>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>IP address and browser information</li>
            <li>Device information and operating system</li>
            <li>Website usage patterns and analytics</li>
            <li>Cookies and tracking technologies</li>
          </ul>

          <h3 className="text-xl font-medium text-slate-800 mb-3">2.3 Business Data</h3>
          <p className="text-slate-700 mb-4">
            When providing our RAG solutions and data analytics services, we may process:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>Client data for analysis and processing</li>
            <li>Documents and content for RAG implementation</li>
            <li>System logs and performance metrics</li>
            <li>Integration data with third-party platforms and service providers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Your Information</h2>
          <p className="text-slate-700 mb-4">We use collected information for:</p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>Providing and improving our AI and data analytics services</li>
            <li>Developing and enhancing RAG solutions</li>
            <li>Communicating about our services and updates</li>
            <li>Responding to inquiries and providing customer support</li>
            <li>Analyzing website usage and performance</li>
            <li>Compliance with legal obligations</li>
            <li>Integration with partner platforms and service providers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Sharing and Disclosure</h2>
          
          <h3 className="text-xl font-medium text-slate-800 mb-3">4.1 Third-Party Partners</h3>
          <p className="text-slate-700 mb-4">
            We may share data with trusted partners, including:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>Third-party platforms and service providers for system integration</li>
            <li>Cloud service providers for data processing and storage</li>
            <li>Technology partners for enhanced service delivery</li>
          </ul>

          <h3 className="text-xl font-medium text-slate-800 mb-3">4.2 Legal Requirements</h3>
          <p className="text-slate-700 mb-4">
            We may disclose information when required by law or to protect our rights and safety.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Security</h2>
          <p className="text-slate-700 mb-4">
            We implement appropriate technical and organizational measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
            <li>Secure data processing environments</li>
            <li>Compliance with industry security standards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Data Retention</h2>
          <p className="text-slate-700 mb-4">
            We retain personal data only as long as necessary for the purposes outlined in this policy or as required by law. 
            Client data processed through our RAG solutions is retained according to contractual agreements and applicable regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Your Rights</h2>
          <p className="text-slate-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-slate-700 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. International Data Transfers</h2>
          <p className="text-slate-700 mb-4">
            As we operate globally and integrate with international platforms and service providers, your data may be transferred 
            to and processed in countries other than India. We ensure appropriate safeguards are in place for such transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Cookies and Tracking</h2>
          <p className="text-slate-700 mb-4">
            We use cookies and similar technologies to enhance user experience and analyze website performance. 
            You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Changes to This Policy</h2>
          <p className="text-slate-700 mb-4">
            We may update this Privacy Policy periodically. We will notify you of significant changes by posting 
            the updated policy on our website with a new effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Contact Information</h2>
          <p className="text-slate-700 mb-4">
            For questions about this Privacy Policy or to exercise your rights, please contact us:
          </p>
          <div className="bg-slate-100 p-4 rounded-lg">
            <p className="text-slate-800 font-medium">innorag Technologies (OPC) Private Limited</p>
            <p className="text-slate-700">Email: <a href="mailto:contact@innorag.com" className="text-blue-600 hover:underline">contact@innorag.com</a></p>
            <p className="text-slate-700">Website: <a href="https://www.innorag.com" className="text-blue-600 hover:underline">www.innorag.com</a></p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Governing Law</h2>
          <p className="text-slate-700 mb-4">
            This Privacy Policy is governed by the laws of India. Any disputes shall be subject to the 
            exclusive jurisdiction of the courts in India.
          </p>
        </section>
      </div>
    </div>
  );
}