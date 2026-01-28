import DashboardSidebar from 'components/navbar/DashboardSidebar';
import DashboardBottomNavbar from 'components/navbar/DashboardBottomNavBar';
import { Outlet } from 'react-router';
import AuthProvider from '../features/auth/provider/AuthProvider';
import useFetchUser from '../pages/dashboard/home/hooks/useFetchUser';

function DashboardLayout () {

  const { userProfile, isLoading, error } = useFetchUser();

  if (isLoading) return true;
  if (!userProfile || error) return <div>User not found</div>;

  return (
    <div className="flex flex-col md:flex-row font-figtree">
      <AuthProvider>
        <DashboardSidebar name={userProfile.fullName} id={userProfile.id} initials={userProfile.initials} />
        <main className="flex-1 mb-[80px] md:mb-0 md:ml-[300px] font-figtree">
          <Outlet />
        </main>
        <DashboardBottomNavbar />
      </AuthProvider>
    </div>  
  );
}

export default DashboardLayout;