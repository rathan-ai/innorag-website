
'use client'; // This directive is needed for using hooks like usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white/80 shadow-sm sticky top-0 z-50 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-slate-900 not-italic">
              <i>i</i>nnorag<span className="text-blue-600">.</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith('/services') && link.href === '/services');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium transition-colors ${
                    isActive ? 'text-blue-600 font-semibold' : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
}
