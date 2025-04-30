import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "../components/products/ProductCard";
import CategoryGrid from "../components/layout/CategoryGrid";
import { getFeaturedProducts } from "../utils/data";

const HomePage = () => {
  useEffect(() => {
    document.title = "GlowPrime | Vintage Cosmetics";
  }, []);

  const featuredProducts = getFeaturedProducts();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/8128069/pexels-photo-8128069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="absolute inset-0 bg-burgundy/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg">
            <h1 className="font-serif italic text-cream mb-4 drop-shadow-md">
              Timeless Beauty
            </h1>
            <p className="text-cream text-lg mb-8 drop-shadow-md">
              Discover our collection of vintage-inspired cosmetics, crafted
              with modern ingredients and traditional elegance.
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center">
              Shop Collection <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4">Explore Our Collection</h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto"></div>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-sand-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif mb-4">Featured Products</h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto mb-4"></div>
            <p className="text-burgundy-light max-w-2xl mx-auto">
              Discover our most beloved beauty treasures, crafted with
              vintage-inspired formulas and elegantly packaged for the modern
              connoisseur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-outline inline-flex items-center">
              View All Products <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Vintage beauty products"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-rose-gold mb-6"></div>
              <p className="mb-4 text-burgundy-light">
                Founded with a passion for vintage beauty rituals and
                formulations, GlowPrime brings the elegance and sophistication
                of bygone eras to modern cosmetics.
              </p>
              <p className="mb-6 text-burgundy-light">
                Each product is thoughtfully crafted to honor traditional beauty
                practices while incorporating modern ingredients and technology,
                resulting in effective, luxurious products that stand the test
                of time.
              </p>
              <Link
                to="/about"
                className="btn-outline inline-flex items-center"
              >
                Read More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-burgundy text-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-cream mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-rose-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-burgundy-dark p-6 rounded-lg">
              <div className="flex text-rose-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="italic mb-4">
                "The Vintage Rose Facial Cream transformed my skincare routine.
                It feels like such a luxurious treat every evening, and my skin
                has never looked better."
              </p>
              <p className="font-medium">— Eleanor S.</p>
            </div>

            <div className="bg-burgundy-dark p-6 rounded-lg">
              <div className="flex text-rose-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="italic mb-4">
                "I absolutely adore the Amber Vanilla Parfum. It's
                sophisticated, long-lasting, and the bottle looks stunning on my
                vanity. A new signature scent!"
              </p>
              <p className="font-medium">— Margaret T.</p>
            </div>

            <div className="bg-burgundy-dark p-6 rounded-lg">
              <div className="flex text-rose-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="italic mb-4">
                "The Beautiful Belle Gift Set was the perfect present for my
                mother. The packaging is exquisite and she loves every product.
                Will definitely shop again!"
              </p>
              <p className="font-medium">— Catherine D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-sand-light/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif mb-4">Join Our Mailing List</h2>
          <div className="w-24 h-1 bg-rose-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto mb-8 text-burgundy-light">
            Subscribe to receive updates on new products, special offers, and
            vintage beauty tips.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="input flex-grow rounded-r-none"
                required
              />
              <button
                type="submit"
                className="btn-primary rounded-l-none whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
