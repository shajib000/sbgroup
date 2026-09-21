// ================= STATE & DATA =================
let products = JSON.parse(localStorage.getItem('sbGroupProducts')) || [];
let cart = JSON.parse(localStorage.getItem('sbGroupCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('sbGroupWishlist')) || [];
let orders = JSON.parse(localStorage.getItem('sbGroupOrders')) || [];
let chats = JSON.parse(localStorage.getItem('sbGroupChats')) || [];
let currentDiscount = 0;
let displayedProducts = 8;

// 
const ADMIN_PASSWORD_HASH = "YWRtaW4wMDBzYg==";

// ডামি ডেটা
if (products.length === 0) {
    products = [
        { id: 1, title: "Wireless Bluetooth Headphones", price: 2500, oldPrice: 3500, category: "Electronics", stock: 15, rating: 4.5, images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80"], desc: "High quality sound with active noise cancellation." },
        { id: 2, title: "Smart Watch Pro Max", price: 5500, oldPrice: 8500, category: "Electronics", stock: 8, rating: 4.2, images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80"], desc: "Track your health, heart rate, and stay connected." },
        { id: 3, title: "Men's Premium Casual T-Shirt", price: 800, oldPrice: 1200, category: "Fashion", stock: 50, rating: 4.0, images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80"], desc: "100% cotton, comfortable fit for daily wear." },
        { id: 4, title: "Modern Minimalist Table Lamp", price: 1800, oldPrice: 2500, category: "Home", stock: 20, rating: 4.7, images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80"], desc: "Elegant design with warm LED light." },
        { id: 5, title: "Gaming Mechanical Keyboard", price: 3200, oldPrice: 4500, category: "Electronics", stock: 12, rating: 4.8, images: ["https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80"], desc: "RGB backlit, blue switches, anti-ghosting keys." },
        { id: 6, title: "Women's Summer Dress", price: 1500, oldPrice: 2200, category: "Fashion", stock: 25, rating: 4.3, images: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&q=80"], desc: "Lightweight and breathable fabric." },
        { id: 7, title: "Stainless Steel Water Bottle", price: 600, oldPrice: 900, category: "Home", stock: 100, rating: 4.6, images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80"], desc: "Keeps water cold for 24 hours." },
        { id: 8, title: "Portable Power Bank 20000mAh", price: 1200, oldPrice: 1800, category: "Electronics", stock: 30, rating: 4.4, images: ["https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80"], desc: "Fast charging with dual USB ports." }
    ];
    localStorage.setItem('sbGroupProducts', JSON.stringify(products));
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded', () => {
    applyFilters();
    updateCounters();
});

// ================= ADMIN LOGIN =================
function openAdminLogin() { openModal('adminLoginModal'); }

function verifyAdminPassword() {
    const inputPass = document.getElementById('adminPassword').value;
    if (btoa(inputPass) === ADMIN_PASSWORD_HASH) {
        closeModal('adminLoginModal');
        document.getElementById('adminPassword').value = '';
        openModal('adminModal');
        showAdminTab('dashboard');
    } else {
        showToast('ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।', 'error');
    }
}

// ================= HELPER =================
function getMainImage(p) {
    if (p.images && p.images.length > 0) return p.images[0];
    return p.image || 'https://via.placeholder.com/300';
}

// ================= RENDER PRODUCTS =================
function renderProducts(filteredProducts = null) {
    const grid = document.getElementById('productGrid');
    let list = filteredProducts || products;
    const total = list.length;
    list = list.slice(0, displayedProducts);
    document.getElementById('productCount').innerText = `${total} টি প্রোডাক্ট পাওয়া গেছে`;
    grid.innerHTML = '';
    if (list.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 50px;"><h3>কোনো প্রোডাক্ট পাওয়া যায়নি!</h3></div>';
        document.getElementById('loadMoreBtn').style.display = 'none';
        return;
    }
    list.forEach(p => {
        const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
        const isWished = wishlist.includes(p.id);
        const mainImg = getMainImage(p);
        grid.innerHTML += `
            <div class="product-card">
                ${discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : ''}
                <img src="${mainImg}" alt="${p.title}" class="product-img" loading="lazy" onclick="viewProduct(${p.id})">
                <div class="product-info">
                    <h3 class="product-title" onclick="viewProduct(${p.id})">${p.title}</h3>
                    <div class="product-rating">${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))} (${p.rating})</div>
                    <div>
                        <span class="product-price">৳${p.price}</span>
                        ${p.oldPrice ? `<span class="product-old-price">৳${p.oldPrice}</span>` : ''}
                    </div>
                    <div class="product-stock"><i class="fas fa-box"></i> স্টক: ${p.stock > 0 ? p.stock : '<span style="color:red">স্টক নেই</span>'}</div>
                    <div class="product-actions">
                        <button class="btn-cart" onclick="addToCart(${p.id})" ${p.stock === 0 ? 'disabled' : ''}><i class="fas fa-cart-plus"></i> কার্ট</button>
                        <button class="btn-wish ${isWished ? 'active' : ''}" onclick="toggleWishlist(${p.id})"><i class="fas fa-heart"></i></button>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('loadMoreBtn').style.display = (displayedProducts >= total) ? 'none' : 'inline-block';
}

function loadMore() { displayedProducts += 4; applyFilters(); }

function updateCounters() {
    document.getElementById('cartCount').innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('wishlistCount').innerText = wishlist.length;
}

// ================= FILTERS =================
function filterCategory(cat) {
    document.querySelector(`input[name="cat"][value="${cat}"]`).checked = true;
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function applyFilters() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.querySelector('input[name="cat"]:checked').value;
    const maxPrice = parseFloat(document.getElementById('priceRange').value);
    const sort = document.getElementById('sortFilter').value;
    let filtered = products.filter(p => {
        const matchSearch = p.title.toLowerCase().includes(search);
        const matchCategory = category === 'all' || p.category === category;
        const matchPrice = p.price <= maxPrice;
        return matchSearch && matchCategory && matchPrice;
    });
    if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sort === 'priceLow') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'priceHigh') filtered.sort((a, b) => b.price - a.price);
    renderProducts(filtered);
}

// ================= PRODUCT DETAILS =================
function viewProduct(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;
    const imgs = p.images && p.images.length > 0 ? p.images : [p.image || 'https://via.placeholder.com/300'];
    let thumbnailsHTML = '';
    imgs.forEach((img, index) => {
        thumbnailsHTML += `<img src="${img}" class="${index === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${img}')">`;
    });
    document.getElementById('productDetails').innerHTML = `
        <div>
            <div class="main-image-container">
                <img src="${imgs[0]}" id="mainProductImg" alt="${p.title}">
            </div>
            <div class="gallery-thumbnails">${thumbnailsHTML}</div>
        </div>
        <div class="details-info">
            <h2>${p.title}</h2>
            <p style="color:#888;"><i class="fas fa-tag"></i> ক্যাটাগরি: ${p.category}</p>
            <div class="product-rating" style="font-size:16px; margin:10px 0;">
                ${'<i class="fas fa-star"></i>'.repeat(Math.floor(p.rating))} (${p.rating}) - ${p.stock} টি স্টকে আছে
            </div>
            <div class="details-price">
                ৳${p.price} 
                ${p.oldPrice ? `<span style="font-size:18px; color:#888; text-decoration:line-through; font-weight:normal;">৳${p.oldPrice}</span>` : ''}
            </div>
            <p style="line-height:1.8; color:#555;">${p.desc}</p>
            <div class="details-actions">
                <button class="btn-primary" onclick="addToCart(${p.id}); closeModal('productModal')" ${p.stock === 0 ? 'disabled' : ''}><i class="fas fa-cart-plus"></i> কার্টে যোগ করুন</button>
                <button class="btn-primary" style="background:#333;" onclick="buyNow(${p.id}); closeModal('productModal')" ${p.stock === 0 ? 'disabled' : ''}><i class="fas fa-bolt"></i> এখনই কিনুন</button>
            </div>
        </div>
    `;
    openModal('productModal');
}

function changeMainImage(element, newSrc) {
    document.getElementById('mainProductImg').src = newSrc;
    document.querySelectorAll('.gallery-thumbnails img').forEach(img => img.classList.remove('active'));
    element.classList.add('active');
}

// ================= CART & WISHLIST =================
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product || product.stock === 0) return;
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        if (cartItem.qty < product.stock) cartItem.qty++;
        else showToast('স্টক সীমিত!', 'error');
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveData(); updateCounters();
    showToast('কার্টে যোগ করা হয়েছে!', 'success');
}

function toggleWishlist(id) {
    const index = wishlist.indexOf(id);
    if (index === -1) { wishlist.push(id); showToast('উইশলিস্টে যোগ করা হয়েছে!', 'success'); }
    else { wishlist.splice(index, 1); showToast('উইশলিস্ট থেকে বাদ দেওয়া হয়েছে!', 'error'); }
    saveData(); updateCounters(); applyFilters();
}

function buyNow(id) { addToCart(id); openCheckout(); }

function renderCart() {
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">আপনার কার্ট খালি।</p>';
    } else {
        cart.forEach(item => {
            total += item.price * item.qty;
            container.innerHTML += `
                <div class="cart-item">
                    <img src="${getMainImage(item)}">
                    <div class="cart-item-info">
                        <h4>${item.title}</h4>
                        <p style="color:var(--primary); font-weight:bold;">৳${item.price}</p>
                    </div>
                    <div class="qty-control">
                        <button onclick="updateQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="updateQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
        });
    }
    document.getElementById('cartTotal').innerText = total;
}

function updateQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += change;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    saveData(); updateCounters(); renderCart();
}

// ================= CHECKOUT =================
function openCheckout() {
    if (cart.length === 0) { showToast('কার্ট খালি!', 'error'); return; }
    closeModal('cartModal');
    renderCheckoutSummary();
    openModal('checkoutModal');
}

function renderCheckoutSummary() {
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let delivery = 50;
    let discount = subtotal * currentDiscount;
    let total = subtotal + delivery - discount;
    document.getElementById('checkoutSubtotal').innerText = subtotal;
    document.getElementById('deliveryCharge').innerText = delivery;
    document.getElementById('discountAmount').innerText = discount;
    document.getElementById('checkoutTotal').innerText = total;
    document.getElementById('checkoutItemsList').innerHTML = cart.map(i => `<p><span>${i.title} (x${i.qty})</span> <span>৳${i.price * i.qty}</span></p>`).join('');
}

function applyCoupon() {
    const code = document.getElementById('couponCode').value.toUpperCase();
    if (code === 'SAVE10') {
        currentDiscount = 0.10;
        showToast('কুপন অ্যাপ্লাই সফল! ১০% ডিসকাউন্ট পেয়েছেন।', 'success');
        renderCheckoutSummary();
    } else {
        currentDiscount = 0;
        showToast('ভুল কুপন কোড!', 'error');
        renderCheckoutSummary();
    }
}

function placeOrder(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const address = document.getElementById('custAddress').value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(phone)) {
        showToast('সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন!', 'error');
        return;
    }
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let delivery = 50;
    let discount = subtotal * currentDiscount;
    let total = subtotal + delivery - discount;
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
        id: orderId,
        customer: { name, phone, address },
        items: [...cart],
        subtotal, delivery, discount, total,
        payment, status: 'Pending',
        date: new Date().toLocaleString()
    };
    orders.push(newOrder);
    cart.forEach(cartItem => {
        const p = products.find(prod => prod.id === cartItem.id);
        if (p) p.stock -= cartItem.qty;
    });
    cart = []; currentDiscount = 0;
    saveData(); updateCounters();
    document.getElementById('checkoutForm').reset();
    closeModal('checkoutModal');
    document.getElementById('orderIdDisplay').innerText = orderId;
    openModal('successModal');
    applyFilters();
}

// ================= ORDER TRACKING =================
function trackOrder() {
    const id = document.getElementById('trackOrderId').value.trim();
    const order = orders.find(o => o.id === id);
    const result = document.getElementById('trackingResult');
    if (order) {
        let statusColor = order.status === 'Delivered' ? 'var(--success)' : (order.status === 'Cancelled' ? 'var(--danger)' : 'var(--primary)');
        result.innerHTML = `
            <div style="margin-top:20px; padding:20px; background:#f9f9f9; border-radius:8px; border-left: 5px solid ${statusColor};">
                <h3>অর্ডার আইডি: ${order.id}</h3>
                <p><strong>স্ট্যাটাস:</strong> <span style="color:${statusColor}; font-weight:bold;">${order.status}</span></p>
                <hr style="margin:10px 0; border:none; border-top:1px dashed #ccc;">
                <h4>কাস্টমার ইনফরমেশন:</h4>
                <p><strong>নাম:</strong> ${order.customer.name}</p>
                <p><strong>ফোন:</strong> ${order.customer.phone}</p>
                <p><strong>ঠিকানা:</strong> ${order.customer.address}</p>
                <hr style="margin:10px 0; border:none; border-top:1px dashed #ccc;">
                <h4>প্রোডাক্ট সমূহ:</h4>
                <ul style="padding-left:20px;">
                    ${order.items.map(i => `<li>${i.title} (x${i.qty}) - ৳${i.price * i.qty}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        result.innerHTML = '<p style="color:red; margin-top:10px; text-align:center;">অর্ডার পাওয়া যায়নি!</p>';
    }
}

// ================= ADMIN PANEL =================
function showAdminTab(tab) {
    document.querySelectorAll('.admin-tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.admin-tabs button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('admin' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
    event.target.classList.add('active');
    if (tab === 'dashboard') renderAdminDashboard();
    if (tab === 'products') renderAdminProducts();
    if (tab === 'orders') renderAdminOrders();
    if (tab === 'chat') renderAdminChat();
}

function renderAdminDashboard() {
    const totalRevenue = orders.filter(o => o.status !== 'Cancelled').reduce((sum, o) => sum + o.total, 0);
    const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
    const pendingOrders = orders.filter(o => o.status === 'Pending').length;
    document.getElementById('adminDashboard').innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
            <div style="background:#e3f2fd; padding:20px; border-radius:8px; text-align:center;">
                <h3>মোট প্রোডাক্ট</h3><p style="font-size:28px; font-weight:bold;">${products.length}</p>
            </div>
            <div style="background:#e8f5e9; padding:20px; border-radius:8px; text-align:center;">
                <h3>মোট অর্ডার</h3><p style="font-size:28px; font-weight:bold;">${orders.length}</p>
            </div>
            <div style="background:#fff3e0; padding:20px; border-radius:8px; text-align:center;">
                <h3>মোট রেভিনিউ</h3><p style="font-size:28px; font-weight:bold;">৳${totalRevenue}</p>
            </div>
            <div style="background:#fce4ec; padding:20px; border-radius:8px; text-align:center;">
                <h3>পেন্ডিং অর্ডার</h3><p style="font-size:28px; font-weight:bold;">${pendingOrders}</p>
            </div>
        </div>
    `;
}

function renderAdminProducts() {
    const list = document.getElementById('adminProductList');
    list.innerHTML = '';
    products.forEach(p => {
        list.innerHTML += `
            <div class="admin-item">
                <div>
                    <strong>${p.title}</strong><br>
                    <small>প্রাইস: ৳${p.price} | স্টক: ${p.stock}</small>
                </div>
                <div>
                    <button class="btn-edit" onclick="editProduct(${p.id})">✏️ এডিট</button>
                    <button class="btn-delete" onclick="deleteProduct(${p.id})">🗑️ ডিলিট</button>
                </div>
            </div>
        `;
    });
}

// ================= PRODUCT SAVE (Multiple Images) =================
function saveProduct(e) {
    e.preventDefault();
    const id = document.getElementById('editProductId').value;
    const title = document.getElementById('pTitle').value;
    const price = parseFloat(document.getElementById('pPrice').value);
    const oldPrice = parseFloat(document.getElementById('pOldPrice').value) || 0;
    const category = document.getElementById('pCategory').value;
    const stock = parseInt(document.getElementById('pStock').value);
    const desc = document.getElementById('pDesc').value;
    const fileInput = document.getElementById('pImageFile');
    const urlInput = document.getElementById('pImage').value.trim();
    let imagesArray = [];

    if (fileInput.files.length > 0) {
        const readers = [];
        for (let i = 0; i < fileInput.files.length; i++) {
            const file = fileInput.files[i];
            const reader = new FileReader();
            readers.push(new Promise((resolve) => {
                reader.onload = (event) => resolve(event.target.result);
                reader.readAsDataURL(file);
            }));
        }
        Promise.all(readers).then(base64Images => {
            if (id) {
                const p = products.find(item => item.id == id);
                const existingImages = p.images || (p.image ? [p.image] : []);
                imagesArray = [...existingImages, ...base64Images];
            } else {
                imagesArray = base64Images;
            }
            saveProductToData(id, title, price, oldPrice, category, stock, desc, imagesArray);
        });
    } else if (urlInput) {
        const urlArray = urlInput.split(',').map(url => url.trim()).filter(url => url);
        if (id) {
            const p = products.find(item => item.id == id);
            const existingImages = p.images || (p.image ? [p.image] : []);
            imagesArray = [...existingImages, ...urlArray];
        } else {
            imagesArray = urlArray;
        }
        saveProductToData(id, title, price, oldPrice, category, stock, desc, imagesArray);
    } else {
        if (id) {
            const p = products.find(item => item.id == id);
            imagesArray = p.images || (p.image ? [p.image] : []);
            saveProductToData(id, title, price, oldPrice, category, stock, desc, imagesArray);
        } else {
            showToast('অনুগ্রহ করে অন্তত একটি ইমেজ আপলোড করুন বা URL দিন!', 'error');
        }
    }
}

function saveProductToData(id, title, price, oldPrice, category, stock, desc, imagesArray) {
    if (id) {
        const index = products.findIndex(p => p.id == id);
        products[index] = { ...products[index], title, price, oldPrice, category, stock, images: imagesArray, desc };
        showToast('প্রোডাক্ট আপডেট করা হয়েছে!', 'success');
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, title, price, oldPrice, category, stock, rating: 4.0, images: imagesArray, desc });
        showToast('নতুন প্রোডাক্ট যোগ করা হয়েছে!', 'success');
    }
    saveData();
    document.getElementById('productForm').reset();
    document.getElementById('editProductId').value = '';
    renderAdminProducts();
    applyFilters();
}

function editProduct(id) {
    const p = products.find(item => item.id === id);
    if (!p) return;
    document.getElementById('editProductId').value = p.id;
    document.getElementById('pTitle').value = p.title;
    document.getElementById('pPrice').value = p.price;
    document.getElementById('pOldPrice').value = p.oldPrice || '';
    document.getElementById('pCategory').value = p.category;
    document.getElementById('pStock').value = p.stock;
    document.getElementById('pImage').value = (p.images || (p.image ? [p.image] : [])).join(', ');
    document.getElementById('pDesc').value = p.desc;
    document.getElementById('pImageFile').value = '';
}

function deleteProduct(id) {
    if (confirm('আপনি কি নিশ্চিতভাবে ডিলিট করতে চান?')) {
        products = products.filter(p => p.id !== id);
        saveData(); renderAdminProducts(); applyFilters();
        showToast('প্রোডাক্ট ডিলিট করা হয়েছে!', 'error');
    }
}

// ================= ADMIN ORDERS =================
function renderAdminOrders() {
    const list = document.getElementById('adminOrders');
    list.innerHTML = '';
    if (orders.length === 0) { list.innerHTML = '<p style="text-align:center; padding:20px;">কোনো অর্ডার নেই।</p>'; return; }
    orders.forEach(o => {
        const statuses = ['Pending', 'Confirmed', 'Packed', 'Shipped', 'Delivered'];
        const canCancel = o.status !== 'Cancelled' && o.status !== 'Delivered';
        list.innerHTML += `
            <div class="admin-item" style="flex-direction: column; align-items: flex-start; gap: 10px; border-left: 4px solid ${o.status === 'Cancelled' ? 'red' : (o.status === 'Delivered' ? 'green' : 'orange')};">
                <div style="width: 100%; display: flex; justify-content: space-between;">
                    <strong>${o.id} ${o.status === 'Cancelled' ? '<span style="color:red;">(বাতিল)</span>' : ''}</strong>
                    <span>৳${o.total}</span>
                </div>
                <div style="background: #f9f9f9; padding: 10px; border-radius: 5px; width: 100%; font-size: 14px;">
                    <p><i class="fas fa-user"></i> <strong>${o.customer.name}</strong></p>
                    <p><i class="fas fa-phone"></i> ${o.customer.phone}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${o.customer.address}</p>
                </div>
                <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <small>${o.date}</small>
                    <div style="display:flex; gap:10px; align-items:center;">
                        <select onchange="updateOrderStatus('${o.id}', this.value)" style="padding:5px; border-radius:4px;" ${o.status === 'Cancelled' || o.status === 'Delivered' ? 'disabled' : ''}>
                            ${statuses.map(s => `<option value="${s}" ${o.status === s ? 'selected' : ''}>${s}</option>`).join('')}
                        </select>
                        ${canCancel ? `<button class="btn-danger" onclick="cancelOrder('${o.id}')"><i class="fas fa-times"></i> ক্যান্সেল</button>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveData();
        showToast('অর্ডার স্ট্যাটাস আপডেট হয়েছে!', 'success');
        renderAdminOrders();
    }
}

function cancelOrder(orderId) {
    if (!confirm('আপনি কি নিশ্চিতভাবে এই অর্ডারটি ক্যান্সেল করতে চান? স্টক ফিরে যাবে।')) return;
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'Cancelled';
        order.items.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) product.stock += item.qty;
        });
        saveData();
        renderAdminOrders();
        renderAdminDashboard();
        applyFilters();
        showToast('অর্ডার ক্যান্সেল করা হয়েছে!', 'error');
    }
}

// ================= LIVE CHAT =================
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.classList.toggle('active');
    if (chatBox.classList.contains('active')) renderCustomerChat();
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    const newChat = {
        id: Date.now(),
        sender: 'customer',
        message: message,
        time: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
    };
    chats.push(newChat);
    localStorage.setItem('sbGroupChats', JSON.stringify(chats));
    input.value = '';
    renderCustomerChat();
}

function renderCustomerChat() {
    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML = '';
    if (chats.length === 0) {
        chatBody.innerHTML = '<p style="text-align:center; color:#888; font-size:13px; margin-top:20px;">স্বাগতম! আমরা আপনাকে কিভাবে সাহায্য করতে পারি?</p>';
        return;
    }
    chats.forEach(chat => {
        chatBody.innerHTML += `
            <div class="chat-message ${chat.sender}">
                ${chat.message}
                <span style="display:block; font-size:10px; margin-top:5px; opacity:0.7; text-align:right;">${chat.time}</span>
            </div>
        `;
    });
    chatBody.scrollTop = chatBody.scrollHeight;
}

function renderAdminChat() {
    const adminChatBody = document.getElementById('adminChatBody');
    adminChatBody.innerHTML = '';
    if (chats.length === 0) {
        adminChatBody.innerHTML = '<p style="text-align:center; color:#888; margin-top:20px;">এখনো কোনো মেসেজ আসেনি।</p>';
        return;
    }
    chats.forEach(chat => {
        adminChatBody.innerHTML += `
            <div class="chat-message ${chat.sender}">
                <strong>${chat.sender === 'customer' ? 'কাস্টমার' : 'আপনি'}:</strong> ${chat.message}
                <span style="display:block; font-size:10px; margin-top:5px; opacity:0.7; text-align:right;">${chat.time}</span>
            </div>
        `;
    });
    adminChatBody.scrollTop = adminChatBody.scrollHeight;
}

function sendAdminReply() {
    const input = document.getElementById('adminChatInput');
    const message = input.value.trim();
    if (!message) return;
    const newChat = {
        id: Date.now(),
        sender: 'admin',
        message: message,
        time: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
    };
    chats.push(newChat);
    localStorage.setItem('sbGroupChats', JSON.stringify(chats));
    input.value = '';
    renderAdminChat();
}

// প্রতি ৩ সেকেন্ডে চ্যাট রিফ্রেশ
setInterval(() => {
    chats = JSON.parse(localStorage.getItem('sbGroupChats')) || [];
    if (document.getElementById('chatBox').classList.contains('active')) {
        renderCustomerChat();
    }
    if (document.getElementById('adminModal').classList.contains('active') &&
        document.getElementById('adminChat').style.display === 'block') {
        renderAdminChat();
    }
}, 3000);

// ================= WISHLIST =================
function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    container.innerHTML = '';
    if (wishlist.length === 0) { container.innerHTML = '<p style="text-align:center; padding:20px;">উইশলিস্ট খালি।</p>'; return; }
    wishlist.forEach(id => {
        const p = products.find(item => item.id === id);
        if (p) {
            container.innerHTML += `
                <div class="cart-item">
                    <img src="${getMainImage(p)}">
                    <div class="cart-item-info">
                        <h4>${p.title}</h4>
                        <p style="color:var(--primary); font-weight:bold;">৳${p.price}</p>
                    </div>
                    <button class="btn-cart" style="flex:none; padding:8px 15px;" onclick="addToCart(${p.id})">কার্টে নিন</button>
                </div>
            `;
        }
    });
}

// ================= UTILITIES =================
function openModal(id) {
    document.getElementById(id).classList.add('active');
    if (id === 'cartModal') renderCart();
    if (id === 'wishlistModal') renderWishlist();
}

function closeModal(id) { document.getElementById(id).classList.remove('active'); }

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
});
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
});

function saveData() {
    localStorage.setItem('sbGroupProducts', JSON.stringify(products));
    localStorage.setItem('sbGroupCart', JSON.stringify(cart));
    localStorage.setItem('sbGroupWishlist', JSON.stringify(wishlist));
    localStorage.setItem('sbGroupOrders', JSON.stringify(orders));
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.className = `toast ${type} show`;
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
}