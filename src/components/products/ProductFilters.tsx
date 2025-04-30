import React, { useState } from "react";
import { Filters } from "../../types";

interface ProductFiltersProps {
  onFilterChange: (filters: Filters) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>({
    category: "all",
    priceRange: "all",
    skinType: "all",
  });

  const categories = ["Skincare", "Makeup", "Haircare", "Fragrance"];
  const priceRanges = ["Under $25", "$25-$50", "$50-$100", "Over $100"];
  const skinTypes = [
    "All Skin Types",
    "Dry",
    "Oily",
    "Combination",
    "Sensitive",
  ];

  const handleFilterChange = (type: keyof Filters, value: string) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <select
          className="w-full p-2 border rounded-md"
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <select
          className="w-full p-2 border rounded-md"
          value={filters.priceRange}
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
        >
          <option value="all">All Prices</option>
          {priceRanges.map((range) => (
            <option key={range} value={range.toLowerCase()}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Skin Type</h3>
        <select
          className="w-full p-2 border rounded-md"
          value={filters.skinType}
          onChange={(e) => handleFilterChange("skinType", e.target.value)}
        >
          {skinTypes.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
