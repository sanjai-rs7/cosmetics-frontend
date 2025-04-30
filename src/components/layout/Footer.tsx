import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif italic text-cream mb-4">
              GlowPrime
            </h3>
            <p className="text-sm text-cream/80 mb-4">
              Timeless beauty essentials, crafted with vintage elegance and
              modern performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-cream/80 hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-cream transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-cream/80 hover:text-cream transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:hello@belleepoque.example"
                className="text-cream/80 hover:text-cream transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-4 text-cream">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shop?category=skincare"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=makeup"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Makeup
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=fragrances"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Fragrances
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=bath"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Bath & Body
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=gifts"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-serif mb-4 text-cream">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-lg font-serif mb-4 text-cream">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/login"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Create Account
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/account/orders"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className="text-cream/80 hover:text-cream transition-colors text-sm"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider bg-cream/20 my-8"></div>

        <div className="text-center text-cream/60 text-sm">
          <p>&copy; {currentYear} GlowPrime Cosmetics. All rights reserved.</p>
          <p className="mt-2 text-xs">
            This is a fictional e-commerce store created for demonstration
            purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
