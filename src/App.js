import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';

// TODO: Exercice 2.1 - Créer le LanguageContext
export const LanguageContext = createContext();
export const ThemeContext = createContext();

const translations = {
  en: {
    title: "Product Catalog",
    searchPlaceholder: "Search for a product...",
    price: "Price",
    loading: "Loading...",
    error: "Error",
  },
  fr: {
    title: "Catalogue de Produits",
    searchPlaceholder: "Rechercher un produit...",
    price: "Prix",
    loading: "Chargement...",
    error: "Erreur",
  },
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // TODO: Exercice 2.2 - Ajouter l'état pour la langue
  const [language, setLanguage] = useState("fr"); // FR p ar défaut
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
      <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <h1 className="text-center">Catalogue de Produits</h1>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            {/* TODO: Exercice 2.2 - Ajouter le sélecteur de langue */}
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="form-select w-auto"
              >
                <option value="fr">🇫🇷 Français</option>
                <option value="en">🇬🇧 English</option>
              </select>
          </div>
        </header>
        <main>
          <ProductSearch />
          <ProductList />
        </main>
      </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App
