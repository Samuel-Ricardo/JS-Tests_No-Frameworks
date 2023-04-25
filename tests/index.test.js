import { describe, it, mock } from "node:test";
import Product from "../src/product.js";
import Service from "../src/service.js";
import { equal, rejects, strictEqual } from "node:assert";
import { VALID_PRODUCT_DATA } from "../src/config/tests.js";
import { PRODUCT_SAVED_SUCCESSFULLY } from "../src/config/messages.js";

describe('Product tests', async () => {

  it('should throw an error when description is less than 5 characters long', async () => {
    
    //MOCK
    const params = {...VALID_PRODUCT_DATA, description: "a"}

    const product = new Product({
      onCreate: () =>  {},
      service: new Service()
    })

    await rejects(() => product.create(params))
  })

  
  it('Should save Product successfully', async () => {

    //spy
    const  service = { async save(params){} } 
    mock.method(service, 'save', async params => PRODUCT_SAVED_SUCCESSFULLY(params.id)) 

    const product = new Product({
      onCreate: params => console.log('Call onCreate', params),
      service
    })

    strictEqual(service.save.mock.calls.length, 0)

    const result = await product.create(VALID_PRODUCT_DATA)
    strictEqual(result, PRODUCT_SAVED_SUCCESSFULLY(VALID_PRODUCT_DATA.id).toUpperCase())
    
    strictEqual(service.save.mock.calls.length, 1) 
  })

})
