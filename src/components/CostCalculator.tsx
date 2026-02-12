"use client";

import { useState } from "react";
import Link from "next/link";

interface Estimate {
  low: number;
  high: number;
  breakdown: { label: string; low: number; high: number }[];
}

function calculateCost(
  chargerLevel: string,
  homeType: string,
  panelStatus: string,
  panelDistance: string
): Estimate {
  const breakdown: { label: string; low: number; high: number }[] = [];

  // Charger hardware cost
  let hwLow = 0, hwHigh = 0;
  if (chargerLevel === "level1") { hwLow = 100; hwHigh = 300; }
  else if (chargerLevel === "level2") { hwLow = 400; hwHigh = 1200; }
  else { hwLow = 15000; hwHigh = 40000; }
  breakdown.push({ label: "Charger Hardware", low: hwLow, high: hwHigh });

  // Installation labor
  let labLow = 0, labHigh = 0;
  if (chargerLevel === "level1") { labLow = 100; labHigh = 200; }
  else if (chargerLevel === "level2") { labLow = 500; labHigh = 1200; }
  else { labLow = 5000; labHigh = 15000; }
  breakdown.push({ label: "Installation Labor", low: labLow, high: labHigh });

  // Panel upgrade
  let panLow = 0, panHigh = 0;
  if (panelStatus === "needs-upgrade") {
    panLow = 1500; panHigh = 3000;
    breakdown.push({ label: "Panel Upgrade", low: panLow, high: panHigh });
  } else if (panelStatus === "unsure") {
    panLow = 0; panHigh = 3000;
    breakdown.push({ label: "Panel Upgrade (if needed)", low: panLow, high: panHigh });
  }

  // Distance wiring
  let distLow = 0, distHigh = 0;
  if (panelDistance === "10-25") { distLow = 200; distHigh = 500; }
  else if (panelDistance === "25-50") { distLow = 500; distHigh = 1200; }
  else if (panelDistance === "50+") { distLow = 1200; distHigh = 2500; }
  if (distLow > 0) {
    breakdown.push({ label: "Extended Wiring", low: distLow, high: distHigh });
  }

  // Home type modifier
  let modLow = 0, modHigh = 0;
  if (homeType === "townhouse") { modLow = 200; modHigh = 500; }
  else if (homeType === "condo") { modLow = 500; modHigh = 1500; }
  if (modLow > 0) {
    breakdown.push({ label: "Property Complexity", low: modLow, high: modHigh });
  }

  // Permit
  if (chargerLevel !== "level1") {
    breakdown.push({ label: "Austin Permits & Inspection", low: 100, high: 300 });
  }

  const totalLow = breakdown.reduce((s, b) => s + b.low, 0);
  const totalHigh = breakdown.reduce((s, b) => s + b.high, 0);

  return { low: totalLow, high: totalHigh, breakdown };
}

export default function CostCalculator() {
  const [chargerLevel, setChargerLevel] = useState("level2");
  const [homeType, setHomeType] = useState("single-family");
  const [panelStatus, setPanelStatus] = useState("adequate");
  const [panelDistance, setPanelDistance] = useState("0-10");
  const [showResult, setShowResult] = useState(false);

  const estimate = calculateCost(chargerLevel, homeType, panelStatus, panelDistance);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form side */}
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Charger Level</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "level1", label: "Level 1", desc: "120V Standard" },
              { value: "level2", label: "Level 2", desc: "240V Fast" },
              { value: "level3", label: "Level 3", desc: "DC Fast" },
            ].map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { setChargerLevel(opt.value); setShowResult(false); }}
                className={`rounded-lg border-2 p-4 text-center transition ${
                  chargerLevel === opt.value
                    ? "border-ev-green bg-ev-green/5 text-ev-green"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <div className="text-sm font-bold">{opt.label}</div>
                <div className="text-xs text-gray-500">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Home Type</label>
          <select
            value={homeType}
            onChange={(e) => { setHomeType(e.target.value); setShowResult(false); }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
          >
            <option value="single-family">Single Family Home</option>
            <option value="townhouse">Townhouse</option>
            <option value="condo">Condo / Apartment</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">Electrical Panel Status</label>
          <select
            value={panelStatus}
            onChange={(e) => { setPanelStatus(e.target.value); setShowResult(false); }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
          >
            <option value="adequate">200A Panel (No upgrade needed)</option>
            <option value="needs-upgrade">100A Panel (Likely needs upgrade)</option>
            <option value="unsure">I&apos;m not sure</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Distance from Electrical Panel to Charger Location
          </label>
          <select
            value={panelDistance}
            onChange={(e) => { setPanelDistance(e.target.value); setShowResult(false); }}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
          >
            <option value="0-10">Under 10 feet</option>
            <option value="10-25">10 - 25 feet</option>
            <option value="25-50">25 - 50 feet</option>
            <option value="50+">Over 50 feet</option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => setShowResult(true)}
          className="w-full rounded-lg bg-ev-green px-6 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark"
        >
          Calculate My Cost
        </button>
      </div>

      {/* Result side */}
      <div className={`rounded-2xl border p-8 transition-all ${showResult ? "border-ev-green bg-gray-50" : "border-gray-200 bg-gray-50"}`}>
        {showResult ? (
          <>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">Estimated Total Cost</p>
            <p className="mt-2 text-4xl font-extrabold text-gray-900">
              ${estimate.low.toLocaleString()} <span className="text-2xl text-gray-400">&ndash;</span> ${estimate.high.toLocaleString()}
            </p>
            <div className="mt-6 space-y-3">
              {estimate.breakdown.map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-sm text-gray-600">{item.label}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    ${item.low.toLocaleString()} &ndash; ${item.high.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              * Estimates are based on typical Austin, TX installations. Actual costs may vary based on site conditions.
            </p>
            <Link
              href="/get-quote"
              className="mt-6 block rounded-lg bg-ev-green px-6 py-4 text-center text-lg font-bold text-white transition hover:bg-ev-green-dark"
            >
              Get Your Exact Quote
            </Link>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-600">Your Estimate</h3>
            <p className="mt-1 text-sm text-gray-400">Configure your options and click &quot;Calculate My Cost&quot;</p>
          </div>
        )}
      </div>
    </div>
  );
}
