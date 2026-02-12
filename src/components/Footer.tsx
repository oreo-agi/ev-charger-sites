import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ev-dark border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ev-green">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L4 14h7v8l9-12h-7V2z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Austin<span className="text-ev-green">EV</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Professional EV charger installation services in Austin, Texas. Licensed, insured, and trusted by hundreds of Austin homeowners.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/cost-calculator" className="transition hover:text-ev-green">Cost Calculator</Link></li>
              <li><Link href="/compare" className="transition hover:text-ev-green">Compare Chargers</Link></li>
              <li><Link href="/installation-guide" className="transition hover:text-ev-green">Installation Guide</Link></li>
              <li><Link href="/incentives" className="transition hover:text-ev-green">Incentives &amp; Rebates</Link></li>
            </ul>
          </div>

          {/* Austin Info */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">Service Area</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Austin, TX</li>
              <li>Round Rock, TX</li>
              <li>Cedar Park, TX</li>
              <li>Georgetown, TX</li>
              <li>Pflugerville, TX</li>
              <li>Lakeway, TX</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">Get Started</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/get-quote" className="transition hover:text-ev-green">Request a Quote</Link></li>
              <li>Mon - Fri: 7AM - 7PM</li>
              <li>Sat: 8AM - 4PM</li>
            </ul>
            <Link
              href="/get-quote"
              className="mt-4 inline-block rounded-lg bg-ev-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ev-green-dark"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AustinEV. Professional EV Charger Installation in Austin, Texas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
