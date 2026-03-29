# 🚀 Playwright Enterprise Framework (TypeScript)

## 📌 Overview

This framework is designed using **Playwright + TypeScript** with an **enterprise-level scalable architecture**.

### ✔ Key Principles

* Page Object Model (POM)
* Component Object Model (COM)
* Centralized API Layer
* Environment-based execution
* Strong OOP design (Encapsulation, Inheritance, Abstraction, Composition)

# 📂 Project Structure
- Create Complete Framework with  Login UI test cases with below Framework structure  and Login API tests and any update as per any improvements  
---

## 📁 Project Structure

```
playwright-enterprise-framework/
│
├── src/
│   ├── config/            # Environment & runtime configuration
│   ├── fixtures/          # Custom Playwright fixtures (DI)
│   ├── pages/             # Page Object Model (POM)
│   ├── components/        # Reusable UI components (COM)
│   ├── api/               # API Layer (centralized)
│   ├── utils/             # Common utilities
│   ├── hooks/             # Test lifecycle hooks
│   ├── reporters/         # Custom reporters
│   ├── test-data/         # Test data (JSON)
│   ├── tags/              # Custom test tags
│   └── storage/           # Session storage (auth/session)
│
├── tests/
│   ├── ui/                # UI test cases
│   ├── api/               # API test cases
│   └── e2e/               # End-to-End tests
│
├── .env.dev
├── .env.qa
├── .env.prod
├── playwright.config.ts
└── package.json
```

---

BASE_URL=https://automationexercise.com/
API_BASE_URL=https://automationexercise.com/api/


# ⚙️ Environment Configuration
## 📄 `.env.dev`

BASE_URL=https://automationexercise.com/
API_BASE_URL=https://automationexercise.com/api/

HEADLESS=true
BROWSER=chromium

EMAIL=test....@gmail.com
PASSWORD=test..
```

### ▶️ Run with environment

TEST_ENV=qa npx playwright test

# 🧱 Architecture Layers

## 🔹 1. config/

**Purpose:** Centralized configuration management

### Files:

* `env.ts` → Loads environment variables
* `config.ts` → Global config (baseURL, timeout)
* `constants.ts` → Static constants

### ✔ Benefits:

* Environment-based execution
* No hardcoding

### 🧠 OOP:

* **Abstraction** → hides environment complexity

## 🔹 2. pages/ (POM Layer)

### Files:

* `BasePage.ts`
* `HomePage.ts`
* `LoginPage.ts`
* `ProductPage.ts`
* `CartPage.ts`
* `CheckoutPage.ts`
* `admin/*`

---

### ✅ BasePage.ts

**Purpose:** Common reusable actions

**Methods:**

* `navigate()`
* `click()`
* `fill()`

**OOP:**

* ✔ Abstraction
* ✔ Reusability

---

### ✅ LoginPage.ts

**Purpose:** Login functionality

**Responsibilities:**

* Handle login inputs
* Perform login action

**OOP:**

* ✔ Encapsulation → private l

Made by Suresh Babu S

For questions, contributions, or support, please contact.:- 8073372170 - Suresh Babu S
