import { StyledNotif } from './notif.style';
import { NotifProps } from "./notif.types";
import {FC} from "react";
import { CloseIcon } from '../icon/Icon';

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