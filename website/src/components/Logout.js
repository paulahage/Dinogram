import React from "react";
import styled from "styled-components";

const Logout = () => {
  return (
    <LogoutWrapper>
      <p className="logout-btn">Logout</p>
    </LogoutWrapper>
  );
};

export default Logout;

const LogoutWrapper = styled.div`
  width: 80px;
  height: 40px;
  position: absolute;
  top: 642px;
  left: 65px;
  text-align: center;
  background: red;
  display:flex;
  justify-content:center;
  align-items:center;

  .logout-btn {
    font-weight: var(--regular);
    font-size: 16px;
  }
`;
