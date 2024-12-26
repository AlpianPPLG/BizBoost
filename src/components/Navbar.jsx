import { useState, useEffect } from "react";
import { X, Menu, ChevronDown } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
    submenu: [
      { name: "Web Development", href: "#web-development" },
      { name: "Mobile Development", href: "#mobile-development" },
      { name: "UI/UX Design", href: "#ui-ux-design" },
    ],
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-500 ease-in-out ${
        isSticky ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition duration-500 ease-in-out ${
          isSticky ? "bg-opacity-100" : "bg-opacity-70"
        }`}
      >
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a
              href="#"
              className="flex-shrink-0 flex items-center"
              onClick={handleLogoClick}
            >
              <span className="text-2xl font-bold text-gray-900">BizBoost</span>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    className="text-gray-700 hover:text-blue-600 flex items-center px-4 py-2 rounded-md text-md font-medium"
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-5 w-5" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md text-md font-medium"
                  >
                    {item.name}
                  </a>
                )}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-150 ease-in-out">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {subitem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-2xl font-bold text-gray-900">BizBoost</span>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.name} className="space-y-4">
                {item.submenu ? (
                  <button
                    className="flex items-center justify-between w-full text-xl font-semibold text-gray-900"
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="h-6 w-6" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="block text-xl font-semibold text-gray-900"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                )}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.name}
                        href={subitem.href}
                        className="block text-lg text-gray-600"
                        onClick={toggleMenu}
                      >
                        {subitem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
