import logo from '../assets/images//home/getlinked.png'

const Logo = ({ className }: { className: string }) => {
  return (
    <>
      <img src={logo} alt="GetLinked Logo" className={className} />
    </>
  )
}

export default Logo
