import { describe, it } from "node:test";
import Product from "../src/product.js";
import Service from "../src/service.js";
import { equal, rejects } from "node:assert";
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

    const product = new Product({
      onCreate: params => console.log('Call onCreate', params),
      service: new Service()
    })

    const result = await product.create(VALID_PRODUCT_DATA)

    equal(result, PRODUCT_SAVED_SUCCESSFULLY(VALID_PRODUCT_DATA.id).toUpperCase())

  })

})
