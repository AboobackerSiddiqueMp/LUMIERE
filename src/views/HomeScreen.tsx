'use client';

import React from 'react';
import { CATEGORIES } from '../data/products';
import { ScreenId } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectCategory: (category: string) => void;
  onOpenProduct: (productId: string) => void;
  onOpenFilter: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenProduct,
  onOpenFilter,
}) => {
  return (
    <main className="pt-16 pb-32">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img
          alt="Seasonal Editorial Collection"
          className="w-full h-full object-cover transition-transform duration-1000 scale-100 hover:scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhsDE-a4ChHKniOaaSNcJGPUiAdooTqSGn6fs5OmpH-pIThHIJWCHdhMMsW3NDq6O1MsCGlsibX93KZfnQmsKII5u1P6V1rGrn0cbJWU3bzLFDYaEkDTzK61-AtJhX0daktTP2p3VEEGsNsGI1jL0GTXj_Oo6g_Ic5V7Z8dPfTtmn8mbTQ60ezZUmB5bWeNAhKioDnbb2BOvxuHdMPIbymFzKG1Ll1gUbRL1p5QS03fyMngE3KuDmTpGXK9wbwSXQ9ieLQzbKN4vg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-24 text-center px-6">
          <p className="font-label text-xs uppercase tracking-[0.35em] text-white/80 mb-3">
            Autumn / Winter '24
          </p>
          <h2 className="font-headline text-5xl md:text-7xl text-white mb-8 leading-tight max-w-2xl font-light">
            The Winter <br /> Anthology
          </h2>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-primary text-white px-10 py-5 text-xs md:text-sm tracking-[0.25em] font-label uppercase hover:bg-neutral-800 transition-colors duration-300 shadow-xl cursor-pointer"
          >
            Shop the Look
          </button>
        </div>
      </section>

      {/* Category Carousel */}
      <section className="mt-20 px-6 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-2xl md:text-3xl">Collections</h3>
          <button
            onClick={() => {
              onSelectCategory('ALL');
              onNavigate('shop');
            }}
            className="font-label text-xs tracking-widest border-b border-primary pb-1 uppercase hover:opacity-60 transition-opacity"
          >
            View All
          </button>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-8 md:gap-12 pb-4">
          {CATEGORIES.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                onSelectCategory(category.name);
                onNavigate('shop');
              }}
              className="flex flex-col items-center flex-shrink-0 group cursor-pointer focus:outline-none"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border border-black/10 p-1 mb-4 group-hover:border-black transition-colors">
                <img
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  src={category.image}
                />
              </div>
              <span className="font-label text-xs tracking-widest uppercase group-hover:font-semibold transition-all">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Editorial Grid */}
      <section className="mt-24 px-6 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
        <div className="col-span-12 mb-2">
          <h3 className="font-label text-[10px] tracking-[0.4em] text-outline uppercase">
            Issue No. 04 — Essentialism
          </h3>
        </div>

        {/* Editorial Item 1 */}
        <div
          onClick={() => onOpenProduct('monolith-coat')}
          className="md:col-span-7 group cursor-pointer"
        >
          <div className="bg-surface-container-lowest h-[400px] md:h-[480px] w-full overflow-hidden">
            <img
              alt="The Monolith Coat"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjT8Yi2sesfMugzSPwC2ObE0tGGPcdSRc-qH5uSTeIwN9n7fN-C9Kww-kbi0cAEK0Swc2vufkOyFs800ecT0kAQcD5_r_7W-076YQZ-Cp6fMb9So3fOpUkq_Sc1445QxNR6oCn6V6yf5ZOorFaQjDvXeCIiQxuzWFVYilA-ge7QA2b1-M7eARcfDTGnngddVpTQPuG-STk8NvmpQi57GNLAgNAnZkFrgX8UOzS9ljZOKlOFbI264Jf7yf-jXE2fTDNjN5Hpi4t98k"
            />
          </div>
          <div className="mt-6">
            <h4 className="font-headline text-2xl mb-2 group-hover:underline">The Monolith Coat</h4>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-md">
              Structural integrity meets raw silk. A study in architectural volume for the modern nomad.
            </p>
          </div>
        </div>

        {/* Editorial Item 2 */}
        <div
          onClick={() => onOpenProduct('fluid-silk-slip-dress')}
          className="md:col-span-4 md:col-start-9 md:pt-20 group cursor-pointer"
        >
          <div className="bg-surface-container-lowest h-[300px] md:h-[360px] w-full overflow-hidden">
            <img
              alt="Editorial Botanical Detail"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3qwjL2PuB2ZO_9Bh-m0J3PSRBVhmxsw-Xlhfzb57zurw9NZbsHXwrpaDtxPzij28CCUTaF7j2hIj-tScbOY9oSZRoKo47Go6clWeidbYUf7Tu5g3_lCd-mKioWqdZ2oUkiSVX1RZTxl9WKj-AJqmIWwLTCv9n5g_Ypzr10XitLOwAu-ugwJ_pZvrQqkamydJitPn5ZHbPRNOKCroUI9jsguKBrrnpZoebRRhjHpM7NY3MLTRDORDmEyZO-SG9I-YaHcsr-zga17c"
            />
          </div>
          <div className="mt-6">
            <span className="font-label text-[10px] tracking-widest text-primary border-b border-primary pb-1 group-hover:opacity-60 transition-opacity">
              DISCOVER
            </span>
          </div>
        </div>
      </section>

      {/* Quote / Brand Statement */}
      <section className="my-32 px-6 text-center max-w-2xl mx-auto">
        <p className="font-headline italic text-2xl md:text-3xl leading-relaxed text-on-surface/90">
          "Fashion is the most powerful art we have. It is how we present our souls to the world."
        </p>
        <div className="h-16 w-px bg-outline-variant mx-auto mt-12 opacity-40"></div>
      </section>

      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-24 right-6 z-30">
        <button
          onClick={onOpenFilter}
          className="w-14 h-14 bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Filter Collection"
        >
          <span className="material-symbols-outlined text-2xl">filter_list</span>
        </button>
      </div>
    </main>
  );
};
