# PineApple E-commerce

PineApple is an online store offering a wide range of Apple products, including Macs, iPads, iPhones, Vision Pro, AirPods, and accessories. The web application, built with React JS, provides a seamless and user-friendly shopping experience, allowing users to explore products, manage their shopping cart, and complete purchases effortlessly.

## Features

- **Navigation**: The site features a responsive navigation bar (navbar) that allows users to easily access different sections, including the landing page, store page and product's categories.
  
- **Landing Page**: A visually appealing landing page that introduces highlights featured products.
  
- **Product Categories**: Users can browse products by category (e.g., Macs, iPads, iPhones, airpods, accessories and vision pro) and view a set of cards with the products of each section.
  
- **Product Details**: Each product page displays essential information such as name, description, stock availability, price, year of release, image, and category.
  
- **Shopping Cart**: Users can add multiple products to their shopping cart, view selected items, remove products, and clear the entire cart if needed.
  
- **Checkout Process**: To purchase products, users must complete three forms, each with built-in validation:
  1. **Buyer Info Form**: Collects personal information of the buyer with validation to ensure accurate data entry.
  2. **Shipping Form**: Gathers shipping details, with validation checks for correct address formatting and other relevant information.
  3. **Payment Form**: Handles payment information, including validations to secure correct card details and prevent errors.
  
  Once all forms are correctly filled out and validated, the user can review the order details in a summary template before finalizing the purchase.

- **Order Completion**: Upon successful purchase, the order is processed, and the stock in the Firebase database is updated to reflect the reduced quantity. The user is then redirected to a success page confirming the completion of the purchase.

## Tech Stack

- **Frontend**: React JS
- **Database**: Firebase
