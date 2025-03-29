
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | Smmart Business Consulting";
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-smmart-gray py-20">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold text-smmart-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you are looking for doesn't exist or is under construction.
          </p>
          <Button asChild className="btn-primary">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
