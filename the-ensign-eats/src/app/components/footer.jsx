import PropTypes from "prop-types";
import Link from "next/link";

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid={"footer"}
      className="flex flex-row justify-between bg-teal-900 p-4 border-t border-gray-300"
    >
      <ul className="flex flex-row items-center space-x-6">
        {links.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <Link href={link.url} className="text-white hover:text-gray-300 ">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div data-testid="footerContent" className="text-white text-sm pl-8
      ">
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