# 📊 Promessômetro Angular Frontend

[![Angular](https://img.shields.io/badge/Angular-18-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](../../pulls)
[![Status](https://img.shields.io/badge/status-Done-green)]()

**Angular frontend application** that consumes the **Promessômetro .NET API** and displays municipal transparency data in a clean, responsive interface.


## 🎯 Project Purpose

The goal of this project is to:

- 🏛 **Consume the Promessômetro API** to fetch information on public promises and City Council requests.
- 📊 **Display statistics** about approved/rejected requests and councilors’ negative votes.
- 📈 **Show fulfillment percentages** for promises made by the City Hall.
- 💻 Provide a **user-friendly and responsive** experience for citizens.

---

## 🏗 Application Structure

```
promessometro_angular/
├── src/
│   ├── app/
│   │   ├── components/      → Reusable Angular components (tables, charts, cards)
│   │   ├── services/        → HTTP services for API communication
│   │   ├── models/          → Interfaces for Promises, Requests, Councilors
│   │   ├── pages/           → Page components (Dashboard, Details, etc.)
│   │   └── app.module.ts    → Module registration and routing
│   ├── assets/              → Styles, icons, and static assets
│   ├── environments/        → Environment configs (API URLs)
│   └── main.ts              → Application bootstrap
├── angular.json             → Angular CLI configuration
├── package.json             → Dependencies and scripts
└── README.md                → Project documentation
```

⚙️ Key Features
🔌 API Integration – Fetch data from the Promessômetro backend.

📊 Data Visualization – Interactive charts and tables.

🧭 Navigation – Dashboard, Request Details, and Promise Details.

🧩 Modular Architecture – Components, Services, and Models separation.

🌎 Environment Configs – Easily switch between dev and prod API URLs.

🚀 How to Run
bash
Copiar
Editar
# 1️⃣ Clone the repository
git clone https://github.com/silas-bovolin/promessometro_angular.git
cd promessometro_angular

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the development server
ng serve --open
The app will launch at http://localhost:4200/, fetching data from the configured API.
