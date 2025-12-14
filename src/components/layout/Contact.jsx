import React from 'react';

const Contact = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Header with yarn ball icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-8">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="#FF69B4" />
                <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="white" />
              </svg>
            </div>
            <h2 className="text-4xl font-light text-blue-600">Contact us to schedule an appointment</h2>
          </div>

          {/* Main Contact Info */}
          <div className="space-y-3 mb-12">
            <a
              href="mailto:knit@knitster-ldn.com"
              className="text-xl text-blue-600 hover:text-blue-700 transition-colors block"
            >
              knit@knitster-ldn.com
            </a>
            <div className="text-gray-700">
              <p>Unit 5, Leyton Studios, 15 Argall Avenue</p>
              <p>London, E10 7QE, United Kingdom</p>
            </div>
            <a
              href="tel:+447449631180"
              className="text-lg text-blue-600 hover:text-blue-700 transition-colors block"
            >
              +44 7449 631180
            </a>
          </div>

          {/* Individual Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Aysen's Card */}
            <div className="bg-pink-50 py-16 rounded-lg shadow-sm">
              <h3 className="text-2xl font-light mb-4">Aysen Bayram</h3>
              <a
                href="mailto:aysen@knitster-ldn.com"
                className="block text-blue-600 hover:text-blue-700 mb-2 transition-colors"
              >
                aysen@knitster-ldn.com
              </a>
              <a
                href="tel:+447946534504"
                className="block text-blue-600 hover:text-blue-700 transition-colors"
              >
                +44 (0) 7946 534 504
              </a>
            </div>

            {/* Emma's Card */}
            <div className="bg-pink-50 py-16 rounded-lg shadow-sm">
              <h3 className="text-2xl font-light mb-4">Emma McClelland</h3>
              <a
                href="mailto:emma@knitster-ldn.com"
                className="block text-blue-600 hover:text-blue-700 mb-2 transition-colors"
              >
                emma@knitster-ldn.com
              </a>
              <a
                href="tel:+447888823403"
                className="block text-blue-600 hover:text-blue-700 transition-colors"
              >
                +44 (0) 7888 823 403
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
