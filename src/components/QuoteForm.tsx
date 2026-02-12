"use client";

import { useState } from "react";

interface QuoteFormProps {
  compact?: boolean;
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      chargerType: (form.elements.namedItem("chargerType") as HTMLSelectElement).value,
      homeType: (form.elements.namedItem("homeType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-ev-green/30 bg-ev-green/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ev-green">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Quote Request Received!</h3>
        <p className="mt-2 text-gray-600">We&apos;ll get back to you within 24 hours with a personalized estimate for your EV charger installation in Austin.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
            placeholder="(512) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
            placeholder="123 Main St, Austin, TX"
          />
        </div>
        <div>
          <label htmlFor="chargerType" className="mb-1 block text-sm font-medium text-gray-700">
            Charger Type
          </label>
          <select
            id="chargerType"
            name="chargerType"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
          >
            <option value="">Select charger type</option>
            <option value="level1">Level 1 (120V)</option>
            <option value="level2">Level 2 (240V)</option>
            <option value="level3">Level 3 (DC Fast)</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="homeType" className="mb-1 block text-sm font-medium text-gray-700">
            Home Type
          </label>
          <select
            id="homeType"
            name="homeType"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
          >
            <option value="">Select home type</option>
            <option value="single-family">Single Family Home</option>
            <option value="townhouse">Townhouse</option>
            <option value="condo">Condo/Apartment</option>
            <option value="commercial">Commercial Property</option>
          </select>
        </div>
      </div>
      {!compact && (
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition focus:border-ev-green focus:ring-2 focus:ring-ev-green/20 focus:outline-none"
            placeholder="Tell us about your EV, garage setup, or any questions..."
          />
        </div>
      )}
      {compact && <input type="hidden" name="message" value="" />}

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-ev-green px-6 py-4 text-lg font-bold text-white transition hover:bg-ev-green-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get Your Free Quote"}
      </button>
      <p className="text-center text-xs text-gray-500">
        Free estimates &bull; No obligation &bull; Response within 24 hours
      </p>
    </form>
  );
}
