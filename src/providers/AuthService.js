import {serverURL} from './base/Settings';

const fetch = require("node-fetch");
const headers = new fetch.Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export default class AuthService {
  static loginService(username, password) {
    const body = {
      username,
      password
    };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${serverURL}/login`, {
          method: 'POST',
          headers,
          body: JSON.stringify(body) 
        });
        if (response.status == 500) {
          reject( response.json() );
        } else {
          resolve(response.headers.map.authorization)
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
