import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollHandler from './components/ScrollHandler'

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ScrollHandler />
      <main className="flex-grow [&>section]:px-5 [&>section]:pt-10 [&>section]:md:px-20 [&>section]:border-b [&>section]:border-b-slate-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
