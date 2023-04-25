import {EventEmitter} from 'events'
import { INVALID_DESCRIPTION_LENGTH } from './errors.js';

export default class Product {
  constructor ({
    onCreate,
    service
  }) {

    this.service = service;
    this.source = new EventEmitter()
    this.source.on('create', onCreate)

  }


  /*
  * data = { description, id, price }
  */ 
  #isValid(data){ if(data.description.length < 5) throw INVALID_DESCRIPTION_LENGTH }

  async create(data) {
    this.#isValid(data)
    const messsage = await this.service.save(data)
    return messsage.toUpperCase()
  }
}
