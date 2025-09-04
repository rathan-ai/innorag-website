import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import InnoragLogo from '../components/InnoragLogo';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <InnoragLogo size="lg" className="mb-6 justify-center" />
          <div className="text-9xl font-bold text-orange-600 mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. 
            Let&apos;s get you back on track with our innovative solutions.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link 
            href="/services"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors shadow-sm hover:shadow-md"
          >
            <Search className="w-5 h-5" />
            Explore Services
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            While you&apos;re here, explore our framework:
          </h2>
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">R</span>
              </div>
              <span className="text-slate-600">Retrieve</span>
            </div>
            <ArrowLeft className="w-4 h-4 text-orange-500 rotate-180" />
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-bold">A</span>
              </div>
              <span className="text-slate-600">Augment</span>
            </div>
            <ArrowLeft className="w-4 h-4 text-orange-500 rotate-180" />
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">G</span>
              </div>
              <span className="text-slate-600">Generate</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-slate-500">
            Need help? Contact us at{' '}
            <a href="mailto:contact@innorag.com" className="text-blue-600 hover:underline">
              contact@innorag.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}