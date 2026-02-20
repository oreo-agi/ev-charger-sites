import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Austin EV Charger Installation | Licensed Electricians | AustinEV",
  description:
    "Professional EV charger installation in Austin, TX. $800-$2,500 typical cost. Licensed electricians, same-week scheduling. Level 2 home charging, Tesla Wall Connector & more. Free quotes.",
  openGraph: {
    title: "Austin EV Charger Installation | Licensed Electricians",
    description:
      "Professional EV charger installation in Austin, TX. $800-$2,500 typical cost. Licensed electricians. Free quotes.",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ev-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ev-green/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ev-green/30 bg-ev-green/10 px-4 py-1.5 text-sm text-ev-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L4 14h7v8l9-12h-7V2z" />
              </svg>
              Serving Austin &amp; Greater Travis County
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Austin EV Charger
              <span className="text-ev-green"> Installation</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              Get a home EV charger installed by licensed Austin electricians. Fast scheduling, clean work, and help with Austin Energy rebates. Most installations completed in one day.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-3xl font-extrabold text-white">$800 &ndash; $2,500</span>
              <span className="text-sm text-gray-400">typical installation cost</span>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center rounded-lg bg-ev-green px-8 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/cost-calculator"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition hover:border-gray-400 hover:text-white"
              >
                Calculate Your Cost
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { stat: "500+", label: "Chargers Installed" },
              { stat: "4.9/5", label: "Customer Rating" },
              { stat: "Same Week", label: "Scheduling" },
              { stat: "Licensed", label: "& Insured" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-extrabold text-ev-green sm:text-3xl">{item.stat}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              EV Charger Installation Services in Austin
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From basic 120V outlets to high-powered Level 2 chargers, we handle every step of your home EV charging setup.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Level 1 Charging",
                desc: "Standard 120V outlet installation for overnight charging. Adds 3-5 miles of range per hour. Perfect for plug-in hybrids or low-mileage drivers.",
                price: "$200 - $500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Level 2 Charging",
                desc: "240V dedicated circuit for fast home charging. Adds 25-30 miles per hour. The most popular choice for Austin Tesla, Rivian, and EV owners.",
                price: "$800 - $2,500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 10V3L8 14h7v7l9-11h-7z" opacity={0.4} />
                  </svg>
                ),
              },
              {
                title: "Commercial / Level 3",
                desc: "DC fast charging for businesses, multi-family properties, and fleet operations. Charges to 80% in 20-60 minutes.",
                price: "$20,000+",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-2M5 21H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div key={service.title} className="rounded-xl border border-gray-200 p-8 transition hover:border-ev-green hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-ev-green/10 text-ev-green">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.desc}</p>
                <p className="mt-4 text-lg font-bold text-ev-green">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Austin needs EV chargers */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Austin Is Going Electric
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Austin is one of the fastest-growing EV markets in Texas. With scorching summers and long commutes, reliable home charging isn&apos;t a luxury &mdash; it&apos;s a necessity.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Texas is the #2 state for EV registrations in the U.S.",
                  "Austin Energy offers rebates for Level 2 charger installations",
                  "Federal tax credit covers 30% of installation costs (up to $1,000)",
                  "Home charging saves $800-$1,200/year vs. gas at Austin fuel prices",
                  "Austin's 2030 climate plan encourages EV adoption citywide",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-5 w-5 shrink-0 text-ev-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-ev-dark p-8 text-white lg:p-12">
              <h3 className="text-2xl font-bold">Ready to charge at home?</h3>
              <p className="mt-3 text-gray-300">
                Most Austin homeowners pay between $800 and $2,500 for a complete Level 2 charger installation. Get your personalized quote in under 2 minutes.
              </p>
              <div className="mt-6 space-y-4">
                <Link
                  href="/get-quote"
                  className="block rounded-lg bg-ev-green px-6 py-4 text-center text-lg font-bold text-white transition hover:bg-ev-green-dark"
                >
                  Get Your Free Quote
                </Link>
                <Link
                  href="/incentives"
                  className="block rounded-lg border border-gray-600 px-6 py-3 text-center font-semibold text-gray-300 transition hover:border-gray-400 hover:text-white"
                >
                  View Available Incentives
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              From quote to charging in as few as 3 steps.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", title: "Request a Quote", desc: "Tell us about your home, vehicle, and charging needs. We respond within 24 hours." },
              { step: "2", title: "Site Assessment", desc: "Our licensed electrician evaluates your electrical panel, wiring, and optimal charger placement." },
              { step: "3", title: "Professional Installation", desc: "We install your charger, handle Austin permits, and make sure everything passes inspection." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ev-green text-2xl font-extrabold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center rounded-lg bg-ev-green px-8 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark"
            >
              Start With a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              EV Charger Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert guides to help you make the right decision for your Austin home
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/faq" className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md border-l-4 border-ev-green">
              <div className="mb-2 inline-block rounded-full bg-ev-green/10 px-2 py-0.5 text-xs font-semibold text-ev-green">New</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-ev-green">
                Austin EV Charger Installation FAQ
              </h3>
              <p className="mt-2 text-gray-600">
                40+ common questions answered: costs, permits, rebates, technical requirements, HOA rules, and more.
              </p>
              <span className="mt-4 inline-block text-ev-green font-medium">Browse FAQ →</span>
            </Link>
            <Link href="/installers" className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-ev-green">
                Best EV Charger Installers in Austin
              </h3>
              <p className="mt-2 text-gray-600">
                Compare top-rated, licensed electricians. Get quotes from Austin's best EV charger installation companies.
              </p>
              <span className="mt-4 inline-block text-ev-green font-medium">Compare installers →</span>
            </Link>
            <Link href="/blog/ev-charger-cost-austin" className="group rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-ev-green">
                How Much Does an EV Charger Cost in Austin?
              </h3>
              <p className="mt-2 text-gray-600">
                Complete breakdown of installation costs, equipment prices, and potential savings.
              </p>
              <span className="mt-4 inline-block text-ev-green font-medium">Read more →</span>
            </Link>
          </div>
          <div className="mt-10 text-center">
            <Link href="/blog" className="inline-flex items-center text-lg font-semibold text-ev-green hover:text-ev-green-dark">
              View All Resources
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Austin EV Charger Installation",
            "image": "https://austinevcharger.com/og-image.png",
            "url": "https://austinevcharger.com",
            "telephone": "+1-512-555-0100",
            "priceRange": "$800-$2500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "Austin",
              "addressRegion": "TX",
              "postalCode": "78701",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.2672,
              "longitude": -97.7431
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 30.2672,
                "longitude": -97.7431
              },
              "geoRadius": "50000"
            },
            "description": "Professional EV charger installation in Austin, TX. Licensed electricians, same-week scheduling. Level 2 home charging, Tesla Wall Connector & more.",
            "serviceType": ["EV Charger Installation", "Level 2 Charger Installation", "Electric Vehicle Charging Station Installation"],
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00"
          })
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does EV charger installation cost in Austin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Austin EV charger installations cost between $800 and $2,500, including the charger unit, electrical work, permits, and labor. The exact cost depends on your electrical panel capacity, distance from the panel to your garage, and whether you need a panel upgrade."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get rebates for EV charger installation in Austin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Austin Energy offers up to $1,200 in rebates for residential EV charger installations. There's also a federal tax credit of up to 30% of installation costs (up to $1,000). Combined, you could save $2,200 or more."
                }
              },
              {
                "@type": "Question",
                "name": "How long does EV charger installation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most installations are completed in 4-6 hours for a straightforward setup. If you need an electrical panel upgrade, it may take 1-2 days. We typically schedule installations within the same week."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a permit for EV charger installation in Austin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all EV charger installations in Austin require an electrical permit from the City of Austin. Licensed electricians handle the permitting process and ensure the installation meets all local codes and NEC requirements."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
