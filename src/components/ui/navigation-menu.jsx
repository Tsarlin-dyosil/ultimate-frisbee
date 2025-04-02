import React from "react";

const NavigationMenu = ({ children }) => {
  return <nav className="flex gap-4">{children}</nav>;
};

const NavigationMenuList = ({ children }) => {
  return <ul className="flex gap-4">{children}</ul>;
};

const NavigationMenuItem = ({ children }) => {
  return <li>{children}</li>;
};

const NavigationMenuLink = ({ href, children }) => {
  return (
    <a href={href} className="px-4 py-2 text-sm font-medium hover:bg-gray-200 rounded-md">
      {children}
    </a>
  );
};

export { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink };