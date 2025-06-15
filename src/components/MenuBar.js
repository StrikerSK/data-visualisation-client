import React, { useState } from "react";
import { Link } from "react-router-dom"; // Remove if not using React Router

const MenuBar = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (index) => {
        setOpenMenu(index);
    };

    const menuItems = [
        {
            name: "Nivo",
            sub: [
                // { name: "Dashboard", link: "/nivo" },
                { name: "Stĺpcový graf", link: "/nivo/bar" },
                { name: "Koláčový graf", link: "/nivo/pie" },
            ],
        },
        {
            name: "Recharts",
            sub: [
                // { name: "Dashboard", link: "/recharts" },
                { name: "Stĺpcový graf", link: "/recharts/bar" },
                { name: "Koláčový graf", link: "/recharts/pie" },
            ],
        },
        {
            name: "Apex",
            sub: [
                // { name: "Dashboard", link: "/recharts" },
                { name: "Stĺpcový graf", link: "/apex/bar" },
                { name: "Koláčový graf", link: "/apex/pie" },
            ],
        },
        {
            name: "Home",
            sub: null,
            link: "/",
        },
    ];

    return (
        <nav className="menu-bar">
            <div className="menu-container">
                <div className="menu-title">Ticket selling of PID</div>
                <div className="menu-items">
                    {menuItems.map((item, index) => (
                        <div
                            className="menu-item"
                            key={index}
                            onMouseEnter={() => toggleMenu(index)}
                            onMouseLeave={() => toggleMenu(null)}
                        >
                            {item.sub ? (
                                <button className="menu-link">{item.name}</button>
                            ) : (
                                <Link className="menu-link" to={item.link}>
                                    {item.name}
                                </Link>
                            )}

                            {item.sub && openMenu === index && (
                                <div className="submenu">
                                    {item.sub.map((subItem, subIndex) => (
                                        <Link key={subIndex} to={subItem.link} className="submenu-item">
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;