import React from "react";
import { usePostOptionsMenuContext } from "../context/PostOptionsMenuContext";
import * as BsIcons from "react-icons/bs";
import styled from "styled-components";

const DotsKebabButton = ({postInfos}) => {
  const { openMenu } = usePostOptionsMenuContext();

  return (
    <DotsKebabButtonWrapper title="More Options" onClick={()=> openMenu(postInfos)}>
      <BsIcons.BsThreeDots className="dots-btn " />
    </DotsKebabButtonWrapper>
  );
};

export default DotsKebabButton;

const DotsKebabButtonWrapper = styled.button`
  .dots-btn {
    color: var(--icons);
    font-size: 18px;

    &:hover {
      color: var(--dark_grey);
    }
  }
`;
