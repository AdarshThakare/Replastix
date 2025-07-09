import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground p-4 mt-10 shadow-inner">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-sm">
        <p>&copy; {new Date().getFullYear()} Replastix. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2 mt-2 sm:mt-0">
          <a href="/info" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
