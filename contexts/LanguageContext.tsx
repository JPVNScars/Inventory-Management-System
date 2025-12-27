import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'app.title': 'Inventory Mate',
    'login.title': 'Welcome Back',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.button': 'Sign In',
    'signup.title': 'Create Account',
    'dashboard.title': 'Dashboard',
    'inventory.title': 'Inventory',
    'profile.title': 'Profile',
  },
  vi: {
    'app.title': 'Quản lý Kho',
    'login.title': 'Chào mừng trở lại',
    'login.email': 'Email',
    'login.password': 'Mật khẩu',
    'login.button': 'Đăng nhập',
    'signup.title': 'Tạo tài khoản',
    'dashboard.title': 'Tổng quan',
    'inventory.title': 'Kho hàng',
    'profile.title': 'Hồ sơ',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
