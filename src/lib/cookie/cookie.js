import cookie from "js-cookie";

const cookieStore = () => {
  const getCookie = (key) => {
    let item = undefined;
    if (cookie.get(key) !== undefined) {
      item = cookie.get(key);
    }
    return item;
  };

  const setCookie = (key, value) => {
    cookie.set(key, value);
  };

  const removeCookie = (key) => {
    cookie.remove(key);
  };
  return {
    getCookie,
    setCookie,
    removeCookie,
  };
};

export default cookieStore;
