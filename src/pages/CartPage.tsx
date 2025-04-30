import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/ui/Button";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal } =
    useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    document.title = "Shopping Cart | GlowPrime";
  }, []);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      return;
    }
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    if (!currentUser) {
      navigate("/login", { state: { from: { pathname: "/cart" } } });
      return;
    }

    setIsCheckingOut(true);

    // Simulate checkout process
    setTimeout(() => {
      // In a real app, this would process the order and redirect to a confirmation page
      clearCart();
      navigate("/account");
    }, 2000);
  };

  // Calculate shipping and total
  const shipping = subtotal > 75 ? 0 : 10;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-burgundy-light text-6xl mb-6 flex justify-center">
              <ShoppingBag />
            </div>
            <h1 className="font-serif text-3xl mb-4">Your Cart is Empty</h1>
            <p className="text-burgundy-light mb-8">
              It seems you haven't added any products to your cart yet.
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center">
              Continue Shopping <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="font-serif mb-4">Your Shopping Cart</h1>
        <div className="w-24 h-1 bg-rose-gold mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-sand-light">
              <div className="flex justify-between items-center">
                <h2 className="font-serif text-xl">
                  Items in Your Cart ({cartItems.length})
                </h2>
                <button
                  onClick={() => clearCart()}
                  className="text-burgundy-light hover:text-burgundy text-sm flex items-center"
                >
                  <Trash2 size={14} className="mr-1" />
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="divide-y divide-sand-light">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 flex flex-col sm:flex-row gap-4"
                >
                  <div className="sm:w-24 h-24 bg-sand-light/20 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <Link
                      to={`/shop/product/₹{item.id}`}
                      className="font-serif text-lg mb-1 hover:text-rose-gold transition-colors"
                    >
                      {item.name}
                    </Link>

                    <div className="flex flex-wrap justify-between items-center mt-2">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 border border-sand flex items-center justify-center rounded-l-md"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>

                        <div className="w-10 h-8 border-t border-b border-sand flex items-center justify-center">
                          {item.quantity}
                        </div>

                        <button
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 border border-sand flex items-center justify-center rounded-r-md"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-medium">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </span>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-burgundy-light hover:text-burgundy"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
            <div className="p-6 border-b border-sand-light">
              <h2 className="font-serif text-xl">Order Summary</h2>
            </div>

            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-burgundy-light">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-burgundy-light">Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-sage">Free</span>
                  ) : (
                    <span className="font-medium">₹{shipping.toFixed(2)}</span>
                  )}
                </div>

                {subtotal < 75 && (
                  <div className="text-xs text-sage-dark border border-sage-light p-2 rounded bg-sage-light/20">
                    Add ₹{(75 - subtotal).toFixed(2)} more to qualify for free
                    shipping
                  </div>
                )}

                <div className="border-t border-sand-light pt-4 flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                fullWidth
                isLoading={isCheckingOut}
              >
                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              </Button>

              <div className="mt-4">
                <Link
                  to="/shop"
                  className="text-burgundy-light hover:text-rose-gold text-sm flex justify-center items-center"
                >
                  <ArrowRight size={14} className="mr-1 transform rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
