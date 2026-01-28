import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
interface SupportRoute {
  title: string,
  description: string,
  icon: React.ReactNode,
  route: string,
};

export const supportRoute: SupportRoute [] = [
  {
    title: "Call",
    description: "Our team is here to help, give us a call, anytime, anywhere.",
    icon: <LocalPhoneIcon/>,
    route: "#"
  },
  {
    title: "Email",
    description: "Drop us a message with any inquiries or requests you have.",
    icon: <EmailIcon />,
    route: "#"
  },
  {
    title: "Chat",
    description: "Connect with us instantly through chat for personalized support.",
    icon: <ChatBubbleIcon />,
    route: "#"
  }
];