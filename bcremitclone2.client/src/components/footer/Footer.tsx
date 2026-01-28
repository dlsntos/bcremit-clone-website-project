import { Link } from 'react-router';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

function Footer () {
  const copyright = "\u00A9";

  return (
    <footer className="w-full p-10 bg-gray-100">

      <div className="flex flex-col items-center">
        <div>
          <ul className="flex flex-row flex-wrap justify-center text-sm lg:text-md font-normal gap-3 lg:gap-5">
            <li><Link to="#" className="hover:underline hover:decoration-solid">Contact</Link></li>
            <li><Link to="#" className="hover:underline hover:decoration-solid">FAQs</Link></li>
            <li><Link to="#" className="hover:underline hover:decoration-solid">Terms & Conditions</Link></li>
            <li><Link to="#" className="hover:underline hover:decoration-solid">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:underline hover:decoration-solid">Affiliate_Program</Link></li>
            <li><Link to="#" className="hover:underline hover:decoration-solid">Promotion</Link></li>
            <li><Link to="#" className="hover:underline hover:decoration-solid">Campaign Promo</Link></li>
          </ul>
        </div>

        <div className="flex flex-row p-7 gap-3">
          <Link to="#">
            <InstagramIcon />
          </Link>

          <Link to="#">
            <XIcon />
          </Link>

          <Link to="#">
            <FacebookRoundedIcon />
          </Link> 
        </div>

        <div className="text-center text-sm lg:text-md">
          <p>BC Remittance (UK) Limited | BC Remit and Money Exchange Service (Phils.) Inc.</p>
          <p>{copyright} 2025 BCRemit All Rights Reserved</p>
          <p className="p-3">System version 12.6.9</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;