# Wander1ust 🌍✈️

**A Full-Stack Airbnb-Style Property Listings & Discovery Platform**

> Discover, list, and review unique properties — powered by secure authentication, cloud media management, and a community-driven review system.

🔗 **Live Demo:** [wander1ust.vercel.app](https://wander1ust.vercel.app)

---

## ⚡ Features

- **Dynamic Search** — Regex-powered queries across titles, locations, and countries for instant discovery
- **Listing CRUD** — Create, read, update, and delete property listings with full owner authorization
- **Cloud Image Uploads** — Cloudinary integration via Multer for scalable media storage with dynamic image transformations
- **Community Reviews** — Guests can rate and review properties; cascading hooks auto-cleanup on deletion
- **Session Auth** — Passport.js with MongoDB-persisted sessions via connect-mongo
- **Multi-Level Authorization** — Ownership & authorship verification middleware across all CRUD operations
- **Dual-Layer Validation** — Joi schemas enforced on both client and server to prevent malformed inputs

---

## 🛠 Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **Backend** | Node.js, Express.js (v5), MVC Architecture |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Authentication** | Passport.js (Local Strategy), express-session, connect-mongo |
| **Cloud Storage** | Cloudinary, multer-storage-cloudinary |
| **Frontend** | EJS, ejs-mate (layouts), Bootstrap 5 |
| **Validation** | Joi (client + server side) |
| **Deployment** | Vercel |

---

## 🏗 Project Structure

```
Wander1ust/
├── app.js              # Express server & middleware config
├── cloudConfig.js      # Cloudinary setup
├── schema.js           # Joi validation schemas
├── middleware.js        # Auth, ownership & validation middleware
├── models/
│   ├── listing.js      # Listing schema (with cascading delete hooks)
│   ├── review.js       # Review schema
│   └── user.js         # User schema (passport-local-mongoose)
├── controllers/
│   ├── listing.js      # Listing CRUD + search logic
│   ├── review.js       # Review create/delete
│   └── user.js         # Signup, login, logout
├── routes/
│   ├── listing.js      # Listing routes
│   ├── review.js       # Review routes
│   └── user.js         # Auth routes
├── views/              # EJS templates
├── public/             # Static assets (CSS, JS, images)
└── init/               # Database seed data
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v22+
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account

### Setup

```bash
# Clone the repository
git clone https://github.com/kr1shnac/Wander1ust.git
cd Wander1ust

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your MongoDB URI, Cloudinary credentials, and session secret

# Run the development server
node app.js
```

The server will start on `http://localhost:8080`

---

## 💡 Key Technical Highlights

- **Secure Session Management** — Sessions persisted in MongoDB using connect-mongo with encrypted secrets and 7-day cookie expiry with httpOnly protection against XSS attacks.
- **Cloud Media Pipeline** — Multer → Cloudinary upload pipeline with dynamic URL transformations for generating optimized thumbnail previews.
- **Cascading Data Cleanup** — Mongoose `post('findOneAndDelete')` hooks automatically remove all associated reviews when a listing is deleted, maintaining referential integrity.
- **Smart Redirect Flow** — Custom middleware preserves the user's intended URL before authentication, redirecting them back after successful login.
- **RESTful API Design** — Full CRUD operations for listings, reviews, and users following REST conventions with method-override for PUT/DELETE support.

---

**Developed by [Krishna C](https://krishnac.vercel.app/)** • *"The guy you are lookin' for"*
