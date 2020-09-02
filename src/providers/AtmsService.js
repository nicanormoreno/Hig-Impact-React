import {serverURL} from './base/Settings'

const fetch = require("node-fetch");
const headers = new fetch.Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
});

export default class AtmsService {

  static getAtms(session_token) {
    headers.set('Authorization', session_token)
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`${serverURL}/atms`, {
            method: 'GET',
            headers
          })
          if (response.status == 500) {
            reject( response.json() );
          } else {
            response.json().then( data => {
              resolve( data );
            })
          }
        } catch (error) {
          reject( error );
        }
    });
  }

  static searchAtm(search, filter, session_token){
    headers.set('Authorization', session_token);
    return new Promise(async (resolve, reject)=>{
      try{
        const response = await fetch(`${serverURL}/atm?q=${search}&fields=${filter}`, {
          method: 'GET',
          headers
        });
        if(response.status === 500){
          reject(response.json());
        }else{
          response.json().then(data => {
            resolve(data)
          })
        }
      }catch(error){
        reject(error)
      }
    })
  }

  static editAtm(newAtm, atmList){
    return new Promise(async (resolve, reject)=>{
      try{
        console.log(atmList)
        atmList.map((atm, index) => {
          console.log('map')
          if(atm.index === newAtm.index){
            console.log('fech')
          atmList[index].address.city = newAtm.city
          atmList[index].address.street = newAtm.street
          atmList[index].address.housenumber = newAtm.housenumber
          atmList[index].address.geLocation.lat = newAtm.lat
          atmList[index].address.geLocation.lng = newAtm.lng
          }
        })
        let response = atmList
        resolve(response);
      }catch(error){
        reject(error)
      }
    })
  }
}
