export const singlePostPageScroll = (openSinglePost) => {
  document.body.style.overflow = openSinglePost ? "hidden" : "auto";
};

export const optionsMenuPageScroll = (openOptionsMenu) => {
  document.body.style.overflow = openOptionsMenu ? "hidden" : "auto";
};