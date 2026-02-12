import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Charger Incentives & Rebates in Austin, TX (2025)",
  description:
    "Save thousands on your Austin EV charger installation. Federal 30% tax credit (up to $1,000), Austin Energy rebates, Texas incentives, and utility programs. Complete guide to EV charging incentives.",
  openGraph: {
    title: "EV Charger Incentives & Rebates - Austin, TX",
    description:
      "Federal tax credits, Austin Energy rebates, and Texas incentives for EV charger installation. Save up to 50% on installation costs.",
  },
};

export default function IncentivesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ev-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            EV Charger Incentives &amp;
            <span className="text-ev-green"> Rebates in Austin</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Austin EV owners can save significantly on charger installation through federal, state, and local incentive programs. Here&apos;s every dollar you can save.
          </p>
        </div>
      </section>

      {/* Total savings callout */}
      <section className="border-b border-gray-200 bg-ev-green/5 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-ev-green">Potential Total Savings</p>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Up to $1,500+</p>
          <p className="mt-1 text-gray-600">Combined federal, state, and local incentives for Austin homeowners</p>
        </div>
      </section>

      {/* Incentive cards */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Federal */}
            <div className="rounded-2xl border-2 border-ev-green bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ev-green text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M9 21V10m6 11V10M12 3l9 7H3l9-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">Federal Tax Credit (Section 30C)</h2>
                    <span className="rounded-full bg-ev-green px-3 py-1 text-xs font-bold text-white">BIGGEST SAVINGS</span>
                  </div>
                  <p className="mt-1 text-2xl font-extrabold text-ev-green">30% of costs, up to $1,000</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-gray-600">
                  The federal Alternative Fuel Vehicle Refueling Property Credit (IRC Section 30C) provides a tax credit of 30% of the cost of purchasing and installing an EV charger at your home.
                </p>
                <h3 className="font-bold text-gray-900">Eligibility Requirements:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-4 w-4 shrink-0 text-ev-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Must be installed at your primary residence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-4 w-4 shrink-0 text-ev-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Property must be in an eligible census tract (most of Austin qualifies)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-4 w-4 shrink-0 text-ev-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Covers hardware, installation labor, permits, and electrical work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-4 w-4 shrink-0 text-ev-green" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Claimed on your federal tax return using IRS Form 8911</span>
                  </li>
                </ul>
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Example:</strong> If your total installation costs $2,000, you&apos;d receive a $600 tax credit. For a $3,500 installation (including panel upgrade), you&apos;d get the maximum $1,000 credit.
                  </p>
                </div>
              </div>
            </div>

            {/* Austin Energy */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Austin Energy Rebates &amp; Programs</h2>
                  <p className="mt-1 text-xl font-bold text-blue-600">$200 - $500 in savings</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-gray-600">
                  Austin Energy, the city-owned electric utility, offers several programs to encourage EV adoption and smart charging.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-bold text-gray-900">EV360 Rate Plan</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Time-of-use rates with off-peak charging as low as $0.05-$0.07/kWh. Save 30-40% on charging costs vs. standard rates. Saves $200-$400/year.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-bold text-gray-900">Smart Charging Rebate</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Austin Energy periodically offers rebates for qualifying Wi-Fi-connected Level 2 chargers. Check with Austin Energy for current availability and amounts.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-bold text-gray-900">Green Choice Program</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Power your EV with 100% renewable energy through Austin Energy&apos;s Green Choice program. Lock in rates from wind and solar sources.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h3 className="font-bold text-gray-900">Demand Response Credits</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Earn credits by allowing Austin Energy to manage your charging during peak grid events. Smart chargers required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texas */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Texas State Incentives</h2>
                  <p className="mt-1 text-xl font-bold text-orange-500">Varies by program</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-gray-600">
                  Texas offers several state-level incentives and programs that benefit EV owners in Austin.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-4 w-4 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Texas Emissions Reduction Plan (TERP):</strong> Grants for businesses and government entities installing public or workplace charging stations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-4 w-4 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Texas VW Settlement Fund:</strong> Funding for DC fast charging infrastructure along Texas corridors, increasing public charging availability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-4 w-4 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>NEVI Formula Program:</strong> Federal funding administered by Texas for EV charging along Alternative Fuel Corridors (I-35, I-10).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-4 w-4 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>No Vehicle Inspections for EVs:</strong> Battery electric vehicles are exempt from Texas emissions testing, saving time and money annually.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Savings calculator */}
            <div className="rounded-2xl bg-gray-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900">Example Savings Breakdown</h2>
              <p className="mt-2 text-gray-600">For a typical Level 2 charger installation in Austin ($2,000 total cost):</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="font-medium text-gray-700">Installation Cost</span>
                  <span className="font-bold text-gray-900">$2,000</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="font-medium text-gray-700">Federal Tax Credit (30%)</span>
                  <span className="font-bold text-ev-green">-$600</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white p-4">
                  <span className="font-medium text-gray-700">Austin Energy Rate Savings (Year 1)</span>
                  <span className="font-bold text-ev-green">-$300</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border-2 border-ev-green bg-ev-green/5 p-4">
                  <span className="font-bold text-gray-900">Effective First-Year Cost</span>
                  <span className="text-xl font-extrabold text-ev-green">$1,100</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * Plus ongoing savings of $800-$1,200/year vs. gasoline costs at current Austin fuel prices.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-ev-dark p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Maximize Your Savings</h2>
            <p className="mx-auto mt-3 max-w-lg text-gray-300">
              We help every customer apply for available incentives. Get a quote that includes your estimated savings from all applicable programs.
            </p>
            <Link
              href="/get-quote"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-ev-green px-8 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
