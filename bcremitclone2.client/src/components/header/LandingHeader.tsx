import LanguageIcon from '@mui/icons-material/Language';
import logo from "assets/header-logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import MobileLandingNavBar from 'components/navbar/MobileLandingNavBar';
import Button from 'components/ui/Button';
import Select from 'react-select';

import phFlagRounded from 'assets/flag-icon-round/philippines-rounded.png';


function LandingHeader() {

  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const options = [
    { value: 'philippines', label: 'Philippines', image: phFlagRounded }
  ]

  const goToLoginPage = () => {
    navigate("/login");
  }
  const goToRegisterPage = () => {
    navigate("/register");
  }

  return (
    <header className="flex flex-row justify-between items-center px-3 lg:px-16 py-3 text-bluewhale font-figtree shadow-xs">
      <div className="cursor-pointer">
        <img src={logo} alt="bcremit-logo" className="h-13" />
      </div>
      <nav className="hidden lg:flex items-center text-md font-regular">
        <ul className="flex">
          <li>
            <Link to="#" className="block py-2 px-4 transition duration-300 ease-in-out rounded-lg hover:bg-gray-200 hover:scale-105">How it Works</Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 transition duration-300 ease-in-out rounded-lg hover:bg-gray-200 hover:scale-105">Contact</Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 transition duration-300 ease-in-out rounded-lg hover:bg-gray-200 hover:scale-105">FAQs</Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 transition duration-300 ease-in-out rounded-lg hover:bg-gray-200 hover:scale-105">Blog</Link>
          </li>
        </ul>

        <form>
          <Select
            options={options}
            defaultValue={options[0]}
            isSearchable={false} 
            formatOptionLabel={({ label, image }) => (
              <div className="flex flex-row items-center gap-2">
                <img src={image} alt={label} className="h-6 w-6" />
                <span>{label}</span>
              </div>
            )}
          />
        </form>
      </nav>

      <div className="hidden lg:flex flex-row gap-2">
        <div className="flex items-center gap-2">
          <LanguageIcon />
          <select>
            <option>English</option>
            <option>Spanish</option>
          </select>
        </div>
        <Button
          onClick={goToLoginPage}
          className="h-full py-3 px-4 border-1 text-blue-500 border-blue-500 rounded-md hover:bg-blue-500 transition duration-300 ease-in-out hover:text-white cursor-pointer">Login</Button>
        <Button
          onClick={goToRegisterPage}
          className="h-full py-3 px-4 text-white bg-blue-500 transition duration-300 ease-in-out rounded-md hover:bg-gray-300 cursor-pointer">Register</Button>
      </div>

      <div className="lg:hidden">
        <MenuIcon
          onClick={() => setIsVisible(!isVisible)}
          className="transition duration-300 ease-in-out rounded-md hover:bg-gray-300"
        />
        {
          isVisible &&
          <MobileLandingNavBar loginButton={goToLoginPage} registerButton={goToRegisterPage} />
        }
      </div>
      
    </header>
  );
}

export default LandingHeader;