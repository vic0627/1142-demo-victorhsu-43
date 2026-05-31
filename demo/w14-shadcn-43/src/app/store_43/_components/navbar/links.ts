type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/store_43', label: 'StoreHome' },
  { href: '/store_43/about_43', label: 'about' },
  { href: '/store_43/products_43', label: 'products' },
  { href: '/store_43/favorites_43', label: 'favorites' },
  { href: '/store_43/reviews_43', label: 'reviews' },
  { href: '/store_43/cart_43', label: 'cart' },
  { href: '/store_43/orders_43', label: 'orders' },
];

export const linksAdmin: NavLink[] = [
  { href: '/store_43/admin_43/sales_43', label: 'dashboard' },
];

export const adminLinks: NavLink[] = [
  { href: '/store_43/admin_43/sales_43', label: 'sales' },
  { href: '/store_43/admin_43/products_43', label: 'my products' },
  { href: '/store_43/admin_43/products_43/create', label: 'create product' },
];
