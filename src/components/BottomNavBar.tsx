'use client';

import React from 'react';
import { ScreenId } from '../types';

interface BottomNavBarProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  wishlistCount: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeScreen,
  onNavigate,
  wishlistCount,
}) => {
  const navItems: { id: ScreenId; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'shop', label: 'Shop', icon: 'storefront' },
    { id: 'wishlist', label: 'Wishlist', icon: 'favorite' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-black/5 pb-5 pt-1.5 px-6">
      <div className="max-w-md mx-auto grid grid-cols-4 items-center h-14">
        {navItems.map((item) => {
          const isActive =
            activeScreen === item.id ||
            (activeScreen === 'detail' && item.id === 'shop');
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 transition-all relative ${
                isActive
                  ? 'text-primary'
                  : 'text-outline/70 hover:text-primary opacity-60 hover:opacity-100'
              }`}
            >
              <div className="relative">
                <span
                  className={`material-symbols-outlined text-2xl ${
                    isActive ? 'fill font-semibold' : ''
                  }`}
                >
                  {item.icon}
                </span>
                {item.id === 'wishlist' && wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-2 w-3.5 h-3.5 bg-primary text-white text-[8px] font-bold rounded-full flex items-center justify-center tabular-nums">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span
                className={`font-label text-[10px] uppercase tracking-wider mt-0.5 ${
                  isActive ? 'font-semibold text-primary' : 'font-normal'
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <span className="w-4 h-[2px] bg-primary absolute -bottom-1 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
