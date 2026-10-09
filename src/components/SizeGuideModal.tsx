'use client';

import React from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface max-w-lg w-full p-8 relative shadow-2xl border border-black/10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-primary hover:opacity-60 transition-opacity"
          aria-label="Close Size Guide"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <p className="font-label text-[10px] uppercase tracking-[0.25em] text-outline mb-2">
          Atelier Measurements
        </p>
        <h3 className="font-headline text-3xl mb-4 italic">Size Guide</h3>
        <p className="font-body text-xs text-on-surface-variant mb-6 leading-relaxed">
          All Lumière garments are precision cut according to classic Parisian atelier standards. If you are between sizes, we recommend selecting your larger size for an effortless drape.
        </p>

        <div className="overflow-x-auto mb-8 border border-outline-variant/30">
          <table className="w-full text-left text-xs font-label">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/20">
                <th className="py-3 px-3 uppercase tracking-wider text-[10px]">Size</th>
                <th className="py-3 px-3 uppercase tracking-wider text-[10px]">Bust (cm)</th>
                <th className="py-3 px-3 uppercase tracking-wider text-[10px]">Waist (cm)</th>
                <th className="py-3 px-3 uppercase tracking-wider text-[10px]">Hips (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/15 tabular-nums">
              <tr>
                <td className="py-3 px-3 font-semibold">XS</td>
                <td className="py-3 px-3 text-outline">80 - 84</td>
                <td className="py-3 px-3 text-outline">60 - 64</td>
                <td className="py-3 px-3 text-outline">86 - 90</td>
              </tr>
              <tr className="bg-surface-container-lowest">
                <td className="py-3 px-3 font-semibold">S</td>
                <td className="py-3 px-3 text-outline">84 - 88</td>
                <td className="py-3 px-3 text-outline">64 - 68</td>
                <td className="py-3 px-3 text-outline">90 - 94</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold">M</td>
                <td className="py-3 px-3 text-outline">88 - 92</td>
                <td className="py-3 px-3 text-outline">68 - 72</td>
                <td className="py-3 px-3 text-outline">94 - 98</td>
              </tr>
              <tr className="bg-surface-container-lowest">
                <td className="py-3 px-3 font-semibold">L</td>
                <td className="py-3 px-3 text-outline">92 - 98</td>
                <td className="py-3 px-3 text-outline">72 - 78</td>
                <td className="py-3 px-3 text-outline">98 - 104</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-t border-outline-variant/20 pt-4 flex justify-between items-center">
          <span className="font-label text-[10px] uppercase tracking-widest text-outline">
            Complimentary Alterations Available
          </span>
          <button
            onClick={onClose}
            className="bg-primary text-white px-6 py-2.5 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
