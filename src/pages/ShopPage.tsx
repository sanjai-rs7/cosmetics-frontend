import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/products/ProductCard";
import { products, categories, Product } from "../utils/data";

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    document.title = "Shop | GlowPrime";

    // Get category filter from URL
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    // Filter products based on selected category
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      // Default: featured first
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy]);

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);

    // Update URL
    if (categoryId) {
      searchParams.set("category", categoryId);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);

    // Close mobile filter on selection
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const categoryName = selectedCategory
    ? categories.find((c) => c.id === selectedCategory)?.name
    : "All Products";

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="font-serif mb-4">{categoryName}</h1>
        <div className="w-24 h-1 bg-rose-gold mx-auto mb-4"></div>
        <p className="text-burgundy-light max-w-2xl mx-auto">
          Discover our curated collection of vintage-inspired beauty essentials,
          crafted with timeless elegance and modern performance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleFilter}
            className="w-full flex items-center justify-between btn-outline mb-4"
          >
            <span className="flex items-center">
              <Filter size={18} className="mr-2" />
              Filter & Sort
            </span>
            <SlidersHorizontal size={18} />
          </button>

          {isFilterOpen && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate-slide-down">
              <div className="mb-6">
                <h3 className="font-serif text-lg mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategoryChange(null)}
                      className={`text-left w-full py-1 ₹{!selectedCategory ? 'text-rose-gold font-medium' : 'text-burgundy hover:text-rose-gold'}`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`text-left w-full py-1 ₹{selectedCategory === category.id ? 'text-rose-gold font-medium' : 'text-burgundy hover:text-rose-gold'}`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-lg mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="input"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-1/4 xl:w-1/5">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <div className="mb-8">
              <h3 className="font-serif text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategoryChange(null)}
                    className={`text-left w-full py-1 transition-colors ₹{!selectedCategory ? 'text-rose-gold font-medium' : 'text-burgundy hover:text-rose-gold'}`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => handleCategoryChange(category.id)}
                      className={`text-left w-full py-1 transition-colors ₹{selectedCategory === category.id ? 'text-rose-gold font-medium' : 'text-burgundy hover:text-rose-gold'}`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:w-3/4 xl:w-4/5">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="font-serif text-xl mb-4">No Products Found</h3>
              <p className="text-burgundy-light">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-burgundy-light">
                  Showing {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? "s" : ""}
                </p>

                {/* Desktop Sort */}
                <div className="hidden lg:flex items-center">
                  <span className="mr-2 text-burgundy-light">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-sand rounded-md px-2 py-1 text-burgundy focus:outline-none focus:ring-1 focus:ring-rose-gold"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
