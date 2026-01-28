import type { ReactNode } from 'react';
interface ButtonProps {
  className: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: ReactNode;

}


function Button ({ className, type ,onClick, children, disabled = false }: ButtonProps) {
  return (
    <button className={`${className}`} type={type} onClick={onClick} disabled={disabled}>
          { children }
      </button>
  );
}

export default Button;