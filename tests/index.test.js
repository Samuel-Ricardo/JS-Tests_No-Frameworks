import { describe, it } from "node:test";
import Product from "../src/product.js";
import Service from "../src/service.js";
import { rejects } from "node:assert";
import { VALID_PRODUCT_DATA } from "../src/config/tests.js";

describe('Product tests', () => {

  it('should throw an error when description is less than 5 characters long', () => {
    
    const params = {...VALID_PRODUCT_DATA, description: "a"}

    const product = new Product({
      onCreate: () =>  {},
      service: new Service()
    })

    rejects(() => product.create(params))
  })

})
