import { Link } from "react-router-dom";
import { categories, Category } from "../../utils/data";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/shop?category=₹{category.id}`}
      className="relative overflow-hidden group rounded-lg"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-burgundy/30 group-hover:bg-burgundy/50 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
        <h3 className="text-cream font-serif text-2xl mb-2">{category.name}</h3>
        <p className="text-cream/90 text-sm hidden md:block">
          {category.description}
        </p>
        <span className="mt-4 inline-block px-4 py-2 border border-cream text-cream text-sm uppercase tracking-wider group-hover:bg-cream group-hover:text-burgundy transition-all duration-300">
          Shop Now
        </span>
      </div>
    </Link>
  );
};

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
