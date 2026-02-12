import type { Metadata } from "next";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "EV Charger Installation Cost Calculator - Austin, TX",
  description:
    "Calculate your EV charger installation cost in Austin, TX. Get instant estimates for Level 1, Level 2, and DC fast charger installations. Includes panel upgrades, wiring, permits & labor.",
  openGraph: {
    title: "EV Charger Installation Cost Calculator - Austin, TX",
    description:
      "Instant cost estimates for EV charger installation in Austin. Level 1, Level 2, DC fast charger pricing.",
  },
};

export default function CostCalculatorPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ev-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            EV Charger Installation
            <span className="text-ev-green"> Cost Calculator</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Get an instant estimate for your home EV charger installation in Austin, TX. Select your options below to see a detailed cost breakdown.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CostCalculator />
        </div>
      </section>

      {/* Cost factors */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            What Affects Your Austin EV Charger Installation Cost?
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Electrical Panel Capacity",
                desc: "Older Austin homes often have 100A panels. A Level 2 charger typically requires 40-50 amps. If your panel can't handle it, an upgrade to 200A costs $1,500-$3,000.",
              },
              {
                title: "Distance from Panel",
                desc: "The further your charging location is from the electrical panel, the more wiring and conduit is needed. Each additional foot adds $6-$15 in materials and labor.",
              },
              {
                title: "Charger Hardware",
                desc: "A basic Level 2 charger (ChargePoint, Grizzl-E) runs $300-$600. Premium units like Tesla Wall Connector or JuiceBox cost $400-$1,200.",
              },
              {
                title: "Permit & Inspection Fees",
                desc: "Austin requires an electrical permit for Level 2 installations. The City of Austin charges $100-$300 for permits and inspection.",
              },
              {
                title: "Property Type",
                desc: "Condos and townhouses often need HOA approval and may require longer wire runs or special mounting. This can add $200-$1,500 to the total.",
              },
              {
                title: "Available Rebates",
                desc: "Austin Energy and federal tax credits can offset 30-50% of your installation cost. We help you apply for every available incentive.",
              },
            ].map((factor) => (
              <div key={factor.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-gray-900">{factor.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
