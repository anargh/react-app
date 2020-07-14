export const AuthService = {
  getUserToken() {
    return sessionStorage.getItem("token");
  },
  setUserToken(token) {
    return sessionStorage.setItem("token", token);
  },
};
