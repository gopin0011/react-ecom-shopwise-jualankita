import http from "../http-common";

class AuthDataService {
  login = data => {
    return http.post("/auth/login", data);
  }
}

export default new AuthDataService();