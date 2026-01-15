# CouponBlast - מערכת לניהול קופונים

![CouponBlast Logo](public/logo192.png)

אפליקציית ווב מודרנית לניהול וגילוי קופונים והטבות. האפליקציה מאפשרת למשתמשים לגלות קופונים, לשמור מועדפים ולנהל את הקופונים האישיים שלהם.

## דרישות מוקדמות

- Node.js (גרסה 14 ומעלה)
- npm (מגיע עם Node.js) או Yarn
- גישה לשרת ה-API של הפרויקט

## התקנה

1. שכפול המאגר:
   ```bash
   git clone [repository-url]
   cd my-coupons-app
   ```

2. התקנת התלויות:
   ```bash
   npm install
   # או עם Yarn
   # yarn install
   ```

3. יצירת קובץ סביבה:
   ```
   צור קובץ חדש בשם `.env` בתיקיית השורש של הפרויקט והוסף את המשתנים הבאים:
   VITE_API_URL=your_api_url_here
   ```

## הרצת הפרויקט

### מצב פיתוח

```bash
npm run dev
# או עם Yarn
# yarn dev
```

האפליקציה תופעל בכתובת [http://localhost:5173](http://localhost:5173)

### בנייה להפצה

```bash
npm run build
# או עם Yarn
# yarn build
```

הקבצים המיועדים להפצה ייווצרו בתיקייה `dist/`.

## סקריפטים זמינים

- `npm run dev` - מפעיל את השרת בפיתוח עם Vite
- `npm run build` - בונה את האפליקציה למצב הפקה
- `npm run preview` - מריץ גרסה מקומית של האפליקציה לאחר בנייה
- `npm run lint` - מריץ את ה-ESLint על הקבצים
- `npm run format` - מעצב את הקוד עם Prettier

## מבנה הפרויקט

```
src/
├── components/     # קומפוננטות משותפות
├── contexts/      # Contexts של React
├── hooks/         # Custom Hooks
├── pages/         # קומפוננטות עמודים
├── services/      # שירותי API
├── styles/        # קבצי עיצוב גלובליים
└── utils/         # פונקציות עזר
```

## משתני סביבה

הפרויקט משתמש בקובץ `.env` להגדרת משתני סביבה. להלן המשתנים הזמינים:

- `VITE_API_URL` - כתובת ה-API של השרת

## פריסה (Deployment)

הפרויקט מוכן לפריסה עם Vercel, Netlify או כל שרת סטטי אחר. להלן הוראות לפריסה ב-Vercel:

1. התקן את ה-Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. התחבר לחשבון ה-Vercel שלך:
   ```bash
   vercel login
   ```

3. בצע פריסה:
   ```bash
   vercel
   ```

## רישיון

MIT

## קרדיטים

פותח על ידי [שם החברה/המפתח]
