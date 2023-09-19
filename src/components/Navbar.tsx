import logo from '../assets/getlinked.png'
import { Button } from './Buttons'

const Navbar = () => {
  return (
    <nav className="py-12 border-b border-b-slate-400 px-5 md:px-10 lg:px-20 flex items-center">
      <img src={logo} alt="" className="" />

      <div className="ml-auto">
        <div className="space-x-32 hidden md:flex items-center">
          <ul className="inline-flex space-x-5 capitalize">
            <li>
              <a href="#timeline">timeline</a>
            </li>
            <li>
              <a href="#overview">overview</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          <Button className="px-10 py-3">Register</Button>
        </div>

        <span className="md:hidden border border-slate-400 rounded-md p-2"></span>
      </div>
    </nav>
  )
}

export default Navbar
