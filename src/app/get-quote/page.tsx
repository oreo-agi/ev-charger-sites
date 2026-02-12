import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free EV Charger Installation Quote - Austin, TX",
  description:
    "Request a free, no-obligation quote for EV charger installation in Austin, TX. Licensed electricians, fast scheduling, competitive pricing. Response within 24 hours.",
  openGraph: {
    title: "Get a Free EV Charger Installation Quote - Austin, TX",
    description:
      "Free, no-obligation EV charger installation quotes for Austin homeowners. Licensed electricians, response within 24 hours.",
  },
};

export default function GetQuotePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ev-dark">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Get Your Free
            <span className="text-ev-green"> EV Charger Quote</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Fill out the form below and we&apos;ll send you a personalized quote for your Austin EV charger installation within 24 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form column */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Request a Quote</h2>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to expect */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900">What Happens Next?</h3>
                <ol className="mt-4 space-y-4">
                  {[
                    { step: "1", text: "We review your information and prepare a custom estimate." },
                    { step: "2", text: "We contact you within 24 hours to discuss options." },
                    { step: "3", text: "We schedule a free site assessment at your Austin home." },
                    { step: "4", text: "You receive a final, detailed quote — no surprises." },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ev-green text-sm font-bold text-white">
                        {item.step}
                      </span>
                      <span className="text-sm text-gray-600">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Trust signals */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900">Why Choose AustinEV?</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Licensed & insured Austin electricians",
                    "500+ EV chargers installed",
                    "4.9/5 customer satisfaction rating",
                    "Same-week scheduling available",
                    "We handle all Austin permits",
                    "Austin Energy rebate assistance",
                    "Lifetime workmanship warranty",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-ev-green" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service area */}
              <div className="rounded-2xl bg-ev-dark p-6 text-white">
                <h3 className="text-lg font-bold">Service Area</h3>
                <p className="mt-2 text-sm text-gray-300">
                  We serve Austin and the greater metro area including:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Austin", "Round Rock", "Cedar Park", "Georgetown", "Pflugerville", "Lakeway", "Bee Cave", "Dripping Springs"].map((city) => (
                    <span key={city} className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
