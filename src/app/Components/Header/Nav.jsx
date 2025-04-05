import Link from "next/link";

export default function Nav({ setMobileToggle }) {
  // Common function to handle mobile menu closure
  const handleMobileToggle = () => {
    if (setMobileToggle) {
      setMobileToggle(false);
    }
  };

  return (
    <ul className="cs_nav_list" role="menu">
      {[
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/service", label: "Services" },
        { path: "/project", label: "Project" },
        { path: "/products", label: "Products" },
        
      ].map((item) => (
        <li key={item.path} role="none">
          <Link
            href={item.path}
            onClick={handleMobileToggle}
            className="nav-link"
            role="menuitem"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}