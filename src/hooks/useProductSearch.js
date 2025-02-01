import { useState, useEffect } from 'react';

// TODO: Exercice 3.1 - Créer le hook useDebounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
// TODO: Exercice 3.2 - Créer le hook useLocalStorage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Erreur lors de la récupération du localStorage", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Erreur lors de l'enregistrement dans localStorage", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

const useProductSearch = (searchTerm) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useLocalStorage('currentPage', 1);
  const [totalPages, setTotalPages] = useState(1);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // TODO: Exercice 4.2 - Ajouter l'état pour la pagination

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // TODO: Exercice 4.2 - Modifier l'URL pour inclure les paramètres de pagination
        const response = await fetch( `https://api.daaif.net/products?page=${page}&limit=10&search=${debouncedSearchTerm}`);
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
        setTotalPages(data.totalPages); 
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // TODO: Exercice 4.2 - Ajouter les dépendances pour la pagination

  // TODO: Exercice 4.1 - Ajouter la fonction de rechargement
  const reloadProducts = () => {
    setPage(1);  // Reset page to 1
  };
  // TODO: Exercice 4.2 - Ajouter les fonctions pour la pagination
  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return { 
    products, 
    loading, 
    error,
    page,
    // TODO: Exercice 4.1 - Retourner la fonction de rechargement
    setPage,
    totalPages,
    // TODO: Exercice 4.2 - Retourner les fonctions et états de pagination
    reloadProducts,
    nextPage,
    prevPage
  };
};

export default useProductSearch;