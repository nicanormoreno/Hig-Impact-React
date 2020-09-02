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
    console.log('search serv', session_token)
    headers.set('Authorization', session_token);
    return new Promise(async (resolve, reject)=>{
      try{
        const response = await fetch(`${serverURL}/atm?q=${search}&fields=${filter}`, {
          method: 'GET',
          headers
        });
        if(response.status === 500){
          console.log('no', response)
          reject(response.json());
        }else{
          console.log('yes', response)
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
    return new Promise(async (resolve, reject) => {
      try{
        atmList.map(atm, index => {
          if(atm.index === newAtm.index){
          atmList[index].addres.city = newAtm.city
          atmList[index].addres.street = newAtm.street
          atmList[index].addres.housenumber = newAtm.housenumber
          atmList[index].addres.geLocation.lat = newAtm.lat
          atmList[index].addres.geLocation.lng = newAtm.lng
          }
        })
        resolve(atmList);
      }catch(error){
        reject(error)
      }
    })
  }
}
