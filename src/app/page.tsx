'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, INITIAL_WISHLIST_IDS } from '../data/products';
import { ScreenId, CartItem, FilterOptions, Product } from '../types';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';
import { BagDrawer } from '../components/BagDrawer';
import { MenuDrawer } from '../components/MenuDrawer';
import { FilterDrawer } from '../components/FilterDrawer';
import { HomeScreen } from '../views/HomeScreen';
import { ShopScreen } from '../views/ShopScreen';
import { WishlistScreen } from '../views/WishlistScreen';
import { ProductDetailScreen } from '../views/ProductDetailScreen';
import { ProfileScreen } from '../views/ProfileScreen';

export default function LumiereApp() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('fluid-silk-slip-dress');
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Wishlist state initialized with the 4 pieces from Screen 1
  const [wishlistIds, setWishlistIds] = useState<string[]>(INITIAL_WISHLIST_IDS);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'item-init-1',
      product: PRODUCTS[0], // Fluid Silk Slip Dress
      size: 'S',
      quantity: 1,
    },
  ]);

  // Filtering state
  const [filters, setFilters] = useState<FilterOptions>({
    size: 'ALL',
    color: 'MONO',
    fabric: 'WOOL, SILK',
    category: 'ALL',
    sortBy: 'featured',
  });

  // Load more tracker for Wishlist
  const [wishlistDisplayCount, setWishlistDisplayCount] = useState<number>(4);

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (filters.category !== 'ALL' && item.category !== filters.category) {
        return false;
      }
      // Size filter
      if (
        filters.size !== 'ALL' &&
        !item.availableSizes.includes(filters.size) &&
        !item.availableSizes.includes('ONE SIZE')
      ) {
        return false;
      }
      // Color filter
      if (filters.color !== 'ALL' && item.color !== filters.color) {
        return false;
      }
      // Fabric filter
      if (filters.fabric !== 'ALL' && filters.fabric !== 'WOOL, SILK') {
        if (item.fabricType !== filters.fabric) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [filters]);

  // Wishlist product instances
  const wishlistedProducts = useMemo(() => {
    return wishlistIds
      .map((id) => PRODUCTS.find((p) => p.id === id))
      .filter((p): p is Product => Boolean(p))
      .slice(0, wishlistDisplayCount);
  }, [wishlistIds, wishlistDisplayCount]);

  const hasMoreWishlistItems = wishlistDisplayCount < wishlistIds.length || wishlistIds.length < PRODUCTS.length;

  // Selected product instance
  const currentProduct = useMemo(() => {
    return PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  }, [selectedProductId]);

  // Related products for current product
  const relatedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.id !== currentProduct.id);
  }, [currentProduct.id]);

  // Cart handlers
  const handleAddToCart = (product: Product, size: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random()}`,
          product,
          size,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => Boolean(item))
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist handlers
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  const handleMoveToBag = (product: Product) => {
    handleAddToCart(product, product.availableSizes[0] || 'S');
    handleRemoveFromWishlist(product.id);
    setIsBagOpen(true);
  };

  const handleLoadMoreWishlist = () => {
    if (wishlistDisplayCount < wishlistIds.length) {
      setWishlistDisplayCount((prev) => prev + 4);
    } else {
      // Add additional pieces to wishlist from catalog
      const unadded = PRODUCTS.filter((p) => !wishlistIds.includes(p.id));
      if (unadded.length > 0) {
        const nextIds = unadded.slice(0, 4).map((p) => p.id);
        setWishlistIds((prev) => [...prev, ...nextIds]);
        setWishlistDisplayCount((prev) => prev + 4);
      }
    }
  };

  // Navigation handlers
  const handleOpenProduct = (productId: string) => {
    setSelectedProductId(productId);
    setActiveScreen('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (cat: string) => {
    setFilters((prev) => ({ ...prev, category: cat }));
  };

  const handleResetFilters = () => {
    setFilters({
      size: 'ALL',
      color: 'ALL',
      fabric: 'ALL',
      category: 'ALL',
      sortBy: 'featured',
    });
  };

  const totalCartUnits = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary selection:text-white">
      {/* Top App Bar */}
      <TopAppBar
        activeScreen={activeScreen}
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenBag={() => setIsBagOpen(true)}
        cartCount={totalCartUnits}
      />

      {/* Screen Views */}
      {activeScreen === 'home' && (
        <HomeScreen
          onNavigate={(screen) => {
            setActiveScreen(screen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectCategory={(cat) => {
            handleCategorySelect(cat);
          }}
          onOpenProduct={handleOpenProduct}
          onOpenFilter={() => setIsFilterOpen(true)}
        />
      )}

      {activeScreen === 'shop' && (
        <ShopScreen
          products={filteredProducts}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onOpenProduct={handleOpenProduct}
          filters={filters}
          onOpenFilter={() => setIsFilterOpen(true)}
          onChangeFilters={setFilters}
        />
      )}

      {activeScreen === 'wishlist' && (
        <WishlistScreen
          wishlistProducts={wishlistedProducts}
          onRemoveFromWishlist={handleRemoveFromWishlist}
          onMoveToBag={handleMoveToBag}
          onOpenProduct={handleOpenProduct}
          onLoadMore={handleLoadMoreWishlist}
          hasMore={hasMoreWishlistItems}
          onNavigateToShop={() => {
            setActiveScreen('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenFilter={() => setIsFilterOpen(true)}
        />
      )}

      {activeScreen === 'detail' && (
        <ProductDetailScreen
          product={currentProduct}
          relatedProducts={relatedProducts}
          onOpenProduct={handleOpenProduct}
          onAddToCart={handleAddToCart}
          isWishlisted={wishlistIds.includes(currentProduct.id)}
          onToggleWishlist={handleToggleWishlist}
          onBack={() => {
            setActiveScreen('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {activeScreen === 'profile' && (
        <ProfileScreen
          onNavigateToWishlist={() => {
            setActiveScreen('wishlist');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateToShop={() => {
            setActiveScreen('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Persistent Bottom Nav Bar */}
      <BottomNavBar
        activeScreen={activeScreen}
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        wishlistCount={wishlistIds.length}
      />

      {/* Shopping Bag Drawer */}
      <BagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onNavigateToShop={() => {
          setIsBagOpen(false);
          setActiveScreen('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Editorial Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCategory={handleCategorySelect}
      />

      {/* Faceted Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onChangeFilters={setFilters}
        onResetFilters={handleResetFilters}
        totalMatches={filteredProducts.length}
      />
    </div>
  );
}
