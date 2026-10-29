'use client';

import { useState } from 'react';

const archetypes = [
  {
    id: 'ppp-urban',
    title: 'Integrated Urban PPP Cluster',
    description: 'Multi-crore Public-Private Partnership model with DBFOT concession, source-segregation logistics, and material recovery.',
    baseCapexPerTon: 0.28,
    baseOpexPerTon: 0.042,
    diversionEfficiency: 0.88,
    peoplePerTon: 6200,
  },
  {
    id: 'tier2-smart',
    title: 'Tier-2 Smart City Hub',
    description: 'Modular bio-methanation and dry waste processing framework tailored for state municipal statutory compliance.',
    baseCapexPerTon: 0.22,
    baseOpexPerTon: 0.035,
    diversionEfficiency: 0.82,
    peoplePerTon: 5800,
  },
  {
    id: 'industrial-circular',
    title: 'Industrial Circular Decarbonization',
    description: 'Corporate Scope-1 & Scope-2 emissions mitigation, zero liquid discharge, and Mission LiFE aligned industrial symbiosis.',
    baseCapexPerTon: 0.35,
    baseOpexPerTon: 0.051,
    diversionEfficiency: 0.94,
    peoplePerTon: 4500,
  },
];

export default function FeasibilityModel() {
  const [selectedArch, setSelectedArch] = useState(archetypes[0]);
  const [capacity, setCapacity] = useState(850);
  const [concessionYears, setConcessionYears] = useState(20);

  const projectedCapex = Math.round(capacity * selectedArch.baseCapexPerTon);
  const monthlySavingsLakhs = Math.round((capacity * selectedArch.baseOpexPerTon * 100) / 12 * 0.28);
  const populationImpacted = ((capacity * selectedArch.peoplePerTon) / 1000000).toFixed(1);
  const annualDiversionTons = Math.round(capacity * 365 * selectedArch.diversionEfficiency);
  const co2AvoidedTons = Math.round(annualDiversionTons * 0.72);

  return (
    <div className="tone-surface p-6 sm:p-10 my-8">
      <div className="max-w-3xl">
        <h3 className="text-2xl font-serif font-medium text-ink mb-3">
          Interactive Techno-Commercial Model
        </h3>
        <p className="text-base text-muted mb-8 leading-relaxed">
          Test infrastructure project viability, CAPEX sizing, and circular ESG metrics based on real PPP structuring frameworks.
        </p>

        {/* Archetype Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {archetypes.map((arch) => (
            <button
              key={arch.id}
              onClick={() => setSelectedArch(arch)}
              className={`text-left p-4 transition-colors ${
                selectedArch.id === arch.id
                  ? 'bg-ink text-white'
                  : 'bg-white text-ink hover:bg-neutral-100'
              }`}
            >
              <div className="font-medium text-base mb-1">{arch.title}</div>
              <div className={`text-sm leading-normal ${selectedArch.id === arch.id ? 'text-neutral-300' : 'text-muted'}`}>
                {arch.description}
              </div>
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="bg-white p-6 mb-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="capacity-range" className="text-base font-medium text-ink">
                Processing Capacity: <span className="font-semibold text-red-700">{capacity.toLocaleString()} TPD</span> (Tons Per Day)
              </label>
              <span className="text-sm text-muted">200 – 2,500 TPD</span>
            </div>
            <input
              id="capacity-range"
              type="range"
              min="200"
              max="2500"
              step="50"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-full h-3 bg-neutral-200 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="concession-range" className="text-base font-medium text-ink">
                Concession Period: <span className="font-semibold text-red-700">{concessionYears} Years</span>
              </label>
              <span className="text-sm text-muted">10 – 30 Years</span>
            </div>
            <input
              id="concession-range"
              type="range"
              min="10"
              max="30"
              step="5"
              value={concessionYears}
              onChange={(e) => setConcessionYears(Number(e.target.value))}
              className="w-full h-3 bg-neutral-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Calculated Metrics Grid - Values first, labels below (No eyebrows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white">
            <div className="text-3xl font-serif font-medium text-ink mb-1">₹{projectedCapex} Cr</div>
            <div className="text-base font-medium text-ink">Projected CAPEX</div>
            <div className="text-sm text-muted">Initial Capital Sizing</div>
          </div>
          <div className="p-5 bg-white">
            <div className="text-3xl font-serif font-medium text-red-700 mb-1">₹{monthlySavingsLakhs} L+</div>
            <div className="text-base font-medium text-ink">Monthly Optimization</div>
            <div className="text-sm text-muted">Recurring operational savings</div>
          </div>
          <div className="p-5 bg-white">
            <div className="text-3xl font-serif font-medium text-ink mb-1">{populationImpacted}M</div>
            <div className="text-base font-medium text-ink">Population Served</div>
            <div className="text-sm text-muted">Direct citizen footprint</div>
          </div>
          <div className="p-5 bg-white">
            <div className="text-3xl font-serif font-medium text-ink mb-1">{(co2AvoidedTons / 1000).toFixed(0)}k T/yr</div>
            <div className="text-base font-medium text-ink">Carbon Mitigation</div>
            <div className="text-sm text-muted">Direct CO₂e diversion</div>
          </div>
        </div>

        <div className="mt-6 text-sm text-muted">
          Framework modeled against MoEF&CC, CPCB, and CII National Circular Economy guidelines.
        </div>
      </div>
    </div>
  );
}
