import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare EV Charger Levels: Level 1 vs Level 2 vs Level 3",
  description:
    "Compare Level 1, Level 2, and Level 3 EV chargers side by side. Charging speed, cost, installation requirements, and which is best for your Austin home. Expert recommendations.",
  openGraph: {
    title: "Compare EV Charger Levels: L1 vs L2 vs L3",
    description:
      "Side-by-side comparison of Level 1, Level 2, and Level 3 EV chargers. Find the right charger for your Austin home.",
  },
};

const chargers = [
  {
    level: "Level 1",
    voltage: "120V",
    amps: "12-16A",
    power: "1.2 - 1.9 kW",
    rangePerHour: "3 - 5 miles",
    fullCharge: "24 - 40 hours",
    hardwareCost: "$100 - $300",
    installCost: "$200 - $500",
    circuit: "Standard 120V outlet (NEMA 5-15)",
    permit: "Usually not required",
    bestFor: "Plug-in hybrids, low-mileage drivers, renters",
    pros: [
      "No installation needed (uses existing outlet)",
      "Lowest cost option",
      "Portable — take it when you move",
      "No permit required in Austin",
    ],
    cons: [
      "Very slow charging (overnight won't fully charge most EVs)",
      "Not practical for daily commuters driving 40+ miles",
      "May not keep up with winter energy consumption",
    ],
  },
  {
    level: "Level 2",
    voltage: "240V",
    amps: "30-50A",
    power: "7.2 - 11.5 kW",
    rangePerHour: "25 - 30 miles",
    fullCharge: "4 - 8 hours",
    hardwareCost: "$300 - $1,200",
    installCost: "$800 - $2,500",
    circuit: "Dedicated 240V circuit (NEMA 14-50 or hardwired)",
    permit: "Required in Austin",
    bestFor: "Most EV owners, daily commuters, families with EVs",
    pros: [
      "Full charge overnight for any EV",
      "Best balance of cost and speed",
      "Smart features (scheduling, app control)",
      "Increases home resale value",
      "Eligible for federal tax credit",
    ],
    cons: [
      "Requires professional installation",
      "May need electrical panel upgrade",
      "Higher upfront cost than Level 1",
    ],
  },
  {
    level: "Level 3",
    voltage: "400-900V DC",
    amps: "100-400A",
    power: "50 - 350 kW",
    rangePerHour: "180 - 250+ miles",
    fullCharge: "20 - 60 minutes (to 80%)",
    hardwareCost: "$15,000 - $40,000",
    installCost: "$20,000 - $100,000+",
    circuit: "Commercial 3-phase power",
    permit: "Required — commercial permit process",
    bestFor: "Commercial properties, fleet operations, gas stations, public charging",
    pros: [
      "Extremely fast charging",
      "Essential for commercial operations",
      "Revenue potential for businesses",
      "Supports high-traffic locations",
    ],
    cons: [
      "Not practical for residential use",
      "Very high installation cost",
      "Requires commercial electrical service",
      "Higher maintenance costs",
      "Some EVs don't support DC fast charging",
    ],
  },
];

export default function ComparePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ev-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Compare EV Charger
            <span className="text-ev-green"> Levels</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Level 1 vs Level 2 vs Level 3: which EV charger is right for your Austin home or business? See the full comparison below.
          </p>
        </div>
      </section>

      {/* Recommendation banner */}
      <section className="border-b border-gray-200 bg-ev-green/5 py-6">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-bold text-gray-900">
            Our Recommendation: <span className="text-ev-green">Level 2</span> for most Austin homeowners
          </p>
          <p className="mt-1 text-gray-600">
            Best balance of charging speed, cost, and convenience. Full charge overnight, every night.
          </p>
        </div>
      </section>

      {/* Comparison table (desktop) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-2xl border border-gray-200 lg:block">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-500">Feature</th>
                  {chargers.map((c) => (
                    <th key={c.level} className={`px-6 py-4 text-lg font-bold ${c.level === "Level 2" ? "bg-ev-green/5 text-ev-green" : "text-gray-900"}`}>
                      {c.level}
                      {c.level === "Level 2" && <span className="ml-2 rounded-full bg-ev-green px-2 py-0.5 text-xs text-white">Popular</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { label: "Voltage", key: "voltage" as const },
                  { label: "Amperage", key: "amps" as const },
                  { label: "Power Output", key: "power" as const },
                  { label: "Range per Hour", key: "rangePerHour" as const },
                  { label: "Time to Full Charge", key: "fullCharge" as const },
                  { label: "Hardware Cost", key: "hardwareCost" as const },
                  { label: "Total Install Cost", key: "installCost" as const },
                  { label: "Circuit Required", key: "circuit" as const },
                  { label: "Austin Permit", key: "permit" as const },
                  { label: "Best For", key: "bestFor" as const },
                ].map((row) => (
                  <tr key={row.label} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700">{row.label}</td>
                    {chargers.map((c) => (
                      <td key={c.level} className={`px-6 py-4 text-sm text-gray-600 ${c.level === "Level 2" ? "bg-ev-green/5" : ""}`}>
                        {c[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-6 lg:hidden">
            {chargers.map((c) => (
              <div key={c.level} className={`rounded-2xl border p-6 ${c.level === "Level 2" ? "border-ev-green shadow-lg" : "border-gray-200"}`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{c.level}</h2>
                  {c.level === "Level 2" && (
                    <span className="rounded-full bg-ev-green px-3 py-1 text-xs font-bold text-white">Most Popular</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-500">{c.voltage} &bull; {c.power}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Range/Hour</span><span className="font-semibold text-gray-900">{c.rangePerHour}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Full Charge</span><span className="font-semibold text-gray-900">{c.fullCharge}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Hardware</span><span className="font-semibold text-gray-900">{c.hardwareCost}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Total Install</span><span className="font-semibold text-gray-900">{c.installCost}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Permit</span><span className="font-semibold text-gray-900">{c.permit}</span></div>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Best for:</strong> {c.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros/Cons */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Pros &amp; Cons</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {chargers.map((c) => (
              <div key={c.level} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">{c.level}</h3>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-ev-green">Pros</h4>
                  <ul className="mt-2 space-y-2">
                    {c.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-ev-green" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-red-500">Cons</h4>
                  <ul className="mt-2 space-y-2">
                    {c.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-4 w-4 shrink-0 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Which Charger Is Right for You?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { profile: "Daily Commuter", miles: "30-60 miles/day", rec: "Level 2", reason: "Full charge overnight, ready every morning. The sweet spot of speed and cost." },
              { profile: "Short-Trip Driver", miles: "Under 30 miles/day", rec: "Level 1 or 2", reason: "Level 1 may suffice, but Level 2 gives you peace of mind and flexibility." },
              { profile: "Road Tripper", miles: "Frequent long trips", rec: "Level 2 at home", reason: "Level 2 at home for daily use. Use public Level 3 stations for road trips." },
              { profile: "Business Owner", miles: "Customer/fleet charging", rec: "Level 2 or 3", reason: "Level 2 for employee/customer perks. Level 3 for revenue-generating public stations." },
            ].map((use) => (
              <div key={use.profile} className="rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900">{use.profile}</h3>
                <p className="mt-1 text-sm text-gray-500">{use.miles}</p>
                <p className="mt-3 text-ev-green font-bold">{use.rec}</p>
                <p className="mt-2 text-sm text-gray-600">{use.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ev-dark py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Not Sure Which Charger to Choose?</h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-300">
            Our Austin electricians will assess your home, driving habits, and budget to recommend the perfect EV charging solution.
          </p>
          <Link
            href="/get-quote"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-ev-green px-8 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark"
          >
            Get a Free Recommendation
          </Link>
        </div>
      </section>
    </>
  );
}
