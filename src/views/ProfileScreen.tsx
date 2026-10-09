'use client';

import React, { useState } from 'react';

interface ProfileScreenProps {
  onNavigateToWishlist: () => void;
  onNavigateToShop: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onNavigateToWishlist,
  onNavigateToShop,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'atelier'>('profile');
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  return (
    <main className="pt-24 pb-36 px-6 max-w-screen-xl mx-auto">
      {/* Header */}
      <header className="mb-14">
        <p className="font-label text-[0.6875rem] uppercase tracking-[0.25em] text-outline mb-3">
          Maison Lumière Private Suite
        </p>
        <h2 className="font-headline text-5xl md:text-6xl italic leading-tight font-light">
          Client Profile
        </h2>
      </header>

      {/* Profile Overview Card */}
      <div className="bg-white border border-black/10 p-8 mb-12 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">
            Private Client Tier • L'Héritage
          </span>
          <h3 className="font-headline text-3xl mt-1">Eleanor Vance</h3>
          <p className="font-body text-xs text-on-surface-variant mt-1">
            e.vance@atelier-curated.com · Member since Autumn 2023
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onNavigateToWishlist}
            className="border border-black px-6 py-3 font-label text-xs uppercase tracking-widest hover:bg-black/5 transition-colors"
          >
            Saved Archives
          </button>
          <button
            onClick={onNavigateToShop}
            className="bg-primary text-white px-6 py-3 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Runway
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-black/10 mb-8 space-x-8 font-label text-xs uppercase tracking-widest">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 transition-colors ${
            activeTab === 'profile'
              ? 'border-b-2 border-black font-semibold text-black'
              : 'text-outline hover:text-black'
          }`}
        >
          Measurements & Atelier
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`pb-3 transition-colors ${
            activeTab === 'orders'
              ? 'border-b-2 border-black font-semibold text-black'
              : 'text-outline hover:text-black'
          }`}
        >
          Acquisition History (2)
        </button>
        <button
          onClick={() => setActiveTab('atelier')}
          className={`pb-3 transition-colors ${
            activeTab === 'atelier'
              ? 'border-b-2 border-black font-semibold text-black'
              : 'text-outline hover:text-black'
          }`}
        >
          Concierge & Appointments
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="font-headline text-2xl">Atelier Measurements</h4>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Your bespoke sizing profile is referenced by our Milan and Paris pattern-makers to guarantee precision fit for made-to-order garments.
            </p>
            <div className="bg-surface-container-low p-6 divide-y divide-black/10 font-label text-xs">
              <div className="flex justify-between py-3">
                <span className="text-outline uppercase tracking-wider text-[11px]">Primary Size</span>
                <span className="font-semibold">S (EU 36 / US 4)</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-outline uppercase tracking-wider text-[11px]">Bust</span>
                <span className="font-semibold">86 cm</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-outline uppercase tracking-wider text-[11px]">Waist</span>
                <span className="font-semibold">66 cm</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-outline uppercase tracking-wider text-[11px]">Hips</span>
                <span className="font-semibold">92 cm</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-outline uppercase tracking-wider text-[11px]">Footwear</span>
                <span className="font-semibold">EU 38 / IT 38</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-2xl">Primary Delivery Residence</h4>
            <div className="bg-white border border-black/10 p-6 space-y-3 font-label text-xs">
              <span className="text-[10px] uppercase tracking-widest text-outline">Default Address</span>
              <p className="font-semibold text-sm">740 Park Avenue, Apt 11B</p>
              <p className="text-on-surface-variant">New York, NY 10021, United States</p>
              <p className="text-on-surface-variant">Special Instruction: White-glove concierge signature required</p>
            </div>

            <h4 className="font-headline text-2xl pt-4">Curated Preferences</h4>
            <div className="space-y-2 text-xs font-label">
              <div className="flex items-center justify-between p-3 bg-white border border-black/10">
                <span>Receive Hand-Bound Seasonal Lookbooks</span>
                <span className="text-emerald-700 font-bold uppercase text-[10px]">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white border border-black/10">
                <span>Private Preview Invitations (Paris / Milan)</span>
                <span className="text-emerald-700 font-bold uppercase text-[10px]">Active</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="space-y-6">
          <div className="bg-white border border-black/10 p-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-black/10 pb-4 mb-4 gap-2">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                  Order LM-948102 · Delivered March 18
                </p>
                <h4 className="font-headline text-xl">The Winter Anthology Acquisition</h4>
              </div>
              <span className="font-label text-xs uppercase tracking-wider text-emerald-800 font-semibold">
                Delivered by Courier
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-20 bg-surface-dim overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApYsvpdRsRuz-CYxlD8bddEP4LDufTAE72JrWLoyMcwX9qz0pmIGHJKxjb4zOio8USQ_HAfaU8tBrxAqI1rdXVhLN1Ac6zZSoyyjTx_ScDvX1IuiGKpKEPewHuDPPi63JxY4U1RgoUEDloXbH9iv6IpdmFUoKruL1--M6NUud8DydhJ15Y8SOwDAaV0BFZZT_tQFxMJIVfil-2ege9S1BUC2pamtu06b7PhYYP4gOTVTIk_f_hQFkRJTxWHNOjNWTnMl6f9Usc8Gk"
                  alt="Archival Trench"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-headline text-base">The Archival Trench</p>
                <p className="font-label text-xs text-outline">Size: S · 100% Virgin Wool</p>
                <p className="font-label text-xs font-semibold tabular-nums mt-1">$1,240.00</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/10 p-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-black/10 pb-4 mb-4 gap-2">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                  Order LM-812034 · Delivered January 12
                </p>
                <h4 className="font-headline text-xl">Accessories Archive</h4>
              </div>
              <span className="font-label text-xs uppercase tracking-wider text-emerald-800 font-semibold">
                Delivered by Courier
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-20 bg-surface-dim overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfCXnEoxSjm1vprDCZIO6xHGH4yyRMrAWoA0tdrYH1frMCHvrGY4V-ZZhXqiSM9kCn3qSQUvmnHioppH0PYXbG3rbYfkPaHKcsn3ZR8ql8d0e1YRexykhOPPIDOFMizI-KMK1spqGVVokHHgaEDlkdYqWOqoLb96JprRCRYp01BQC4GcvojMubvOv8ciX0N9Vo7njV3GrCND80HH79hmAixUYDGere_37Ohx0hXD0yf5GGXhDnx5AZSPTVgVvJfIiFRoudsiRMvAA"
                  alt="Archive Clutch"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-headline text-base">Archive Clutch</p>
                <p className="font-label text-xs text-outline">Fine Palmellato Calfskin</p>
                <p className="font-label text-xs font-semibold tabular-nums mt-1">$890.00</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'atelier' && (
        <div className="max-w-2xl bg-white border border-black/10 p-8 space-y-6">
          <h4 className="font-headline text-2xl">Private Styling & Atelier Consultation</h4>
          <p className="font-body text-xs text-on-surface-variant leading-relaxed">
            Reserve a dedicated one-on-one private preview with our Senior Atelier Curator in Paris (Place Vendôme), Milan (Via Montenapoleone), or via private video link.
          </p>

          {appointmentBooked ? (
            <div className="p-6 bg-surface-container-low border border-emerald-600/30 text-center space-y-2">
              <span className="material-symbols-outlined text-3xl text-emerald-700">check_circle</span>
              <h5 className="font-headline text-xl">Consultation Confirmed</h5>
              <p className="font-body text-xs text-on-surface-variant">
                Your Atelier Director will contact you via e.vance@atelier-curated.com with tailored look selections.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAppointmentBooked(true);
              }}
              className="space-y-4 font-label text-xs"
            >
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-outline mb-1">
                  Preferred Maison Location
                </label>
                <select className="w-full p-3 bg-surface-container border border-black/10 focus:outline-none">
                  <option>Paris Salon · Place Vendôme</option>
                  <option>Milan Atelier · Via Montenapoleone</option>
                  <option>New York Salon · Madison Avenue</option>
                  <option>Virtual Private Showcase (Direct Video)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-outline mb-1">
                  Collection Focus
                </label>
                <select className="w-full p-3 bg-surface-container border border-black/10 focus:outline-none">
                  <option>Collection 004 / L'Essence (Runway Pieces)</option>
                  <option>Bespoke Silk & Outerwear Tailoring</option>
                  <option>Private Archival Acquisitions</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-4 px-8 uppercase tracking-widest text-xs hover:bg-neutral-800 transition-colors w-full"
              >
                Request Private Appointment
              </button>
            </form>
          )}
        </div>
      )}
    </main>
  );
};
