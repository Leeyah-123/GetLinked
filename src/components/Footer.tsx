import logo from '../assets/getlinked.png'

const Footer = () => {
  return (
    <footer className="bg-muted-purple px-5 md:px-20 py-20 static bottom-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-[15%]">
      {/*  */}
      <div className="space-y-20">
        <div className="space-y-5">
          <img src={logo} alt="" />
          <p className="">
            Getlinked Tech Hackathon is a technology innovation program established by a
            group of organizations with the aim of showcasing young and talented
            individuals in the field of technology.
          </p>
        </div>

        <div className="divide-x-4 divide-magenta grid grid-cols-2 text-center w-full mt-auto">
          <a href="/">Terms of Use</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>

      {/* Links */}
      <div className="md:flex justify-center">
        <div>
          <p className="text-magenta text-lg font-medium mb-5">Useful Links</p>
          <ul className="space-y-3">
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">Timeline</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Register</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="md:flex justify-center">
        <div>
          <p className="text-magenta text-lg font-medium mb-5">Contact Us</p>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
