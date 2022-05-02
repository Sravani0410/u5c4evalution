const init = {islogin:false};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ISLOGGEDIN:
      return {islogin:!store.islogin}
    default:
      return store;
  }
};
