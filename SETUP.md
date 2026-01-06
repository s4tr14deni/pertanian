# Aplikasi Tani Android (React Native)

Ini adalah konversi React dari aplikasi **mabelle_farmer** ke React Native untuk Android.

## Setup Awal

### 1. Install Dependencies
Semua dependencies sudah terinstall. Jika perlu reinstall:

```bash
cd mabelle_farmer_android
npm install
```

### 2. Setup Environment Variable
Edit file `.env` dan masukkan Gemini API Key Anda:

```bash
EXPO_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

### 3. Jalankan Aplikasi

#### Option A: Expo Go (Testing di Smartphone)
```bash
npx expo start
```
Kemudian scan QR Code dengan Expo Go app di smartphone Anda.

#### Option B: Android Emulator
```bash
npx expo start --android
```

#### Option C: Android Studio
```bash
npx expo prebuild --clean
npm run android
```

## Fitur Aplikasi

✅ **Home Screen** - Beranda dengan kategori produk dan produk terlaris
✅ **Marketplace** - Daftar produk dengan filter kategori & search
✅ **Product Detail** - Detail produk dengan spesifikasi lengkap
✅ **Shopping Cart** - Keranjang belanja dengan WhatsApp integration
✅ **Seller Dashboard** - Dashboard penjual dengan statistik
✅ **AI Agronomist** - Chatbot AI Gemini untuk konsultasi pertanian

## Struktur Project

```
mabelle_farmer_android/
├── App.tsx                    # Main app dengan navigation
├── app.json                   # Expo configuration
├── types.ts                   # Type definitions
├── constants.ts               # Mock data & constants
├── .env                       # Environment variables
├── components/
│   ├── Layout.tsx
│   └── GeminiAgronomist.tsx
├── screens/
│   ├── HomeScreen.tsx
│   ├── MarketplaceScreen.tsx
│   ├── ProductDetailScreen.tsx
│   ├── CartScreen.tsx
│   └── SellerScreen.tsx
└── services/
    └── geminiService.ts       # Gemini AI integration

```

## Build untuk Android Studio

### 1. Generate Android Project
```bash
npx expo prebuild --clean
```

### 2. Buka di Android Studio
```bash
open android
```

### 3. Build & Run
- Klik "Run" di Android Studio
- Atau use emulator: `npx expo run:android`

## Troubleshooting

**Error: "@react-navigation not found"**
```bash
npm install react-navigation
```

**Error: "GEMINI_API_KEY not found"**
- Pastikan `.env` file ada dengan `EXPO_PUBLIC_GEMINI_API_KEY=your_key`

**Port sudah terpakai**
```bash
npx expo start --clear
```

## Koneksi ke Backend

Ubah `constants.ts` untuk mengganti mock data dengan API real:

```typescript
// Sebelum: Mock data
export const MOCK_PRODUCTS = [...]

// Sesudah: API Call
export const fetchProducts = async () => {
  const res = await fetch('YOUR_API_URL/products');
  return res.json();
}
```

---

**Happy Farming! 🌾**
