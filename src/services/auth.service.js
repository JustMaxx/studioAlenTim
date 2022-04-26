import axios from "axios";
import token from "./auth-header"

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
  
  verifyToken(){
    
    let config = { headers:token()}
    return axios.post(API_URL + 'verifyToken',{},config)
    .then(()=>true)
    .catch(err=>{
      err.response.status==403?localStorage.removeItem("user"):''
      return false
    })
  }

  register(user) {
    return axios.post(API_URL + "registration", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      number: user.number,
      password: user.password,
    });
  }
}

export default new AuthService();
