import PropTypes from "prop-types";
import Link from "next/link";
import React from "react";

const Footer = ({ 
  links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Menu", url: "/menu" },
    { title: "Order", url: "/order" },
  ] 
}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 border-t border-gray-300 ">
      <div className="container mx-auto flex flex-col items-center p-4">
        <ul className="flex flex-row items-center space-x-6 mb-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} legacyBehavior>
                <a className="text-white hover:text-yellow1">{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-2">
          <div className="flex flex-row items-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-6 h-6" aria-label="facebook">
              <svg className="w-6 h-6 text-white hover:text-yellow1" fill="currentColor" viewBox="0 0 30 30">
                <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.68 8.83 8.44 9.74v-6.9h-2.54v-2.84h2.54V9.57c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54v1.84h2.72l-.44 2.84h-2.28v6.9C18.32 20.83 22 16.84 22 12z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6" aria-label="instagram">
              <svg className="w-6 h-6 text-white hover:text-yellow1" fill="currentColor" viewBox="0 0 25 25">
                <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path>
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6" aria-label="twitter">
              <svg className="w-6 h-6 text-white hover:text-yellow1" fill="currentColor" viewBox="10 10 140 130">
                <path d="M63.999 7.989c-30.883 0-56.009 25.126-56.009 56.01 0 30.885 25.126 56.012 56.009 56.012 30.885 0 56.011-25.127 56.011-56.012-.001-30.884-25.127-56.01-56.011-56.01zm29.81 41.402a23.97 23.97 0 0 1-5.464 5.798c.009.325.015.65.015.975 0 16.334-12.429 33.229-33.229 33.229a33.135 33.135 0 0 1-17.905-5.244.997.997 0 0 1-.402-1.177.99.99 0 0 1 1.056-.658c.877.101 1.746.151 2.584.151 4.08 0 7.968-1.097 11.381-3.193a12.318 12.318 0 0 1-8.842-8.221 1.003 1.003 0 0 1 .204-.969.993.993 0 0 1 .938-.317c.188.036.377.067.565.093-3.473-2.213-5.726-6.104-5.726-10.412v-.143a1 1 0 0 1 1.485-.874c.435.241.886.45 1.349.626a12.318 12.318 0 0 1-2.742-7.762c0-2.178.577-4.322 1.668-6.199a1 1 0 0 1 1.64-.13c5.319 6.522 13.051 10.625 21.368 11.381a12.57 12.57 0 0 1-.088-1.493c0-6.797 5.531-12.327 12.329-12.327 3.207 0 6.31 1.265 8.599 3.487a21.637 21.637 0 0 0 6.351-2.519 1 1 0 1 1 1.464 1.163 12.225 12.225 0 0 1-2.32 4.188 21.278 21.278 0 0 0 2.487-.924 1 1 0 0 1 1.235 1.471z"/>
              </svg>
            </a>
          </div>
          <div className="w-0.5 bg-white h-8 mx-2 hidden md:block"></div>
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="5 5 65 65" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 21.8827 33.8360 C 16.0702 28.0469 12.3671 20.6640 16.7499 16.2813 C 17.0077 16.0234 17.2890 15.7656 17.5468 15.5078 C 18.8827 14.2422 20.1718 14.3125 21.3202 15.9297 L 24.3671 20.2656 C 25.3983 21.7656 25.1405 22.6094 24.0390 23.7813 L 23.0780 24.8360 C 22.7265 25.1640 22.8671 25.6094 23.0312 25.8906 C 23.4765 26.7344 24.7421 28.2344 26.1014 29.5938 C 27.5077 31.0000 28.9374 32.1953 29.8280 32.6875 C 30.1562 32.875 30.6249 32.9219 30.9296 32.6406 L 31.9374 31.6797 C 33.0624 30.5781 33.9765 30.2969 35.4296 31.3281 C 37.4452 32.7578 38.6640 33.6016 39.8593 34.4219 C 41.3358 35.5000 41.6874 36.8360 40.1874 38.1953 C 39.9296 38.4531 39.6952 38.7344 39.4374 38.9922 C 35.0546 43.3516 27.6952 39.6484 21.8827 33.8360 Z"></path>
                </g>
              </svg>
              <span className="text-white ml-2">801-384-8776</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="2 2 25 25" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.005 9C7.005 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z"></path>
                </g>
              </svg>
              <span className="text-white ml-2">contact@ensigneats.com</span>
            </div>
          </div>
        </div>

        <div className="text-white text-sm mb-4 p-2">
          © {year}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Footer;