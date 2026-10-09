'use client';

import React, { useState } from 'react';
import { CartItem } from '../types';

interface BagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onNavigateToShop: () => void;
}

export const BagDrawer: React.FC<BagDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToShop,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discount = promoApplied ? rawSubtotal * 0.1 : 0;
  const subtotal = rawSubtotal - discount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LUMIERE10' || promoCode.trim().toUpperCase() === 'VIP') {
      setPromoApplied(true);
    } else {
      alert('Invalid invitation code. Try "LUMIERE10" for 10% private client privilege.');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = `LM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderComplete(orderNum);
    onClearCart();
    setIsCheckingOut(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-black/10 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-black/5">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-outline">
                Curated Selection
              </p>
              <h3 className="font-headline text-2xl">Shopping Bag</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-primary hover:opacity-60 transition-opacity"
              aria-label="Close Bag"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Order Completion State */}
          {orderComplete ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <p className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-2">
                Order Confirmed
              </p>
              <h4 className="font-headline text-3xl mb-3">{orderComplete}</h4>
              <p className="font-body text-xs text-on-surface-variant max-w-xs mb-8 leading-relaxed">
                Thank you for acquiring from Maison Lumière. Your order has been registered for white-glove packaging at our Milan atelier.
              </p>
              <button
                onClick={() => {
                  setOrderComplete(null);
                  onClose();
                  onNavigateToShop();
                }}
                className="bg-primary text-white px-8 py-4 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Continue Exploring
              </button>
            </div>
          ) : isCheckingOut ? (
            /* Checkout View */
            <form onSubmit={handleCompleteOrder} className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="border-b border-black/10 pb-4">
                <h4 className="font-headline text-xl mb-1">Private Client Checkout</h4>
                <p className="font-label text-xs text-outline">Complimentary white-glove express delivery</p>
              </div>

              <div className="space-y-4 text-xs font-label">
                <div>
                  <label className="block uppercase tracking-wider text-[10px] text-outline mb-1">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    defaultValue="Eleanor Vance"
                    className="w-full bg-white border border-black/15 p-3 text-xs focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider text-[10px] text-outline mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    defaultValue="e.vance@atelier-curated.com"
                    className="w-full bg-white border border-black/15 p-3 text-xs focus:border-black focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block uppercase tracking-wider text-[10px] text-outline mb-1">
                    Shipping Address *
                  </label>
                  <input
                    required
                    type="text"
                    defaultValue="740 Park Avenue, Apt 11B"
                    className="w-full bg-white border border-black/15 p-3 text-xs focus:border-black focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-outline mb-1">
                      City *
                    </label>
                    <input
                      required
                      type="text"
                      defaultValue="New York, NY"
                      className="w-full bg-white border border-black/15 p-3 text-xs focus:border-black focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-outline mb-1">
                      Postal Code *
                    </label>
                    <input
                      required
                      type="text"
                      defaultValue="10021"
                      className="w-full bg-white border border-black/15 p-3 text-xs focus:border-black focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block uppercase tracking-wider text-[10px] text-outline mb-1">
                    Payment Method
                  </label>
                  <div className="p-3 border border-black bg-white flex items-center justify-between">
                    <span className="font-semibold">Maison Lumière Charge / Card Ending in •••• 8820</span>
                    <span className="material-symbols-outlined text-sm">lock</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-black/10 pt-4 space-y-2 text-xs font-label">
                <div className="flex justify-between">
                  <span className="text-outline">Subtotal</span>
                  <span className="tabular-nums">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-black font-semibold text-sm pt-2 border-t border-black/5">
                  <span>Total Amount</span>
                  <span className="tabular-nums">${subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="flex-1 py-4 border border-black font-label text-xs uppercase tracking-widest hover:bg-black/5 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-4 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </form>
          ) : cart.length === 0 ? (
            /* Empty Bag */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <span className="material-symbols-outlined text-5xl text-outline mb-4">
                shopping_bag
              </span>
              <h4 className="font-headline text-2xl mb-2">Your Bag is Empty</h4>
              <p className="font-body text-xs text-on-surface-variant max-w-xs mb-8">
                Explore Collection 004 to discover architectural monochrome garments and heirloom accessories.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToShop();
                }}
                className="bg-primary text-white px-8 py-4 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            /* Items list */
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-black/5">
                {cart.map((item) => (
                  <div key={item.id} className="py-5 flex gap-4">
                    <div className="w-20 h-24 bg-surface-dim overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-headline text-base leading-snug">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-outline hover:text-black transition-colors"
                            aria-label="Remove item"
                          >
                            <span className="material-symbols-outlined text-base">close</span>
                          </button>
                        </div>
                        <p className="font-label text-[11px] text-outline uppercase tracking-wider mt-0.5">
                          Size: {item.size}
                        </p>
                        <p className="font-label text-xs mt-1.5 tabular-nums font-medium">
                          ${item.product.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-black/20">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-7 h-7 flex items-center justify-center text-xs hover:bg-black/5"
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xs font-label tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-7 h-7 flex items-center justify-center text-xs hover:bg-black/5"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-label text-xs tabular-nums text-on-surface-variant">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Summary */}
              <div className="p-6 bg-surface-container-low border-t border-black/10 space-y-4">
                {/* Promo Code */}
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="VIP Invitation Code"
                    className="flex-1 bg-white border border-black/15 px-3 py-2 text-xs font-label uppercase tracking-wider focus:outline-none focus:border-black"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 font-label text-[10px] uppercase tracking-widest"
                  >
                    Apply
                  </button>
                </form>

                {promoApplied && (
                  <p className="text-[10px] text-emerald-700 font-label tracking-wider uppercase">
                    10% Private Atelier Privilege Applied
                  </p>
                )}

                <div className="space-y-1.5 text-xs font-label">
                  <div className="flex justify-between text-outline">
                    <span>Subtotal</span>
                    <span className="tabular-nums">${rawSubtotal.toLocaleString()}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-emerald-700">
                      <span>Privilege Discount</span>
                      <span className="tabular-nums">-${discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-outline">
                    <span>Express White-Glove Shipping</span>
                    <span className="uppercase text-[10px] text-black">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold text-black pt-2 border-t border-black/10">
                    <span>Total</span>
                    <span className="tabular-nums">${subtotal.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-primary text-white py-4 font-label text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors shadow-lg"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
