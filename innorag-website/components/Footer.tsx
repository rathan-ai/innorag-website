
const InnoragLogo = () => (
    <span className="inline-flex items-center gap-1 font-bold not-italic">
        <span className="bg-black text-white px-1.5 py-0.5 rounded"><i>i</i></span>
        <span className="text-black">nnorag</span>
        <span className="text-orange-600">.</span>
    </span>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500">
        <p>&copy; {currentYear} <InnoragLogo /> Technologies (OPC) Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
