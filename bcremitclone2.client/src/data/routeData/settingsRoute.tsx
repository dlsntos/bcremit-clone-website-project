import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonRemoveAlt1OutlinedIcon from '@mui/icons-material/PersonRemoveAlt1Outlined';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
export interface SettingsRoute {
  icon: React.ReactNode,
  title: string,
  description: string,
  route: string,
}

export const settingsRoute: SettingsRoute[] = [
  {
    icon: <Person2OutlinedIcon/>,
    title: "My Account",
    description: "Manage Your Profile and Account Details Effortlessly, Update Anytime.",
    route: "#",
  },
  {
    icon: <AccountBalanceOutlinedIcon/>,
    title: "UK Bank Account Details",
    description: "Payment Transfer Information for Online Bank Transfer Transactions.",
    route: "#",
  },
  {
    icon: <RedeemOutlinedIcon/>,
    title: "Promo",
    description: "Discover exclusive offers, discounts, and promotional deals available now.",
    route: "#",
  },
  {
    icon: <ShieldOutlinedIcon/>,
    title: "Change Password",
    description: "Update your password to keep your account secure and protected.",
    route: "#",
  },
  {
    icon: <LocalPhoneOutlinedIcon />,
    title: "Contact us",
    description: "Get in touch for support, inquiries, or feedback anytime you need.",
    route: "#",
  },
  {
    icon: <PersonRemoveAlt1OutlinedIcon/>,
    title: "Remove Account",
    description: "Permanently delete your account and all associated personal data.",
    route: "#",
  },
  {
    icon: <LaptopOutlinedIcon/>,
    title: "Connected Devices ",
    description: "View and manage all devices connected to your account.",
    route: "#",
  },
]