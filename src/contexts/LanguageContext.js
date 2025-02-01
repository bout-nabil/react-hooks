import React, { createContext, useState } from 'react';

// Création du contexte
export const LanguageContext = createContext();

// Langues disponibles
const translations = {
  en: {
    searchPlaceholder: "Search for a product...",
    loading: "Loading...",
    error: "Error:",
    price: "Price:",
    previous: "Previous",
    next: "Next",
    reload: "Reload"
  },
  fr: {
    searchPlaceholder: "Rechercher un produit...",
    loading: "Chargement...",
    error: "Erreur:",
    price: "Prix:",
    previous: "Précédent",
    next: "Suivant",
    reload: "Rechargement"
  },
};

// Provider du contexte
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  const translate = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
