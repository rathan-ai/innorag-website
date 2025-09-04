
import InnoragLogo from './InnoragLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500">
        <p>&copy; {currentYear} <InnoragLogo size="sm" /> Technologies (OPC) Private Limited. All Rights Reserved.</p>
        <div className="mt-2">
            <a href="mailto:contact@innorag.com" className="hover:underline">contact@innorag.com</a>
        </div>
        <div className="mt-4 flex justify-center space-x-6 text-sm">
          <a href="/privacy-policy" className="hover:underline hover:text-slate-700">Privacy Policy</a>
          <a href="/terms-of-use" className="hover:underline hover:text-slate-700">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
