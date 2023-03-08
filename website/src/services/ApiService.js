import axios from "axios";
import {
  URL_FEED,
  URL_INFINITE_FEED,
  URL_USER_PROFILE,
  URL_POST,
  URL_SEARCH_USERS,
  URL_LOGGED_USER,
} from "../utils";

export const fetchLoggedUser = async () => {
  const response = await axios.get(URL_LOGGED_USER);
  return response.data;
};

export const fetchFeed = async () => {
  const response = await axios.get(URL_FEED);
  return response.data;
};

export const fetchPostInfos = async (postId) => {
  const response = await axios.get(URL_POST + postId);
  return response.data;
};

export const fetchMorePosts = async (lastPostId) => {
  const response = await axios.get(URL_INFINITE_FEED + lastPostId);
  return response.data;
};

export const fetchUserProfile = async (userId) => {
  const response = await axios.get(URL_USER_PROFILE + userId);
  return response.data;
};

export const postComment = async (url, comment) => {
  const response = await axios.post(url, comment);
  return response;
};

export const fetchSearchedUsers = async (search) => {
  const response = await axios.get(URL_SEARCH_USERS + search);
  return response;
};
