'use client';

import React from 'react';
import { ScreenId } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: ScreenId) => void;
  onSelectCategory?: (category: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectCategory,
}) => {
  if (!isOpen) return null;

  const handleNav = (screen: ScreenId, category?: string) => {
    onNavigate(screen);
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-sm bg-[#141414] text-[#f9f9f9] flex flex-col shadow-2xl p-8 justify-between">
          <div>
            <div className="flex items-center justify-between pb-10 border-b border-white/10">
              <span className="font-headline text-2xl tracking-[0.25em]">LUMIERE</span>
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="mt-8 space-y-6">
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-white/40">
                Editorial Navigation
              </p>
              <nav className="flex flex-col space-y-5 text-xl font-headline italic">
                <button
                  onClick={() => handleNav('home')}
                  className="text-left hover:text-white/70 transition-colors"
                >
                  01. The Winter Anthology
                </button>
                <button
                  onClick={() => handleNav('shop')}
                  className="text-left hover:text-white/70 transition-colors"
                >
                  02. Collection 004 / L'Essence
                </button>
                <button
                  onClick={() => handleNav('wishlist')}
                  className="text-left hover:text-white/70 transition-colors"
                >
                  03. The Saved Archives (Wishlist)
                </button>
                <button
                  onClick={() => handleNav('profile')}
                  className="text-left hover:text-white/70 transition-colors"
                >
                  04. Private Client Suite
                </button>
              </nav>

              <div className="pt-8 border-t border-white/10">
                <p className="font-label text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                  Categories
                </p>
                <div className="grid grid-cols-2 gap-3 font-label text-xs tracking-widest uppercase text-white/75">
                  {['Dresses', 'Outerwear', 'Tailoring', 'Accessories', 'Footwear'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleNav('shop', cat)}
                      className="text-left hover:text-white transition-colors py-1"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-2 text-[11px] font-label text-white/50 tracking-wider">
            <p>Milan · Paris · Tokyo · New York</p>
            <p>© {new Date().getFullYear()} MAISON LUMIÈRE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
