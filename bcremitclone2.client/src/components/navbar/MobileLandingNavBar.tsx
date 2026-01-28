import { Link } from 'react-router';
import Button from '../ui/Button';

interface MobileNavButtonProps {
  loginButton: () => void;
  registerButton: () => void;
}

function MobileLandingNavBar ({ loginButton, registerButton }: MobileNavButtonProps){
  return (
    <div className="absolute w-50 px-2 pt-3 pb-2 bg-white top-18 right-5 z-1000000 border-1 border-gray-100 rounded-xl shadow-lg">
      <nav className="flex flex-col items-center w-full gap-2">
        <ul className="flex flex-col w-full gap-3">
          <li>
            <Link
              to="#"
              className="px-2"
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="px-2"
            >
              Blog
            </Link>
          </li>
          <li>
            <form>
              <select id="country" className="relative pt-1 pb-2 pl-10 pr-13 text-sm font-regular border-1 border-gray-200 text-[0.95rem] font-semibold rounded-sm appearance-none">
                <option value="philippines">Philippines</option>
              </select>
            </form>
          </li>
          <li>
            <form className="px-2 w-full">
              <select>
                <option>English</option>
              </select>
            </form>
          </li>
          <li>
            <Button
              onClick={loginButton}
              className="px-2">
              Login
            </Button>
          </li>
          <li>
            <Button
              onClick={registerButton}
              className="w-full text-left border-1 border-blue-500 rounded-lg">
              Register
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileLandingNavBar;