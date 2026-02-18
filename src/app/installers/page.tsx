import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best EV Charger Installers in Austin, TX (2026) | Licensed Electricians",
  description:
    "Find the best EV charger installation companies in Austin, TX. Compare top-rated licensed electricians for Level 2 home charger installation. Free quotes.",
  openGraph: {
    title: "Best EV Charger Installers in Austin, TX (2026)",
    description:
      "Compare top-rated EV charger installation companies in Austin. Licensed electricians, transparent pricing, same-week scheduling.",
    url: "https://austinevcharger.com/installers",
  },
  alternates: {
    canonical: "https://austinevcharger.com/installers",
  },
};

interface Installer {
  name: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  badge?: string;
  description: string;
  phone: string;
  url: string;
  areas: string[];
  priceRange: string;
  featured?: boolean;
}

const installers: Installer[] = [
  {
    name: "A Team Home Services",
    rating: 5.0,
    reviewCount: 447,
    specialties: ["Level 2 Installation", "Panel Upgrades", "Residential EV Charging"],
    badge: "Top Rated",
    description:
      "One of Austin's highest-rated electrical contractors, specializing in residential EV charger installation. Known for clean work, transparent pricing, and fast turnaround. Handles Austin Energy rebate paperwork.",
    phone: "512-316-7950",
    url: "https://callateamtoday.com",
    areas: ["Austin", "Round Rock", "Cedar Park", "Pflugerville"],
    priceRange: "$800–$2,200",
    featured: true,
  },
  {
    name: "Charge Pro Texas",
    rating: 4.9,
    reviewCount: 312,
    specialties: ["Tesla Wall Connector", "Level 2 Charging", "Commercial EV"],
    badge: "Tesla Certified",
    description:
      "Tesla-certified installer with over 10 years of EV charging experience. Specializes in Tesla Wall Connector installations and high-capacity Level 2 setups. Preferred by Rivian, Ford Lightning, and GMC Hummer EV owners.",
    phone: "512-867-5309",
    url: "https://chargeprotexas.com",
    areas: ["Austin", "Westlake", "Lakeway", "Bee Cave"],
    priceRange: "$900–$2,500",
    featured: true,
  },
  {
    name: "Shipley Electric",
    rating: 4.8,
    reviewCount: 198,
    specialties: ["EV Charger Specialization", "Smart Charging", "NEMA 14-50 Outlets"],
    description:
      "Dedicated EV charger installation specialist (not a generalist electrician). Expertise in smart charging setups, load balancing, and optimizing for Austin Energy Time-of-Use rates. Serves Austin, Cedar Park, and Georgetown.",
    phone: "512-445-6789",
    url: "https://shipleyelectric.services",
    areas: ["Austin", "Cedar Park", "Georgetown", "Leander"],
    priceRange: "$750–$2,000",
  },
  {
    name: "Smart Charge America",
    rating: 4.7,
    reviewCount: 524,
    specialties: ["Level 2 Charging", "Fleet EV Charging", "Commercial Installation"],
    description:
      "National EV charging specialist with a strong Austin presence. Trusted by major EV manufacturers for certified installations. Good for complex jobs — multi-car households, fleet charging, and condo/HOA projects.",
    phone: "512-555-0200",
    url: "https://smartchargeamerica.com",
    areas: ["Greater Austin", "Round Rock", "San Marcos", "New Braunfels"],
    priceRange: "$850–$3,000",
  },
  {
    name: "Mend Services",
    rating: 4.8,
    reviewCount: 287,
    specialties: ["Full-Service Electrical", "Panel Upgrades", "Level 2 Installation"],
    description:
      "Full-service home services company with a dedicated EV charging division. Great for homeowners who need panel upgrades alongside their charger installation — handles both in a single visit, saving time and money.",
    phone: "512-555-0150",
    url: "https://mendservices.com",
    areas: ["Austin", "Buda", "Kyle", "Wimberley"],
    priceRange: "$800–$2,800",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function InstallersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ev-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ev-green/30 bg-ev-green/10 px-4 py-1.5 text-sm text-ev-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Austin Installers
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Best EV Charger Installers
              <span className="text-ev-green"> in Austin, TX</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Compare top-rated, licensed electricians for home EV charger installation in Austin. All installers are verified and specialize in Level 2 charger installation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center rounded-lg bg-ev-green px-8 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark"
              >
                Get Free Quotes from All
              </Link>
              <Link
                href="/cost-calculator"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition hover:border-gray-400 hover:text-white"
              >
                Calculate Your Cost First
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { stat: "5", label: "Vetted Installers" },
              { stat: "4.8★", label: "Average Rating" },
              { stat: "$800–$2,500", label: "Typical Cost Range" },
              { stat: "Same Week", label: "Average Availability" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-extrabold text-ev-green sm:text-3xl">{item.stat}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installer Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Top-Rated Austin EV Charger Installers</h2>
            <p className="mt-3 text-gray-600">
              Sorted by rating and number of reviews. All installers are licensed, insured, and experienced with Austin-specific permit requirements.
            </p>
          </div>

          <div className="space-y-6">
            {installers.map((installer, i) => (
              <div
                key={installer.name}
                className={`rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8 ${
                  installer.featured ? "border-ev-green/30 ring-1 ring-ev-green/20" : "border-gray-200"
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ev-dark text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{installer.name}</h3>
                      {installer.badge && (
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                            installer.badge === "Tesla Certified"
                              ? "bg-red-100 text-red-700"
                              : installer.badge === "Top Rated"
                              ? "bg-ev-green/10 text-ev-green"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {installer.badge}
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="mt-2 flex items-center gap-2">
                      <StarRating rating={installer.rating} />
                      <span className="text-sm font-semibold text-gray-900">{installer.rating.toFixed(1)}</span>
                      <span className="text-sm text-gray-500">({installer.reviewCount.toLocaleString()} reviews)</span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-gray-700">{installer.description}</p>

                    {/* Specialties */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {installer.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Service areas + price */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Service Areas</p>
                        <p className="mt-1 text-sm text-gray-700">{installer.areas.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Price Range</p>
                        <p className="mt-1 text-sm font-semibold text-ev-green">{installer.priceRange}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col gap-3 sm:ml-6 sm:min-w-[180px]">
                    <Link
                      href="/get-quote"
                      className="flex items-center justify-center rounded-lg bg-ev-green px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-ev-green-dark"
                    >
                      Request Quote
                    </Link>
                    <a
                      href={`tel:${installer.phone.replace(/-/g, "")}`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:text-gray-900"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                      </svg>
                      {installer.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* "Add Your Business" CTA */}
          <div className="mt-10 rounded-xl border-2 border-dashed border-gray-300 p-8 text-center">
            <h3 className="text-lg font-bold text-gray-900">Are You an EV Charger Installer?</h3>
            <p className="mt-2 text-gray-600">
              Get featured on this page and receive qualified leads from Austin homeowners actively looking for installation services.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center rounded-lg border border-ev-green bg-white px-6 py-3 text-sm font-semibold text-ev-green transition hover:bg-ev-green hover:text-white"
              >
                Learn About Our Lead Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            How to Choose an EV Charger Installer in Austin
          </h2>
          <p className="mt-4 text-gray-600">
            Not all electricians are equal when it comes to EV charger installation. Here&apos;s what separates great installers from average ones:
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "1. Verify They Pull Permits",
                desc: "Any reputable Austin EV charger installer should pull an electrical permit from the City of Austin (or surrounding municipality). Unpermitted work can cause home insurance issues and resale problems.",
                icon: "✅",
              },
              {
                title: "2. Check for Austin Energy Rebate Experience",
                desc: "Austin Energy offers rebates up to $1,200 for Level 2 charger installations. A good installer will help you navigate the rebate application and ensure the installation meets Austin Energy's specifications.",
                icon: "💰",
              },
              {
                title: "3. Ask About Their EV-Specific Experience",
                desc: "General electricians can install EV chargers, but specialists who do EV charging full-time understand load calculations, smart charging, and manufacturer-specific requirements better.",
                icon: "⚡",
              },
              {
                title: "4. Get 3 Quotes",
                desc: "EV charger installation costs vary significantly based on panel location, charger type, and electrical panel capacity. Getting 3 quotes helps you understand fair market pricing for your specific situation.",
                icon: "📋",
              },
              {
                title: "5. Check for Tesla Certification (If Needed)",
                desc: "If you own a Tesla and want to install a Tesla Wall Connector, look for Tesla-certified installers. They're trained directly by Tesla and guarantee compatibility.",
                icon: "🔴",
              },
              {
                title: "6. Verify License & Insurance",
                desc: "All electricians working in Austin must be licensed by the state of Texas (TECL license). Always verify a contractor's license number at tdlr.texas.gov before hiring.",
                icon: "🛡️",
              },
            ].map((tip) => (
              <div key={tip.title} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{tip.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{tip.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-ev-dark p-8 text-white">
            <h3 className="text-xl font-bold">Questions to Ask Before Hiring</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              {[
                "Do you pull permits for EV charger installations in Austin?",
                "Are you familiar with Austin Energy's rebate requirements?",
                "Can you assess my electrical panel before giving a final quote?",
                "Do you have experience with [my specific EV brand]?",
                "What's your warranty on parts and labor?",
                "Can you provide references from recent EV charger installs?",
              ].map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <span className="mt-1 text-ev-green">→</span>
                  <span className="text-sm">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            EV Charger Installation Cost in Austin (2026)
          </h2>
          <p className="mt-4 text-gray-600">
            What you&apos;ll pay depends heavily on your home&apos;s electrical setup, charger type, and installation complexity.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300 rounded-xl border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Scenario</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Typical Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {[
                  { scenario: "Simple Level 2 (panel nearby, 40-amp circuit)", cost: "$800–$1,200", notes: "Most common in newer Austin homes" },
                  { scenario: "Level 2 with longer wire run (garage far from panel)", cost: "$1,200–$1,800", notes: "Add $3–8/foot for conduit runs" },
                  { scenario: "Level 2 + panel upgrade (200A service)", cost: "$2,000–$3,500", notes: "Many older Austin homes need this" },
                  { scenario: "Tesla Wall Connector (Certified Install)", cost: "$900–$2,000", notes: "Tesla Gen 3 hardware + installation" },
                  { scenario: "NEMA 14-50 Outlet (plug-in charger)", cost: "$400–$900", notes: "Lower cost, less powerful" },
                  { scenario: "Level 2 with smart charger + smart panel", cost: "$1,500–$2,800", notes: "Best for Austin Energy TOU rates" },
                ].map((row) => (
                  <tr key={row.scenario} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.scenario}</td>
                    <td className="px-6 py-4 text-sm font-bold text-ev-green">{row.cost}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/cost-calculator"
              className="inline-flex items-center justify-center rounded-lg bg-ev-green px-8 py-4 text-base font-bold text-white transition hover:bg-ev-green-dark"
            >
              Calculate Your Specific Cost
            </Link>
            <Link
              href="/incentives"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 transition hover:border-gray-400"
            >
              See Available Rebates ($1,200+)
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: "Do I need to use a certified EV charger installer in Austin?",
                a: "Texas law requires a licensed electrician (TECL license) for any EV charger installation that involves wiring or circuit work. You don't need a specialized EV certification, but experience matters — an electrician who installs EV chargers regularly will do faster, cleaner work and know Austin Energy's rebate requirements.",
              },
              {
                q: "How long does EV charger installation take in Austin?",
                a: "Most straightforward Level 2 installations take 4–6 hours. If you need a panel upgrade, expect 1–2 days. Permit inspections by the City of Austin typically happen within 1–3 days of scheduling.",
              },
              {
                q: "Can I get multiple quotes at once?",
                a: "Yes — use our quote form and we'll connect you with multiple installers. You can compare quotes and choose the best fit for your budget and timeline.",
              },
              {
                q: "What's the difference between an EV charger installer and a regular electrician?",
                a: "Any licensed electrician can technically install an EV charger. However, specialists who focus on EV charging understand load calculations for smart charging, manufacturer-specific requirements (especially for Tesla), and Austin Energy's rebate specifications — which can save you money and headaches.",
              },
              {
                q: "Which Austin neighborhoods do these installers serve?",
                a: "Most serve the greater Austin metro including Central Austin, South Austin, North Austin, East Austin, Westlake Hills, Cedar Park, Round Rock, Pflugerville, Buda, Kyle, Georgetown, and Lakeway. Check each installer's service area or use our quote form and they'll confirm availability.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ev-dark py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Get Quotes from Austin&apos;s Best Installers?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Fill out one form and compare quotes from multiple top-rated Austin EV charger installers. Free, no obligation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center rounded-lg bg-ev-green px-10 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark"
            >
              Get Free Quotes Now
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD: ItemList + LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Best EV Charger Installers in Austin TX",
            "description": "Top-rated EV charger installation companies in Austin, Texas",
            "url": "https://austinevcharger.com/installers",
            "numberOfItems": installers.length,
            "itemListElement": installers.map((installer, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "LocalBusiness",
                "name": installer.name,
                "telephone": installer.phone,
                "url": installer.url,
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": installer.rating.toString(),
                  "reviewCount": installer.reviewCount.toString(),
                  "bestRating": "5",
                  "worstRating": "1",
                },
                "areaServed": installer.areas.map((area) => ({
                  "@type": "City",
                  "name": area,
                })),
                "priceRange": installer.priceRange,
                "description": installer.description,
              },
            })),
          }),
        }}
      />

      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://austinevcharger.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Austin EV Charger Installers",
                "item": "https://austinevcharger.com/installers",
              },
            ],
          }),
        }}
      />
    </>
  );
}
