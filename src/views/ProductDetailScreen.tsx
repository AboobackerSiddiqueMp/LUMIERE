'use client';

import React, { useState } from 'react';
import { Product } from '../types';
import { SizeGuideModal } from '../components/SizeGuideModal';

interface ProductDetailScreenProps {
  product: Product;
  relatedProducts: Product[];
  onOpenProduct: (id: string) => void;
  onAddToCart: (product: Product, size: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onBack: () => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  relatedProducts,
  onOpenProduct,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
  onBack,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes[1] || product.availableSizes[0] || 'S'
  );
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const galleryImages = product.gallery || [
    product.image,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpkKP_ZyaC5JOQMv4yCwUSrEzhHCgMG37K30xI8JFAPwYTZD2xxmiLgWlWWrF-NnTx5U9a7eHZz3iGmYO5oO5HnaPUusIXeMD9YaJIfRfvbvzOPzpkiPaoLCYmdsQMpu_oCd_hATlq-NJRg-8PI6-Zhn2eHWo0tXc-hC8Zp4odTW9BEY8RbcH8Rb_VCM0XGctYPk2TLprbi3sa6AWOOCaVa2kXe92kAjtuMyB02Qmgh54vj-Z3D5a6i-a_Fdx4_VCryQ4qeTwqPfM',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDxYlaab3avIwOron6RYsQWyEAQGr6S6m1kFgCw1S2P0PMrPybqeHOa-EnB2WfuZ8AWVax5-XUxx8eVrwMCF9jxlOtuJAm-Bm31FpnR_oXSvxTTfydUKPhAJy6oWql9z2rU1lm3OD-m1ZxTB5g6k3o6tp6A9tagt_Fg4cm-C9iOplDZjyS9KjK8nuUmKIYnyij84f3eua00d1twlHUsUPqOvpibFIIGpkLMDylWIYf8hBjbrRE-2BYxUnbMTTc6AY3rcT-t5XCVkWk',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDSepdBKduIBWbgmYmBidKet9Ucwyaq0LGkg1x9n-By8WHSM0-aPhg1rwFj_1Y7_NRAFPg1iqnHLUDsQrBO-Z95LPLDNy_foa7M88HL9SGgY3v3DjOe8yKlvMpy8CkMPYXHqnn-rZ3XcZNJ9gsOvCQd4nKrgCnv6fN04w7tqdEATVl5aHKo8mGExaK-9BJFdb5lBF1L9CyJOoQlLmhMV3PF2u-xI9uw8tz7y7g65KFeULrIN9I5PatJNZOXm2toQQzfO60I6wA0Wy8',
  ];

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2400);
  };

  return (
    <main className="pt-20 pb-32 max-w-7xl mx-auto px-6">
      {/* Breadcrumb Back Button */}
      <div className="py-4">
        <button
          onClick={onBack}
          className="flex items-center text-xs font-label uppercase tracking-widest text-outline hover:text-black transition-colors"
        >
          <span className="material-symbols-outlined text-base mr-1">arrow_back</span>
          Back to Catalogue
        </button>
      </div>

      {/* Editorial Layout: Product Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        {/* Product Gallery: Asymmetric Grid */}
        <div className="lg:col-span-7 space-y-12">
          {/* Main Hero Shot */}
          <div className="relative aspect-[3/4] overflow-hidden bg-surface-dim group">
            <img
              alt={product.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              src={galleryImages[0]}
            />
          </div>

          {/* Secondary Details Split */}
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-[4/5] overflow-hidden bg-surface-dim">
              <img
                alt="Fabric texture close up"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={galleryImages[1]}
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-surface-dim mt-12">
              <img
                alt="Studio detail view"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={galleryImages[2]}
              />
            </div>
          </div>

          {/* Wide Landscape Editorial */}
          <div className="aspect-[16/9] overflow-hidden bg-surface-dim">
            <img
              alt="Atmospheric lifestyle editorial shot"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src={galleryImages[3]}
            />
          </div>
        </div>

        {/* Product Information: Sticky Purchase Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start flex flex-col space-y-10">
          <div>
            <div className="flex justify-between items-start mb-4">
              <p className="font-label text-xs tracking-[0.2em] text-outline uppercase">
                {product.collection || 'Collection № 04'}
              </p>
              <button
                onClick={() => onToggleWishlist(product.id)}
                className="p-1 hover:opacity-60 transition-opacity"
                aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
              >
                <span
                  className={`material-symbols-outlined text-2xl ${
                    isWishlisted ? 'text-black fill' : 'text-outline'
                  }`}
                >
                  favorite
                </span>
              </button>
            </div>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight font-light">
              {product.name}
            </h2>
            <p className="font-label text-xl tracking-tight text-on-surface-variant tabular-nums">
              ${product.price.toLocaleString()}.00
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-body text-sm leading-relaxed text-on-surface-variant max-w-md">
              {product.description}
            </p>

            <div className="pt-4 flex flex-col space-y-2">
              <div className="flex justify-between items-center py-4 border-b border-black/10">
                <span className="font-label text-[10px] uppercase tracking-[0.15em] text-outline">
                  Material
                </span>
                <span className="font-body text-sm italic">{product.material}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-black/10">
                <span className="font-label text-[10px] uppercase tracking-[0.15em] text-outline">
                  Origin
                </span>
                <span className="font-body text-sm">{product.origin}</span>
              </div>
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-label text-[10px] uppercase tracking-[0.15em]">
                Select Size
              </label>
              <button
                onClick={() => setIsSizeGuideOpen(true)}
                className="font-label text-[10px] underline underline-offset-4 uppercase tracking-[0.1em] text-outline hover:text-primary transition-colors cursor-pointer"
              >
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.availableSizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 text-xs font-label uppercase tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary text-white border border-primary font-bold shadow-sm'
                        : 'bg-white border border-black/10 hover:border-black text-black'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-4 pt-2">
            <button
              onClick={handleAdd}
              className="w-full bg-primary text-white py-5 px-8 font-label text-xs uppercase tracking-[0.25em] hover:bg-neutral-800 transition-colors shadow-lg cursor-pointer"
            >
              Add to Bag
            </button>
            {addedToast && (
              <p className="text-center font-label text-xs text-black font-semibold tracking-wider animate-pulse">
                ✓ Added to your Shopping Bag
              </p>
            )}
            <p className="text-center font-label text-[10px] text-outline tracking-wider pt-1">
              Free express shipping on all curated orders.
            </p>
          </div>

          {/* Secondary Info Accordions */}
          <div className="pt-6 space-y-4 border-t border-black/10">
            <details className="group cursor-pointer">
              <summary className="list-none flex justify-between items-center py-4">
                <span className="font-label text-[10px] uppercase tracking-[0.15em]">
                  Sustainability
                </span>
                <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="pb-6 font-body text-xs text-on-surface-variant leading-relaxed">
                Our silk is OEKO-TEX® certified, ensuring no harmful chemicals are used in the production process. We partner with family-owned mills in Lake Como committed to water stewardship and renewable energy.
              </div>
            </details>

            <details className="group cursor-pointer border-t border-black/10">
              <summary className="list-none flex justify-between items-center py-4">
                <span className="font-label text-[10px] uppercase tracking-[0.15em]">
                  Care Instructions
                </span>
                <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="pb-6 font-body text-xs text-on-surface-variant leading-relaxed">
                Dry clean only. Store on a padded hanger to maintain the bias-cut structure. Do not steam at high temperatures; gentle pressing on reverse side only.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Editorial Section: Complete the Look */}
      <section className="mt-40">
        <h3 className="font-headline text-3xl md:text-4xl mb-16 text-center italic font-light">
          Complete the Look
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {relatedProducts.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenProduct(item.id)}
              className={`space-y-4 group cursor-pointer ${
                idx === 1 ? 'md:mt-0' : idx === 2 ? 'hidden md:block' : ''
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={item.image}
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-label text-[11px] uppercase tracking-wider group-hover:underline">
                  {item.name}
                </h4>
                <p className="font-body text-sm text-outline tabular-nums">
                  ${item.price.toLocaleString()}.00
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </main>
  );
};
