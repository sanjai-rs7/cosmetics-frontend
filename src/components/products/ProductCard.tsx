import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";
import { Product } from "../../utils/data";
import { useCart } from "../../contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <Link
      to={`/shop/product/₹{product.id}`}
      className="group card bg-white overflow-hidden flex flex-col h-full animate-fade-in"
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay buttons */}
        <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="bg-cream p-2 rounded-full text-burgundy hover:bg-white transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag size={20} />
            </button>
            {/* <button
              className="bg-cream p-2 rounded-full text-burgundy hover:bg-white transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={20} />
            </button> */}
          </div>
        </div>

        {/* Out of stock overlay */}
        {product.stock <= 0 && (
          <div className="absolute inset-0 bg-burgundy/40 flex items-center justify-center">
            <span className="bg-burgundy text-cream px-4 py-2 font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-1">
          <span className="text-xs uppercase tracking-wider text-rose-gold">
            {product.category}
          </span>
        </div>

        <h3 className="font-serif text-lg mb-1 group-hover:text-rose-gold transition-colors">
          {product.name}
        </h3>

        <div className="mt-auto pt-2 flex justify-between items-center">
          <span className="font-medium">₹{product.price.toFixed(2)}</span>

          <div className="flex items-center">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < product.rating ? "text-rose-gold" : "text-sand"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs ml-1 text-burgundy-light">
              ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
