import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

function Home() {
  const { openSideBar, openModal, isModalOpen } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
}
export default Home;
