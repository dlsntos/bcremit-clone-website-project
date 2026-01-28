import { NavLink, useNavigate } from 'react-router'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Button from 'components/ui/Button';
import { useAuth } from 'features/auth/context/useAuth';
interface UserProfile {
  name: string;
  id: string;
  initials: string;
}
function DashboardSidebar ({ name, id, initials }: UserProfile) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }
  return (
    <aside className="hidden md:fixed md:block h-screen w-74 py-10 px-12 text-white bg-gradient-to-b from-blue-500 to-indigo-600">
      <div className="flex flex-col justify-between h-full max-h-[700px]">
        <section className="flex flex-col items-center pt-10">
          <div className="flex justify-center items-center h-10 w-10 bg-white border-3 border-white rounded-full">
            <span className="pt-1 text-blue-500 text-2xl font-extrabold">{ initials }</span>
          </div>
          <p className="mt-2 font-semibold">{ name }</p>
          <p>{ id }</p>
        </section>
        <nav className="mt-15 grow">
          <ul className="flex flex-col h-full gap-3">
            <li>
              <NavLink to="/dashboard"
                className="block flex flex-row items-center gap-3 w-full p-3 text-xl text-white transition duration-300 ease-in-out rounded-lg hover:bg-blue-700"
              >
                <HomeOutlinedIcon/>
                Home
              </NavLink>
            </li>
            <li className="flex flex-row">
              <NavLink
                to="/dashboard/transaction-history"
                className="block flex flex-row items-center gap-3 w-full p-3 text-xl text-white transition duration-300 ease-in-out rounded-lg hover:bg-blue-700"
                relative="path"
              >
                <QueryBuilderOutlinedIcon />
                History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/settings"
                className="block flex flex-row items-center gap-3 w-full p-3 text-xl text-white transition duration-300 ease-in-out rounded-lg hover:bg-blue-700"
                relative="path"
              >
                <SettingsOutlinedIcon/>
                Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/support" className="block flex flex-row items-center gap-3 w-full p-3 text-xl text-white transition duration-300 ease-in-out rounded-lg hover:bg-blue-700">
                <LocalPhoneOutlinedIcon/>
                Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bcremit-pay" className="block flex flex-row items-center gap-3 w-full p-3 text-xl text-white transition duration-300 ease-in-out rounded-lg hover:bg-blue-700">
                <FavoriteBorderOutlinedIcon/>
                BCRemit-Pay
              </NavLink>
            </li>
          </ul> 
        </nav>
        <Button
          onClick={handleLogout}
          className="flex flex-row items-center gap-2 p-4 text-lg transition duration-300 ease-in-out rounded-xl cursor-pointer hover:bg-blue-700">
          {<ExitToAppOutlinedIcon/>}
          Logout
        </Button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;