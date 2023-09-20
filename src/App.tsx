import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow [&>section]:px-5 [&>section]:py-10 [&>section]:md:px-20 [&>section]:border-b [&>section]:border-b-slate-700">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
