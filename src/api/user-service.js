import axios from "axios";
import { AuthService } from "./auth-service";

const httpService = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000,
  headers: { Authorization: `Bearer ${AuthService.getUserToken()}` },
});

const UserService = {
  authenticate({ email, password }) {
    return httpService.post("/login", { email, password });
  },
  register({ name, email, password }) {
    return httpService.post("/register", { name, email, password });
  },
  getProfile: function () {
    return httpService.get("/profile");
  },
};

export default UserService;
