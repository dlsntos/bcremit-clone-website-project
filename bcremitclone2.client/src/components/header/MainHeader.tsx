import { Link } from 'react-router';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

interface MainHeaderProps {
  title: string
  back: string
  close: string
}
function MainHeader({ title, back, close }: MainHeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-xs">
      <div className="max-w-5xl mx-auto px-5 lg:px-16 py-2 flex justify-between items-center text-bluewhale font-figtree">
        <div className="flex items-center gap-2">
          <Link
            to={back}
            aria-label="Back"
            className="flex justify-center items-center h-11 w-11 rounded-sm shadow-sm transition duration-200 ease-in-out hover:bg-gray-200"
          >
            <KeyboardBackspaceOutlinedIcon />
          </Link>
          <span className="text-xl font-bold">{title}</span>
        </div>
        <Link
          to={close}
          aria-label="Close"
          className="flex justify-center items-center h-[3.25rem] w-[3.25rem] rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300"
        >
          <CloseOutlinedIcon />
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;