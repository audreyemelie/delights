// Data for the very expensive menu items
const menuData = {
    icecream: [
        { name: "Diamond Vanilla Cloud", price: 120000 },
        { name: "Gold Leaf Chocolate Swirl", price: 150000 },
        { name: "Unicorn Dream Ice Cream", price: 15000 }, // Special Offer Item
        { name: "Ruby Red Velvet Scoop", price: 105000 },
        { name: "Emerald Mint Chip", price: 110000 },
        { name: "Sapphire Blueberry Bliss", price: 125000 },
        { name: "Black Truffle Fudge", price: 18000 },
        { name: "Rosewater Pistachio Dream", price: 13000 },
        { name: "Salted Caramel Onyx", price: 14000 },
        { name: "Spicy Mango Tango", price: 9500 },
        { name: "Aged Balsamic Strawberry", price: 160000 },
        { name: "Bourbon Pecan Glaze", price: 17500 },
        { name: "Midnight Coconut Ash", price: 11500 },
        { name: "Passion Fruit Amethyst", price: 128000 },
        { name: "Lavender Honey Bloom", price: 135000 },
        { name: "Espresso Martini Freeze", price: 14200 },
        { name: "Praline Cream Royale", price: 15500 },
        { name: "White Chocolate Raspberry Kiss", price: 11200 },
        { name: "Fig and Mascarpone Luxury", price: 16500 },
        { name: "Millionaire's Brownie Delight", price: 170000 },
    ],
    milkshakes: [
        { name: "Liquid Gold Shake", price: 190000 },
        { name: "Platinum Peanut Butter Blast", price: 18500 },
        { name: "Velvet Strawberry Siren", price: 16500 },
        { name: "Cognac Chocolate Elixir", price: 22000 },
        { name: "Macadamia Nut Heaven", price: 17800 },
        { name: "Black Forest Vortex", price: 19500 },
        { name: "Pina Colada Prestige", price: 18200 },
        { name: "Caramel Waffle Decadence", price: 20000 },
        { name: "Tiramisu Silk Shake", price: 21000 },
        { name: "Exotic Lychee Dream", price: 17000 },
        { name: "Gingerbread Royale", price: 16200 },
        { name: "Saffron Rose Milkshake", price: 23000 },
        { name: "Date and Cardamom Delight", price: 17400 },
        { name: "Pistachio Baklava Shake", price: 20500 },
        { name: "Toasted Marshmallow Galaxy", price: 18800 },
        { name: "Key Lime Pie Splash", price: 16000 },
        { name: "Blue Lagoon Citrus", price: 17200 },
        { name: "Cinnamon Roll Vortex", price: 19200 },
        { name: "Hazelnut Supreme", price: 21500 },
        { name: "Raspberry Cheesecake Liquid", price: 19800 },
    ],
    cakes: [
        { name: "Emperor's Red Velvet", price: 350000 },
        { name: "Duchess's Chocolate Lava", price: 380000 },
        { name: "King's Caramel Delight", price: 420000 },
        { name: "The Maharani Mango Mousse", price: 36000 },
        { name: "Sovereign Strawberry Shortcake", price: 39500 },
        { name: "Royal Lemon Zest", price: 370000 },
        { name: "Million Dollar Tiramisu", price: 4500000 },
        { name: "Jade Matcha Green Tea", price: 34500 },
        { name: "Black Tie Opera Cake", price: 41000 },
        { name: "The Gold Bar Cake", price: 50000 },
        { name: "Amaretto Almond Grandeur", price: 37500 },
        { name: "Champagne Raspberry Tower", price: 43000 },
        { name: "Pistachio Marzipan Masterpiece", price: 40000 },
        { name: "Blueberry Lavender Crown", price: 365000 },
        { name: "Fig and Honey Regal", price: 44000 },
        { name: "The Pearl White Velvet", price: 38500 },
        { name: "Dark Rum Raisin Treasure", price: 42500 },
        { name: "Rose Water Pistachio Dream", price: 39000 },
        { name: "Praline Cream Decadence", price: 41500 },
        { name: "Triple Chocolate Truffle Gateau", price: 460000 },
    ],
    burgers: [
        { name: "Wagyu Gold Standard Burger", price: 280000 },
        { name: "Kobe Truffle Deluxe Burger", price: 320000 },
        { name: "Caviar & Foie Gras Burger", price: 45000 },
        { name: "Lobster Tail Surf-n-Turf", price: 350000 },
        { name: "The Imperial Lamb Burger", price: 29500 },
        { name: "Venison and Juniper Berry", price: 31000 },
        { name: "Black Angus Blue Cheese", price: 27000 },
        { name: "Saffron Aïoli Chicken Burger", price: 26500 },
        { name: "Ostrich Egg Brioche Burger", price: 33000 },
        { name: "Alaskan King Crab Burger", price: 40000 },
        { name: "Spicy Chorizo Manchego", price: 25000 },
        { name: "Wild Mushroom Provolone", price: 28500 },
        { name: "Duck Confit Fig Jam", price: 30000 },
        { name: "Veal Chop Burger Supreme", price: 34000 },
        { name: "Pancetta Wrapped Fig Burger", price: 29000 },
        { name: "Smoked Salmon Dill Cream", price: 36000 },
        { name: "Bison Brie Cranberry", price: 31500 },
        { name: "Peking Duck Hoisin Burger", price: 37000 },
        { name: "Quail Egg and Sriracha", price: 27500 },
        { name: "The Billionaire's Bacon Burger", price: 380000 },
    ],
};

// --- GLOBAL STATE ---
let shoppingCart = [];

// Utility function to format price to Naira (₦) with commas
const formatNaira = (price) => {
    // Ensure the price is rounded before formatting
    return `₦${Math.round(price).toLocaleString('en-US')}`;
};

// --- CORE CART LOGIC ---

/**
 * Adds an item to the shopping cart, incrementing quantity if it already exists.
 * @param {string} itemName - The name of the item.
 * @param {number} itemPrice - The price of a single item.
 */
const addToCart = (itemName, itemPrice) => {
    const existingItem = shoppingCart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        shoppingCart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    
    updateCartDisplay();
};

/**
 * Removes an item from the cart entirely.
 * @param {string} itemName - The name of the item to remove.
 */
const removeFromCart = (itemName) => {
    const itemIndex = shoppingCart.findIndex(item => item.name === itemName);

    if (itemIndex > -1) {
        shoppingCart.splice(itemIndex, 1);
        updateCartDisplay();
    }
};

/**
 * Calculates the subtotal, discount, and final total for the cart.
 * Applies the 10% special offer discount to the entire subtotal.
 * @returns {object} The calculated totals.
 */
const calculateTotals = () => {
    let subtotal = 0;

    shoppingCart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    // Special Offer: 10% discount on the total for the four category items.
    const discountRate = 0.10;
    const discountAmount = subtotal * discountRate;

    const total = subtotal - discountAmount;

    return { subtotal, discountAmount, total };
};


/**
 * Refreshes the cart items list and the summary panel in the UI.
 */
const updateCartDisplay = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totals = calculateTotals();

    // 1. Update Cart Items List
    cartItemsContainer.innerHTML = ''; 

    if (shoppingCart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty. Start adding some delights!</p>';
    } else {
        shoppingCart.forEach(item => {
            const cartItemHTML = `
                <div class="cart-item">
                    <div class="item-info">
                        ${item.name} x ${item.quantity}
                    </div>
                    <div class="item-quantity">
                        <span class="item-price">${formatNaira(item.price * item.quantity)}</span>
                        <button class="remove-btn" data-name="${item.name}">&times;</button>
                    </div>
                </div>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
        });

        // Add event listeners to newly created remove buttons
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemName = e.currentTarget.dataset.name;
                removeFromCart(itemName);
            });
        });
    }

    // 2. Update Summary Panel
    document.getElementById('subtotal-price').textContent = formatNaira(totals.subtotal);
    document.getElementById('discount-price').textContent = `- ${formatNaira(totals.discountAmount)}`;
    document.getElementById('total-price').textContent = formatNaira(totals.total);

    // 3. Enable/Disable Checkout Button
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.disabled = shoppingCart.length === 0;

    if (shoppingCart.length > 0) {
        checkoutBtn.textContent = `Proceed to Checkout (${formatNaira(totals.total)})`;
    } else {
        checkoutBtn.textContent = 'Proceed to Checkout';
    }
};


/**
 * Generates the menu items for a specific category and attaches Add to Cart listeners.
 * @param {string} category - The category ID (e.g., 'icecream').
 */
const generateMenu = (category) => {
    const listElement = document.getElementById(category);
    const items = menuData[category];
    
    listElement.innerHTML = '';

    items.forEach(item => {
        const itemHTML = `
            <div class="menu-item">
                <h4>${item.name}</h4>
                <p class="price">${formatNaira(item.price)}</p>
                <button class="order-btn add-to-cart-btn" 
                        data-name="${item.name}" 
                        data-price="${item.price}">
                    Add to Order
                </button>
            </div>
        `;
        listElement.insertAdjacentHTML('beforeend', itemHTML);
    });
    
    // Attach event listeners after generating the items
    document.querySelectorAll(`#${category} .add-to-cart-btn`).forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.currentTarget.dataset.name;
            const price = parseFloat(e.currentTarget.dataset.price);
            addToCart(name, price);
        });
    });
};


// --- INITIALIZATION AND EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Generate all Menus
    generateMenu('icecream');
    generateMenu('milkshakes');
    generateMenu('cakes');
    generateMenu('burgers');

    // 2. Initialize Cart Display
    updateCartDisplay(); 
});


/**
 * 1. Loading Screen Functionality
 */
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    // Hide the loading screen after a short delay
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

/**
 * 2. Hamburger Menu Functionality
 */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a navigation link is clicked
document.querySelectorAll('#nav-menu ul li a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


/**
 * 3. Menu Tab Switching Functionality
 */
const tabButtons = document.querySelectorAll('.tab-btn');
const menuLists = document.querySelectorAll('.menu-list');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        // Deactivate all buttons and hide all lists
        tabButtons.forEach(btn => btn.classList.remove('active'));
        menuLists.forEach(list => list.classList.remove('active'));

        // Activate the clicked button and show the corresponding list
        button.classList.add('active');
        document.getElementById(category).classList.add('active');
    });
});


/**
 * 4. Simple Rating Stars Functionality
 */
const stars = document.querySelectorAll('.rating-stars .star');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const ratingValue = parseInt(star.dataset.value);

        // Reset all stars
        stars.forEach(s => s.classList.remove('selected'));

        // Highlight stars up to the selected value (stars are reversed in HTML)
        for (let i = 0; i < ratingValue; i++) {
            stars[stars.length - 1 - i].classList.add('selected');
        }
        
        console.log(`User rated: ${ratingValue} stars`);
    });
});


// --- Checkout Button Action (Placeholder) ---
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (shoppingCart.length > 0) {
        const finalTotal = calculateTotals().total;
        alert(`🎉 Your Order is Placed! 🎉\n\nTotal amount: ${formatNaira(finalTotal)}. A delightful courier is on the way!\n\nOrder Details:\n${shoppingCart.map(item => `${item.name} x ${item.quantity}`).join('\n')}`);
        
        // Clear the cart after "successful" checkout
        shoppingCart = [];
        updateCartDisplay();
    }
});