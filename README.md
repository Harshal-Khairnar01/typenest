# 📝 CMS - Content Management System

A modern and customizable Content Management System built with **Next.js** for both frontend and backend. Styled using **shadcn/ui** components.

## 🧰 Tech Stack

- **Framework**: Next.js (App Router)  
- **Styling**: Tailwind CSS + shadcn/ui  
- **Database**: MongoDB and Prisma  
- **Authentication**: NextAuth  

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## 🏠 Landing Page

The landing page is implemented in `src/app/page.js` and serves as the main entry point for users. It features:

- **Hero Section:**  
  Bold headline and subtext to introduce the CMS, with call-to-action buttons: "Try it Out!" and "Learn more".
- **Feature Highlights:**  
  Three columns showcasing: Intuitive Editor, Flexible Tools, and Blazing Fast performance, each with an icon and description.
- **Newsletter/Signup Section:**  
  Encourages users to join by entering their email.

### Customization

- Update the hero text, features, and call-to-action in `src/app/page.js`.
- Modify styles using Tailwind CSS classes for layout and appearance.
- Add or remove feature cards as needed for your project.

---

## 📰 Blogs Page

The blogs listing page is implemented in `src/app/blogs/page.jsx`. It displays a grid of blog cards, each showing:

- **Thumbnail Image**
- **Title**
- **Excerpt**
- **Read More** link

The blog cards are generated from a configuration array and styled with Tailwind CSS for a modern, responsive look.

### Customization

- Add or edit blog entries in the `blogConfig` array in `src/app/blogs/page.jsx`.
- Update the card layout or styles by modifying the `BlogCard` component.

---

## 📝 Single Blog Page

The single blog page is implemented in `src/app/blog/[slug]/page.jsx`. It displays:

- **Featured Image**
- **Meta Information:** Date, categories, and tags
- **Blog Content:** Main article body

The page uses placeholder content and tags for demonstration. Meta information is styled with icons and badges for clarity.

### Customization

- Replace the placeholder content and tags with dynamic data as needed.
- Adjust the layout and styles using Tailwind CSS classes.
- Add more meta fields or content sections as your project grows.

---

## 🧑‍💼 User Authentication & Session

Authentication is powered by **NextAuth** with Google as the provider and Prisma as the adapter for MongoDB.

- **Configuration:**  
  - The authentication logic is in `src/lib/auth.js`.
  - Uses JWT session strategy and stores user data in MongoDB via Prisma.
  - Custom callbacks enrich the session and JWT with user info and roles.
  - After sign-in, users are redirected to `/dashboard`.

- **Provider:**  
  - The `AuthProvider` component (`src/components/providers/AuthProvider.jsx`) wraps the app and provides authentication context using `SessionProvider`.

- **Sign Out:**  
  - The `SignOut` component (`src/components/SignOut.jsx`) allows users to log out, redirecting them to the sign-in page.

### Customization

- Add more providers in the `providers` array in `src/lib/auth.js`.
- Adjust session and JWT callbacks for custom user data or roles.

---

## 🧑‍💻 Navbar

The `Navbar` component (`src/components/Navbar.jsx`) displays:

- The app logo and name.
- User avatar and dropdown menu when authenticated.
- "Sign In" link when not authenticated.
- Dropdown menu includes profile link and sign out option.

The user session is fetched server-side using `getAuthSession` from `src/lib/auth.js`.

---

## 🏠 Dashboard

The dashboard page (`src/app/dashboard/page.jsx`) is protected:

- Only accessible to authenticated users.
- Displays a welcome message with the user's name.
- Shows a "Not Authenticated" message if accessed without a valid session.

---



## 🔑 Sign-In Page

The sign-in page (`src/app/(auth)/sign-in/page.jsx`) features:

- Google sign-in button with loading state.
- Error handling with toast notifications.
- Simple, centered UI.

---

## 🛠️ Utilities

- **Prisma Client:**  
  - Defined in `src/lib/prisma.js` for database access, with support for hot-reloading in development.

- **Class Name Utility:**  
  - `src/lib/utils.js` provides a `cn` function for merging Tailwind and conditional class names.

---

## 🧩 Component Structure

- All providers are in `src/components/providers/`.
- UI components (sidebar, navbar, sign out, etc.) are modular and reusable.

---
## 📝 How to Extend

- Add new authentication providers in `src/lib/auth.js`.
- Customize the Navbar and Sidebar for your app’s needs.
- Add new pages or features by following the existing folder and component structure.

---