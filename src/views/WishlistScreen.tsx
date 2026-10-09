'use client';

import React from 'react';
import { Product } from '../types';

interface WishlistScreenProps {
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToBag: (product: Product) => void;
  onOpenProduct: (productId: string) => void;
  onLoadMore: () => void;
  hasMore: boolean;
  onNavigateToShop: () => void;
  onOpenFilter: () => void;
}

export const WishlistScreen: React.FC<WishlistScreenProps> = ({
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToBag,
  onOpenProduct,
  onLoadMore,
  hasMore,
  onNavigateToShop,
  onOpenFilter,
}) => {
  return (
    <main className="pt-24 pb-36 px-6 max-w-screen-xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <p className="font-label text-[0.6875rem] uppercase tracking-[0.25em] text-outline mb-4">
          Curated Selection
        </p>
        <h2 className="font-headline text-5xl md:text-6xl italic leading-tight font-light">
          Wishlist
        </h2>
      </header>

      {wishlistProducts.length === 0 ? (
        <div className="py-24 text-center max-w-md mx-auto">
          <span className="material-symbols-outlined text-5xl text-outline mb-4">
            favorite_border
          </span>
          <h3 className="font-headline text-2xl mb-3">Your Archive is Empty</h3>
          <p className="font-body text-xs text-on-surface-variant mb-8 leading-relaxed">
            Curate your private selection of monochrome runway statements from Collection 004.
          </p>
          <button
            onClick={onNavigateToShop}
            className="bg-primary text-white px-10 py-5 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Explore the Collection
          </button>
        </div>
      ) : (
        <>
          {/* Wishlist Grid: Asymmetric Layout matching Screen 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
            {/* Product Item 1: Large Offset */}
            {wishlistProducts[0] && (
              <div className="md:col-span-7 group">
                <div className="relative overflow-hidden bg-surface-dim aspect-square mb-8">
                  <img
                    alt={wishlistProducts[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    src={wishlistProducts[0].image}
                    onClick={() => onOpenProduct(wishlistProducts[0].id)}
                  />
                  <button
                    onClick={() => onRemoveFromWishlist(wishlistProducts[0].id)}
                    className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div
                    className="space-y-1 cursor-pointer"
                    onClick={() => onOpenProduct(wishlistProducts[0].id)}
                  >
                    <h3 className="font-headline text-2xl group-hover:underline">
                      {wishlistProducts[0].name}
                    </h3>
                    <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                      {wishlistProducts[0].tagline || "Autumn / Winter '24"}
                    </p>
                    <p className="text-lg mt-4 font-light tabular-nums">
                      ${wishlistProducts[0].price.toLocaleString()}.00
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-5">
                    <button
                      onClick={() => onMoveToBag(wishlistProducts[0])}
                      className="bg-primary text-white px-8 py-4 font-label text-xs uppercase tracking-widest transition-colors hover:bg-neutral-800 cursor-pointer"
                    >
                      Move to Bag
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(wishlistProducts[0].id)}
                      className="editorial-underline font-label text-[0.6875rem] uppercase tracking-widest text-neutral-800 hover:text-black cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Product Item 2: Smaller, Offset Right */}
            {wishlistProducts[1] && (
              <div className="md:col-start-9 md:col-span-4 md:mt-12 group">
                <div className="relative overflow-hidden bg-surface-dim aspect-square mb-8">
                  <img
                    alt={wishlistProducts[1].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    src={wishlistProducts[1].image}
                    onClick={() => onOpenProduct(wishlistProducts[1].id)}
                  />
                  <button
                    onClick={() => onRemoveFromWishlist(wishlistProducts[1].id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>
                <div className="space-y-4">
                  <div
                    className="cursor-pointer"
                    onClick={() => onOpenProduct(wishlistProducts[1].id)}
                  >
                    <h3 className="font-headline text-xl group-hover:underline">
                      {wishlistProducts[1].name}
                    </h3>
                    <p className="text-base font-light tabular-nums mt-1">
                      ${wishlistProducts[1].price.toLocaleString()}.00
                    </p>
                  </div>
                  <button
                    onClick={() => onMoveToBag(wishlistProducts[1])}
                    className="w-full border-b border-black/20 py-4 text-left flex justify-between items-center group/btn hover:border-black transition-colors cursor-pointer"
                  >
                    <span className="font-label text-xs uppercase tracking-widest">
                      Move to Bag
                    </span>
                    <span className="material-symbols-outlined transform group-hover/btn:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Product Item 3: Wide/Thin Layout */}
            {wishlistProducts[2] && (
              <div className="md:col-span-5 md:-mt-32 group">
                <div className="relative overflow-hidden bg-surface-dim aspect-[4/5] mb-8">
                  <img
                    alt={wishlistProducts[2].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    src={wishlistProducts[2].image}
                    onClick={() => onOpenProduct(wishlistProducts[2].id)}
                  />
                  <button
                    onClick={() => onRemoveFromWishlist(wishlistProducts[2].id)}
                    className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>
                <div className="space-y-2">
                  <h3
                    className="font-headline text-2xl cursor-pointer group-hover:underline"
                    onClick={() => onOpenProduct(wishlistProducts[2].id)}
                  >
                    {wishlistProducts[2].name}
                  </h3>
                  <p className="text-lg font-light tabular-nums">
                    ${wishlistProducts[2].price.toLocaleString()}.00
                  </p>
                  <div className="pt-6 flex gap-8">
                    <button
                      onClick={() => onMoveToBag(wishlistProducts[2])}
                      className="editorial-underline font-label text-xs uppercase tracking-widest cursor-pointer"
                    >
                      Add to Bag
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(wishlistProducts[2].id)}
                      className="text-outline hover:text-primary transition-colors font-label text-xs uppercase tracking-widest cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Product Item 4: High Contrast Module */}
            {wishlistProducts[3] && (
              <div className="md:col-start-7 md:col-span-6 group">
                <div className="relative overflow-hidden bg-surface-dim aspect-square mb-8">
                  <img
                    alt={wishlistProducts[3].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    src={wishlistProducts[3].image}
                    onClick={() => onOpenProduct(wishlistProducts[3].id)}
                  />
                  <button
                    onClick={() => onRemoveFromWishlist(wishlistProducts[3].id)}
                    className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-black/10 pt-8 gap-4">
                  <div
                    className="cursor-pointer"
                    onClick={() => onOpenProduct(wishlistProducts[3].id)}
                  >
                    <h3 className="font-headline text-3xl group-hover:underline">
                      {wishlistProducts[3].name}
                    </h3>
                    <p className="font-label text-[0.6875rem] uppercase tracking-[0.2rem] text-outline mt-2">
                      {wishlistProducts[3].tagline || 'Limited Edition'}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-2xl font-light mb-4 tabular-nums">
                      ${wishlistProducts[3].price.toLocaleString()}.00
                    </p>
                    <button
                      onClick={() => onMoveToBag(wishlistProducts[3])}
                      className="bg-primary text-white px-10 py-5 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Move to Bag
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Any Additional Wishlisted Items (beyond 4) */}
            {wishlistProducts.slice(4).map((item) => (
              <div key={item.id} className="md:col-span-6 group">
                <div className="relative overflow-hidden bg-surface-dim aspect-[4/5] mb-8">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    src={item.image}
                    onClick={() => onOpenProduct(item.id)}
                  />
                  <button
                    onClick={() => onRemoveFromWishlist(item.id)}
                    className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>
                <div className="flex justify-between items-end border-t border-black/10 pt-6">
                  <div>
                    <h3
                      className="font-headline text-2xl cursor-pointer group-hover:underline"
                      onClick={() => onOpenProduct(item.id)}
                    >
                      {item.name}
                    </h3>
                    <p className="text-lg font-light tabular-nums mt-1">
                      ${item.price.toLocaleString()}.00
                    </p>
                  </div>
                  <button
                    onClick={() => onMoveToBag(item)}
                    className="bg-primary text-white px-8 py-3.5 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                  >
                    Move to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination/Footer Context matching Screen 1 */}
          <div className="mt-32 border-t border-black/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="font-label text-xs uppercase tracking-[0.3em] text-outline">
              Viewing {wishlistProducts.length} of {Math.max(12, wishlistProducts.length)} items
            </p>
            {hasMore ? (
              <button
                onClick={onLoadMore}
                className="editorial-underline font-label text-xs uppercase tracking-widest py-2 hover:opacity-60 transition-opacity cursor-pointer"
              >
                Load More Saved Items
              </button>
            ) : (
              <button
                onClick={onNavigateToShop}
                className="editorial-underline font-label text-xs uppercase tracking-widest py-2 hover:opacity-60 transition-opacity cursor-pointer"
              >
                Discover More Pieces
              </button>
            )}
          </div>
        </>
      )}

      {/* FAB: Filter Trigger */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={onOpenFilter}
          className="w-14 h-14 bg-primary text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Filter Saved Items"
        >
          <span className="material-symbols-outlined text-2xl">filter_list</span>
        </button>
      </div>
    </main>
  );
};
