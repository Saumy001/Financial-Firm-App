# Financial Firm App 🧾

A responsive, modern financial dashboard built with Vercel v0, designed to help financial firms display dynamic reports, portfolios, income statements, and dashboards. This app is built for scalability and reusability — making onboarding easier for future developers.

## 🌐 Live Demo

🔗 [financial-firm-app.vercel.app](https://financial-firm-app.vercel.app/)

## 📂 GitHub Repo

🔗 [github.com/Saumy001/Financial-Firm-App](https://github.com/Saumy001/Financial-Firm-App)

---

## 🛠 Tech Stack

- [Next.js (App Router)](https://nextjs.org/docs/app)
- [Vercel v0 (Generated Code + Customization)](https://vercel.com)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS (if used)]
- [Vercel Hosting](https://vercel.com)

---

## 📦 Features

- 📊 Modular dashboards with real-time financial report structure
- 🔁 Reusable UI components (e.g., Header, Profile Card, Reporting Layout)
- 🔍 Organized folder structure using Next.js App Router
- ✨ Vercel v0 starter with custom tweaks to UI and routing
- 📈 Reports: balance sheets, hedge funds, income statements
- 🔐 Profile and report sections tailored for financial use cases

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Saumy001/Financial-Firm-App.git
cd Financial-Firm-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

> The app will be available at `http://localhost:3000`

---

## 📁 Folder Structure

```
/app
├── dashboard/
├── my-dashboard/
├── portfolio/
├── reporting/
│   ├── fund/
│   │   ├── balance-sheet/
│   │   └── hf-fund/
│   ├── income-statement/
│   │   └── result/
│   └── my-reports/
├── user-profile/
├── layout.tsx
└── page.tsx

/components
└── ui/
    ├── header.tsx
    ├── profile-card.tsx
    ├── reportingLayout.tsx
    └── theme-provider.tsx

/hooks
/lib
```

---

## 🧩 Reusable Components

This project includes common UI pieces in `/components/ui/`, such as:

| Component         | Description                          |
|------------------|--------------------------------------|
| `Header`         | Top navigation bar                   |
| `ProfileCard`    | User profile display module          |
| `ReportingLayout`| Common layout used for reporting pages |
| `ThemeProvider`  | Manages theming across app           |

These are built to be reused across dashboard and reporting views.

---

## 🔧 Environment Variables

Currently no API keys or `.env` files are required.

---

## 👥 Contributing

This project is maintained for internal use, but contributions from team members are welcome.

If you're a new developer onboarding this project:
1. Clone the repo
2. Follow the dev instructions above
3. Refer to `/components/ui/` for UI building blocks
4. Use `/app/` to structure routes using App Router

---

## 📄 License

This project is private and intended for internal use only.

---

## 🧠 Notes

- Originally scaffolded via Vercel v0 from a screenshot-based AI starter.
- UI and layout have been heavily customized from the starter to better fit the financial firm's branding and data flow needs.