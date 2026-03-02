# Wander1ust

[Live Demo](https://wander1ust.vercel.app) | [GitHub](https://github.com/kr1shnac/Wander1ust)

---

## Overview

A full-stack Airbnb-inspired platform for discovering and sharing unique property listings. Wander1ust features secure session-based authentication, cloud-powered media management, community-driven reviews, and a dynamic search engine — built end-to-end using the MVC architecture to demonstrate real-world backend proficiency.

---

## Key Features

### 🔍 Dynamic Property Discovery
Browse a diverse catalog of listings with a **regex-powered search engine** that queries across titles, locations, and countries for instant, relevant results.
*[Screenshot: Main listings page with search bar]*

### 🏠 Listing Creation & Cloud Image Uploads
Hosts can create detailed property listings and upload high-resolution photos directly to **Cloudinary**, with dynamic image transformations for optimized thumbnail previews.
*[Screenshot: "Create New Listing" form with image upload]*

### ⭐ Community Reviews & Ratings
Guests can leave detailed reviews and ratings on any property. **Cascading deletion hooks** automatically clean up associated reviews when a listing is removed, maintaining referential integrity.
*[Screenshot: Property detail page with reviews section]*

### 🔐 Secure Authentication & Session Management
Persistent login/signup powered by **Passport.js** with sessions stored securely in MongoDB via connect-mongo, ensuring reliable user state across requests.
*[Screenshot: Login/Signup page]*

### 🛡️ Multi-Level Authorization
Robust **ownership & authorship verification** middleware ensures users can only modify their own listings and reviews, preventing any unauthorized data manipulation.
*[Screenshot: Edit listing page (owner view)]*

---

## How I Built It

Wander1ust follows the **MVC (Model-View-Controller)** pattern for a clean separation of concerns:

- **Models:** Mongoose schemas with relational references (User ↔ Listing ↔ Review) and post-delete hooks for cascading cleanup.
- **Controllers:** Modular route handlers for listings, reviews, and user authentication — each in its own file.
- **Views:** Server-rendered EJS templates with ejs-mate layouts and Bootstrap 5 for a responsive, polished UI.
- **Middleware:** Custom layers for authentication checks, ownership verification, redirect URL persistence, and Joi schema validation.
- **Cloud Integration:** Multer + Cloudinary pipeline for seamless image upload and storage.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Backend** | Node.js, Express.js (v5), Mongoose ODM |
| **Database** | MongoDB Atlas |
| **Authentication** | Passport.js, express-session, connect-mongo |
| **Cloud Storage** | Cloudinary, multer-storage-cloudinary |
| **Frontend** | EJS, ejs-mate, Bootstrap 5 |
| **Validation** | Joi (client + server) |
| **Deployment** | Vercel |

---

## Why I Built It

Wander1ust was developed as a hands-on sandbox to master real-world backend complexities. It pushed me beyond simple CRUD apps into implementing secure session-based authentication, integrating cloud media storage pipelines, managing complex relational data in a NoSQL database, and designing multi-layered authorization logic — skills that directly translate to production-grade development.

---

*Built by [Krishna C](https://krishnac.vercel.app/) • © 2026*
