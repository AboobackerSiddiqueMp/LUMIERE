'use client';

import React from 'react';
import { ScreenId } from '../types';

interface TopAppBarProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenMenu: () => void;
  onOpenBag: () => void;
  cartCount: number;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  onNavigate,
  onOpenMenu,
  onOpenBag,
  cartCount,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-16 md:h-20 glass-nav border-b border-black/5 transition-all">
      <div className="flex items-center">
        <button
          onClick={onOpenMenu}
          className="p-2 -ml-2 text-on-surface hover:opacity-60 transition-opacity focus:outline-none"
          aria-label="Open Maison Menu"
        >
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>

      <button
        onClick={() => onNavigate('home')}
        className="font-headline text-xl md:text-2xl tracking-[0.28em] font-semibold text-primary hover:opacity-80 transition-opacity uppercase"
      >
        LUMIERE
      </button>

      <div className="flex items-center">
        <button
          onClick={onOpenBag}
          className="p-2 -mr-2 text-on-surface hover:opacity-60 transition-opacity relative focus:outline-none"
          aria-label="View Shopping Bag"
        >
          <span className="material-symbols-outlined text-2xl">shopping_bag</span>
          {cartCount > 0 && (
            <span className="absolute top-1.5 right-1 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center tabular-nums">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};
