import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Button from "../components/ui/Button";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="font-serif text-6xl mb-4">404</h1>
        <div className="w-16 h-1 bg-rose-gold mx-auto mb-6"></div>
        <h2 className="font-serif text-2xl mb-4">Page Not Found</h2>
        <p className="text-burgundy-light mb-8">
          We're sorry, the page you requested could not be found. Please return
          to the homepage or explore our collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary">
              <Home size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="outline">Shop Collection</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
