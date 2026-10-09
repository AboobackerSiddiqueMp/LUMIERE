'use client';

import React from 'react';
import { FilterOptions, Product } from '../types';

interface ShopScreenProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onOpenProduct: (productId: string) => void;
  filters: FilterOptions;
  onOpenFilter: () => void;
  onChangeFilters: (newFilters: FilterOptions) => void;
}

export const ShopScreen: React.FC<ShopScreenProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenProduct,
  filters,
  onOpenFilter,
  onChangeFilters,
}) => {
  return (
    <main className="pt-24 pb-36 max-w-screen-xl mx-auto px-6">
      {/* Editorial Header */}
      <section className="mb-16">
        <p className="font-label text-[0.6875rem] uppercase tracking-[0.25rem] text-outline mb-4">
          Collection 004 / L'Essence
        </p>
        <h2 className="font-headline text-5xl md:text-7xl max-w-2xl leading-tight font-light">
          Quiet Elegance in Monochrome.
        </h2>
      </section>

      {/* Asymmetrical Product Grid matching Screen 3 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
        {products.map((item, index) => {
          const isWishlisted = wishlistIds.includes(item.id);

          // Asymmetric column widths according to reference layout
          let colSpanClass = 'md:col-span-6';
          let aspectClass = 'aspect-[4/5]';
          let offsetClass = '';

          if (index % 6 === 0) {
            colSpanClass = 'md:col-span-7';
            aspectClass = 'aspect-[4/5]';
          } else if (index % 6 === 1) {
            colSpanClass = 'md:col-span-5';
            aspectClass = 'aspect-square';
            offsetClass = 'md:mt-32';
          } else if (index % 6 === 2) {
            colSpanClass = 'md:col-span-4';
            aspectClass = 'aspect-[2/3]';
          } else if (index % 6 === 3) {
            colSpanClass = 'md:col-span-8';
            aspectClass = 'aspect-[16/9]';
            offsetClass = 'md:mt-16';
          } else if (index % 6 === 4) {
            colSpanClass = 'md:col-span-5';
            aspectClass = 'aspect-square';
          } else if (index % 6 === 5) {
            colSpanClass = 'md:col-span-7';
            aspectClass = 'aspect-[4/3]';
          }

          return (
            <div
              key={item.id}
              className={`${colSpanClass} ${offsetClass} group cursor-pointer`}
            >
              <div className="relative bg-surface-container-lowest overflow-hidden">
                <div
                  onClick={() => onOpenProduct(item.id)}
                  className={`w-full ${aspectClass} overflow-hidden`}
                >
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src={item.image}
                  />
                </div>

                {/* Wishlist toggle button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(item.id);
                  }}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md hover:bg-white transition-all shadow-sm z-10"
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                >
                  <span
                    className={`material-symbols-outlined text-xl transition-colors ${
                      isWishlisted ? 'text-black fill' : 'text-neutral-700'
                    }`}
                  >
                    favorite
                  </span>
                </button>
              </div>

              <div
                onClick={() => onOpenProduct(item.id)}
                className="mt-8 flex justify-between items-start"
              >
                <div>
                  <h3 className="font-headline text-2xl group-hover:underline">
                    {item.name}
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-outline mt-1">
                    {item.material || item.tagline}
                  </p>
                </div>
                <span className="font-body text-lg tabular-nums">
                  ${item.price.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination / Discover More */}
      <div className="mt-40 mb-16 flex flex-col items-center">
        <button
          onClick={onOpenFilter}
          className="px-12 py-5 bg-primary text-white font-label text-xs uppercase tracking-[0.3em] transition-all hover:bg-neutral-800 shadow-md cursor-pointer"
        >
          Discover More
        </button>
      </div>

      {/* FAB: Filter Trigger */}
      <div className="fixed bottom-28 right-6 z-40">
        <button
          onClick={onOpenFilter}
          className="w-14 h-14 bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Open Filter Drawer"
        >
          <span className="material-symbols-outlined text-2xl">filter_list</span>
        </button>
      </div>

      {/* Sticky Sleek Filter Menu Bar */}
      <div className="fixed bottom-16 left-0 w-full z-30 bg-white/85 backdrop-blur-xl border-t border-black/10 px-6 py-3.5 flex items-center justify-between overflow-x-auto hide-scrollbar">
        <div className="flex items-center space-x-8">
          <button
            onClick={onOpenFilter}
            className="flex items-center space-x-2 text-left focus:outline-none"
          >
            <span className="font-label text-[0.6rem] uppercase tracking-widest text-outline">
              Size:
            </span>
            <span className="font-label text-xs font-bold">{filters.size}</span>
            <span className="material-symbols-outlined text-xs">expand_more</span>
          </button>

          <button
            onClick={onOpenFilter}
            className="flex items-center space-x-2 text-left focus:outline-none"
          >
            <span className="font-label text-[0.6rem] uppercase tracking-widest text-outline">
              Color:
            </span>
            <span className="w-2.5 h-2.5 bg-black inline-block"></span>
            <span className="font-label text-xs font-bold">{filters.color}</span>
            <span className="material-symbols-outlined text-xs">expand_more</span>
          </button>

          <button
            onClick={onOpenFilter}
            className="flex items-center space-x-2 text-left focus:outline-none"
          >
            <span className="font-label text-[0.6rem] uppercase tracking-widest text-outline">
              Fabric:
            </span>
            <span className="font-label text-xs font-bold">{filters.fabric}</span>
            <span className="material-symbols-outlined text-xs">expand_more</span>
          </button>
        </div>

        <div className="hidden md:block">
          <p className="font-label text-[0.6875rem] uppercase tracking-[0.2rem] text-primary">
            {products.length} Items Found
          </p>
        </div>
      </div>
    </main>
  );
};
