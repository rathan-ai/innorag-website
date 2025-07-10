
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500">
        <p>&copy; {currentYear} Innorag Technologies (OPC) Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
