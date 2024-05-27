import { useState, useEffect } from "react";

const MenuOverlay = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const selectMenuItems = () => {
      const items = document.querySelectorAll(
        ".vtex-flex-layout-0-x-flexRowContent--MenuRow .vtex-menu-2-x-menuItem"
      );
      setMenuItems(items);
    };

    selectMenuItems();
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => {
      setOpen(true);
    };

    const handleMouseLeave = () => {
      setOpen(false);
    };

    // Adiciona os event listeners para cada item do menu
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("mouseenter", handleMouseEnter);
      menuItem.addEventListener("mouseleave", handleMouseLeave);

      // Limpa os event listeners quando o componente é desmontado
      return () => {
        menuItem.removeEventListener("mouseenter", handleMouseEnter);
        menuItem.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [menuItems]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        visibility: open ? "visible" : "hidden",
        opacity: open ? 1 : 0,
        transition: "all 0.4s ease-in-out",
      }}
    ></div>
  );
};

export default MenuOverlay;
