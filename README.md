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

## 🔐 Authentication

Authentication is handled using **NextAuth** with Google as the provider and Prisma as the adapter for MongoDB.

- The authentication logic is defined in `src/lib/auth.js`.
- The `AuthProvider` component (`src/components/providers/AuthProvider.jsx`) wraps the app and provides authentication context using `SessionProvider`.
- User sessions are managed with JWT strategy.
- On sign-in, user data is fetched or created in the database and attached to the session token.
- After sign-in, users are redirected to the dashboard.

### Customization

- To add more providers, update the `providers` array in `src/lib/auth.js`.
- Adjust session and JWT callbacks for custom user data or roles.

---

## 🔑 Sign-In Page

The sign-in page is implemented in `src/app/(auth)/sign-in/page.jsx`. It features:

- A simple, centered UI with a Google sign-in button.
- Loading state and error handling with toast notifications.
- Uses the `signIn` function from NextAuth to trigger Google authentication.

### Customization

- Update the UI and messaging in `src/app/(auth)/sign-in/page.jsx`.
- Add more sign-in options or providers as needed.
- Customize the toast notifications for different error or success states.

---
