import logo from "../assets/1.jpg"
import {FaLinkedin} from "react-icons/fa"
import {FaGit} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
import {Link} from "react-router-dom"
const Linked="https://www.linkedin.com/in/yash-sharma-50a7901bb/"
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="mx-2 w-18 h-14"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link to={Linked}>
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/YashhSharma"}>
            <FaGit></FaGit>
            </Link>
            {/* <FaSquareXTwitter></FaSquareXTwitter> */}
            <Link to={"https://www.instagram.com/alrightyashh/"}>
            <FaInstagram></FaInstagram>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar
