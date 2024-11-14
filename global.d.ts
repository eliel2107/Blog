declare global {
  interface Window {
    dataLayer: any[];
  }
}

export {};

// global.d.ts

// Declara a função gtag globalmente
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Declara gtag como uma função global
declare let gtag: (...args: any[]) => void;
