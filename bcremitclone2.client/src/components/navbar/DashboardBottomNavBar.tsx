import { NavLink } from 'react-router';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
function DashboardBottomNavBar (){
  return (
    <aside className="fixed md:hidden flex flex-row justify-center bottom-0 h-[70px] w-full bg-blue-500">
      <ul className="flex flex-row justify-center items-center h-full max-w-md pr-2 gap-2">
        <li className="flex-1">
          <NavLink
            to="/dashboard"
            className="block flex flex-col items-center text-center text-white"
          >
            Home
            <HomeOutlinedIcon/>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink
            to="/dashboard/transaction-history"
            className="block text-center text-white"
          >
            History
            <QueryBuilderOutlinedIcon/>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink
            to="/dashboard/settings"
            className="block text-center text-white"
          >
            Settings
            <SettingsOutlinedIcon/>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink
            to="/dashboard/support"
            className="block text-center text-white"
          >
            Support
            <LocalPhoneOutlinedIcon/>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink
            to="/dashboard/bcremit-pay"
            className="block flex flex-col items-center text-xs text-white"
          >
            BCRemit-Pay
            <FavoriteBorderOutlinedIcon/>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default DashboardBottomNavBar;