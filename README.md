# 🛒 Qbiq Task – Mini E-Commerce App

**Author:** Segev Grotas  
**Live Demo:** [https://segevgr.github.io/qbiq-task/](https://segevgr.github.io/qbiq-task/)

---

## 📋 Overview

A minimal Vue 3 + TypeScript e-commerce app built as part of the Qbiq home assignment.  
Users can browse digital products, search by name, view product details with reviews, and toggle between light and dark mode.

---

## ⚙️ Tech Stack

- **Vue 3** (Composition API)
- **TypeScript**
- **Pinia** for state management
- **Tailwind CSS** for responsive UI
- **Vite** for fast development and build
- **GitHub Actions** CI/CD → GitHub Pages deployment
- **Docker (multi-stage)** for optimized builds

---

## ✨ Features

- **Product listing** with live **search filter**
- **Category-based filtering** for easy product browsing
- **Lazy loading** for faster performance and optimized **image loading**
- **Detailed product view** with category and **user reviews**
- **Fully responsive design** for all screen sizes
- **Dark / Light mode toggle** for better accessibility
- **Custom 404 page** with friendly navigation
- **Type-safe implementation** using **TypeScript interfaces**
- **Automated build & deploy pipeline** via **GitHub Actions**

---

## 🧱 CI/CD

- **Trigger:** Runs on approved pull requests merged into `main`
- **Pipeline:** Lint → Docker build (with Buildx cache) → Deploy to GitHub Pages

---

© 2025 Segev Grotas
