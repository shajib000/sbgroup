/**
 * SB Group E-Commerce Platform - Bangladeshi Edition
 * Currency: Bangladeshi Taka (৳ / BDT)
 * Full Admin Operations Console matching UI design with 5 control tabs
 */

// Helper to format Bangladeshi Taka
window.formatBDT = function(amount) {
  const num = typeof amount === 'number' ? amount : parseFloat(amount) || 0;
  return `৳${num.toLocaleString('en-IN')}`;
};

// Initial Bangladeshi Catalog
const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Wireless Earbuds Pro',
    category: 'Electronics',
    price: 2490,
    originalPrice: 3400,
    rating: 4.8,
    reviewsCount: 412,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    description: 'Active noise cancellation, transparency mode, and 30 hours battery life with wireless charging case. 1-year official SB warranty.',
    badge: 'Bestseller',
    stock: 45,
    specs: { 'Battery Life': '30 hrs', 'Water Resistance': 'IPX5', 'Connectivity': 'Bluetooth 5.3', 'Warranty': '1 Year SB Group Care' }
  },
  {
    id: 'prod-4',
    name: 'Smart Watch Series 8',
    category: 'Electronics',
    price: 4800,
    originalPrice: 6500,
    rating: 4.5,
    reviewsCount: 540,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80',
    description: 'High-res AMOLED display, 24/7 heart rate and SpO2 tracking, sleep stages analysis, and waterproof IP68 build.',
    badge: 'Popular',
    stock: 19,
    specs: { 'Display': '1.78" AMOLED', 'Battery': '7 Days', 'Waterproof': '5 ATM', 'Bangla Language': 'Supported' }
  },
  {
    id: 'prod-6',
    name: 'Studio Wireless Headphones',
    category: 'Electronics',
    price: 5800,
    originalPrice: 7500,
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    description: 'Over-ear audiophile acoustic tuning with ultra-plush memory foam cushions and 40mm titanium drivers.',
    badge: 'Flagship',
    stock: 22,
    specs: { 'Driver': '40mm Titanium', 'Battery': '45 hrs', 'ANC': 'Hybrid -35dB', 'Codec': 'LDAC, AAC' }
  },
  {
    id: 'prod-2',
    name: 'Organic Ceremonial Matcha',
    category: 'Groceries',
    price: 850,
    originalPrice: 1150,
    rating: 4.7,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    description: 'First harvest ceremonial grade organic green tea powder. Stone ground and rich in natural antioxidants.',
    badge: 'Organic',
    stock: 82,
    specs: { 'Origin': 'Uji, Kyoto', 'Net Weight': '100g', 'Grade': 'Ceremonial AAA', 'BSTI Certified': 'Yes' }
  },
  {
    id: 'prod-7',
    name: 'Extra Virgin Olive Oil 500ml',
    category: 'Groceries',
    price: 1250,
    originalPrice: 1650,
    rating: 4.8,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
    description: 'Single-estate harvest cold-extracted extra virgin olive oil. 100% pure and unadulterated.',
    badge: 'Artisanal',
    stock: 60,
    specs: { 'Acidity': '< 0.2%', 'Harvest': 'Single Estate', 'Packaging': 'Dark UV Glass' }
  },
  {
    id: 'prod-3',
    name: "Men's Minimalist Sneakers",
    category: 'Fashion',
    price: 3200,
    originalPrice: 4500,
    rating: 4.6,
    reviewsCount: 320,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80',
    description: 'Handcrafted vegan leather sneakers with ultra-cushioned memory foam insoles for all-day urban comfort in Dhaka.',
    badge: 'Trending',
    stock: 28,
    specs: { 'Upper': 'Premium Vegan Leather', 'Sole': 'Anti-slip Rubber', 'Lining': 'Breathable Cotton', 'Sizes': '39 - 44 EU' }
  },
  {
    id: 'prod-8',
    name: 'Everyday Canvas Tote Bag',
    category: 'Fashion',
    price: 950,
    originalPrice: 1350,
    rating: 4.7,
    reviewsCount: 205,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    description: 'Heavyweight organic cotton duck canvas with reinforced handles and interior laptop divider.',
    badge: 'Eco Friendly',
    stock: 95,
    specs: { 'Material': '16oz Cotton Canvas', 'Capacity': '20L', 'Pockets': '4 Internal Compartments' }
  },
  {
    id: 'prod-5',
    name: 'Aromatherapy Wood Diffuser',
    category: 'Home & Living',
    price: 1650,
    originalPrice: 2200,
    rating: 4.6,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    description: 'Natural wood grain ultrasonic cool mist humidifier with 7 ambient LED colors and automatic shut-off safety.',
    badge: 'Eco Friendly',
    stock: 64,
    specs: { 'Capacity': '400ml', 'Coverage': '350 sq ft', 'Timer Modes': '1H / 3H / 6H / ON', 'Noise': '< 25dB Quiet' }
  },
  {
    id: 'prod-9',
    name: 'Ceramic Ambient Table Lamp',
    category: 'Home & Living',
    price: 2800,
    originalPrice: 3600,
    rating: 4.8,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    description: 'Sculptural matte ceramic base with warm woven linen shade for soothing diffused evening lighting.',
    badge: 'New',
    stock: 35,
    specs: { 'Bulb': 'Warm LED Included', 'Switch': 'Inline Dimmer', 'Base': 'Hand-thrown Ceramic' }
  }
];

const INITIAL_BUNDLES = [
  {
    id: 'bundle-1',
    name: 'Home Office Essentials',
    subtitle: 'Work Better, Anywhere',
    price: 7500,
    originalPrice: 10500,
    discount: 'Save 29%',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    badge: 'Save 29%',
    items: ['Laptop Stand', 'Ergonomic Mouse', 'Studio Headphones', 'Ceramic Desk Mug']
  },
  {
    id: 'bundle-2',
    name: 'Skincare Glow Set',
    subtitle: 'Healthy Skin, Naturally',
    price: 3800,
    originalPrice: 5500,
    discount: 'Save 31%',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    badge: 'Save 31%',
    items: ['Hydrating Cleanser', 'Vitamin C Serum', 'Barrier Cream', 'Gua Sha Stone']
  },
  {
    id: 'bundle-3',
    name: 'Fitness Starter Pack',
    subtitle: 'Build a Healthier You',
    price: 4990,
    originalPrice: 6900,
    discount: 'Save 28%',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    badge: 'Save 28%',
    items: ['Adjustable Dumbbells', 'Non-Slip Yoga Mat', 'Steel Bottle', 'Resistance Bands']
  },
  {
    id: 'bundle-4',
    name: 'Kitchen Chef Bundle',
    subtitle: 'Cook Like a Pro',
    price: 4200,
    originalPrice: 6200,
    discount: 'Save 32%',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    badge: 'Save 32%',
    items: ['Cast Iron Skillet', 'German Steel Chef Knife', 'Bamboo Board', 'Organic Spice Set']
  }
];

// Initial Bangladeshi Orders Matching Screenshot Structure
const INITIAL_ORDERS = [
  {
    id: 'ORD-75091',
    customer: 'Nusrat Jahan',
    email: 'nusrat.jahan@example.com',
    phone: '01898765432',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    items: [{ name: 'Studio Wireless Headphones', qty: 1, price: 4599 }],
    total: 4599,
    date: 'Sep 25',
    status: 'Pending',
    address: 'Flat 4B, Concord Tower, GEC Circle, Chittagong',
    paymentMethod: 'Cash on Delivery'
  },
  {
    id: 'ORD-84585',
    customer: 'Shajib Pal',
    email: 'sbshajibpal@gmail.com',
    phone: '01755667788',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    items: [{ name: 'Aromatherapy Wood Diffuser', qty: 1, price: 89 }],
    total: 89,
    date: 'Sep 25',
    status: 'Pending',
    address: 'Dhanmondi 27, Dhaka-1209',
    paymentMethod: 'Cash on Delivery'
  },
  {
    id: 'ORD-62410',
    customer: 'Nusrat Jahan',
    email: 'nusrat.jahan@example.com',
    phone: '01898765432',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    items: [{ name: 'Ceremonial Matcha Tin', qty: 1, price: 250 }],
    total: 250,
    date: 'Sep 24',
    status: 'Delivered',
    address: 'Flat 4B, Concord Tower, GEC Circle, Chittagong',
    paymentMethod: 'bKash (01898765432)'
  },
  {
    id: 'ORD-51920',
    customer: 'Shajib Pal',
    email: 'sbshajibpal@gmail.com',
    phone: '01755667788',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    items: [{ name: 'Eco Glass Straw Set', qty: 1, price: 180 }],
    total: 180,
    date: 'Sep 24',
    status: 'Processing',
    address: 'Dhanmondi 27, Dhaka-1209',
    paymentMethod: 'Nagad (01755667788)'
  },
  {
    id: 'ORD-43180',
    customer: 'Nusrat Jahan',
    email: 'nusrat.jahan@example.com',
    phone: '01898765432',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    items: [{ name: 'Linen Coaster Set', qty: 1, price: 143 }],
    total: 143,
    date: 'Sep 23',
    status: 'Shipped',
    address: 'Flat 4B, Concord Tower, GEC Circle, Chittagong',
    paymentMethod: 'Cash on Delivery'
  },
  {
    id: 'ORD-38192',
    customer: 'Shajib Pal',
    email: 'sbshajibpal@gmail.com',
    phone: '01755667788',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    items: [{ name: 'Express Care Voucher', qty: 1, price: 100 }],
    total: 100,
    date: 'Sep 22',
    status: 'Delivered',
    address: 'Dhanmondi 27, Dhaka-1209',
    paymentMethod: 'bKash (01755667788)'
  }
];

// Initial Customers Matching Screenshot (2 Accounts)
const INITIAL_CUSTOMERS = [
  {
    id: 'CUST-101',
    name: 'Nusrat Jahan',
    email: 'nusrat.jahan@example.com',
    phone: '01898765432',
    password: 'password123',
    address: 'Flat 4B, Concord Tower, GEC Circle, Chittagong',
    joinedDate: '2026-09-10'
  },
  {
    id: 'CUST-102',
    name: 'Shajib Pal',
    email: 'sbshajibpal@gmail.com',
    phone: '01755667788',
    password: 'password123',
    address: 'Dhanmondi 27, Dhaka-1209',
    joinedDate: '2026-09-18'
  }
];

// Initial Support Chat Thread
const INITIAL_SUPPORT_MESSAGES = [
  {
    id: 'msg-1',
    sender: 'customer',
    customerName: 'Shajib Pal',
    text: 'Hello, Dhaka te delivery koto din lagbe? (How many days for delivery in Dhaka?)',
    time: '10:30 AM'
  },
  {
    id: 'msg-2',
    sender: 'admin',
    customerName: 'Admin Shajib (SB Group)',
    text: 'Assalamu Alaikum! SB Group-e shagotom. Dhaka city-te 24 theke 48 ghontar moddhe express delivery kora hoy.',
    time: '10:31 AM'
  }
];

// Comparison Matrix Data in BDT
const COMPARISON_DATA = [
  {
    feature: 'Sound Quality',
    icon: 'volume-2',
    modelA: true,
    modelB: true,
    modelC: true
  },
  {
    feature: 'Battery Life',
    icon: 'battery-charging',
    modelA: true,
    modelB: false,
    modelC: true
  },
  {
    feature: 'Noise Cancellation',
    icon: 'shield',
    modelA: true,
    modelB: false,
    modelC: true
  },
  {
    feature: 'Spatial Audio 3D',
    icon: 'compass',
    modelA: false,
    modelB: false,
    modelC: true
  },
  {
    feature: 'Price (BDT)',
    icon: 'tag',
    modelA: '৳2,990',
    modelB: '৳4,500',
    modelC: '৳5,800'
  }
];

// Core Application State
class AppState {
  constructor() {
    this.currentView = 'storefront'; // 'storefront' | 'admin-dashboard'
    this.adminActiveTab = 'orders'; // 'orders' | 'customers' | 'add-product' | 'catalog' | 'chat'
    this.isAdminAuthenticated = false;
    this.products = this.loadStored('sb_products_v4', INITIAL_PRODUCTS);
    this.bundles = INITIAL_BUNDLES;
    this.orders = this.loadStored('sb_orders_v4', INITIAL_ORDERS);
    this.cart = this.loadStored('sb_cart_v4', [
      { id: 'prod-1', name: 'Wireless Earbuds Pro', price: 2490, qty: 1, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80' }
    ]);
    this.wishlist = this.loadStored('sb_wishlist_v4', ['prod-1', 'prod-4']);
    this.customers = this.loadStored('sb_customers_v4', INITIAL_CUSTOMERS);
    this.currentCustomer = this.loadStored('sb_active_customer_v4', INITIAL_CUSTOMERS[0]);
    this.chatMessages = this.loadStored('sb_chat_v4', INITIAL_SUPPORT_MESSAGES);
    this.chatOpen = false;
    this.selectedCategory = 'All';
    this.searchQuery = '';
    this.sortOption = 'featured';
  }

  loadStored(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  saveStored(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  addToCart(product, qty = 1) {
    const existing = this.cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: qty,
        image: product.image
      });
    }
    this.saveStored('sb_cart_v4', this.cart);
    window.renderCart();
    window.updateBadges();
    window.showToast(`"${product.name}" কার্ট-এ যুক্ত হয়েছে! 🛍️`, 'success');
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveStored('sb_cart_v4', this.cart);
    window.renderCart();
    window.updateBadges();
    window.showToast('কার্ট থেকে পণ্য সরানো হয়েছে', 'info');
  }

  updateCartQty(productId, delta) {
    const item = this.cart.find(item => item.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      this.removeFromCart(productId);
    } else {
      this.saveStored('sb_cart_v4', this.cart);
      window.renderCart();
      window.updateBadges();
    }
  }

  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      window.showToast('উইশলিস্ট থেকে সরানো হয়েছে', 'info');
    } else {
      this.wishlist.push(productId);
      window.showToast('উইশলিস্ট-এ সংরক্ষিত হয়েছে! 💚', 'success');
    }
    this.saveStored('sb_wishlist_v4', this.wishlist);
    window.updateWishlistButtons();
    window.updateBadges();
  }

  // Customer Authentication
  registerCustomer(name, email, phone, password, address) {
    const existing = this.customers.find(c => c.email.toLowerCase() === email.toLowerCase() || c.phone === phone);
    if (existing) {
      window.showToast('এই ইমেইল বা ফোন নম্বর দিয়ে ইতোমধ্যে অ্যাকাউন্ট রয়েছে!', 'error');
      return false;
    }

    const newCustomer = {
      id: 'CUST-' + Math.floor(100 + Math.random() * 900),
      name,
      email,
      phone,
      password,
      address,
      joinedDate: new Date().toISOString().substring(0, 10)
    };

    this.customers.push(newCustomer);
    this.currentCustomer = newCustomer;
    this.saveStored('sb_customers_v4', this.customers);
    this.saveStored('sb_active_customer_v4', this.currentCustomer);
    
    window.updateCustomerHeaderUI();
    window.updateAdminStats();
    window.renderAdminCustomersTable();
    window.showToast(`অভিনন্দন ${name}! আপনার অ্যাকাউন্ট তৈরি সম্পন্ন হয়েছে।`, 'success');
    return true;
  }

  loginCustomer(emailOrPhone, password) {
    const customer = this.customers.find(c => 
      (c.email.toLowerCase() === emailOrPhone.toLowerCase() || c.phone === emailOrPhone) && 
      c.password === password
    );

    if (customer) {
      this.currentCustomer = customer;
      this.saveStored('sb_active_customer_v4', this.currentCustomer);
      window.updateCustomerHeaderUI();
      window.showToast(`স্বাগতম, ${customer.name}!`, 'success');
      return true;
    } else {
      window.showToast('ভুল তথ্য! অনুগ্রহ করে সঠিক ইমেইল/ফোন ও পাসওয়ার্ড দিন।', 'error');
      return false;
    }
  }

  logoutCustomer() {
    this.currentCustomer = null;
    this.saveStored('sb_active_customer_v4', null);
    window.updateCustomerHeaderUI();
    window.showToast('সফলভাবে লগআউট হয়েছে', 'info');
  }

  updateCustomerProfile(name, phone, address) {
    if (!this.currentCustomer) return;
    this.currentCustomer.name = name;
    this.currentCustomer.phone = phone;
    this.currentCustomer.address = address;

    const idx = this.customers.findIndex(c => c.id === this.currentCustomer.id);
    if (idx !== -1) {
      this.customers[idx] = { ...this.currentCustomer };
      this.saveStored('sb_customers_v4', this.customers);
    }
    this.saveStored('sb_active_customer_v4', this.currentCustomer);
    window.updateCustomerHeaderUI();
    window.renderAdminCustomersTable();
    window.showToast('প্রোফাইল তথ্য সফলভাবে আপডেট হয়েছে! ✓', 'success');
  }

  changeCustomerPassword(currentPass, newPass) {
    if (!this.currentCustomer) return false;
    if (this.currentCustomer.password !== currentPass) {
      window.showToast('বর্তমান পাসওয়ার্ড সঠিক নয়!', 'error');
      return false;
    }
    this.currentCustomer.password = newPass;
    const idx = this.customers.findIndex(c => c.id === this.currentCustomer.id);
    if (idx !== -1) {
      this.customers[idx] = { ...this.currentCustomer };
      this.saveStored('sb_customers_v4', this.customers);
    }
    this.saveStored('sb_active_customer_v4', this.currentCustomer);
    window.showToast('পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে! 🔒', 'success');
    return true;
  }

  deleteCustomerAccount() {
    if (!this.currentCustomer) return;
    const idToDelete = this.currentCustomer.id;
    this.customers = this.customers.filter(c => c.id !== idToDelete);
    this.currentCustomer = null;
    this.saveStored('sb_customers_v4', this.customers);
    this.saveStored('sb_active_customer_v4', null);
    window.updateCustomerHeaderUI();
    window.updateAdminStats();
    window.renderAdminCustomersTable();
    window.closeCustomerModal();
    window.showToast('আপনার অ্যাকাউন্ট স্থায়ীভাবে মুছে ফেলা হয়েছে।', 'info');
  }

  deleteCustomerByAdmin(customerId) {
    if (confirm('Are you sure you want to delete this customer account?')) {
      this.customers = this.customers.filter(c => c.id !== customerId);
      if (this.currentCustomer && this.currentCustomer.id === customerId) {
        this.currentCustomer = null;
        this.saveStored('sb_active_customer_v4', null);
      }
      this.saveStored('sb_customers_v4', this.customers);
      window.updateCustomerHeaderUI();
      window.updateAdminStats();
      window.renderAdminCustomersTable();
      window.showToast(`Customer account ${customerId} removed by Admin`, 'info');
    }
  }

  // Live Chat bi-directional methods
  sendCustomerChatMessage(text) {
    const msg = {
      id: 'msg-' + Date.now(),
      sender: 'customer',
      customerName: this.currentCustomer?.name || 'Customer',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.chatMessages.push(msg);
    this.saveStored('sb_chat_v4', this.chatMessages);
    window.renderChatMessages();
    window.renderAdminChatView();

    setTimeout(() => {
      this.simulateSmartReply(text);
    }, 900);
  }

  sendAdminChatMessage(text) {
    const msg = {
      id: 'msg-' + Date.now(),
      sender: 'admin',
      customerName: 'Admin Shajib (SB Group)',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.chatMessages.push(msg);
    this.saveStored('sb_chat_v4', this.chatMessages);
    window.renderChatMessages();
    window.renderAdminChatView();
    window.showToast('গ্রাহকের কাছে রিপ্লাই পাঠানো হয়েছে!', 'success');
  }

  simulateSmartReply(text) {
    const lower = text.toLowerCase();
    let reply = "ধন্যবাদ SB Group-এ মেসেজ দেওয়ার জন্য! আমাদের কাস্টমার প্রতিনিধি খুব দ্রুত রিপ্লাই দিচ্ছেন।";

    if (lower.includes('delivery') || lower.includes('time') || lower.includes('dhaka')) {
      reply = "📦 ডেলিভারি সময়: ঢাকা সিটির ভিতরে ২৪-৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে সারা বাংলাদেশে ৩-৪ কার্যদিবসে ডেলিভারি সম্পন্ন হয়।";
    } else if (lower.includes('bkash') || lower.includes('nagad') || lower.includes('payment')) {
      reply = "💳 বিকাশ ও নগদ পেমেন্ট: আপনি চেকআউটে বিকাশ বা নগদ নির্বাচন করে সরাসরি পেমেন্ট করতে পারেন। এছাড়া ক্যাশ অন ডেলিভারিও (COD) উপলব্ধ!";
    } else if (lower.includes('return') || lower.includes('warranty')) {
      reply = "🔄 রিটার্ন পলিসি: পণ্য গ্রহণের ৭ দিনের মধ্যে কোনো সমস্যা থাকলে দ্রুত ফ্রি রিপ্লেসমেন্ট পাবেন।";
    } else if (lower.includes('order') || lower.includes('track')) {
      reply = "🔍 আপনার অর্ডার ট্র্যাকিং: অ্যাকাউন্টের 'My Orders' সেকশনে গিয়ে লাইভ স্ট্যাটাস দেখতে পারবেন অথবা অর্ডার আইডি লিখুন।";
    }

    const autoMsg = {
      id: 'msg-' + Date.now(),
      sender: 'admin',
      customerName: 'SB Auto Assistant',
      text: reply,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.chatMessages.push(autoMsg);
    this.saveStored('sb_chat_v4', this.chatMessages);
    window.renderChatMessages();
    window.renderAdminChatView();
  }

  addNewProduct(productData) {
    const newProduct = {
      id: 'prod-' + Date.now(),
      name: productData.name,
      category: productData.category,
      price: parseFloat(productData.price) || 990,
      originalPrice: parseFloat(productData.originalPrice) || (parseFloat(productData.price) * 1.3),
      rating: 5.0,
      reviewsCount: 1,
      image: productData.image || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      description: productData.description || 'SB Group Premium Guaranteed Product.',
      badge: 'New Arrival',
      stock: parseInt(productData.stock) || 50,
      deliveryCharge: parseFloat(productData.deliveryCharge) || 0,
      specs: { 'Origin': 'Authentic Import', 'Warranty': '1 Year SB Group Care' }
    };
    this.products.unshift(newProduct);
    this.saveStored('sb_products_v4', this.products);
    window.renderRecommendedProducts();
    window.renderAdminProductsTable();
    window.updateAdminStats();
    window.showToast(`নতুন পণ্য "${newProduct.name}" ক্যাটালগে যুক্ত হয়েছে! 🚀`, 'success');
    return newProduct;
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.saveStored('sb_orders_v4', this.orders);
      window.renderOrdersTable();
      window.updateAdminStats();
      window.showToast(`Order #${orderId} marked as ${newStatus}`, 'success');
    }
  }

  cancelOrder(orderId) {
    if (confirm('এই অর্ডারটি বাতিল করতে চান? (Cancel this order?)')) {
      this.orders = this.orders.filter(o => o.id !== orderId);
      this.saveStored('sb_orders_v4', this.orders);
      window.renderOrdersTable();
      window.updateAdminStats();
      window.showToast(`Order #${orderId} সফলভাবে বাতিল হয়েছে`, 'info');
    }
  }

  deleteProductByAdmin(productId) {
    if (confirm('Are you sure you want to delete this product from the live catalog?')) {
      this.products = this.products.filter(p => p.id !== productId);
      this.saveStored('sb_products_v4', this.products);
      window.renderAdminProductsTable();
      window.renderRecommendedProducts();
      window.updateAdminStats();
      window.showToast('Product removed from catalog', 'info');
    }
  }
}

// Global Instance
window.sbApp = new AppState();

// Toast Notifications
window.showToast = function(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-emerald-600 text-white' : type === 'info' ? 'bg-slate-900 text-white' : 'bg-rose-600 text-white';
  const icon = type === 'success' ? '✓' : type === 'info' ? 'ℹ' : '⚠';

  toast.className = `toast flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl font-medium text-xs transition-all duration-300 ${bgClass}`;
  toast.innerHTML = `
    <span class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-[10px]">${icon}</span>
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
};

// Customer Header Account Label
window.updateCustomerHeaderUI = function() {
  const accountBtnText = document.getElementById('header-account-label');
  const user = window.sbApp.currentCustomer;

  if (accountBtnText) {
    if (user) {
      accountBtnText.textContent = user.name.split(' ')[0];
    } else {
      accountBtnText.textContent = 'Account';
    }
  }

  window.updateBadges();
};

window.updateBadges = function() {
  const cartCount = window.sbApp.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = document.getElementById('cart-badge');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
  }

  const wishlistCount = window.sbApp.wishlist.length;
  const wishlistBadge = document.getElementById('wishlist-badge');
  if (wishlistBadge) {
    wishlistBadge.textContent = wishlistCount;
    wishlistBadge.style.display = wishlistCount > 0 ? 'flex' : 'none';
  }
};

window.updateWishlistButtons = function() {
  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    const prodId = btn.dataset.productId;
    if (window.sbApp.wishlist.includes(prodId)) {
      btn.innerHTML = `<svg class="w-4 h-4 text-emerald-600 fill-emerald-600" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`;
    } else {
      btn.innerHTML = `<svg class="w-4 h-4 text-slate-400 hover:text-emerald-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`;
    }
  });
};

// Render Recommended Products in BDT
window.renderRecommendedProducts = function() {
  const grid = document.getElementById('recommended-grid');
  if (!grid) return;

  let products = [...window.sbApp.products];
  
  if (window.sbApp.selectedCategory && window.sbApp.selectedCategory !== 'All') {
    products = products.filter(p => p.category.toLowerCase().includes(window.sbApp.selectedCategory.toLowerCase()));
  }
  
  if (window.sbApp.searchQuery) {
    const query = window.sbApp.searchQuery.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
  }

  if (window.sbApp.sortOption === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (window.sbApp.sortOption === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (window.sbApp.sortOption === 'rating') {
    products.sort((a, b) => b.rating - a.rating);
  }

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 shadow-xs">
        <p class="font-semibold text-slate-700 text-base">কোনো পণ্য পাওয়া যায়নি</p>
        <p class="text-xs text-slate-400 mt-1">অনুগ্রহ করে ফিল্টার পরিবর্তন করুন অথবা অন্য নামে খুঁজুন।</p>
        <button onclick="window.resetFilters()" class="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition">রিসেট ফিল্টার</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = products.map(product => {
    const isWishlisted = window.sbApp.wishlist.includes(product.id);
    return `
      <div class="product-card group bg-white rounded-2xl border border-slate-100 shadow-sm p-3.5 flex flex-col justify-between hover:border-emerald-300 transition-all duration-300">
        <div class="relative bg-slate-50 rounded-xl overflow-hidden aspect-square flex items-center justify-center p-3 mb-3">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="product-img w-full h-full object-contain mix-blend-multiply transition-transform duration-500 cursor-pointer"
            onclick="window.openQuickView('${product.id}')"
            onerror="this.src='https://placehold.co/400x400/ecfdf5/059669?text=${encodeURIComponent(product.name)}'"
          />
          <button 
            data-product-id="${product.id}" 
            onclick="window.sbApp.toggleWishlist('${product.id}')" 
            class="btn-wishlist absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 shadow-sm flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-10"
            title="উইশলিস্ট-এ রাখুন"
          >
            ${isWishlisted ? 
              `<svg class="w-4 h-4 text-emerald-600 fill-emerald-600" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` : 
              `<svg class="w-4 h-4 text-slate-400 hover:text-emerald-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
            }
          </button>
          ${product.badge ? `<span class="absolute top-2.5 left-2.5 bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2 py-0.5 rounded-full border border-emerald-200/60">${product.badge}</span>` : ''}
        </div>

        <div class="flex-1 flex flex-col justify-between">
          <div>
            <h4 onclick="window.openQuickView('${product.id}')" class="font-semibold text-slate-800 text-xs sm:text-sm hover:text-emerald-600 cursor-pointer line-clamp-1 transition-colors">${product.name}</h4>
            
            <div class="flex items-center gap-1.5 mt-1">
              <div class="flex text-amber-400 text-xs">
                ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span class="text-[11px] text-slate-500 font-medium">(${product.rating})</span>
            </div>
          </div>

          ${product.deliveryCharge > 0 ? `<div class="flex items-center gap-1 mt-1.5 text-[10px] text-slate-500"><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg><span>ডেলিভারি: ${window.formatBDT(product.deliveryCharge)}</span></div>` : ''}
          <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
            <div class="flex items-baseline gap-1.5">
              <span class="text-sm sm:text-base font-bold text-slate-900">${window.formatBDT(product.price)}</span>
              ${product.originalPrice > product.price ? `<span class="text-[10px] text-slate-400 line-through">${window.formatBDT(product.originalPrice)}</span>` : ''}
            </div>

            <div class="flex items-center gap-1.5">
              <button 
                onclick="window.buyNow('${product.id}')" 
                class="px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-bold hover:bg-emerald-700 transition-all active:scale-90"
                title="এখনই কিনুন"
              >
                Buy Now
              </button>
              <button 
                onclick="window.sbApp.addToCart(window.sbApp.products.find(p => p.id === '${product.id}'))" 
                class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-90"
                title="Add to Cart"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// Render Bundles in BDT
window.renderBundles = function() {
  const container = document.getElementById('bundles-grid');
  if (!container) return;

  container.innerHTML = window.sbApp.bundles.map(bundle => {
    return `
      <div class="product-card bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col justify-between hover:border-emerald-300 transition-all duration-300">
        <div class="relative bg-slate-50 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center mb-3.5">
          <img 
            src="${bundle.image}" 
            alt="${bundle.name}" 
            class="product-img w-full h-full object-cover transition-transform duration-500"
            onerror="this.src='https://placehold.co/600x400/ecfdf5/059669?text=${encodeURIComponent(bundle.name)}'"
          />
        </div>

        <div>
          <h4 class="font-bold text-slate-800 text-base leading-snug">${bundle.name}</h4>
          <p class="text-xs text-slate-500 mt-0.5">${bundle.subtitle}</p>

          <div class="flex items-center justify-between mt-3 pt-2">
            <div class="flex items-baseline gap-2">
              <span class="text-base sm:text-lg font-bold text-slate-900">${window.formatBDT(bundle.price)}</span>
              <span class="text-xs text-slate-400 line-through">${window.formatBDT(bundle.originalPrice)}</span>
            </div>
            <span class="bg-emerald-100 text-emerald-800 font-semibold text-xs px-2.5 py-1 rounded-md">
              ${bundle.discount}
            </span>
          </div>

          <button 
            onclick="window.sbApp.addToCart({ id: '${bundle.id}', name: '${bundle.name}', price: ${bundle.price}, image: '${bundle.image}' })" 
            class="w-full mt-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-98"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            বান্ডেল কার্টে নিন
          </button>
        </div>
      </div>
    `;
  }).join('');
};

// Render Comparison Matrix in BDT
window.renderComparisonTable = function() {
  const tbody = document.getElementById('comparison-tbody');
  if (!tbody) return;

  tbody.innerHTML = COMPARISON_DATA.map(row => {
    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
        <td class="py-3 px-3 text-slate-700 font-medium text-xs">
          <span>${row.feature}</span>
        </td>
        <td class="py-3 px-2 text-center text-xs">
          ${row.modelA === true ? 
            `<span class="text-emerald-600 font-bold text-sm">✓</span>` : 
            row.modelA === false ? `<span class="text-slate-300 font-bold text-sm">—</span>` : 
            `<span class="font-bold text-slate-800">${row.modelA}</span>`}
        </td>
        <td class="py-3 px-2 text-center text-xs">
          ${row.modelB === true ? 
            `<span class="text-emerald-600 font-bold text-sm">✓</span>` : 
            row.modelB === false ? `<span class="text-slate-300 font-bold text-sm">—</span>` : 
            `<span class="font-bold text-slate-800">${row.modelB}</span>`}
        </td>
        <td class="py-3 px-2 text-center text-xs">
          ${row.modelC === true ? 
            `<span class="text-emerald-600 font-bold text-sm">✓</span>` : 
            row.modelC === false ? `<span class="text-slate-300 font-bold text-sm">—</span>` : 
            `<span class="font-bold text-slate-800">${row.modelC}</span>`}
        </td>
      </tr>
    `;
  }).join('');
};

// Render Shopping Cart in BDT
window.renderCart = function() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const freeShippingBar = document.getElementById('free-shipping-progress');
  const freeShippingText = document.getElementById('free-shipping-text');
  if (!container) return;

  const items = window.sbApp.cart;
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const freeShippingThreshold = 2000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  if (subtotalEl) subtotalEl.textContent = window.formatBDT(subtotal);

  if (freeShippingBar) {
    freeShippingBar.style.width = `${progressPercent}%`;
  }
  if (freeShippingText) {
    if (subtotal >= freeShippingThreshold) {
      freeShippingText.innerHTML = `🎉 <strong class="text-emerald-600">অভিনন্দন!</strong> আপনি সারাদেশে <strong>ফ্রি হোম ডেলিভারি</strong> পাচ্ছেন!`;
    } else {
      const remaining = freeShippingThreshold - subtotal;
      freeShippingText.innerHTML = `আর মাত্র <strong class="text-slate-800">${window.formatBDT(remaining)}</strong> টাকার অর্ডার করলে <strong>ফ্রি হোম ডেলিভারি</strong> পাবেন!`;
    }
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-400">
        <svg class="w-16 h-16 mx-auto mb-3 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <p class="font-semibold text-slate-700">আপনার শপিং ব্যাগ খালি</p>
        <p class="text-xs text-slate-400 mt-1">আমাদের সেরা অফার ও কালেকশন দেখতে শপিং শুরু করুন!</p>
        <button onclick="window.closeCart(); window.scrollToSection('recommended')" class="mt-4 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition">
          শপিং শুরু করুন
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="flex items-center gap-3.5 py-3 border-b border-slate-100 last:border-0">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-contain bg-slate-50 p-1 border border-slate-100">
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-semibold text-slate-800 truncate">${item.name}</h5>
        <div class="text-xs font-bold text-emerald-700 mt-0.5">${window.formatBDT(item.price)}</div>
        
        <div class="flex items-center gap-2 mt-2">
          <button onclick="window.sbApp.updateCartQty('${item.id}', -1)" class="w-6 h-6 rounded-md bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-xs">-</button>
          <span class="text-xs font-semibold text-slate-800 w-5 text-center">${item.qty}</span>
          <button onclick="window.sbApp.updateCartQty('${item.id}', 1)" class="w-6 h-6 rounded-md bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-xs">+</button>
        </div>
      </div>
      <button onclick="window.sbApp.removeFromCart('${item.id}')" class="text-slate-400 hover:text-rose-500 p-1 text-sm" title="Remove">
        ✕
      </button>
    </div>
  `).join('');
};

window.selectCategory = function(categoryName) {
  window.sbApp.selectedCategory = categoryName;
  document.querySelectorAll('.category-btn').forEach(btn => {
    if (btn.dataset.category === categoryName) {
      btn.classList.add('ring-2', 'ring-emerald-600', 'ring-offset-2');
    } else {
      btn.classList.remove('ring-2', 'ring-emerald-600', 'ring-offset-2');
    }
  });

  const catLabel = document.getElementById('active-category-label');
  if (catLabel) {
    catLabel.textContent = categoryName === 'All' ? 'সব পণ্য' : categoryName;
  }

  window.renderRecommendedProducts();
  window.scrollToSection('recommended');
  window.showToast(`ক্যাটাগরি: ${categoryName}`, 'info');
};

window.setSortOption = function(option) {
  window.sbApp.sortOption = option;
  window.renderRecommendedProducts();
};

window.resetFilters = function() {
  window.sbApp.selectedCategory = 'All';
  window.sbApp.searchQuery = '';
  window.sbApp.sortOption = 'featured';
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) searchInput.value = '';
  const sortSelect = document.getElementById('sort-products-select');
  if (sortSelect) sortSelect.value = 'featured';
  const autocomplete = document.getElementById('search-autocomplete');
  if (autocomplete) autocomplete.classList.add('hidden');
  
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('ring-2', 'ring-emerald-600', 'ring-offset-2');
  });
  window.renderRecommendedProducts();
  window.showToast('ফিল্টার রিসেট করা হয়েছে', 'info');
};

// Search Autocomplete
window.handleSearchInput = function(query) {
  window.sbApp.searchQuery = query;
  window.renderRecommendedProducts();

  const autocomplete = document.getElementById('search-autocomplete');
  if (!autocomplete) return;

  if (!query || query.trim().length === 0) {
    autocomplete.classList.add('hidden');
    return;
  }

  const matches = window.sbApp.products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4);

  if (matches.length === 0) {
    autocomplete.innerHTML = `<div class="p-3 text-center text-xs text-slate-400">কোনো পণ্য মেলেনি</div>`;
  } else {
    autocomplete.innerHTML = matches.map(p => `
      <div onclick="window.openQuickView('${p.id}'); document.getElementById('search-autocomplete').classList.add('hidden');" class="flex items-center gap-3 p-2.5 hover:bg-emerald-50 rounded-xl cursor-pointer transition">
        <img src="${p.image}" class="w-10 h-10 rounded-lg object-contain bg-slate-50 p-1 border border-slate-100">
        <div class="flex-1 min-w-0">
          <div class="text-xs font-semibold text-slate-800 truncate">${p.name}</div>
          <div class="text-[10px] text-slate-400">${p.category} • <span class="text-emerald-700 font-bold">${window.formatBDT(p.price)}</span></div>
        </div>
        <button onclick="event.stopPropagation(); window.sbApp.addToCart(window.sbApp.products.find(x => x.id === '${p.id}'));" class="px-2 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-lg hover:bg-emerald-200">
          + কার্ট
        </button>
      </div>
    `).join('');
  }

  autocomplete.classList.remove('hidden');
};

window.scrollToSection = function(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Buy Now — skip cart, go straight to checkout with single product
window.buyNow = function(productId) {
  const prod = window.sbApp.products.find(p => p.id === productId);
  if (!prod) return;
  window.sbApp.cart = [{ id: prod.id, name: prod.name, price: prod.price, qty: 1, image: prod.image, deliveryCharge: prod.deliveryCharge || 0 }];
  window.sbApp.saveStored('sb_cart_v4', window.sbApp.cart);
  window.renderCart();
  window.updateBadges();
  window.openCheckout();
};

window.openCart = function() {
  const backdrop = document.getElementById('cart-backdrop');
  const panel = document.getElementById('cart-panel');
  if (backdrop && panel) {
    backdrop.classList.add('active');
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCart = function() {
  const backdrop = document.getElementById('cart-backdrop');
  const panel = document.getElementById('cart-panel');
  if (backdrop && panel) {
    backdrop.classList.remove('active');
    panel.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Quick View Modal
window.openQuickView = function(productId) {
  const product = window.sbApp.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');
  if (!modal || !content) return;

  const specsList = Object.entries(product.specs || {}).map(([key, val]) => `
    <div class="flex justify-between py-1.5 border-b border-slate-100 text-xs">
      <span class="text-slate-500">${key}:</span>
      <span class="font-medium text-slate-800">${val}</span>
    </div>
  `).join('');

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div class="bg-slate-50 rounded-2xl p-6 flex items-center justify-center border border-slate-100">
        <img src="${product.image}" alt="${product.name}" class="max-h-72 object-contain mix-blend-multiply">
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-0.5 rounded-full font-semibold border border-emerald-200">${product.category}</span>
            <span class="text-xs text-slate-400">•</span>
            <span class="text-xs text-emerald-600 font-medium">ইন-স্টক (${product.stock} টি)</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900">${product.name}</h3>
          
          <div class="flex items-center gap-2 mt-2">
            <div class="flex text-amber-400 text-sm">
              ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span class="text-xs font-semibold text-slate-700">${product.rating}</span>
            <span class="text-xs text-slate-400">(${product.reviewsCount} জন রিভিউ)</span>
          </div>

          <div class="flex items-baseline gap-3 mt-4">
            <span class="text-2xl font-black text-slate-900">${window.formatBDT(product.price)}</span>
            ${product.originalPrice > product.price ? `<span class="text-sm text-slate-400 line-through">${window.formatBDT(product.originalPrice)}</span>` : ''}
            <span class="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">সেভ ${(100 - (product.price / product.originalPrice * 100)).toFixed(0)}%</span>
          </div>

          <p class="text-xs text-slate-600 mt-4 leading-relaxed">${product.description}</p>

          <div class="mt-4 pt-3 border-t border-slate-100">
            <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">স্পেসিফিকেশন</h5>
            <div class="space-y-0.5">
              ${specsList}
            </div>
          </div>
        </div>

        <div class="flex gap-3 mt-6 pt-4 border-t border-slate-100">
          <button 
            onclick="window.sbApp.addToCart(window.sbApp.products.find(p => p.id === '${product.id}')); window.closeQuickView();" 
            class="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-xs sm:text-sm transition shadow-md shadow-emerald-600/20 active:scale-98"
          >
            কার্টে নিন - ${window.formatBDT(product.price)}
          </button>
          <button 
            onclick="window.sbApp.toggleWishlist('${product.id}')" 
            class="px-4 py-3 rounded-xl border border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-600 transition"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeQuickView = function() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.openComparisonTool = function() {
  const modal = document.getElementById('comparison-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeComparisonTool = function() {
  const modal = document.getElementById('comparison-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// Customer Account Modal
window.openAccountModal = function() {
  const modal = document.getElementById('customer-account-modal');
  if (!modal) return;

  const user = window.sbApp.currentCustomer;
  if (!user) {
    window.switchAccountTab('login');
  } else {
    window.switchAccountTab('profile');
    window.populateCustomerProfileData();
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeCustomerModal = function() {
  const modal = document.getElementById('customer-account-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.switchAccountTab = function(tabName) {
  const loginSection = document.getElementById('tab-account-login');
  const registerSection = document.getElementById('tab-account-register');
  const profileSection = document.getElementById('tab-account-profile');
  const ordersSection = document.getElementById('tab-account-orders');
  const passwordSection = document.getElementById('tab-account-password');
  const deleteSection = document.getElementById('tab-account-delete');

  const tabs = [loginSection, registerSection, profileSection, ordersSection, passwordSection, deleteSection];
  tabs.forEach(t => { if (t) t.classList.add('hidden'); });

  if (tabName === 'login' && loginSection) loginSection.classList.remove('hidden');
  if (tabName === 'register' && registerSection) registerSection.classList.remove('hidden');
  if (tabName === 'profile' && profileSection) {
    profileSection.classList.remove('hidden');
    window.populateCustomerProfileData();
  }
  if (tabName === 'orders' && ordersSection) {
    ordersSection.classList.remove('hidden');
    window.renderCustomerOrderHistory();
  }
  if (tabName === 'password' && passwordSection) passwordSection.classList.remove('hidden');
  if (tabName === 'delete' && deleteSection) deleteSection.classList.remove('hidden');

  document.querySelectorAll('.account-nav-btn').forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add('bg-emerald-600', 'text-white');
      btn.classList.remove('text-slate-600', 'bg-slate-100');
    } else {
      btn.classList.remove('bg-emerald-600', 'text-white');
      btn.classList.add('text-slate-600', 'bg-slate-100');
    }
  });
};

window.populateCustomerProfileData = function() {
  const user = window.sbApp.currentCustomer;
  if (!user) return;

  const nameInput = document.getElementById('cust-profile-name');
  const emailInput = document.getElementById('cust-profile-email');
  const phoneInput = document.getElementById('cust-profile-phone');
  const addressInput = document.getElementById('cust-profile-address');

  if (nameInput) nameInput.value = user.name;
  if (emailInput) emailInput.value = user.email;
  if (phoneInput) phoneInput.value = user.phone;
  if (addressInput) addressInput.value = user.address;

  const greetingEl = document.getElementById('cust-welcome-name');
  if (greetingEl) greetingEl.textContent = user.name;
};

window.handleCustomerLoginSubmit = function(e) {
  if (e) e.preventDefault();
  const emailOrPhone = document.getElementById('login-email-phone')?.value.trim();
  const password = document.getElementById('login-password')?.value;

  if (window.sbApp.loginCustomer(emailOrPhone, password)) {
    window.switchAccountTab('profile');
  }
};

window.handleCustomerRegisterSubmit = function(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('reg-name')?.value.trim();
  const email = document.getElementById('reg-email')?.value.trim();
  const phone = document.getElementById('reg-phone')?.value.trim();
  const password = document.getElementById('reg-password')?.value;
  const address = document.getElementById('reg-address')?.value.trim();

  if (window.sbApp.registerCustomer(name, email, phone, password, address)) {
    window.switchAccountTab('profile');
  }
};

window.handleCustomerProfileUpdate = function(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('cust-profile-name')?.value.trim();
  const phone = document.getElementById('cust-profile-phone')?.value.trim();
  const address = document.getElementById('cust-profile-address')?.value.trim();

  window.sbApp.updateCustomerProfile(name, phone, address);
};

window.handleCustomerPasswordChange = function(e) {
  if (e) e.preventDefault();
  const currentPass = document.getElementById('pass-current')?.value;
  const newPass = document.getElementById('pass-new')?.value;
  const confirmPass = document.getElementById('pass-confirm')?.value;

  if (newPass !== confirmPass) {
    window.showToast('নতুন পাসওয়ার্ড দুটি মিলছে না!', 'error');
    return;
  }
  if (newPass.length < 6) {
    window.showToast('পাসওয়ার্ড ন্যূনতম ৬ অক্ষরের হতে হবে!', 'error');
    return;
  }

  if (window.sbApp.changeCustomerPassword(currentPass, newPass)) {
    document.getElementById('pass-change-form')?.reset();
  }
};

window.handleCustomerAccountDelete = function() {
  const confirmText = prompt('আপনার অ্যাকাউন্ট স্থায়ীভাবে মুছে ফেলার জন্য "DELETE" লিখুন:');
  if (confirmText === 'DELETE') {
    window.sbApp.deleteCustomerAccount();
  } else {
    window.showToast('মুছে ফেলার প্রক্রিয়া বাতিল করা হয়েছে', 'info');
  }
};

window.renderCustomerOrderHistory = function() {
  const container = document.getElementById('cust-orders-list');
  if (!container) return;

  const user = window.sbApp.currentCustomer;
  const orders = window.sbApp.orders.filter(o => 
    user && (o.email.toLowerCase() === user.email.toLowerCase() || o.customer === user.name)
  );

  if (orders.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-400 text-xs">আপনার কোনো অর্ডার পাওয়া যায়নি।</div>`;
    return;
  }

  container.innerHTML = orders.map(order => `
    <div class="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-slate-900 text-xs">#${order.id}</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full font-bold ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}">${order.status}</span>
        </div>
        <p class="text-[11px] text-slate-500 mt-1">${order.date} • ${order.items.length} টি পণ্য</p>
        <p class="text-xs font-bold text-emerald-700 mt-0.5">${window.formatBDT(order.total)}</p>
      </div>
      <button onclick="window.viewOrderDetails('${order.id}')" class="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 rounded-lg text-xs font-semibold self-start sm:self-auto transition">
        রসিদ দেখুন 📄
      </button>
    </div>
  `).join('');
};

// Checkout
window.openCheckout = function() {
  if (window.sbApp.cart.length === 0) {
    window.showToast('আপনার কার্ট খালি! অনুগ্রহ করে পণ্য যোগ করুন।', 'info');
    return;
  }
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    window.closeCart();
    
    const user = window.sbApp.currentCustomer;
    if (user) {
      const nameInput = document.getElementById('checkout-name');
      const emailInput = document.getElementById('checkout-email');
      const phoneInput = document.getElementById('checkout-phone');
      const addressInput = document.getElementById('checkout-address');
      if (nameInput) nameInput.value = user.name;
      if (emailInput) emailInput.value = user.email;
      if (phoneInput) phoneInput.value = user.phone;
      if (addressInput) addressInput.value = user.address;
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeCheckout = function() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.submitCheckout = function(e) {
  if (e) e.preventDefault();
  const subtotal = window.sbApp.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryTotal = window.sbApp.cart.reduce((sum, item) => sum + (item.deliveryCharge || 0), 0);
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value || 'Cash on Delivery (COD)';
  
  const customerName = document.getElementById('checkout-name')?.value || window.sbApp.currentCustomer?.name || 'Valued Customer';
  const customerEmail = document.getElementById('checkout-email')?.value || window.sbApp.currentCustomer?.email || 'customer@sbgroup.com';
  const customerPhone = document.getElementById('checkout-phone')?.value || '01700000000';
  const address = document.getElementById('checkout-address')?.value || 'Dhaka, Bangladesh';

  const newOrder = {
    id: 'ORD-' + Math.floor(10000 + Math.random() * 90000),
    customer: customerName,
    email: customerEmail,
    phone: customerPhone,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    items: [...window.sbApp.cart],
    total: subtotal + deliveryTotal,
    deliveryCharge: deliveryTotal,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    status: 'Pending',
    address: address,
    paymentMethod: paymentMethod
  };

  window.sbApp.orders.unshift(newOrder);
  window.sbApp.saveStored('sb_orders_v4', window.sbApp.orders);
  window.sbApp.cart = [];
  window.sbApp.saveStored('sb_cart_v4', []);
  window.renderCart();
  window.updateBadges();
  window.closeCheckout();

  window.showToast(`অর্ডার সফল হয়েছে! রেফারেন্স: #${newOrder.id} 🎉`, 'success');
  window.renderOrdersTable();
  window.updateAdminStats();
};

// Hidden Admin Portal Toggle
window.openAdminLoginModal = function() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
};

window.closeAdminLoginModal = function() {
  const modal = document.getElementById('admin-login-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

window.handleAdminLogin = function(e) {
  if (e) e.preventDefault();
  const email = document.getElementById('admin-email')?.value;
  const password = document.getElementById('admin-password')?.value;

  if (email === 'admin@sbgroup.com' && password === 'sbgroup2026') {
    window.sbApp.isAdminAuthenticated = true;
    window.closeAdminLoginModal();
    window.switchView('admin-dashboard');
    window.showToast('এডমিন লগইন সফল হয়েছে! স্বাগতম Admin Shajib.', 'success');
  } else {
    window.showToast('ভুল এডমিন তথ্য! ডেমো: admin@sbgroup.com / sbgroup2026', 'error');
  }
};

window.fillDemoCredentials = function() {
  const email = document.getElementById('admin-email');
  const password = document.getElementById('admin-password');
  if (email && password) {
    email.value = 'admin@sbgroup.com';
    password.value = 'sbgroup2026';
    window.showToast('ডেমো এডমিন তথ্য দেওয়া হয়েছে!', 'info');
  }
};

window.switchView = function(viewName) {
  window.sbApp.currentView = viewName;
  const storefrontView = document.getElementById('view-storefront');
  const adminDashboardView = document.getElementById('view-admin-dashboard');

  if (storefrontView) storefrontView.classList.toggle('hidden', viewName !== 'storefront');
  if (adminDashboardView) adminDashboardView.classList.toggle('hidden', viewName !== 'admin-dashboard');

  if (viewName === 'admin-dashboard') {
    window.renderOrdersTable();
    window.renderAdminCustomersTable();
    window.renderAdminProductsTable();
    window.renderAdminChatView();
    window.updateAdminStats();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.adminLogout = function() {
  window.sbApp.isAdminAuthenticated = false;
  window.showToast('এডমিন কনসোল থেকে লগআউট হয়েছে', 'info');
  window.switchView('storefront');
};

// ========================================================
// ADMIN OPERATIONS CONSOLE TAB SWITCHER (EXACT UI MATCH)
// ========================================================
window.switchAdminTab = function(tabName) {
  window.sbApp.adminActiveTab = tabName;

  const tabOrders = document.getElementById('admin-tab-orders-content');
  const tabCustomers = document.getElementById('admin-tab-customers-content');
  const tabAddProduct = document.getElementById('admin-tab-addproduct-content');
  const tabCatalog = document.getElementById('admin-tab-catalog-content');
  const tabChat = document.getElementById('admin-tab-chat-content');

  const allSections = [tabOrders, tabCustomers, tabAddProduct, tabCatalog, tabChat];
  allSections.forEach(s => { if (s) s.classList.add('hidden'); });

  if (tabName === 'orders' && tabOrders) tabOrders.classList.remove('hidden');
  if (tabName === 'customers' && tabCustomers) {
    tabCustomers.classList.remove('hidden');
    window.renderAdminCustomersTable();
  }
  if (tabName === 'add-product' && tabAddProduct) tabAddProduct.classList.remove('hidden');
  if (tabName === 'catalog' && tabCatalog) {
    tabCatalog.classList.remove('hidden');
    window.renderAdminProductsTable();
  }
  if (tabName === 'chat' && tabChat) {
    tabChat.classList.remove('hidden');
    window.renderAdminChatView();
  }

  // Update tab buttons active styling
  document.querySelectorAll('.admin-nav-tab-btn').forEach(btn => {
    if (btn.dataset.admintab === tabName) {
      btn.className = "admin-nav-tab-btn flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-50 text-emerald-800 border-2 border-emerald-500 shadow-xs transition-all";
    } else {
      btn.className = "admin-nav-tab-btn flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all border border-transparent";
    }
  });
};

// Admin Operations KPI Updates (Matching Screenshot metrics)
window.updateAdminStats = function() {
  const revEl = document.getElementById('admin-kpi-revenue');
  const ordersEl = document.getElementById('admin-kpi-orders');
  const custEl = document.getElementById('admin-kpi-customers');
  const fulfillEl = document.getElementById('admin-kpi-fulfillment');

  const countOrders = window.sbApp.orders.length;
  const countCustomers = window.sbApp.customers.length;
  const totalRev = window.sbApp.orders.reduce((sum, o) => sum + o.total, 0);

  if (revEl) revEl.textContent = window.formatBDT(totalRev);
  if (ordersEl) ordersEl.textContent = countOrders.toString();
  if (custEl) custEl.textContent = `${countCustomers} Accounts`;
  if (fulfillEl) fulfillEl.textContent = '98.4%';

  // Update Tab Badges
  const tabOrdersBadge = document.getElementById('tab-badge-orders-count');
  const tabCustBadge = document.getElementById('tab-badge-cust-count');
  const tabCatalogBadge = document.getElementById('tab-badge-catalog-count');

  if (tabOrdersBadge) tabOrdersBadge.textContent = `(${countOrders})`;
  if (tabCustBadge) tabCustBadge.textContent = `(${countCustomers})`;
  if (tabCatalogBadge) tabCatalogBadge.textContent = `(${window.sbApp.products.length})`;
};

// Render Orders Table Matching Screenshot (ORD-XXXXX, Date, Items, Total, Payment, Status dropdown, Details)
window.renderOrdersTable = function() {
  const tbody = document.getElementById('admin-orders-tbody');
  if (!tbody) return;

  const orders = window.sbApp.orders;
  tbody.innerHTML = orders.map(order => {
    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors text-xs">
        <td class="py-4 px-4 font-extrabold text-slate-900">${order.id}</td>
        <td class="py-4 px-4">
          <div class="font-bold text-slate-900">${order.customer}</div>
          <div class="text-[11px] text-slate-400">${order.email}</div>
        </td>
        <td class="py-4 px-4 text-slate-500 font-medium">${order.date}</td>
        <td class="py-4 px-4 text-slate-600">${order.items.length} item${order.items.length > 1 ? 's' : ''}</td>
        <td class="py-4 px-4 font-black text-slate-900">${window.formatBDT(order.total)}</td>
        <td class="py-4 px-4 text-slate-600 font-medium">${order.paymentMethod || 'Cash on Delivery'}</td>
        <td class="py-4 px-4">
          <select 
            onchange="window.sbApp.updateOrderStatus('${order.id}', this.value)" 
            class="text-[11px] font-bold rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer border ${
              order.status === 'Pending' ? 'bg-amber-50 text-amber-800 border-amber-300' :
              order.status === 'Processing' ? 'bg-blue-50 text-blue-800 border-blue-300' :
              order.status === 'Shipped' ? 'bg-purple-50 text-purple-800 border-purple-300' :
              'bg-emerald-50 text-emerald-800 border-emerald-300'
            }"
          >
            <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending ⌵</option>
            <option value="Processing" ${order.status === 'Processing' ? 'selected' : ''}>Processing ⌵</option>
            <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>Shipped ⌵</option>
            <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered ⌵</option>
          </select>
        </td>
        <td class="py-4 px-4 text-right">
          <div class="flex items-center justify-end gap-2">
            <button 
              onclick="window.viewOrderDetails('${order.id}')" 
              class="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
            >
              <span>👁</span>
              <span>Details</span>
            </button>
            <button 
              onclick="window.sbApp.cancelOrder('${order.id}')" 
              class="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition"
            >
              <span>✕</span>
              <span>Cancel</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
};

// Render Customer Accounts Table (Tab 2)
window.renderAdminCustomersTable = function() {
  const tbody = document.getElementById('admin-customers-tbody');
  if (!tbody) return;

  const customers = window.sbApp.customers;
  tbody.innerHTML = customers.map(c => {
    const custOrders = window.sbApp.orders.filter(o => o.email.toLowerCase() === c.email.toLowerCase());
    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/70 text-xs">
        <td class="py-3.5 px-4 font-bold text-slate-900">${c.id}</td>
        <td class="py-3.5 px-4">
          <div class="font-bold text-slate-900">${c.name}</div>
          <div class="text-[11px] text-emerald-700 font-semibold">${c.phone}</div>
        </td>
        <td class="py-3.5 px-4 text-slate-600">${c.email}</td>
        <td class="py-3.5 px-4 text-slate-600 max-w-xs truncate">${c.address}</td>
        <td class="py-3.5 px-4 text-slate-500">${c.joinedDate || '2026-09'}</td>
        <td class="py-3.5 px-4 font-bold text-slate-800">${custOrders.length} Order(s)</td>
        <td class="py-3.5 px-4 text-right">
          <button 
            onclick="window.sbApp.deleteCustomerByAdmin('${c.id}')" 
            class="px-2.5 py-1 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition"
          >
            Delete Account
          </button>
        </td>
      </tr>
    `;
  }).join('');
};

// Render Catalog Items (Tab 4)
window.renderAdminProductsTable = function() {
  const tbody = document.getElementById('admin-products-tbody');
  if (!tbody) return;

  tbody.innerHTML = window.sbApp.products.map(p => `
    <tr class="border-b border-slate-100 hover:bg-slate-50/70 text-xs">
      <td class="py-3 px-4">
        <div class="flex items-center gap-2.5">
          <img src="${p.image}" class="w-10 h-10 rounded-lg object-contain bg-slate-50 p-1 border border-slate-200">
          <div>
            <div class="font-bold text-slate-900">${p.name}</div>
            <div class="text-[10px] text-slate-400">${p.category}</div>
          </div>
        </div>
      </td>
      <td class="py-3 px-4 font-bold text-slate-900">${window.formatBDT(p.price)}</td>
      <td class="py-3 px-4 font-semibold text-emerald-700">${p.stock} units</td>
      <td class="py-3 px-4 text-amber-500 font-bold">★ ${p.rating}</td>
      <td class="py-3 px-4 text-right">
        <button onclick="window.sbApp.deleteProductByAdmin('${p.id}')" class="text-rose-600 hover:text-rose-800 font-semibold p-1">Delete</button>
      </td>
    </tr>
  `).join('');
};

// Admin Live Support Chat View & Controls (Tab 5)
window.renderAdminChatView = function() {
  const container = document.getElementById('admin-chat-messages-container');
  if (!container) return;

  const msgs = window.sbApp.chatMessages;
  container.innerHTML = msgs.map(m => {
    const isAdmin = m.sender === 'admin';
    return `
      <div class="flex ${isAdmin ? 'justify-end' : 'justify-start'} mb-2.5">
        <div class="admin-chat-message-bubble ${isAdmin ? 'bg-emerald-600 text-white rounded-tr-xs' : 'bg-slate-100 text-slate-800 rounded-tl-xs'} shadow-2xs">
          <div class="text-[9px] font-bold ${isAdmin ? 'text-emerald-100' : 'text-slate-500'} mb-0.5">${isAdmin ? 'SB Support' : m.customerName}</div>
          <p>${m.text}</p>
          <span class="block text-[8px] mt-1 ${isAdmin ? 'text-emerald-200 text-right' : 'text-slate-400'}">${m.time}</span>
        </div>
      </div>
    `;
  }).join('');

  container.scrollTop = container.scrollHeight;
};

window.sendAdminChatReply = function() {
  const input = document.getElementById('admin-chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  window.sbApp.sendAdminChatMessage(text);
  input.value = '';
};

// Storefront Floating Chat Window
window.toggleChat = function() {
  const chatWindow = document.getElementById('chat-window');
  const chatBadge = document.getElementById('chat-unread-badge');
  if (!chatWindow) return;

  window.sbApp.chatOpen = !window.sbApp.chatOpen;
  if (window.sbApp.chatOpen) {
    chatWindow.classList.remove('hidden');
    chatWindow.classList.add('flex');
    if (chatBadge) chatBadge.style.display = 'none';
    window.scrollChatToBottom();
  } else {
    chatWindow.classList.add('hidden');
    chatWindow.classList.remove('flex');
  }
};

window.sendCustomerChat = function(customText) {
  const input = document.getElementById('chat-input');
  const text = customText || (input ? input.value.trim() : '');
  if (!text) return;

  if (input && !customText) input.value = '';
  window.sbApp.sendCustomerChatMessage(text);
};

window.renderChatMessages = function() {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  container.innerHTML = window.sbApp.chatMessages.map(msg => {
    const isCustomer = msg.sender === 'customer';
    return `
      <div class="flex ${isCustomer ? 'justify-end' : 'justify-start'}">
        <div class="max-w-[82%] ${isCustomer ? 'bg-emerald-600 text-white rounded-2xl rounded-tr-xs' : 'bg-slate-100 text-slate-800 rounded-2xl rounded-tl-xs'} px-3.5 py-2.5 text-xs shadow-sm">
          <div class="text-[9px] font-bold ${isCustomer ? 'text-emerald-100 text-right' : 'text-emerald-700'} mb-0.5">
            ${isCustomer ? 'আপনি (Customer)' : 'SB সাপোর্ট বিশেষজ্ঞ'}
          </div>
          <p class="leading-relaxed">${msg.text}</p>
          <span class="block text-[9px] mt-1 ${isCustomer ? 'text-emerald-200 text-right' : 'text-slate-400'}">${msg.time}</span>
        </div>
      </div>
    `;
  }).join('');

  window.scrollChatToBottom();
};

window.scrollChatToBottom = function() {
  const container = document.getElementById('chat-messages-container');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
};

// Admin Add Product Handling
window.handleAddProduct = function(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('product-title')?.value;
  const category = document.getElementById('product-category')?.value;
  const price = document.getElementById('product-price')?.value;
  const originalPrice = document.getElementById('product-compare-price')?.value;
  const stock = document.getElementById('product-stock')?.value;
  const description = document.getElementById('product-description')?.value;
  const imageInput = document.getElementById('product-image-preview-src')?.value;
  const deliveryCharge = document.getElementById('product-delivery-charge')?.value;

  if (!name || !price) {
    window.showToast('পণ্যের নাম এবং মূল্য আবশ্যক!', 'error');
    return;
  }

  window.sbApp.addNewProduct({
    name,
    category,
    price,
    originalPrice,
    stock,
    description,
    deliveryCharge,
    image: imageInput || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
  });

  document.getElementById('add-product-form')?.reset();
  window.switchAdminTab('catalog');
};

// Invoice Modal (Details button in screenshot)
window.viewOrderDetails = function(orderId) {
  const order = window.sbApp.orders.find(o => o.id === orderId);
  if (!order) return;

  const modal = document.getElementById('invoice-modal');
  const content = document.getElementById('invoice-content');
  if (!modal || !content) return;

  const itemsHtml = order.items.map(item => `
    <tr class="border-b border-slate-100 text-xs">
      <td class="py-2.5">${item.name}</td>
      <td class="py-2.5 text-center">${item.qty}</td>
      <td class="py-2.5 text-right">${window.formatBDT(item.price)}</td>
      <td class="py-2.5 text-right font-bold text-slate-800">${window.formatBDT(item.price * item.qty)}</td>
    </tr>
  `).join('');

  content.innerHTML = `
    <div class="p-6 sm:p-8 space-y-6">
      <div class="flex justify-between items-start border-b border-slate-100 pb-5">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center text-xs">SB</span>
            <span class="text-lg font-black text-slate-900">SB Group Invoice</span>
          </div>
          <p class="text-xs text-slate-500">Order Reference: <strong class="text-slate-800">#${order.id}</strong></p>
          <p class="text-xs text-slate-500">Date: ${order.date}</p>
        </div>
        <div class="text-right">
          <span class="px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">
            ${order.status}
          </span>
          <p class="text-[11px] text-slate-500 mt-2">পেমেন্ট: ${order.paymentMethod || 'Cash on Delivery'}</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
        <div>
          <span class="font-bold text-slate-700 block mb-1">গ্রাহকের বিবরণ</span>
          <p class="font-medium text-slate-800">${order.customer}</p>
          <p class="text-slate-500">${order.phone || order.email}</p>
        </div>
        <div>
          <span class="font-bold text-slate-700 block mb-1">ডেলিভারি ঠিকানা</span>
          <p class="text-slate-600">${order.address}</p>
        </div>
      </div>

      <div>
        <table class="w-full text-left">
          <thead>
            <tr class="border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase">
              <th class="pb-2">পণ্যের বিবরণ</th>
              <th class="pb-2 text-center">পরিমাণ</th>
              <th class="pb-2 text-right">একক মূল্য</th>
              <th class="pb-2 text-right">মোট</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
      </div>

      <div class="border-t border-slate-100 pt-4 space-y-1.5 text-xs text-right">
        <div class="flex justify-between text-slate-500">
          <span>সাবটোটাল:</span>
          <span>${window.formatBDT(order.total - (order.deliveryCharge || 0))}</span>
        </div>
        <div class="flex justify-between text-slate-500">
          <span>হোম ডেলিভারি:</span>
          <span class="${order.deliveryCharge > 0 ? 'text-slate-800 font-bold' : 'text-emerald-600 font-semibold'}">${order.deliveryCharge > 0 ? window.formatBDT(order.deliveryCharge) : 'ফ্রি (Free)'}</span>
        </div>
        <div class="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-100">
          <span>সর্বমোট প্রদেয়:</span>
          <span>${window.formatBDT(order.total)}</span>
        </div>
      </div>

      <div class="pt-2 flex gap-3">
        <button onclick="window.print()" class="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition">
          রসিদ প্রিন্ট করুন 🖨️
        </button>
        <button onclick="window.closeInvoiceModal()" class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition">
          বন্ধ করুন
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeInvoiceModal = function() {
  const modal = document.getElementById('invoice-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// Global Keyboard Shortcut to Access Admin Login (Ctrl + Shift + A)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
    e.preventDefault();
    window.openAdminLoginModal();
  }
});

// Image Upload Preview in Admin
window.handleImageUpload = function(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    const preview = document.getElementById('image-upload-preview');
    const inputHidden = document.getElementById('product-image-preview-src');
    if (preview) preview.src = event.target.result;
    if (inputHidden) inputHidden.value = event.target.result;
    window.showToast('পণ্যের ছবি আপলোড হয়েছে!', 'info');
  };
  reader.readAsDataURL(file);
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.renderRecommendedProducts();
  window.renderBundles();
  window.renderComparisonTable();
  window.renderCart();
  window.updateBadges();
  window.updateCustomerHeaderUI();
  window.renderChatMessages();

  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      window.handleSearchInput(e.target.value);
    });
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target)) {
        const ac = document.getElementById('search-autocomplete');
        if (ac) ac.classList.add('hidden');
      }
    });
  }

  const filePicker = document.getElementById('product-file-picker');
  if (filePicker) {
    filePicker.addEventListener('change', window.handleImageUpload);
  }
});
