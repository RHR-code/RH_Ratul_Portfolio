import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-gray-50 dark:bg-gray-900 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by MD
            ROBIUL HASAN RATUL
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
