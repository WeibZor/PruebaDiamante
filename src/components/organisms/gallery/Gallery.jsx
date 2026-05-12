import { useEffect, useMemo, useState } from "react";
import ProductCard from "../../molecules/ProductCard";
import { getCategories, getProductsByCategory } from "../../../services/productService";

const ITEMS_PER_PAGE = 8;

export default function Gallery() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    Promise.all([getCategories(), getProductsByCategory("all")])
      .then(([categoryList, productList]) => {
        setCategories(categoryList);
        setProducts(productList);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    getProductsByCategory(selectedCategory)
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();
    if (!normalized) return products;

    return products.filter((product) => {
      return (
        product.title.toLowerCase().includes(normalized) ||
        product.description.toLowerCase().includes(normalized)
      );
    });
  }, [products, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-fuchsia-500" />
      </div>
    );
  }

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 md:p-8 mb-8 shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-fuchsia-300">Fake Store API</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-100">Tienda profesional con categorías reales</h1>
            <p className="mt-3 max-w-2xl text-slate-300 leading-7">
              Navega por productos reales de Fake Store API y filtra por categoría para una experiencia más completa.
            </p>
          </div>
          <div className="max-w-md">
            <label className="mb-2 block text-sm font-medium text-slate-300">Buscar productos</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar por nombre o descripción..."
              className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-5 py-3 text-slate-100 outline-none transition focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === category
                  ? 'bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20'
                  : 'border border-slate-700 bg-slate-950 text-slate-200 hover:border-fuchsia-400 hover:text-white'
              }`}
            >
              {category === 'all' ? 'Todas' : category}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="glass-panel p-10 text-center text-slate-300">
          No se encontraron productos para esa búsqueda.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`h-10 min-w-[3rem] rounded-full border px-3 text-sm font-semibold transition ${
                    page === currentPage
                      ? 'border-fuchsia-500 bg-fuchsia-500 text-white'
                      : 'border-slate-700 bg-slate-950/80 text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </section>
  );
}
