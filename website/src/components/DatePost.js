import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DatePost = ({ datePost }) => {
  const timeDatesMinutes = {
    year: 525960,
    month: 43830,
    week: 10080.000276,
    day: 1440,
    hour: 60,
    minute: 1,
  };

  const datePostMillisec = Date.parse(datePost);
  const dateNow = new Date().toISOString();
  const dateNowMillisec = Date.parse(dateNow);
  const dateFromNowMillisec = dateNowMillisec - datePostMillisec;
  const minutes = Math.floor(dateFromNowMillisec / 60000);

  const [instaDate, setInstaDate] = useState("");

  useEffect(() => {
    let result;

    if (minutes >= timeDatesMinutes.year) {
      result = Math.floor(minutes / 525960);
      setInstaDate(result + "y");
    } else if (minutes >= timeDatesMinutes.month) {
      result = Math.floor(minutes / 43830);
      setInstaDate(`${result}m`);
    } else if (minutes >= timeDatesMinutes.week) {
      result = Math.floor(minutes / 10080.000276);
      setInstaDate(`${result}w`);
    } else if (minutes >= timeDatesMinutes.day) {
      result = Math.floor(minutes / 1440);
      setInstaDate(`${result}d`);
    } else {
      setInstaDate("");
    }
    //eslint-disable-next-line
  },[])

  return <DatePostWrapper>{`• ${instaDate}`}</DatePostWrapper>;
};

export default DatePost;

const DatePostWrapper = styled.span`
  color: var(--dark_grey);
  font-weight: var(--regular);
  font-size: 13px;
  margin-left: 5px;
`;
