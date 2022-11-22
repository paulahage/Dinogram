import React, { useState, useEffect } from "react";
import parseDateToDisplayDate from "../services/DateService"
import styled from "styled-components";

const DatePost = ({ datePost }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const displayDate = parseDateToDisplayDate(datePost);
    setDate(displayDate);
    //eslint-disable-next-line
  },[])

  return <DatePostWrapper>{`• ${date}`}</DatePostWrapper>;
};

export default DatePost;

const DatePostWrapper = styled.span`
  color: var(--dark_grey);
  font-weight: var(--regular);
  font-size: var(--fs_small);
  margin-left: 5px;
`;
