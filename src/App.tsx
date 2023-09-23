import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ScrollHandler />
      <main className="w-[revert] [&>section]:px-10 [&>section]:py-10 [&>section]:md:px-20 [&>section]:lg:px-30 [&>section]:border-b [&>section]:border-b-slate-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
