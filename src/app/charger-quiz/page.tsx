"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";

interface QuizStep {
  question: string;
  subtitle?: string;
  options: {
    label: string;
    value: string;
    icon?: string;
  }[];
}

interface ChargerRecommendation {
  name: string;
  brand: string;
  price: string;
  power: string;
  features: string[];
  whyPerfect: string;
  installation: string;
  totalCost: string;
  buyLink?: string;
  pros: string[];
  cons: string[];
}

const quizSteps: QuizStep[] = [
  {
    question: "What EV do you drive?",
    subtitle: "This helps us recommend compatible chargers",
    options: [
      { label: "Tesla (Model 3, Y, S, X)", value: "tesla", icon: "🔴" },
      { label: "Ford (F-150 Lightning, Mustang Mach-E)", value: "ford", icon: "🔵" },
      { label: "Rivian (R1T, R1S)", value: "rivian", icon: "🟢" },
      { label: "Chevrolet (Bolt, Blazer EV, Equinox EV)", value: "chevy", icon: "⚪" },
      { label: "Hyundai/Kia (Ioniq, EV6, EV9)", value: "hyundai-kia", icon: "🔷" },
      { label: "Other (Nissan, VW, BMW, Audi, etc.)", value: "other", icon: "🚗" },
    ],
  },
  {
    question: "What's your budget for the charger + installation?",
    subtitle: "This includes hardware, electrician labor, and permits",
    options: [
      { label: "Under $1,000 (budget-friendly)", value: "budget", icon: "💵" },
      { label: "$1,000–$1,500 (mid-range)", value: "mid", icon: "💰" },
      { label: "$1,500–$2,500 (premium)", value: "premium", icon: "💎" },
      { label: "$2,500+ (high-end / smart home integration)", value: "luxury", icon: "🏆" },
    ],
  },
  {
    question: "How quickly do you need to charge?",
    subtitle: "How many miles per hour of charging do you want?",
    options: [
      { label: "20–30 miles/hour (overnight is fine)", value: "slow", icon: "🐌" },
      { label: "30–40 miles/hour (standard Level 2)", value: "standard", icon: "⚡" },
      { label: "40–50 miles/hour (fast Level 2)", value: "fast", icon: "⚡⚡" },
      { label: "50+ miles/hour (maximum speed)", value: "max", icon: "🚀" },
    ],
  },
  {
    question: "Do you have a 200-amp electrical panel?",
    subtitle: "Check your electrical panel — it should say '200A' on the main breaker",
    options: [
      { label: "Yes, I have 200A service", value: "yes-200", icon: "✅" },
      { label: "No, I have 100A or 150A", value: "no-upgrade", icon: "⚠️" },
      { label: "I'm not sure / I rent", value: "unsure", icon: "❓" },
    ],
  },
  {
    question: "Where is your electrical panel relative to where you park?",
    subtitle: "This affects installation cost (longer wire runs = higher cost)",
    options: [
      { label: "Same room or adjacent (< 15 feet)", value: "near", icon: "📍" },
      { label: "Same side of house (15–40 feet)", value: "medium", icon: "📏" },
      { label: "Opposite side of house (40+ feet)", value: "far", icon: "🏠" },
      { label: "I'm not sure", value: "unsure-distance", icon: "❓" },
    ],
  },
  {
    question: "What features matter most to you?",
    subtitle: "Select your top priority",
    options: [
      { label: "WiFi / smart features (scheduling, monitoring)", value: "smart", icon: "📱" },
      { label: "Lowest total cost", value: "cheap", icon: "💵" },
      { label: "Fastest charging speed", value: "speed", icon: "⚡" },
      { label: "Weather resistance (outdoor install)", value: "outdoor", icon: "🌧️" },
      { label: "Portability (take it with me if I move)", value: "portable", icon: "🎒" },
      { label: "Tesla-specific features", value: "tesla-features", icon: "🔴" },
    ],
  },
];

export default function ChargerQuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [step]: value };
    setAnswers(newAnswers);

    if (step < quizSteps.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setShowResults(false);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const getRecommendations = (): ChargerRecommendation[] => {
    const ev = answers[0];
    const budget = answers[1];
    const speed = answers[2];
    const panel = answers[3];
    const distance = answers[4];
    const priority = answers[5];

    const recommendations: ChargerRecommendation[] = [];

    // Tesla-specific recommendations
    if (ev === "tesla" && priority === "tesla-features") {
      recommendations.push({
        name: "Tesla Wall Connector (Gen 3)",
        brand: "Tesla",
        price: "$475",
        power: "48A / 11.5 kW",
        features: ["WiFi enabled", "Auto-sensing handle", "18-44 miles/hour", "Tesla app integration", "Weather-resistant"],
        whyPerfect: "You drive a Tesla and want native Tesla features. The Wall Connector integrates perfectly with your Tesla app, offers auto-sensing power delivery, and delivers up to 44 miles/hour of charge.",
        installation: budget === "budget" ? "$700–$1,200" : "$900–$1,500",
        totalCost: budget === "budget" ? "$1,175–$1,675" : "$1,375–$1,975",
        buyLink: "https://www.tesla.com/support/charging/home-charging-installation/wall-connector",
        pros: [
          "Seamless Tesla app integration",
          "Auto-sensing power (no manual configuration)",
          "Sleek design matches Tesla aesthetic",
          "Can share power across multiple Wall Connectors",
        ],
        cons: [
          "Tesla-only (won't work with other EVs)",
          "More expensive than universal chargers",
          "Requires professional installation (hardwired only)",
        ],
      });
    }

    // Budget-conscious + any EV
    if (budget === "budget" || priority === "cheap") {
      recommendations.push({
        name: "Grizzl-E Classic",
        brand: "Grizzl-E",
        price: "$399",
        power: "40A / 9.6 kW",
        features: ["40A continuous", "30 miles/hour", "Outdoor rated", "NEMA 14-50 or hardwired", "Made in Canada"],
        whyPerfect: "You want maximum value. The Grizzl-E Classic is one of the most affordable Level 2 chargers with excellent build quality, weather resistance, and reliability.",
        installation: distance === "near" ? "$400–$800" : "$700–$1,200",
        totalCost: distance === "near" ? "$799–$1,199" : "$1,099–$1,599",
        buyLink: "https://grizzl-e.com/product/grizzl-e-classic/",
        pros: [
          "Best price-to-performance ratio",
          "Extremely durable (designed for Canadian winters)",
          "Works with all EVs (universal J1772)",
          "Can be plug-in (NEMA 14-50) or hardwired",
        ],
        cons: [
          "No WiFi or smart features",
          "Basic design (not the prettiest)",
          "No mobile app for monitoring",
        ],
      });
    }

    // Smart features priority
    if (priority === "smart" || budget === "premium" || budget === "luxury") {
      recommendations.push({
        name: "ChargePoint Home Flex",
        brand: "ChargePoint",
        price: "$699",
        power: "50A / 12 kW",
        features: ["WiFi + app", "50A max", "37 miles/hour", "Scheduling", "Energy tracking", "Voice control (Alexa)"],
        whyPerfect: "You want smart charging. The ChargePoint Home Flex has the best mobile app, lets you schedule charging for Austin Energy's off-peak rates, and tracks energy usage to calculate your savings.",
        installation: distance === "near" ? "$600–$1,000" : "$900–$1,500",
        totalCost: distance === "near" ? "$1,299–$1,699" : "$1,599–$2,199",
        buyLink: "https://www.chargepoint.com/drivers/home/chargepoint-home-flex/",
        pros: [
          "Best mobile app in the industry",
          "Schedule charging for off-peak rates (saves $$$)",
          "Track energy usage and costs",
          "Alexa voice control",
          "Can set charging reminders",
        ],
        cons: [
          "More expensive than non-smart chargers",
          "Requires WiFi connection",
          "Subscription for advanced features (optional)",
        ],
      });
    }

    // Fast charging priority
    if (speed === "fast" || speed === "max") {
      recommendations.push({
        name: "JuiceBox 48",
        brand: "Enel X",
        price: "$639",
        power: "48A / 11.5 kW",
        features: ["WiFi enabled", "48A output", "40 miles/hour", "Mobile app", "Voice control", "Alexa/Google Home"],
        whyPerfect: "You want fast charging with smart features. The JuiceBox 48 delivers up to 40 miles/hour and has excellent smart charging capabilities for Austin Energy time-of-use optimization.",
        installation: distance === "near" ? "$700–$1,100" : "$1,000–$1,600",
        totalCost: distance === "near" ? "$1,339–$1,739" : "$1,639–$2,239",
        buyLink: "https://evcharging.enelx.com/products/juicebox-48",
        pros: [
          "Fast 48A charging (40 mi/hr)",
          "Excellent mobile app with scheduling",
          "Voice control (Alexa & Google)",
          "Long 25-foot cable",
        ],
        cons: [
          "Discontinued by Enel X (still supported)",
          "Availability may be limited",
          "App requires account creation",
        ],
      });
    }

    // Outdoor / weather resistance priority
    if (priority === "outdoor") {
      recommendations.push({
        name: "Emporia EV Charger",
        brand: "Emporia",
        price: "$429",
        power: "48A / 11.5 kW",
        features: ["WiFi enabled", "48A output", "40 miles/hour", "Energy monitoring", "NEMA 3R rated", "Solar integration"],
        whyPerfect: "You're installing outdoors and want weather resistance. The Emporia is NEMA 3R rated for outdoor use, handles Austin heat well, and offers solar integration if you have panels.",
        installation: distance === "near" ? "$500–$900" : "$800–$1,400",
        totalCost: distance === "near" ? "$929–$1,329" : "$1,229–$1,829",
        buyLink: "https://www.emporiaenergy.com/emporia-ev-charger",
        pros: [
          "Weather-resistant (NEMA 3R rated)",
          "Solar integration for off-grid charging",
          "Great mobile app with energy tracking",
          "Affordable price for smart charger",
        ],
        cons: [
          "Newer brand (less track record)",
          "Some users report WiFi connectivity issues",
          "Shorter warranty than competitors",
        ],
      });
    }

    // Portable / renter priority
    if (priority === "portable" || panel === "unsure") {
      recommendations.push({
        name: "MUSTART Level 2 Portable",
        brand: "MUSTART",
        price: "$329",
        power: "32A / 7.7 kW",
        features: ["Portable", "NEMA 14-50 plug", "25 miles/hour", "Adjustable amperage", "Weatherproof", "Compact"],
        whyPerfect: "You rent or might move soon. This portable charger plugs into a NEMA 14-50 outlet (like an RV plug) and can be easily unplugged and taken with you. Lower installation cost since you can use an existing outlet or have an electrician install a simple outlet instead of hardwired charger.",
        installation: distance === "near" ? "$300–$600" : "$500–$900",
        totalCost: distance === "near" ? "$629–$929" : "$829–$1,229",
        buyLink: "https://www.amazon.com/dp/B07VHYVR8N",
        pros: [
          "Take it with you when you move",
          "Plug-in (no hardwiring required)",
          "Lower installation cost (just outlet)",
          "Can use at RV parks / friend's houses",
        ],
        cons: [
          "Slower than hardwired chargers (32A max)",
          "No smart features or WiFi",
          "Must unplug if you need the outlet for other things",
        ],
      });
    }

    // Panel upgrade needed
    if (panel === "no-upgrade") {
      recommendations.push({
        name: "Grizzl-E Classic (16A Version)",
        brand: "Grizzl-E",
        price: "$379",
        power: "16A / 3.8 kW",
        features: ["16A continuous", "12 miles/hour", "Outdoor rated", "Works on 100A panel", "Universal J1772"],
        whyPerfect: "You have a 100A or 150A panel and can't upgrade right now. This 16A version of the Grizzl-E works on smaller panels and still provides reliable overnight charging (12 miles/hour = ~100 miles in 8 hours).",
        installation: distance === "near" ? "$400–$700" : "$600–$1,000",
        totalCost: distance === "near" ? "$779–$1,079" : "$979–$1,379",
        buyLink: "https://grizzl-e.com/product/grizzl-e-classic/",
        pros: [
          "Works on 100A panels (no expensive upgrade)",
          "Still charges overnight (12 mi/hr)",
          "Very affordable",
          "Extremely durable",
        ],
        cons: [
          "Slow charging (not ideal for urgent top-ups)",
          "No smart features",
          "May need panel upgrade eventually",
        ],
      });
    }

    // Ford F-150 Lightning specific (needs high power)
    if (ev === "ford" && (speed === "fast" || speed === "max")) {
      recommendations.push({
        name: "Ford Charge Station Pro",
        brand: "Ford",
        price: "$1,310",
        power: "80A / 19.2 kW",
        features: ["80A max", "30 miles/hour", "FordPass integration", "Intelligent Backup Power", "Home integration"],
        whyPerfect: "You have an F-150 Lightning and want maximum charging speed plus home backup power. The Charge Station Pro is the only charger that enables Intelligent Backup Power (powering your home from the truck).",
        installation: distance === "near" ? "$1,200–$2,000" : "$1,800–$3,000",
        totalCost: distance === "near" ? "$2,510–$3,310" : "$3,110–$4,310",
        buyLink: "https://www.ford.com/support/how-tos/electric-vehicles/charging/ford-charge-station-pro/",
        pros: [
          "Enables home backup power from Lightning",
          "Fastest charging (80A)",
          "FordPass app integration",
          "Future-proof for home energy management",
        ],
        cons: [
          "Expensive (charger + installation)",
          "Ford-specific (won't work optimally with other EVs)",
          "Requires 200A panel minimum",
          "Backup power requires additional equipment",
        ],
      });
    }

    // Default fallback: if no recommendations yet, add a well-rounded option
    if (recommendations.length === 0) {
      recommendations.push({
        name: "ClipperCreek HCS-50",
        brand: "ClipperCreek",
        price: "$659",
        power: "40A / 9.6 kW",
        features: ["40A output", "30 miles/hour", "Made in USA", "UL listed", "3-year warranty", "Plug-in or hardwired"],
        whyPerfect: "You want a reliable, no-frills charger from a trusted American brand. ClipperCreek has been making EV chargers since 2006 and has an excellent reputation for durability and customer service.",
        installation: distance === "near" ? "$500–$900" : "$800–$1,400",
        totalCost: distance === "near" ? "$1,159–$1,559" : "$1,459–$2,059",
        buyLink: "https://www.clippercreek.com/store/residential/hcs-50-hcs-50p/",
        pros: [
          "Made in USA (quality control)",
          "Simple, reliable (no complex electronics to fail)",
          "3-year warranty (best in industry)",
          "Works with all EVs",
        ],
        cons: [
          "No WiFi or smart features",
          "Basic design",
          "Higher price than Grizzl-E for similar features",
        ],
      });
    }

    return recommendations.slice(0, 3); // Return top 3 recommendations
  };

  const progressPercent = ((step + 1) / quizSteps.length) * 100;

  if (showResults) {
    const recommendations = getRecommendations();

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Results Header */}
        <section className="bg-ev-dark py-12">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-ev-green/20 px-4 py-1.5 text-sm font-semibold text-ev-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Quiz Complete!
            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Your Perfect EV Charger Matches</h1>
            <p className="mt-3 text-lg text-gray-300">
              Based on your answers, here are the best chargers for your situation:
            </p>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {recommendations.map((rec, i) => (
                <div
                  key={rec.name}
                  className={`overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-md ${
                    i === 0 ? "border-ev-green ring-2 ring-ev-green/20" : "border-gray-200"
                  }`}
                >
                  {i === 0 && (
                    <div className="bg-ev-green px-4 py-2 text-center text-sm font-bold text-white">
                      🏆 TOP RECOMMENDATION FOR YOU
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ev-dark text-sm font-bold text-white">
                            {i + 1}
                          </span>
                          <h2 className="text-2xl font-bold text-gray-900">{rec.name}</h2>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{rec.brand}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-3xl font-extrabold text-ev-green">{rec.price}</p>
                        <p className="text-sm text-gray-500">+ installation</p>
                      </div>
                    </div>

                    {/* Why Perfect */}
                    <div className="mt-6 rounded-lg bg-ev-green/5 p-4">
                      <p className="text-sm font-semibold text-ev-dark">
                        <span className="text-ev-green">Why this is perfect for you:</span> {rec.whyPerfect}
                      </p>
                    </div>

                    {/* Specs Grid */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Power Output</p>
                        <p className="mt-1 text-lg font-bold text-gray-900">{rec.power}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                          Installation Cost
                        </p>
                        <p className="mt-1 text-lg font-bold text-gray-900">{rec.installation}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                          Total Cost (Charger + Install)
                        </p>
                        <p className="mt-1 text-lg font-bold text-ev-green">{rec.totalCost}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Key Features</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {rec.features.map((feat) => (
                          <span
                            key={feat}
                            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Pros</p>
                        <ul className="space-y-1">
                          {rec.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="mt-0.5 text-green-500">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Cons</p>
                        <ul className="space-y-1">
                          {rec.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="mt-0.5 text-gray-400">✗</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/get-quote"
                        className="flex-1 rounded-lg bg-ev-green px-6 py-3 text-center font-bold text-white transition hover:bg-ev-green-dark"
                      >
                        Get Installation Quote
                      </Link>
                      {rec.buyLink && (
                        <a
                          href={rec.buyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-gray-700 transition hover:border-gray-400"
                        >
                          View on Manufacturer Site →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Steps */}
            <div className="mt-12 rounded-xl bg-ev-dark p-8 text-white">
              <h3 className="text-2xl font-bold">Next Steps: Getting Your Charger Installed</h3>
              <ol className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ev-green font-bold">
                    1
                  </span>
                  <div>
                    <p className="font-semibold">Order your charger</p>
                    <p className="mt-1 text-sm text-gray-300">
                      Purchase from the manufacturer or Amazon. Most ship within 3–5 business days.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ev-green font-bold">
                    2
                  </span>
                  <div>
                    <p className="font-semibold">Get installation quotes</p>
                    <p className="mt-1 text-sm text-gray-300">
                      Contact 2–3 Austin installers for quotes. They'll assess your panel and give exact pricing.
                    </p>
                    <Link
                      href="/get-quote"
                      className="mt-2 inline-block text-sm font-semibold text-ev-green underline"
                    >
                      Get free quotes from Austin installers →
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ev-green font-bold">
                    3
                  </span>
                  <div>
                    <p className="font-semibold">Schedule installation</p>
                    <p className="mt-1 text-sm text-gray-300">
                      Most Austin installers can complete the work in 4–6 hours. They'll handle permits and inspection.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ev-green font-bold">
                    4
                  </span>
                  <div>
                    <p className="font-semibold">Apply for rebates</p>
                    <p className="mt-1 text-sm text-gray-300">
                      Austin Energy offers up to $1,200 in rebates. Submit after installation is complete.
                    </p>
                    <Link
                      href="/incentives"
                      className="mt-2 inline-block text-sm font-semibold text-ev-green underline"
                    >
                      See all available rebates →
                    </Link>
                  </div>
                </li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={handleRestart}
                className="rounded-lg border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:border-gray-400"
              >
                ← Retake Quiz
              </button>
              <Link
                href="/installers"
                className="rounded-lg border border-gray-300 px-8 py-3 text-center font-semibold text-gray-700 transition hover:border-gray-400"
              >
                Browse All Austin Installers
              </Link>
              <Link
                href="/cost-calculator"
                className="rounded-lg bg-ev-green px-8 py-3 text-center font-bold text-white transition hover:bg-ev-green-dark"
              >
                Calculate Total Cost
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const currentStep = quizSteps[step];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="text-sm font-semibold text-gray-600 transition hover:text-gray-900 disabled:opacity-30"
            >
              ← Back
            </button>
            <div className="flex-1 px-4">
              <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full bg-ev-green transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-600">
              {step + 1} / {quizSteps.length}
            </p>
          </div>
        </div>
      </div>

      {/* Question */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{currentStep.question}</h1>
            {currentStep.subtitle && <p className="mt-3 text-lg text-gray-600">{currentStep.subtitle}</p>}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {currentStep.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-6 text-left transition hover:border-ev-green hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  {option.icon && <span className="text-3xl">{option.icon}</span>}
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-ev-green">
                    {option.label}
                  </span>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 transition group-hover:text-ev-green">
                  →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
