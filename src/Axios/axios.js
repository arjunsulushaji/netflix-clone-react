import axios from 'axios'
import {BaseUrl} from '../Constants/Constants'

const instance = axios.create({
    baseURL: BaseUrl
  });

  export default instance