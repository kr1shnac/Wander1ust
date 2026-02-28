Wander1ust
[Live URL](#) | [GitHub](#)

Wander1ust

Overview
An Airbnb-style platform for discovering and sharing unique property listings. Built as a hands-on learning project, it showcases full-stack capabilities including secure authentication, cloud image uploads, and community-driven reviews.

Key Features

Property Exploration: 
Browse through a diverse catalog of unique property listings.
*[Screenshot: Main listings catalog]*

Listing Creation & Image Uploads: 
Securely add properties and upload photos directly to the cloud.
*[Screenshot: "Create New Listing" form]*

Community Reviews & Authorization: 
Guests can leave ratings and detailed reviews on properties. Robust authorization logic ensures users can only edit or delete their own listings and reviews, preventing unauthorized modifications.
*[Screenshot: Property detail page with reviews]*

Secure Authentication: 
Persistent session-based login and signup.
*[Screenshot: Login/Signup page]*

How I Built It

Wander1ust follows the MVC pattern for a clean separation of concerns.
* **Backend:** A Node.js/Express server manages APIs, secure user sessions via Passport.js, and complex data relationships in MongoDB.
* **Frontend:** A responsive EJS and Bootstrap 5 interface with Joi for strict client-side validation.

Tech Stack

* **Frontend:** EJS, Bootstrap 5, Joi
* **Backend:** Node.js, Express.js, MongoDB (Mongoose)
* **Tools & Integrations:** Cloudinary, Passport.js, Vercel

Why I Built It

Wander1ust was developed primarily as a sandbox to master real-world backend complexities. It allowed me to transition from simple apps to successfully implementing secure session-based authentication, integrating cloud media storage, and managing complex relational data in a NoSQL database.

Built with:
* Node.js
* Express
* MongoDB
* Bootstrap

---
Copyright © 2026 Krishna C. All rights Reserved.
