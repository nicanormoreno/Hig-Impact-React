const _sendAuthHeader = true;
const _env = 'LOCAL';
let ATM_API

    switch (_env) {
      case 'LOCAL':
        ATM_API = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
        break;
      case 'QA':
        ATM_API = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
        break;
      case 'DEV':
        ATM_API = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
        break;
      case 'PROD':
        ATM_API = 'http://vps-1575977-x.dattaweb.com:8080/atscom';
        break;
    }
export const serverURL = ATM_API;

