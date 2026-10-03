# The Urban Tadka - Premium Indian Restaurant Website Demo

> **Client-Ready Portfolio Project**  
> Built for freelance web developers and agencies to pitch and sell high-converting modern websites to restaurants, cafes, and cloud kitchens (specifically tailored for ₹5,000 – ₹10,000 web projects in the Indian market).

---

## 🌟 Why This Website Sells to Restaurant Clients

1. **Direct WhatsApp Ordering Integration**:
   - Every single dish has a one-click *"Order on WhatsApp"* button that pre-formats the exact dish name and price.
   - The `/menu.html` page features a **Live WhatsApp Cart Drawer** that tallies multiple items, computes the subtotal in ₹, and generates a formatted bill for WhatsApp.
   - **Sales Pitch to Restaurant Owners**: *"Save the 25%–30% commission that Swiggy and Zomato charge by taking direct customer orders over WhatsApp!"*

2. **Instant Local Double-Click Preview (Zero Build Required)**:
   - Built with self-contained, high-performance HTML5, Tailwind CSS, Lucide Icons, and Vanilla JS.
   - Simply double click `index.html` or open in any browser — it renders **instantly** with full interactivity, zero dependency installations, and zero broken links.

3. **Complete React & TypeScript Component Library Included**:
   - Includes modern React components in `src/` (`Navbar.tsx`, `Button.tsx`, `FoodCard.tsx`, `MenuItem.tsx`, `SectionHeading.tsx`, `TestimonialCard.tsx`, `Gallery.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`).
   - Ready for Vite or Next.js deployment if needed.

4. **Brand Design System**:
   - **Background**: `#FFF8F0` (warm creamy off-white)
   - **Primary Dark**: `#1C1917` (deep charcoal stone)
   - **Accent Orange**: `#C2410C` (tandoori saffron)
   - **Gold**: `#D4A017` (royal gold)
   - **Headings**: Playfair Display (Google Fonts)
   - **Body/UI**: Poppins (Google Fonts)

---

## 📂 Project Structure

```
urban-tadka/
│
├── index.html                    # Complete 11-section Home Page
├── menu.html                     # Full Menu with Category Filters, Search, & WhatsApp Cart
├── about.html                    # Story, Two-Column Section, Chef Creed, Values, Accolades
├── contact.html                  # Table Reservation Form, Phone, WhatsApp, Maps & FAQ
│
├── css/
│   └── style.css                 # Custom design system, color tokens, animations & scrollbar
│
├── js/
│   └── script.js                 # Mobile drawer, menu filters, WhatsApp cart tally, reservation modal
│
├── images/
│   └── README.md                 # Image setup and client asset guidelines
│
├── src/                          # Modular React + TypeScript Source Code
│   ├── types/
│   │   └── index.ts              # Type definitions (Dish, Testimonial, etc.)
│   ├── data/
│   │   └── restaurantData.ts     # Centralized restaurant configuration and menu data
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky responsive navigation
│   │   ├── Button.tsx            # Button with primary, gold, outline, WhatsApp variants
│   │   ├── FoodCard.tsx          # Featured dish card with spice rating and veg indicators
│   │   ├── MenuItem.tsx          # Compact menu item row
│   │   ├── SectionHeading.tsx    # Playfair title with ornament divider
│   │   ├── TestimonialCard.tsx   # Verified customer review
│   │   ├── Gallery.tsx           # 6-item photo grid with lightbox
│   │   ├── Footer.tsx            # Multi-column footer with timings
│   │   └── WhatsAppButton.tsx    # Floating pulse action button
│   ├── pages/
│   │   ├── Home.tsx              # Home view
│   │   ├── Menu.tsx              # Menu view with live filters
│   │   ├── About.tsx             # About view
│   │   └── Contact.tsx           # Contact & booking view
│   ├── App.tsx                   # Main React app shell
│   ├── index.css                 # Tailwind CSS styles
│   └── main.tsx                  # React DOM mount entry
│
├── package.json                  # Dependencies for React + Vite
├── tsconfig.json                 # TypeScript compiler configuration
├── tailwind.config.js            # Tailwind color & font configuration
└── vite.config.ts                # Vite development server configuration
```

---

## 📱 Mobile-First Responsive Breakpoints Tested
- **360px** (Small mobile devices)
- **390px** (Modern iPhones & Samsung devices)
- **768px** (iPads / Tablets)
- **1024px** (Laptops & Small Desktops)
- **1440px** (Wide desktop monitors)

---

## ⚡ How to Customize For Another Client in 5 Minutes

1. **Change Phone & WhatsApp Number**:
   - In `js/script.js` and `src/data/restaurantData.ts`, change:
     ```js
     phone: "+91 XXXXXXXXXX",
     whatsappNumber: "91XXXXXXXXXX"
     ```
2. **Update Dishes & Pricing**:
   - Edit the dish items in `src/data/restaurantData.ts` or the HTML files.
3. **Change Restaurant Name & Address**:
   - Search & replace `The Urban Tadka` with the client's restaurant name.

---

## 🚀 Deployment Options

- **Static Hosting (Recommended for Clients)**:
  - Netlify / Vercel / GitHub Pages / Cloudflare Pages: Simply drag and drop the `urban-tadka` folder or connect via Git.
  - Traditional cPanel / Hostinger: Upload all files to `public_html`.
- **React / Vite**:
  - Run `npm install` and `npm run dev` to start Vite local dev server.
