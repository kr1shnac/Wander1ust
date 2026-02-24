# Wander1ust 🌍✈️

**A Full-Stack Airbnb-style Listings Platform**

Wander1ust is a comprehensive web application built to demonstrate full-stack development capabilities, featuring secure authentication, cloud-based image uploads, and session management.

🔗 **Live Demo:** [wander1ust.vercel.app](https://wander1ust.vercel.app)

---

## 🛠 Tech Stack & Architecture

- **Backend:** Node.js, Express.js (MVC Architecture)
- **Database:** MongoDB Atlas, Mongoose ODM
- **Authentication:** Passport.js (Local Strategy), Session Management (`express-session`, `connect-mongo`)
- **Cloud Storage:** Cloudinary (via `multer-storage-cloudinary`)
- **Frontend / Client Validation:** EJS (Templating), Bootstrap 5, Joi
- **Deployment:** Vercel (Frontend & Serverless logic)

---

## 💡 Key Technical Achievements

- **Secure Session Management:** Implemented robust session-based authentication using Passport.js. Sessions are persisted securely in MongoDB using `connect-mongo`.
- **Cloud Media Integration:** Integrated Cloudinary for scalable image uploads and efficient storage of listing photos.
- **RESTful API Design:** Developed comprehensive CRUD operations for property listings and user reviews following REST principles.
- **Data Integrity & Validation:** Enforced strict data validation rules on both the client and server sides using Joi to prevent malicious or malformed inputs.
- **Database Relationship Management:** Managed complex Mongoose schema relations, handling cascading deletions (e.g., removing a listing's associated reviews when deleted).

---

**Developed by: [Krishna C](https://krishnac.vercel.app/)** | *"The guy you are lookin' for"* 
