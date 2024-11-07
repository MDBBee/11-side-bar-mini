import { PiArrowFatLeftFill } from 'react-icons/pi';
import logo from './logo.svg';
import { useGlobalContext } from './context';
import { links, social } from './data';

function Sidebar() {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();
  return (
    <aside className={isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <PiArrowFatLeftFill />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon}
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-links">
        {social.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default Sidebar;
