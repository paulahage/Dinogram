import React from "react";
import styled from "styled-components";

const SidebarNotifications = (props) => {
  const sidebarIsOpen = props.open;

  return (
    <NotificationsWrapper
      className={
        sidebarIsOpen ? "side-notifications active" : "side-notifications"
      }
    >
      <div>
        <h2 className="title">Notifications</h2>
      </div>
    </NotificationsWrapper>
  );
};

export default SidebarNotifications;

const NotificationsWrapper = styled.div`
  width: 600px;
  height: 100vh;
  position: fixed;
  text-align: center;
  background: red;
  padding: 20px 30px 10px 110px;

  .title {
    font-weight: var(--bold);
    font-size: 22px;
    margin-right: 300px;
  }
  .side-notifications {
    left: -100%;
    transition: 0.5s;
  }

  .side-notifications.active {
    left: 0;
    transition: 1s;
  }
`;
