Simple Web Store Demo App:
A simple web store demo application built with Next.js (App Router), React, and Tailwind CSS.
The app demonstrates basic routing, mock authentication using cookies, public and protected pages, and dynamic item detail pages.

Project Description:
This project is a frontend-focused demo web store where users can:
a. Visit a public home page
b. Log in using demo credentials
c. View a list of store items
d. Open individual item detail pages using dynamic routes
e. Authentication is mock-based and stored in browser cookies for simplicity.
f. No real backend or database is used.

Setup & Installation:
Follow these steps to run the project locally-

1. git clone https://github.com/MdMerajulHasan/simple-web-store.git
2. cd simple-web-store
3. npm install
4. npm run dev
5. http://localhost:3000

Route Summary:
Route	         Description	              Access
/	             Home page	                  Public
/login 	         Demo login page	          Public
/items	         List of available items	  Public
/items/[id]	     Dynamic item details page	  Public

Implemented Features:
i. Responsive home page with light & dark mode support
ii. Demo login system (mock authentication)
iii. Authentication stored in browser cookies
iv. Publicly accessible item data
v. Dynamic routing for item detail pages
vi. Clean UI with Tailwind CSS

Feature Explanation:
Mock Authentication-
Login checks demo credentials
Sets a cookie: auth=true
Used for simple access control
No backend or database involved

Items Page-
Displays a list of items fetched from a local JSON file

Each item card shows,
Name
Description
Price
Image

Item Details Page-
Uses dynamic routing (/items/[id])
Displays full details of the selected item
Matches item data using the dynamic id

UI & Styling-
Built with Tailwind CSS
Consistent color theme for light and dark modes
Mobile-friendly responsive layout

Technologies Used-
Next.js (App Router)
React
Tailwind CSS
JavaScript
Cookies (for mock authentication)

Notes-
This project uses mock authentication and is not production-ready
Cookies are not HTTP-only
Designed for learning, demo, and portfolio purposes