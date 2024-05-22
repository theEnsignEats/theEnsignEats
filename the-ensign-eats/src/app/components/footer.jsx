import PropTypes from "prop-types";
import Link from "next/link";

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid={"footer"}
      className="flex flex-col items-center bg-teal-900 p-4 border-t border-gray-300"
    >
      <ul className="flex flex-row items-center space-x-6 mb-4">
        {links.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <Link href={link.url} className="text-white hover:text-yellow-200">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

 

      <div className="flex flex-row items-center space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-white hover:text-yellow-200" fill="currentColor" viewBox="0 0 30 30">
            <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.68 8.83 8.44 9.74v-6.9h-2.54v-2.84h2.54V9.57c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54v1.84h2.72l-.44 2.84h-2.28v6.9C18.32 20.83 22 16.84 22 12z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-white hover:text-yellow-200" fill="currentColor" viewBox="0 0 25 ">
            <path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.029 2.02.029s1.493-.005 2.02-.03a2.766 2.766 0 0 0 .929-.171 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.029-.685.029-2.02s-.005-1.493-.03-2.02a2.766 2.766 0 0 0-.171-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6zM11.267 9.6A1.667 1.667 0 1 1 9.6 7.933 1.667 1.667 0 0 1 11.267 9.6zM9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.661a3.67 3.67 0 0 1-.233 1.214 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .232-1.213 2.556 2.556 0 0 1 1.463-1.463 3.67 3.67 0 0 1 1.213-.232c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.232 2.556 2.556 0 0 1 1.462 1.463 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path>
          </svg>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-6 h-6 text-white hover:text-yellow-200" fill="currentColor" viewBox="10 5 130 130">
            <path d="M63.999 7.989c-30.883 0-56.009 25.126-56.009 56.01 0 30.885 25.126 56.012 56.009 56.012 30.885 0 56.011-25.127 56.011-56.012-.001-30.884-25.127-56.01-56.011-56.01zm29.81 41.402a23.97 23.97 0 0 1-5.464 5.798c.009.325.015.65.015.975 0 16.334-12.429 33.229-33.229 33.229a33.135 33.135 0 0 1-17.905-5.244.997.997 0 0 1-.402-1.177.99.99 0 0 1 1.056-.658c.877.101 1.746.151 2.584.151 4.08 0 7.968-1.097 11.381-3.193a12.318 12.318 0 0 1-8.842-8.221 1.003 1.003 0 0 1 .204-.969.993.993 0 0 1 .938-.317c.188.036.377.067.565.093-3.473-2.213-5.726-6.104-5.726-10.412v-.143a1 1 0 0 1 1.485-.874c.435.241.886.45 1.349.626a12.318 12.318 0 0 1-2.742-7.762c0-2.178.577-4.322 1.668-6.199a1 1 0 0 1 1.64-.13c5.319 6.522 13.051 10.625 21.368 11.381a12.57 12.57 0 0 1-.088-1.493c0-6.797 5.531-12.327 12.329-12.327 3.207 0 6.31 1.265 8.599 3.487a21.637 21.637 0 0 0 6.351-2.519 1 1 0 1 1 1.464 1.163 12.225 12.225 0 0 1-2.32 4.188 21.278 21.278 0 0 0 2.487-.924 1 1 0 0 1 1.235 1.471z"/>
          </svg>
        </a>
      </div>
      <div className="text-white text-sm mb-4 p-2" data-testid="footerContent">
        © {year}
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

Footer.defaultProps = {
  links: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Menu", url: "/projects" },
    { title: "Order", url: "/uses" },
  ],
};

export default Footer;