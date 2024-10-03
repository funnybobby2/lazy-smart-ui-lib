import { StyledNotif } from './notif.style';
import { NotifProps } from "./notif.types";
import {FC} from "react";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Notif: FC<NotifProps> = ({custom, open=false, duration, type="info", children, onClose, position="bottom-center"}) => {

  const customClass = custom ?? "";

  if(duration && onClose){
    setTimeout(() => {
      onClose();
    }, duration);
  }

  return (
      <StyledNotif
        className={`lazy-smart-ui-notif ${customClass}`}
        open={open}
        duration={duration}
        onClose={onClose}
        position={position}
        type={type}
      >
        <div className='notif-content'>
          <div className='notif-content-left'></div>
          <div className='notif-content-center'>{children}</div>
          <div className='notif-content-right'>
            { onClose && <span onClick={onClose}><CloseIcon/></span> }
          </div>
        </div>
      </StyledNotif>
  );
};

export default Notif;