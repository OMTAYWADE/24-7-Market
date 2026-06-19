# 24/7 Marketplace

<p align="center">
  <strong>A Secure Student Marketplace Platform</strong>
</p>

<p align="center">
  Buy, Sell, and Connect within a trusted student community.
</p>

---

## Overview

24/7 Marketplace is a full-stack web application designed to provide students with a secure platform for buying and selling products. The platform enables authenticated users to create product listings, browse available products, and submit purchase requests while maintaining security through JWT authentication, role-based authorization, request validation, and activity logging.

The project was developed to gain practical experience in full-stack application development, REST API design, authentication systems, database integration, and secure software engineering practices.

---

## Key Features

### Authentication & Security

* User Registration and Login
* JWT-Based Authentication
* Password Hashing using bcrypt
* Protected API Routes
* Request Rate Limiting
* Security Event Logging
* Input Validation and Sanitization

### Marketplace Features

* Product Listing Creation
* Product Browsing
* Product Categorization
* Purchase Request System
* Seller Contact Information
* Request Tracking

### System Design

* RESTful API Architecture
* Service Layer Pattern
* Modular Backend Structure
* MySQL Relational Database
* Frontend and Backend Separation

---

## Architecture

```text
Frontend (React + Axios)
        │
        ▼
Backend API (Node.js + Express)
        │
        ▼
Authentication Layer (JWT)
        │
        ▼
MySQL Database
```

---

## Technology Stack

### Frontend

| Technology   | Purpose           |
| ------------ | ----------------- |
| React        | User Interface    |
| React Router | Routing           |
| Axios        | API Communication |
| Tailwind CSS | Styling           |

### Backend

| Technology         | Purpose           |
| ------------------ | ----------------- |
| Node.js            | Runtime           |
| Express.js         | REST API          |
| JWT                | Authentication    |
| bcrypt             | Password Security |
| Helmet             | Security Headers  |
| Express Rate Limit | API Protection    |

### Database

| Technology | Purpose      |
| ---------- | ------------ |
| MySQL      | Data Storage |

---

## Project Structure

```text
24-7-Marketplace
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│   │
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── assets
│   │
│   └── App.jsx
│
└── README.md
```

---

## Database Schema

### Users

| Field         | Type    |
| ------------- | ------- |
| id            | INT     |
| username      | VARCHAR |
| email         | VARCHAR |
| password_hash | VARCHAR |
| role          | VARCHAR |

### Products

| Field          | Type    |
| -------------- | ------- |
| id             | INT     |
| title          | VARCHAR |
| description    | TEXT    |
| price          | DECIMAL |
| category       | VARCHAR |
| contact_number | VARCHAR |

### Requests

| Field      | Type    |
| ---------- | ------- |
| id         | INT     |
| product_id | INT     |
| buyer_id   | INT     |
| status     | VARCHAR |

---

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=secure_marketplace

JWT_SECRET=your_secret_key

FRONTEND_URL=http://localhost:5173
```

---

## Security Considerations

* Passwords are never stored in plain text.
* JWT tokens protect private routes.
* API abuse is mitigated using rate limiting.
* Sensitive configuration values are stored in environment variables.
* Security events are logged for auditing and monitoring.

---

## Future Enhancements

* Product Image Uploads
* Advanced Search & Filters
* Real-Time Messaging
* Email Notifications
* Admin Dashboard
* Product Moderation Workflow
* Cloud Storage Integration
* Payment Gateway Integration

---

## Learning Outcomes

This project helped strengthen practical knowledge of:

* Full-Stack Development
* REST API Design
* Authentication & Authorization
* Database Modeling
* Secure Coding Practices
* Frontend State Management
* Deployment Workflows
* Git and GitHub Collaboration

---

## Author

**Om Satish Taywade**

First-Year Engineering Student

Focused on Full-Stack Development, Cybersecurity, Threat Intelligence, and Secure Software Engineering.
