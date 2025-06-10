import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Rahul Borugadda. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;