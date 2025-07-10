
export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with innorag Technologies to discuss your project.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">
          Have a project in mind or want to learn more? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
