import { useState, useEffect, FormEvent } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { User, Package, Heart, LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const ProfileSection = () => {
  const { currentUser, updateProfile, logout } = useAuth();
  const [firstName, setFirstName] = useState(currentUser?.firstName || "");
  const [lastName, setLastName] = useState(currentUser?.lastName || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      await updateProfile({ firstName, lastName });
      setSuccess("Profile updated successfully");
      setIsEditing(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to update profile");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="font-serif text-2xl mb-6">My Profile</h2>

      {error && (
        <div className="mb-6 p-4 bg-burgundy/10 border-l-4 border-burgundy text-burgundy rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-sage-light/20 border-l-4 border-sage text-sage-dark rounded">
          {success}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Input
              label="First Name"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!isEditing}
              required
            />

            <Input
              label="Last Name"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={!isEditing}
              required
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            id="email"
            value={email}
            disabled
            helperText="Email cannot be changed"
          />

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-4">
            {isEditing ? (
              <>
                <Button type="submit" variant="primary" isLoading={isLoading}>
                  Save Changes
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setFirstName(currentUser?.firstName || "");
                    setLastName(currentUser?.lastName || "");
                  }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                type="button"
                variant="primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const OrdersSection = () => {
  // This would fetch from a real API in a production app
  const orders = [
    {
      id: "1001",
      date: "2023-06-15",
      total: 124.5,
      status: "Delivered",
      items: 3,
    },
    {
      id: "1002",
      date: "2023-07-02",
      total: 85.75,
      status: "Processing",
      items: 2,
    },
  ];

  if (orders.length === 0) {
    return (
      <div>
        <h2 className="font-serif text-2xl mb-6">My Orders</h2>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-burgundy-light mb-4">
            You haven't placed any orders yet.
          </p>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/shop")}
          >
            Shop Now
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-serif text-2xl mb-6">My Orders</h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-sand-light/30">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-burgundy">
                  Order #
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-burgundy">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-burgundy">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-burgundy">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-burgundy">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-burgundy">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand-light">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-sand-light/10">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {order.items}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    ₹{order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ₹{
                      order.status === 'Delivered' 
                        ? 'bg-sage-light/30 text-sage-dark' 
                        : 'bg-rose-gold/20 text-rose-gold'
                    }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button className="text-rose-gold hover:text-burgundy">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const WishlistSection = () => {
  return (
    <div>
      <h2 className="font-serif text-2xl mb-6">My Wishlist</h2>

      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-burgundy-light mb-4">Your wishlist is empty.</p>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/shop")}
        >
          Explore Products
        </Button>
      </div>
    </div>
  );
};

const AccountPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "My Account | GlowPrime";
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { path: "/account", icon: <User size={18} />, label: "Profile" },
    { path: "/account/orders", icon: <Package size={18} />, label: "Orders" },
    { path: "/account/wishlist", icon: <Heart size={18} />, label: "Wishlist" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="font-serif mb-4">My Account</h1>
        <div className="w-24 h-1 bg-rose-gold mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <nav className="divide-y divide-sand-light">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/account"}
                  className={({ isActive }) =>
                    `flex items-center px-6 py-4 hover:bg-sand-light/20 transition-colors ₹{
                      isActive ? 'bg-sand-light/30 text-burgundy font-medium' : 'text-burgundy-light'
                    }`
                  }
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}

              <button
                onClick={handleLogout}
                className="w-full flex items-center px-6 py-4 text-burgundy-light hover:bg-sand-light/20 transition-colors"
              >
                <span className="mr-3">
                  <LogOut size={18} />
                </span>
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Routes>
            <Route path="/" element={<ProfileSection />} />
            <Route path="/orders" element={<OrdersSection />} />
            <Route path="/wishlist" element={<WishlistSection />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
