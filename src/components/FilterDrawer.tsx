'use client';

import React from 'react';
import { FilterOptions } from '../types';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onChangeFilters: (newFilters: FilterOptions) => void;
  onResetFilters: () => void;
  totalMatches: number;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onChangeFilters,
  onResetFilters,
  totalMatches,
}) => {
  if (!isOpen) return null;

  const categories = ['ALL', 'Dresses', 'Outerwear', 'Accessories', 'Footwear', 'Tailoring'];
  const sizes = ['ALL', 'XS', 'S', 'M', 'L'];
  const colors = ['ALL', 'MONO', 'CREAM', 'BROWN', 'GOLD'];
  const fabrics = ['ALL', 'SILK', 'WOOL', 'CANVAS', 'LEATHER', 'COTTON'];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-black/10 flex flex-col justify-between shadow-2xl p-6 sm:p-8">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-black/10">
              <div>
                <p className="font-label text-[10px] uppercase tracking-[0.25em] text-outline">
                  Curation Parameters
                </p>
                <h3 className="font-headline text-2xl italic">Filter & Refine</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-primary hover:opacity-60 transition-opacity"
                aria-label="Close Filter"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="py-6 space-y-8 overflow-y-auto max-h-[70vh]">
              {/* Category */}
              <div>
                <label className="block font-label text-[11px] uppercase tracking-widest text-outline mb-3">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => onChangeFilters({ ...filters, category: cat })}
                      className={`px-4 py-2 text-xs font-label uppercase tracking-wider transition-all ${
                        filters.category === cat
                          ? 'bg-primary text-white'
                          : 'bg-surface-container border border-black/10 hover:border-black'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <label className="block font-label text-[11px] uppercase tracking-widest text-outline mb-3">
                  Garment Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => onChangeFilters({ ...filters, size: s })}
                      className={`w-12 h-10 flex items-center justify-center text-xs font-label uppercase tracking-wider transition-all ${
                        filters.size === s
                          ? 'bg-primary text-white'
                          : 'bg-surface-container border border-black/10 hover:border-black'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <label className="block font-label text-[11px] uppercase tracking-widest text-outline mb-3">
                  Palette
                </label>
                <div className="flex flex-wrap gap-2">
                  {colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => onChangeFilters({ ...filters, color: c })}
                      className={`px-4 py-2 text-xs font-label uppercase tracking-wider transition-all ${
                        filters.color === c
                          ? 'bg-primary text-white'
                          : 'bg-surface-container border border-black/10 hover:border-black'
                      }`}
                    >
                      {c === 'MONO' && <span className="inline-block w-2.5 h-2.5 bg-black mr-2 align-middle" />}
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fabric */}
              <div>
                <label className="block font-label text-[11px] uppercase tracking-widest text-outline mb-3">
                  Material & Fabric
                </label>
                <div className="flex flex-wrap gap-2">
                  {fabrics.map((f) => (
                    <button
                      key={f}
                      onClick={() => onChangeFilters({ ...filters, fabric: f })}
                      className={`px-4 py-2 text-xs font-label uppercase tracking-wider transition-all ${
                        filters.fabric === f
                          ? 'bg-primary text-white'
                          : 'bg-surface-container border border-black/10 hover:border-black'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Order */}
              <div>
                <label className="block font-label text-[11px] uppercase tracking-widest text-outline mb-3">
                  Order by
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    onChangeFilters({
                      ...filters,
                      sortBy: e.target.value as FilterOptions['sortBy'],
                    })
                  }
                  className="w-full bg-surface-container border border-black/10 p-3 text-xs font-label uppercase tracking-wider focus:outline-none focus:border-black"
                >
                  <option value="featured">Curated Runway Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="pt-6 border-t border-black/10 flex items-center justify-between gap-4">
            <button
              onClick={onResetFilters}
              className="editorial-underline font-label text-xs uppercase tracking-widest text-outline hover:text-black"
            >
              Reset All
            </button>
            <button
              onClick={onClose}
              className="bg-primary text-white px-8 py-3.5 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Show {totalMatches} Item{totalMatches === 1 ? '' : 's'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
