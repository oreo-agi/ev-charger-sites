import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EV Charger Installation Guide for Austin, TX Homeowners",
  description:
    "Complete guide to EV charger installation in Austin, TX. Learn about permits, Austin Energy requirements, electrical panel upgrades, timeline, and what to expect during installation.",
  openGraph: {
    title: "EV Charger Installation Guide - Austin, TX",
    description:
      "Everything Austin homeowners need to know about EV charger installation. Permits, electrical requirements, timeline & costs.",
  },
};

const steps = [
  {
    number: "1",
    title: "Choose Your Charger Level",
    content: [
      "Most Austin homeowners choose Level 2 (240V) charging. It provides 25-30 miles of range per hour, meaning a full charge overnight.",
      "Level 1 (120V) works with a standard outlet but only adds 3-5 miles per hour — fine for plug-in hybrids but too slow for full EVs.",
      "Consider your daily driving distance. If you drive under 40 miles/day, even Level 1 may work. For 40+ miles/day, Level 2 is the clear choice.",
    ],
  },
  {
    number: "2",
    title: "Evaluate Your Electrical Panel",
    content: [
      "A Level 2 charger draws 30-50 amps. Your electrical panel needs enough spare capacity to handle this load safely.",
      "Homes built after 2000 in Austin typically have 200A panels with room to spare. Older homes (especially in central Austin neighborhoods like Hyde Park, Travis Heights, or Bouldin Creek) often have 100A panels that need upgrading.",
      "A licensed electrician will assess your panel and recommend whether an upgrade is needed. Panel upgrades in Austin typically cost $1,500-$3,000.",
    ],
  },
  {
    number: "3",
    title: "Austin Permits & Regulations",
    content: [
      "The City of Austin requires an electrical permit for all Level 2 charger installations. This is handled through Austin Development Services.",
      "Permit fees typically range from $100-$300 depending on the scope of work.",
      "All installations must comply with the National Electrical Code (NEC) and City of Austin amendments. A city inspector will verify the installation after completion.",
      "Your installer should pull the permit on your behalf — we handle this for every installation.",
    ],
  },
  {
    number: "4",
    title: "Austin Energy Requirements",
    content: [
      "Austin Energy is your electric utility provider. While they don't require pre-approval for residential charger installations, there are a few things to know:",
      "Austin Energy offers a time-of-use rate (EV360) that gives you cheaper electricity during off-peak hours (typically 7 PM - 2 PM). This can save you 30-40% on charging costs.",
      "If you install a Level 2 charger, consider enrolling in Austin Energy's EV programs for potential rebates and off-peak rate benefits.",
      "Austin Energy's grid can handle standard residential charger installations without service upgrades in most neighborhoods.",
    ],
  },
  {
    number: "5",
    title: "Installation Day",
    content: [
      "A typical Level 2 installation takes 2-4 hours. If a panel upgrade is needed, it may take a full day.",
      "The electrician will: mount the charging unit, run conduit and wiring from your panel, install a dedicated circuit breaker, and test the system.",
      "The charger is usually mounted on the garage wall near the driver's side of the car. Outdoor installations require a weatherproof (NEMA 4) rated unit.",
      "After installation, we test the charger, walk you through the controls, and help you set up any associated app (ChargePoint, Tesla, etc.).",
    ],
  },
  {
    number: "6",
    title: "Inspection & Activation",
    content: [
      "After installation, a City of Austin inspector will verify the work meets code. We schedule this inspection for you.",
      "Inspections are typically completed within 3-5 business days of the installation.",
      "Once passed, your charger is fully operational. We provide documentation for your records and for any rebate applications.",
      "The entire process — from initial quote to charging your car — typically takes 1-2 weeks.",
    ],
  },
];

export default function InstallationGuidePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ev-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            EV Charger Installation Guide
            <span className="text-ev-green"> for Austin, TX</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Everything you need to know about getting an EV charger installed at your Austin home. From permits to power-up, we cover it all.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Quick overview */}
          <div className="mb-12 rounded-2xl bg-gray-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900">Austin Installation at a Glance</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-ev-green">1-2 Weeks</p>
                <p className="text-sm text-gray-500">Quote to Charging</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-ev-green">2-4 Hours</p>
                <p className="text-sm text-gray-500">Typical Install Time</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-ev-green">$800-$2,500</p>
                <p className="text-sm text-gray-500">Level 2 Total Cost</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="relative pl-12 sm:pl-16">
                <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-ev-green text-lg font-bold text-white">
                  {step.number}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                <div className="mt-4 space-y-3">
                  {step.content.map((paragraph, idx) => (
                    <p key={idx} className="leading-relaxed text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              {[
                {
                  q: "Do I need a permit to install an EV charger in Austin?",
                  a: "Yes. The City of Austin requires an electrical permit for Level 2 (240V) charger installations. Level 1 chargers that plug into existing outlets do not require a permit. Your installer should handle the permit process for you.",
                },
                {
                  q: "Can I install a charger myself?",
                  a: "While you can plug in a Level 1 charger yourself, Level 2 installations require a licensed electrician in the City of Austin. This ensures safety, code compliance, and is required for warranty and insurance purposes.",
                },
                {
                  q: "Will I need to upgrade my electrical panel?",
                  a: "It depends on your current panel capacity and usage. Homes with 200A panels usually have room. If you have a 100A panel, an upgrade is likely needed. Our electrician will assess this during the site evaluation.",
                },
                {
                  q: "How much does Austin Energy charge for EV charging?",
                  a: "Austin Energy's standard residential rate is about $0.11-$0.13/kWh. With the EV360 time-of-use plan, off-peak rates can drop to around $0.05-$0.07/kWh. Charging a typical EV costs $30-$50/month.",
                },
                {
                  q: "What if I rent my home?",
                  a: "You'll need your landlord's written permission. We can provide documentation and proposals to help you make the case. Some landlords see EV chargers as a property value increase.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">{faq.q}</h3>
                  <p className="mt-2 text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-ev-dark p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-3 max-w-lg text-gray-300">
              Get a free, no-obligation quote for your Austin EV charger installation. We handle permits, installation, and inspection.
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
