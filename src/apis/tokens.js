/**
 * Created by lichb on 2017/2/9.
 */
import request from '../utils/request'

export default {
  getTokens(name, pass){
    console.log(name,pass);
    //  
    //  return request.get('/login') 

    // return request.get('http://192.168.31.234:8080/customLogin',{'username':name,'password':pass})

    //  axios.get('http://192.168.31.234:8080/customLogin?username=captain&password=123456',{})
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     console.log(response);
    //   });
    return new Promise((resolve, reject) => {
    setTimeout(resolve, 'ms', 'done');
    });
    
  }
}
