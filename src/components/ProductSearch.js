import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext, LanguageContext} from '../App';
import { useDebounce } from '../hooks/useDebounce';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  const { language, translations } = useContext(LanguageContext);
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Recherche pour:', debouncedSearchTerm);
      // Ici, on pourrait appeler une API pour rechercher les produits
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={translations[language]?.searchPlaceholder || "Rechercher un produit..."}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;