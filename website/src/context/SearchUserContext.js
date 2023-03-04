import React, { useContext, useEffect, useState } from "react";
import { fetchSearchedUsers } from "../services/ApiService";

const SearchUserContext = React.createContext();

export const SearchUserProvider = ({ children }) => {
  const [mySearch, setMySearch] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [typingTimeOutId, setTypingTimeOutId] = useState();

  const searchUsers = async (mySearch) => {
    if (typingTimeOutId) {
      console.log("clear time out");
      clearTimeout(typingTimeOutId);
    }

    if (mySearch) {
      setLoadingSearch(true);

      const timeOutId = setTimeout(async () => {
        const search = await fetchSearchedUsers(mySearch);
        if (search.status === 200) {
          setLoadingSearch(false);
          setUsersList(search.data);
        }
      }, 2000);
      setTypingTimeOutId(timeOutId);
      return;
    }

    setLoadingSearch(false);
    setUsersList([]);
  };

  useEffect(() => {
    searchUsers(mySearch);
    //eslint-disable-next-line
  }, [mySearch]);

  return (
    <SearchUserContext.Provider
      value={{
        mySearch,
        setMySearch,
        usersList,
        loadingSearch,
        isFocused,
        setIsFocused,
      }}
    >
      {children}
    </SearchUserContext.Provider>
  );
};

export const useSearchUserContext = () => {
  return useContext(SearchUserContext);
};
