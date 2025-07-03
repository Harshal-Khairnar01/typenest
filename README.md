# 📝 Typenest : a cozy place for writing

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
  Bold headline and subtext to introduce the Typenest, with call-to-action buttons: "Try it Out!" and "Learn more".
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


## 🔐 Sign-Up Page (`src/app/(auth)/sign-up/page.jsx`)

- Dedicated page for **new user registration**.
- Includes **Google sign-up** with a loading state.
- Displays **error messages** using toast notifications.
- Clean, centered UI layout.
- Reuses `AuthForm` configured for sign-up.

---

## 🔍 Search Page (`src/app/search/page.jsx`)

- Input field to **search blog posts** dynamically.
- Shows results in a **list of blog cards** with:
  - Title
  - Short excerpt
  - Author's name and image
- Includes **loading** and **error** handling states.
- Uses **debounce** for efficient fetch calls.

### 🔧 Customization:
- Modify `<li>` element content/styling to change search result display.
- Add filters (category, date, tags, etc.) or sorting options.

---

## ✍️ Create Post (Draft) Page (`src/app/draft/page.jsx`)

- Interface to **compose a new blog post**.
- Uses `Editor` (rich text editor) to write content.
- Form fields include:
  - Title
  - Excerpt
  - Category
  - Keywords
  - Meta description
  - Open Graph (OG) image
  - Status (Draft / Published)
- AI tools for content generation and rephrasing.
- Saves new posts via `POST /api/v1/create`.

### 🔧 Customization:
- Modify toolbar options in the `Editor` component.
- Add more fields for extended metadata.

---

## ✏️ Edit Post Page (`src/app/edit/[slug]/page.jsx`)

- Dynamically loads post using the **slug** from the URL.
- Uses the same `Editor` as the create page.
- Pre-fills post data for editing.
- Fields:
  - Title, Content, OG Image
  - Excerpt, Meta, Keywords, Status
- **Authorization** check ensures only allowed users can edit.
- Updates via `PUT /api/v1/update/[slug]`.

### 🔧 Customization:
- Add revision history/version control.
- Add user-role-based permissions for post updates.

---

## 📊 All Posts Page (`src/app/all-posts/page.jsx`)

- Central hub for viewing all posts.
- **Admin view**: Uses `AdminAllPosts` with management tools.
- **User view**: Uses `UserAllPosts` with personal blog list.
- Supports:
  - **Pagination**
  - **Filtering by category** via `searchParams`
- Checks roles with `getServerSession` and `isAdmin`.

### 🔧 Customization:
- Add filters for date range, author, tags, etc.
- Add integrated search bar.

---

## 👥 All Users Page (Admin Only) (`src/app/all-users/page.jsx`)

- Admin-only view for managing users.
- Uses `AdminAllUsers` component.
- Secured with:
  - `getServerSession`
  - `isAdmin` utility
- Unauthorized users see: **"You are not Authorized!"**

### 🔧 Customization:
- Add role editing, user blocking, and activity logs.
- Add search and filters for users.

---

## 🛠️ Utilities & Helpers

### 🔹 Prisma Client
- Defined in `src/lib/prisma.js`
- Supports **hot-reloading** in development.

### 🔹 Class Name Utility
- `src/lib/utils.js`: Includes `cn()` to merge conditional Tailwind classes.

### 🔹 AI Content Utility
- `src/utils/ai-content.js`: Handles server-side interaction with OpenAI API for content generation and rephrasing.

### 🔹 isAdmin Utility
- `src/utils/isAdmin.js`: Checks if a session belongs to an admin user.

---

## 🧩 Component Structure

- **Providers**: `src/components/providers/`
- **Reusable UI**: Sidebar, Navbar, Sign Out, etc.
- **Admin Components**:
  - `AdminAllPosts`
  - `AdminAllUsers`
- **Forms & Editor**:
  - `AuthForm`: Handles both sign-in and sign-up.
  - `Editor`: Rich text + AI content support.

---

## 🚀 How to Extend

- Add new auth providers in `src/lib/auth.js`.
- Customize `Navbar` and `Sidebar`.
- Add new pages following the current structure.
- Extend AI features via `ai-content.js`.
- Add notifications, tags, reactions, etc.

---
## 📦 Tech Stack

- Next.js 14 (App Router)
- Prisma + PostgreSQL
- NextAuth.js (with Google Auth)
- Tailwind CSS
- OpenAI (for content tools)
- React Hook Form + Zod

---

## 🔐 Authentication

- Uses NextAuth for:
  - Google Sign-In
  - Session management
- Role-based access using custom `isAdmin()` logic

---
