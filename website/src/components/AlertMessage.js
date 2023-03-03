import React from "react";
import { usePostOptionsMenuContext } from "../context/PostOptionsMenuContext";
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";

const AlertMessage = () => {
  const { urlCopyMessage } = usePostOptionsMenuContext();

  return (
    <AlertMessageWrapper>
      <p className="alert-message">{urlCopyMessage}</p>
      <span className="check-icon">
        <BsIcons.BsCheckCircleFill />
      </span>
    </AlertMessageWrapper>
  );
};

export default AlertMessage;

const AlertMessageWrapper = styled.div`
  width: 300px;
  height: 38px;
  z-index: 6;
  background-color: var(--mainBackgroundColor);
  border-radius: 15px;
  box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.69);
  position: sticky;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: showAlert 0.2s forwards;

  @keyframes showAlert {
    from {
      opacity: 0;
      transform: scale(0.7);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .alert-message {
    color: var(--icons);
    font-size: var(--fs_regular_plus);
    font-weight: var(--regular);
  }

  .check-icon {
    color: var(--alert_success);
    margin-left: 10px;
    position: relative;
    top: 2px;
  }

`;
