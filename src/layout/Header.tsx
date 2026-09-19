import type React from "react"
import GetButton from "../components/Button/GetButton"
import Button from "../components/Button/Button"

const Header = () => {

  const navlists = ['Home', 'Shop', 'About', 'contact', 'Coverage', 'Investor']

  return (
    <nav className="p-3 pr-6  flex justify-between items-center border-b border-b-line">
      <span className="flex justify-center items-center">
        <img src="./icons/harraka_logo_with_text.png" alt="app logo" width={180} />
        {navlists.map((navItem) => <span className="m-2"><Navlinks navItem={navItem} /></span>)}
      </span>
      <span>
        <Button/>
        <GetButton />
      </span>
    </nav>
  )
}

export default Header


const Navlinks: React.FC<{ navItem: string }> = ({ navItem }) => {
  return (
    <a
      className="relative font-display text-ink hover:text-primary-dark transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary-dark after:transition-transform after:duration-300 hover:after:scale-x-100"
      href={navItem}
    >
      {navItem}
    </a>
  )
}


