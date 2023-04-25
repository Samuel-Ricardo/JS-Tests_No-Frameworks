import {setTimeout} from 'timers/promises'
import { PRODUCT_SAVED_SUCCESSFULLY } from './config/messages.js'
export default class Service {
  
  async save(params) {
    await setTimeout(2000)
    return PRODUCT_SAVED_SUCCESSFULLY(params.id) 
  }
}
