# ✈️ FlightBooker - Flight Booking Landing Page

Modern flight booking platform built with Next.js 16, featuring real-time airport search and dark mode.

🌐 **[Live Demo](https://flight-booker-landing.vercel.app)** | 📂 **[Source Code](https://github.com/jubayer608/FlightBooker)**

---

## 📁 Project Structure
```
flight-booking-landing/
├── src/
│   ├── app/
│   │   ├── page.js                 # Main page
│   │   ├── layout.js               # Root layout
│   │   └── globals.css             # Global styles
│   ├── components/
│   │   ├── ui/                     # ShadCN components
│   │   ├── search/                 # Flight search modules
│   │   ├── Navbar.js
│   │   ├── HeroSection.js
│   │   ├── FlightSearch.js
│   │   ├── Features.js
│   │   ├── Offers.js
│   │   ├── Testimonials.js
│   │   └── Footer.js
│   ├── lib/
│   │   └── api.js                  # API functions
│   └── store/
│       └── flightStore.js          # Global state
├── package.json
└── README.md
```

##  Quick Start
```bash
# 1. Clone repository
git clone https://github.com/jubayer608/FlightBooker.git
cd flight-booking-ui

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
http://localhost:3000
```

## Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS** - Styling
- **ShadCN UI** - Components
- **Framer Motion** - Animations
- **Pullstate** - State management
- **Lucide React** - Icons

##  Features

-  One Way / Round Trip / Multi City search
-  Airport autocomplete (1000+ airports)
-  Passenger selector (Adults/Children/Infants)
-  Flight class & carrier filters
-  Dark mode support
-  Fully responsive design
-  Form validation
-  Smooth animations

## API Integration

**Endpoint:** `https://serviceapi.b2b.innovatedemo.com/tools/airport-autosuggetion-data`

**Headers:**
- `apikey`: S2422476141575634428
- `secretecode`: y2WUIjSSe8xkQaGq3RkOQf53ZP9nbcu3dnf

## Dependencies
```json
{
  "dependencies": {
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-tabs": "^1.1.13",
    "framer-motion": "^12.23.26",
    "lucide-react": "^0.562.0",
    "next": "16.1.0",
    "pullstate": "^2.0.0-pre.9",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "tailwind-merge": "^3.4.0"
  }
}
```

