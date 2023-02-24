import axios from "axios";
import {
  URL_FEED,
  URL_ALL_COMMENTS,
  URL_INFINITE_FEED,
  URL_USER_PROFILE,
  URL_POST_INFOS,
} from "../utils";

export const fetchFeed = async () => {
  const response = await axios.get(URL_FEED);
  return response.data;
};

export const fetchPostInfos = async (postId) => {
  const response = await axios.get(URL_POST_INFOS + postId);
  return response.data;
};

export const fetchMorePosts = async (lastPostId) => {
  const response = await axios.get(URL_INFINITE_FEED + lastPostId);
  return response.data;
};

export const fetchAllComments = async (postId) => {
  const response = await axios.get(URL_ALL_COMMENTS + postId);
  return response.data;
};

export const fetchUserProfile = async (userId) => {
  const response = await axios.get(URL_USER_PROFILE + userId);
  return response.data;
};





