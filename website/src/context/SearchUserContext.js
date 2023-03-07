import React, { useContext, useEffect, useState } from "react";
import { fetchSearchedUsers } from "../services/ApiService";

const SearchUserContext = React.createContext();

export const SearchUserProvider = ({ children }) => {
  const [mySearch, setMySearch] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [typingTimeOutId, setTypingTimeOutId] = useState();
  const [searchedUser, setSearchedUser] = useState({});

  const searchUsers = async (mySearch) => {
    if (typingTimeOutId) {
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

  const checkUserMatchSearch = () => {
    if (searchedUser.id) {
      if (!searchedUser.id.includes(mySearch)) {
        return "This user doesn't exist";
      }
    }
    return "Start typing to search";
  };

  const changeInputFocusState = (state) => {
    setIsInputFocused(state);
  };

  const updateMySearch = (search) => {
    setMySearch(search);
  };

  useEffect(() => {
    searchUsers(mySearch);
    //eslint-disable-next-line
  }, [mySearch]);

  return (
    <SearchUserContext.Provider
      value={{
        mySearch,
        usersList,
        loadingSearch,
        isInputFocused,
        setSearchedUser,
        checkUserMatchSearch,
        changeInputFocusState,
        updateMySearch,
      }}
    >
      {children}
    </SearchUserContext.Provider>
  );
};

export const useSearchUserContext = () => {
  return useContext(SearchUserContext);
};
