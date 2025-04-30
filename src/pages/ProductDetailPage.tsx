import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingBag,
  Heart,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { getProductById, getProductsByCategory, Product } from "../utils/data";
import { useCart } from "../contexts/CartContext";
import ProductCard from "../components/products/ProductCard";
import Button from "../components/ui/Button";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const productData = getProductById(id);
      setProduct(productData);

      if (productData) {
        // Set page title
        // document.title = `₹{productData.name} | GlowPrime`;
        document.title = `₹${productData.name} | GlowPrime`;

        // Get related products (same category, excluding current product)
        const related = getProductsByCategory(productData.category)
          .filter((p) => p.id !== id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }

    // Reset states when product changes
    setQuantity(1);
    setAddedToCart(false);

    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        },
        quantity
      );
      setAddedToCart(true);

      // Reset "Added to cart" message after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="w-12 h-12 border-4 border-rose-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-burgundy">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/shop"
          className="flex items-center text-burgundy-light hover:text-rose-gold transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Shop
        </Link>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-2">
            <span className="text-sm uppercase tracking-wider text-rose-gold">
              {product.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl mb-2">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex gap-0.5 mr-2">
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
            <span className="text-sm text-burgundy-light">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-2xl font-medium mb-6">
            ₹{product.price.toFixed(2)}
          </p>

          <p className="text-burgundy-light mb-6">{product.description}</p>

          <div className="mb-6">
            <p className="text-burgundy mb-2">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-sand-light/50 px-3 py-1 rounded-full text-sm text-burgundy"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-burgundy mb-3">Quantity:</p>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="border border-sand w-10 h-10 flex items-center justify-center rounded-l-md"
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
              >
                <Minus
                  size={16}
                  className={quantity <= 1 ? "text-sand" : "text-burgundy"}
                />
              </button>

              <div className="border-t border-b border-sand w-12 h-10 flex items-center justify-center">
                {quantity}
              </div>

              <button
                onClick={increaseQuantity}
                className="border border-sand w-10 h-10 flex items-center justify-center rounded-r-md"
                aria-label="Increase quantity"
                disabled={product.stock <= quantity}
              >
                <Plus
                  size={16}
                  className={
                    product.stock <= quantity ? "text-sand" : "text-burgundy"
                  }
                />
              </button>

              <span className="ml-4 text-sm text-burgundy-light">
                {product.stock} in stock
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-grow"
            >
              {addedToCart ? (
                <>
                  <Check size={16} className="mr-2" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={16} className="mr-2" />
                  Add to Cart
                </>
              )}
            </Button>

            <Button variant="outline" className="flex-grow">
              <Heart size={16} className="mr-2" />
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <div className="text-center mb-8">
            <h2 className="font-serif mb-4">You May Also Like</h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
