import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ links, close }) {
  const location = useLocation();
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => {
        return (
          <Link
            className={
              location.pathname === link.path
                ? "sidebar-link active"
                : "sidebar-link"
            }
            to={link.path}
            key={link.name}
          >
            <img src={link.icon} alt="icon" className="icon-size"/>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
