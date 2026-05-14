type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/store_43', label: 'StoreHome' },
  { href: '/store_43/about_43', label: 'about_43' },
  { href: '/store_43/products_43', label: 'products_43' },
  { href: '/store_43/favorites_43', label: 'favorites_43' },
  { href: '/store_43/reviews_43', label: 'reviews_43' },
  { href: '/store_43/cart_43', label: 'cart_43' },
  { href: '/store_43/orders_43', label: 'orders_43' },
];

export const linksAdmin: NavLink[] = [
  { href: '/store_43/admin_43/sales_43', label: 'dashboard_43' },
];

export const adminLinks: NavLink[] = [
  { href: '/store_43/admin_43/sales_43', label: 'sales_43' },
  { href: '/store_43/admin_43/products_43', label: 'my products_43' },
  { href: '/store_43/admin_43/products_43/create', label: 'create product_43' },
];
