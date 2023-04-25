import {EventEmitter} from 'events'

export default class Product {
  constructor ({
    onCreate,
    service
  }) {

    this.service = service;
    this.source = new EventEmitter()
    this.source.on('create', onCreate)

  }
}
