import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Austin EV Charger Installation FAQ - 40+ Common Questions Answered",
  description:
    "Get answers to 40+ common questions about EV charger installation in Austin, TX. Costs, permits, rebates, technical requirements, HOA rules, and more.",
  openGraph: {
    title: "Austin EV Charger Installation FAQ - 40+ Questions Answered",
    description:
      "Comprehensive FAQ covering costs, permits, rebates, technical requirements, HOA rules, and everything you need to know about EV charger installation in Austin.",
  },
};

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Cost & Pricing Questions
  {
    category: "Cost & Pricing",
    question: "How much does it cost to install an EV charger in Austin?",
    answer:
      "Most Austin homeowners pay between $800 and $2,500 for a complete Level 2 EV charger installation. The typical breakdown is: $400-$700 for the charger unit, $300-$800 for electrician labor (3-6 hours), and $100-$1,000+ for electrical upgrades if needed. Basic installations with a nearby panel and available capacity cost $800-$1,200, while complex installations requiring panel upgrades or long wire runs cost $1,500-$2,500+.",
  },
  {
    category: "Cost & Pricing",
    question: "Does Austin Energy offer rebates for EV charger installation?",
    answer:
      "Austin Energy no longer offers direct EV charger rebates as of 2024. However, you can still save through: Federal tax credits (up to 30% of installation costs, max $1,000 via IRS Form 8911), workplace charging incentives for businesses, and special Time-of-Use electric rates (Rider EV) that reduce charging costs during off-peak hours. The Rider EV plan can save you $400-$800 per year on charging costs.",
  },
  {
    category: "Cost & Pricing",
    question: "What's included in the installation cost?",
    answer:
      "A professional EV charger installation typically includes: site evaluation and load calculation, electrical permit application ($30-$75), dedicated 240V circuit installation, appropriate breaker (40A or 50A), NEMA 14-50 outlet or hardwired connection, proper wire gauge (6 AWG or 8 AWG copper), conduit and weatherproof mounting, city inspection, and testing/commissioning. It does NOT include the charger unit itself (unless specified), panel upgrades if needed, or trenching for detached garages.",
  },
  {
    category: "Cost & Pricing",
    question: "Is it cheaper to install a NEMA 14-50 outlet or a hardwired charger?",
    answer:
      "A NEMA 14-50 outlet installation is typically $100-$200 cheaper than hardwiring because it's simpler, faster (2-3 hours vs 4-5 hours), and doesn't require configuring the charger's internal wiring. Outlet installations cost $200-$550, while hardwired installations cost $400-$750. However, hardwiring offers advantages: no plug wear/replacement, slightly faster charging (no plug resistance), cleaner appearance, and meets some HOA aesthetic requirements.",
  },
  {
    category: "Cost & Pricing",
    question: "How much does an electrical panel upgrade cost in Austin?",
    answer:
      "Upgrading from a 100A to 200A electrical panel in Austin costs $1,500-$3,500 on average. The typical breakdown is: $800-$1,500 for the panel itself, $500-$1,200 for electrician labor (4-8 hours), $100-$300 for city permit, and $100-$500 for additional materials (wire, breakers, grounding). Simple panel swaps (same location, no service upgrade needed) cost $1,500-$2,200. Complex upgrades requiring Austin Energy service upgrade or panel relocation cost $2,500-$3,500+.",
  },

  // Permits & Regulations
  {
    category: "Permits & Regulations",
    question: "Do I need a permit to install an EV charger in Austin?",
    answer:
      "Yes, you need an electrical permit from the City of Austin for EV charger installations. This applies to both NEMA 14-50 outlets and hardwired Level 2 chargers. The permit costs $30-$75 and requires a licensed electrician's signature. Your electrician typically handles the permit application, plan submission, and city inspection scheduling. Permit approval takes 3-5 business days, and installation cannot begin until the permit is issued.",
  },
  {
    category: "Permits & Regulations",
    question: "What does the Austin electrical inspection cover?",
    answer:
      "The City of Austin electrical inspection verifies: proper wire gauge for amperage (6 AWG for 40A, 8 AWG for 50A circuits), correct breaker size and type (typically 40A or 50A), proper grounding and bonding, secure conduit installation and weatherproofing, National Electrical Code (NEC) compliance, GFCI protection if required, proper clearances from windows/doors, and secure charger mounting. The inspection is typically scheduled within 24-48 hours of installation completion and takes 15-30 minutes.",
  },
  {
    category: "Permits & Regulations",
    question: "Can I install an EV charger myself in Austin?",
    answer:
      "Texas does not require a licensed electrician for homeowner-performed work on your own property, but the City of Austin strongly recommends using a licensed electrician for safety and code compliance. If you choose to DIY: you still need to obtain an electrical permit, your work must pass city inspection, you must follow all NEC codes, and improper installation voids equipment warranties and may create insurance/liability issues. Most homeowners hire licensed electricians to ensure safety, code compliance, and smooth permit/inspection processes.",
  },
  {
    category: "Permits & Regulations",
    question: "How long does it take to get an electrical permit in Austin?",
    answer:
      "Austin electrical permits are typically approved in 3-5 business days for standard EV charger installations. The timeline: Day 1 - Electrician submits permit application with site plan and load calculation; Days 2-5 - City reviews application (simple installations approved faster); Day 5+ - Permit issued, installation can begin; Day of completion - Inspection scheduled (typically within 24-48 hours). Total timeline from permit application to completed inspection: 1-2 weeks for straightforward installations.",
  },

  // Technical Requirements
  {
    category: "Technical Requirements",
    question: "Do I need a 200-amp electrical panel for an EV charger?",
    answer:
      "Not necessarily. A Level 2 EV charger (40A circuit) draws about 9.6 kW, which is manageable on a 100A panel if you have available capacity. You need a panel upgrade to 200A if: your current panel is at or near capacity, you have less than 40-50A of available capacity, you plan to add other major loads (pool, hot tub, solar), or you want to future-proof for multiple EVs or faster charging. Many Austin homes built before 2000 have 100A panels and can add EV charging without upgrading if no other major loads are present.",
  },
  {
    category: "Technical Requirements",
    question: "What's the difference between Level 1 and Level 2 charging?",
    answer:
      "Level 1 uses standard 120V household outlets and adds 3-5 miles of range per hour (12-20 hours for a full charge). It's free if you have an outlet, but very slow. Level 2 uses 240V power (like a dryer) and adds 25-30 miles per hour (4-8 hours for a full charge). Level 2 requires professional installation ($800-$2,500) but is 5-6× faster. For Austin commuters driving 30+ miles/day, Level 2 is strongly recommended for overnight charging convenience.",
  },
  {
    category: "Technical Requirements",
    question: "Can I use my dryer outlet to charge my EV?",
    answer:
      "Physically yes (if it's a NEMA 14-30 or 14-50 outlet), but electrically it's not recommended. Here's why: your dryer circuit is sized for dryer loads only (usually 30A), simultaneous use (dryer + EV) can overload the circuit, the outlet is often in a laundry room (not near parking), and it's inconvenient to swap plugs constantly. Better solution: install a dedicated EV circuit near your parking area. This costs $800-$1,200 and provides safe, reliable charging without competing for the dryer circuit.",
  },
  {
    category: "Technical Requirements",
    question: "What size breaker do I need for an EV charger?",
    answer:
      "Most residential Level 2 EV chargers require a 40-amp or 50-amp circuit breaker. Common configurations: 40A breaker for 32A continuous charging (adds ~25 miles/hour), 50A breaker for 40A continuous charging (adds ~30 miles/hour), and 60A breaker for 48A continuous charging (adds ~35 miles/hour, less common in homes). The NEC requires the breaker to be 125% of the continuous load, so a charger rated at 32A needs a 40A breaker. Your electrician will calculate the appropriate size based on your charger's specifications and panel capacity.",
  },
  {
    category: "Technical Requirements",
    question: "How far can my EV charger be from the electrical panel?",
    answer:
      "There's no strict distance limit, but longer wire runs increase costs due to voltage drop requirements. Typical scenarios: 0-50 feet - standard wire gauge (6 AWG or 8 AWG), minimal voltage drop; 50-100 feet - may require larger wire (4 AWG or 6 AWG) to compensate for voltage drop; 100+ feet - significantly larger wire needed (2 AWG or larger), may require conduit burial or overhead runs. Cost increases about $3-$5 per foot for wire and conduit beyond 25 feet. For detached garages, expect to add $500-$1,500 depending on distance and routing.",
  },

  // Product Selection
  {
    category: "Product Selection",
    question: "What's the best EV charger for Austin homeowners?",
    answer:
      "Top recommended chargers for Austin: ChargePoint Home Flex ($699, 50A, WiFi, works with all EVs, excellent app); Grizzl-E Classic ($399, 40A, ultra-durable for Texas heat, simple design); Tesla Wall Connector ($475, 48A, best for Tesla owners, sleek design); JuiceBox 40 ($599, 40A, smart scheduling for Austin Energy Rider EV plans); and Emporia Level 2 ($449, 48A, energy monitoring, budget-friendly). All work in Austin's heat and are compatible with Texas climate. Choose based on: your EV brand, desired charging speed, smart features needed, and budget.",
  },
  {
    category: "Product Selection",
    question: "Do I need a smart/WiFi-enabled charger?",
    answer:
      "Smart chargers offer valuable features for Austin residents: scheduled charging to use Austin Energy's cheap off-peak rates (Rider EV plan: 2.5¢/kWh after 7pm vs 13¢/kWh daytime), energy usage tracking to monitor costs and claim tax credits, remote start/stop via smartphone app, and load sharing if you have multiple EVs. Non-smart chargers cost $100-$200 less but require manual scheduling via your car's app. If you're on or considering Austin Energy's Rider EV plan, a smart charger pays for itself within 1-2 years through optimized off-peak charging.",
  },
  {
    category: "Product Selection",
    question: "Will my EV charger work with any electric vehicle?",
    answer:
      "Yes, all modern EVs sold in the U.S. (except older Teslas) use the standard J1772 connector. Level 2 home chargers are universal. Tesla vehicles: 2024+ models use the North American Charging Standard (NACS) but include a J1772 adapter; pre-2024 models use Tesla's proprietary connector but include a J1772 adapter. If you buy a Tesla Wall Connector, it only works with Tesla vehicles unless you buy a separate adapter. For multi-EV households or future EV changes, buy a J1772 charger (ChargePoint, Grizzl-E, JuiceBox).",
  },
  {
    category: "Product Selection",
    question: "Should I buy the charger before or after hiring an electrician?",
    answer:
      "Generally, buy the charger AFTER consulting with your electrician. Here's why: the electrician needs to know the charger's amperage rating to size the circuit correctly, some chargers require specific installation methods (hardwired vs. plug-in), your panel capacity may limit which chargers you can use, and the electrician may have preferred brands they're experienced with. Best approach: Get electrician quotes first, ask their recommendations, verify your panel can support your desired charger, then purchase the charger and schedule installation.",
  },

  // Installation Process
  {
    category: "Installation Process",
    question: "How long does EV charger installation take in Austin?",
    answer:
      "From initial contact to completed installation, expect 1-2 weeks. Timeline breakdown: Day 1-2 - Schedule site evaluation with electrician; Day 2-3 - Electrician evaluates, provides quote; Day 3-5 - Purchase charger if approved quote; Day 5-7 - Electrician submits permit to City of Austin; Day 8-12 - Permit approved (3-5 business days); Day 12-13 - Installation completed (3-6 hours); Day 13-15 - City inspection scheduled (typically next business day); Day 14-16 - Inspection completed, charger operational. Faster if: you already own the charger, your electrician has expedited permit relationships, or simple installation requires no upgrades.",
  },
  {
    category: "Installation Process",
    question: "Can I schedule EV charger installation on weekends in Austin?",
    answer:
      "Many Austin electricians offer weekend installation, but expect 10-20% higher labor rates ($75-$100/hour vs. $60-$80/hour weekday rates). Weekend availability is limited, so book 2-3 weeks in advance. Note: City of Austin permit applications and inspections are only processed on weekdays, so weekend installations must work around permit timing. Typical weekend scenario: permit approved Friday, installation Saturday, inspection scheduled for following Monday or Tuesday.",
  },
  {
    category: "Installation Process",
    question: "What do I need to prepare before the electrician arrives?",
    answer:
      "Before installation day: clear the installation area (garage/parking space) of vehicles and storage, ensure electrician has clear access to your electrical panel, have your EV charger unit on-site and unboxed for inspection, know where you want the charger mounted (mark the spot), verify HOA approval if applicable (bring documentation), have your EV on-site so electrician can verify reach of charging cable, and take photos of current electrical panel for insurance records. Most electricians also appreciate access to a bathroom and trash disposal for packaging.",
  },
  {
    category: "Installation Process",
    question: "Will my power be shut off during installation?",
    answer:
      "Yes, expect 30-60 minutes of power outage while the electrician installs the new circuit breaker in your panel. They'll notify you before shutting off power. Plan accordingly: avoid the outage window if you work from home, unplug sensitive electronics (computers, TVs), note that wifi routers will restart (10-15 minutes to reconnect), and preserve refrigerator/freezer contents by keeping doors closed. The outage is brief and only affects your home, not neighbors. Battery backups for critical equipment recommended if you work from home.",
  },

  // HOA & Apartment Questions
  {
    category: "HOA & Apartments",
    question: "Can my HOA prevent me from installing an EV charger in Austin?",
    answer:
      "No, Texas Property Code § 202.014 gives homeowners the right to install EV charging equipment on their property, and HOAs cannot prohibit it. However, HOAs CAN: require you to submit plans for approval, mandate specific locations (e.g., not front-facing), require professional installation and permits, specify aesthetic requirements (color, visibility), require proof of insurance, and set reasonable approval timelines (30-60 days). HOAs cannot unreasonably delay approval or charge excessive fees.",
  },
  {
    category: "HOA & Apartments",
    question: "Do I need HOA approval before installing an EV charger?",
    answer:
      "Yes, always submit a written request to your HOA before installation, even though Texas law protects your right to install. Include: site plan showing charger location and electrical route, photos of proposed installation area, electrician's quote and credentials, proof of electrical permit application, copy of Texas Property Code § 202.014 (your legal right), and insurance certificate showing liability coverage. HOAs have 30-60 days to respond. If they deny, they must provide specific, reasonable justification in writing.",
  },
  {
    category: "HOA & Apartments",
    question: "Can I install an EV charger in my Austin apartment?",
    answer:
      "It depends on your landlord and lease terms. Texas Property Code § 92.0131 requires landlords to allow EV charging equipment IF: you pay all installation and removal costs, installation is done by licensed electrician, you provide proof of insurance, landlord approves the location, and you agree to remove equipment when moving (restore to original condition). However, landlords can deny if: building electrical system can't support it, installation poses safety risks, or building is historic/protected. Alternatives: portable Level 2 chargers (plug into existing dryer outlets), nearby public charging (Austin has 300+ stations), or workplace charging.",
  },
  {
    category: "HOA & Apartments",
    question: "What if my apartment doesn't allow EV charger installation?",
    answer:
      "Austin has excellent public charging infrastructure as an alternative: 300+ public charging stations across Austin (150+ Level 2, 50+ DC fast chargers), ChargePoint and EVgo networks well-represented, typical costs $1-$3/hour for Level 2 or $0.30-$0.50/kWh for DC fast charging, H-E-B, Whole Foods, and shopping centers offer free Level 2 charging while you shop, and Austin Public Library branches have free charging. Portable Level 2 chargers ($300-$500) can plug into apartment dryer outlets if your landlord allows temporary use. Some newer apartment complexes offer dedicated EV charging as an amenity.",
  },

  // Charging Strategy & Savings
  {
    category: "Charging Strategy & Savings",
    question: "How much does it cost to charge an EV in Austin?",
    answer:
      "Austin Energy residential rates: Standard rate: 12-14¢/kWh = $9-$11 to fully charge a 75 kWh EV battery; Rider EV (Time-of-Use) off-peak rate: 2.5¢/kWh (7pm-6am weekdays, all weekend) = $1.90 to fully charge; Rider EV peak rate: 13¢/kWh (6am-7pm weekdays) = $9.75 to fully charge. Annual charging cost for typical Austin driver (12,000 miles/year): Standard rate: $600-$700/year; Rider EV plan (charging off-peak): $120-$180/year. Compared to gas: $1,800-$2,400/year for 25 mpg vehicle at $3.50/gallon. EVs save Austin drivers $1,200-$2,200/year on fuel.",
  },
  {
    category: "Charging Strategy & Savings",
    question: "What is Austin Energy's Rider EV plan and should I sign up?",
    answer:
      "Rider EV is Austin Energy's special electric rate plan for EV owners with Time-of-Use pricing: Super cheap off-peak (2.5¢/kWh from 7pm-6am weekdays + all weekend), higher peak (13¢/kWh from 6am-7pm weekdays). Benefits: Save $400-$800/year on charging if you charge overnight, no enrollment fee or monthly charge, and simple to sign up online. Drawbacks: Higher daytime rates apply to ALL electricity use (not just EV), so if you run AC heavily during daytime, total bill may increase. Best for: homeowners who charge overnight, use minimal daytime electricity, or have solar panels offsetting daytime use.",
  },
  {
    category: "Charging Strategy & Savings",
    question: "How do I schedule overnight charging for cheap rates?",
    answer:
      "Three methods to schedule charging for Austin Energy's off-peak hours (7pm-6am): 1) Use your EV's built-in app/settings (all modern EVs have departure time or scheduled charging features); 2) Use a smart charger's app (ChargePoint, JuiceBox, Emporia) to set charging windows; 3) Use a simple outlet timer ($20-$40) for non-smart chargers. Best practice: Set charging to start at 7pm (when off-peak begins) and target completion by 6am. For example, if your EV needs 8 hours to charge, starting at 10pm completes at 6am perfectly.",
  },
  {
    category: "Charging Strategy & Savings",
    question: "Can I claim the federal EV charger tax credit?",
    answer:
      "Yes, but the credit changed in 2024. The current federal Alternative Fuel Vehicle Refueling Property Credit (IRS Form 8911) provides: 30% of installation costs up to $1,000 for individuals or 30% up to $100,000 for businesses. Qualified expenses include: EV charger purchase, electrician labor, electrical permits, panel upgrades (if necessary for EV charger), and conduit/wiring. Not included: general home electrical work unrelated to EV charging. You must have tax liability to claim the credit (it's non-refundable). Keep all receipts and have your electrician itemize the invoice for EV charger installation specifically.",
  },

  // Troubleshooting & Maintenance
  {
    category: "Troubleshooting & Maintenance",
    question: "Do EV chargers require maintenance?",
    answer:
      "Minimal maintenance required. Recommended quarterly checks: inspect charging cable for cuts, fraying, or damage; verify charger casing is secure and weatherproof seal intact; clean dust/debris from ventilation slots; test GFCI functionality (if equipped); check mounting hardware is tight; and verify mobile app connectivity (for smart chargers). Annual professional inspection ($75-$150) recommended to check: internal electrical connections, verify proper grounding, test voltage output, inspect breaker for signs of overheating. Most quality chargers (ChargePoint, Tesla, Grizzl-E) last 10+ years with minimal maintenance in Austin's climate.",
  },
  {
    category: "Troubleshooting & Maintenance",
    question: "What if my EV charger stops working?",
    answer:
      "Troubleshooting steps: 1) Check the circuit breaker (may have tripped - reset it); 2) Verify the charger has power (LED indicators, app connectivity); 3) Try unplugging and replugging the charging cable; 4) Restart your EV's charging system; 5) Check for error codes on charger display or app; 6) Test the charger with a different EV if possible. If still not working: Contact charger manufacturer support (most have 3-year warranties), call your installing electrician (they may warranty their work for 1-2 years), or hire an electrician for diagnosis ($75-$150 service call). Common issues: tripped breaker (DIY fix), GFCI fault (electrician), damaged cable (replacement $150-$300), or internal charger failure (warranty claim).",
  },
  {
    category: "Troubleshooting & Maintenance",
    question: "Can Austin's heat damage my EV charger?",
    answer:
      "Quality EV chargers are designed to handle Austin's heat (100°F+ summers), but location matters. Best practices: install in shaded area if possible (north-facing wall, under eave), avoid direct afternoon sun exposure (west-facing walls), ensure proper ventilation around charger (don't box it in), choose chargers with high temperature ratings (Grizzl-E rated to 122°F), and consider outdoor-rated enclosures for extra protection. ChargePoint, Tesla, Grizzl-E, and JuiceBox are all proven in Texas heat. Avoid cheap Amazon chargers with poor thermal management. Proper installation with ventilation prevents overheating issues.",
  },

  // Future Planning
  {
    category: "Future Planning",
    question: "Should I install two EV chargers for a two-EV household?",
    answer:
      "Depends on your parking setup and panel capacity. Options: 1) Two separate chargers (ideal if you have two parking spaces, each needs dedicated 40-50A circuit, requires 80-100A total additional capacity); 2) One charger with load sharing (ChargePoint can split power between two cars automatically); 3) One charger shared between two EVs (works if cars charge sequentially overnight, most EVs only need 4-6 hours to charge). Cost comparison: Two chargers: $1,600-$3,500 total; One load-sharing charger: $1,200-$2,000; One shared charger: $800-$1,200. If you have panel capacity, two chargers is most convenient.",
  },
  {
    category: "Future Planning",
    question: "How do I prepare for faster EV charging in the future?",
    answer:
      "To future-proof your installation: Install 50-60A circuit even if your current charger only needs 40A (minimal extra cost now, allows upgrade later), use conduit oversizing (run 1-inch conduit instead of 3/4-inch for easier wire upgrades), choose smart chargers that support firmware updates for new features, consider panel location for future solar integration, leave space in panel for additional EV circuits (2-4 spare breaker slots), and install subpanel in garage if planning multiple future loads. Home charging speeds are plateauing at 48A (11.5 kW) for residential applications, so a 60A circuit provides headroom without over-building.",
  },
  {
    category: "Future Planning",
    question: "Can I add solar panels to charge my EV?",
    answer:
      "Yes, solar + EV charging is an excellent combination in sunny Austin. Typical setup: 8-10 kW solar array generates 30-40 kWh/day (enough to fully charge an EV + power a home), costs $20,000-$30,000 before 30% federal solar tax credit, payback period 6-8 years with EV charging included, and works well with Austin Energy's net metering program. Install sequence: Install EV charger first (immediate use), add solar 6-12 months later (once you understand your EV's charging patterns). Combined tax credits: 30% solar credit + 30% EV charger credit = substantial savings. Your electrician can plan the EV installation to accommodate future solar integration.",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

// Generate JSON-LD FAQPage schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white">
        {/* Header */}
        <div className="bg-ev-dark">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Austin EV Charger Installation FAQ
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Get answers to 40+ common questions about EV charger installation in Austin, Texas.
              From costs and permits to technical requirements and rebates, we've got you covered.
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
            <nav className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-ev-green hover:text-ev-green"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <section
              key={category}
              id={category.toLowerCase().replace(/\s+/g, "-")}
              className="mb-12"
            >
              <h2 className="mb-6 text-2xl font-bold text-gray-900">{category}</h2>
              <div className="space-y-6">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Still have questions?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Get a free quote from licensed Austin electricians. We'll evaluate your home, answer
              your specific questions, and provide an exact installation cost.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center rounded-lg bg-ev-green px-8 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/cost-calculator"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-ev-green hover:text-ev-green"
              >
                Calculate Your Cost
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Need more guidance?{" "}
              <Link href="/blog" className="font-medium text-ev-green hover:underline">
                Browse our comprehensive installation guides
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
