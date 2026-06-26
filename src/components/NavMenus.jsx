import { Link } from "react-router";
import navmenus from "../../json/nav.json";

export default function NavMenus() {
  return (
    <>
      {navmenus.map((navmenu) => (
        <li key={navmenu.id}>
          <Link to={navmenu.link}>{navmenu.title}</Link>
        </li>
      ))}
    </>
  );
}
