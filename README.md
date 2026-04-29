# BYTEEX — Landing Page

> Next.js 14 · TypeScript · Tailwind CSS · Contentful CMS · Vercel

Pixel-perfect landing page по дизайну Figma **eCom - Desktop**.

---

## 🚀 Швидкий старт

```bash
# 1. Клонуй репо
git clone https://github.com/YOUR_USER/byteex-landing.git
cd byteex-landing

# 2. Встанови залежності
npm install

# 3. Скопіюй env-файл і заповни змінні
cp .env.local.example .env.local

# 4. Запусти dev-сервер
npm run dev
# → http://localhost:3000
```

---

## 🗂 Структура проєкту

```
byteex-landing/
├── app/
│   ├── globals.css        # Базові стилі, CSS-змінні, утіліти
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Головна сторінка (Server Component, ISR)
├── components/
│   ├── Header.tsx         # Sticky навбар з логотипом, меню, кошиком
│   ├── Hero.tsx           # Announcement bar + Hero секція
│   ├── AsSeenIn.tsx       # "As seen in" — медіа логотипи
│   ├── Features.tsx       # "Loungewear you can be proud of"
│   ├── About.tsx          # "Be your best self" — About секція
│   ├── HowItWorks.tsx     # "Comfort made easy" — 3 кроки
│   ├── InstagramGrid.tsx  # Повношириннна сітка фото (2×11)
│   ├── Testimonials.tsx   # Слайдер відгуків "What are our fans saying?"
│   ├── FAQ.tsx            # Accordion FAQ
│   ├── GreenImpact.tsx    # "Our total green impact" — статистика
│   ├── Newsletter.tsx     # "Find something you love" + продукти + CTA
│   └── Footer.tsx         # Footer з посиланнями та соцмережами
├── lib/
│   └── contentful.ts      # Headless CMS клієнт + fallback дані
├── types/
│   └── contentful.ts      # TypeScript типи для CMS контент-моделей
├── .env.local.example     # Шаблон env-змінних
├── vercel.json            # Конфіг деплою на Vercel
├── tailwind.config.ts     # Tailwind: кольори, шрифти з макету
└── next.config.ts         # Next.js: дозволені домени для зображень
```

---

## 🧠 Що таке Headless CMS (Contentful)?

**Headless CMS** — система керування контентом **без фронтенду** ("без голови").

| Традиційна CMS | Headless CMS |
|---|---|
| Монолітна (WordPress) | API-first |
| Фронтенд вбудований | Ти сам обираєш фронтенд |
| Важко масштабувати | Легко інтегрується з будь-яким фреймворком |

**Як це працює у проєкті:**
1. Контент-менеджер змінює тексти/зображення в адмін-панелі Contentful
2. Next.js отримує ці дані через REST API (`getSiteContent()`)
3. Сторінка оновлюється **без деплою коду** (ISR: `revalidate = 60`)

---

## ⚙️ Налаштування Contentful

### 1. Створи акаунт
→ [app.contentful.com](https://app.contentful.com) (безкоштовний tier)

### 2. Створи Space і Content Models

| Content Type ID | Fields |
|---|---|
| `hero` | headline, subheadline, bulletPoints (array), ctaText, ctaUrl, reviewText, reviewerName, reviewCount |
| `testimonial` | name, rating (number), text |
| `faqItem` | question, answer |
| `greenImpact` | co2Saved, waterSaved, energySaved |
| `productFeature` | title, description, icon |

### 3. Отримай API ключі
**Settings → API keys → Add API key**

### 4. Заповни `.env.local`
```env
CONTENTFUL_SPACE_ID=xxxxxxxxxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> ⚠️ Якщо змінні не заповнені — сайт автоматично використовує **fallback дані** з коду.

---

## 🌐 Деплой на Vercel

```bash
# Варіант 1 — через CLI
npm i -g vercel
vercel

# Варіант 2 — через GitHub
# Push у GitHub → vercel.com → Import Project → Deploy
```

**Environment Variables у Vercel:**
Dashboard → Project → Settings → Environment Variables → додай `CONTENTFUL_SPACE_ID` і `CONTENTFUL_ACCESS_TOKEN`

---

## 🎨 Дизайн-токени (з Figma)

| Назва | HEX |
|---|---|
| Navy (primary) | `#01005B` |
| Navy 2 | `#2A2996` |
| Cream | `#F9F0E5` |
| Cream Dark | `#F0EEEF` |
| Muted text | `#676869` |
| Gold (stars) | `#FFB801` |
| Green (shipping) | `#1FAD40` |

**Шрифти:** Sofia Pro → DM Serif Display · Suisse Int'l → DM Sans (безкоштовні аналоги)

---

## 📋 Технічний стек

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Contentful (Headless)
- **Images:** next/image з Unsplash
- **Hosting:** Vercel
- **Rendering:** ISR (Incremental Static Regeneration)