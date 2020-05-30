
/* const assert = require('assert');
const proxyquire = require('proxyquire');

const { DataBaseMock } = require('./../../../m');
const dataBaseMock = require('./../../mocks/dataBaseMock');

describe('Services products', function() {
    const StatusService = proxyquire('./../../service/status.js', {
        './../../store/index': DataBaseMock
    });

    const productsService = new ProductsService();

    describe('when getProducts method is called', async function(){
        it('should call the getAll MongoLib method', async function(){
            await productsService.getProducts();
            assert.strictEqual(getAllStub.called, true);
        });
        /*
        it('should return an array of products', async function(){
            const products = await productsService.getProducts();
            const expected = producs;

            assert.deepEqual(products,expected);
        });

        it('should return an id producte created', async function(){
            const productId = await productsService.createProduct(producs[0]);
            const expected = productId;

            assert.deepEqual(producs[0].id, expected);
            assert.strictEqual(createStub.called, true);
        });

        it('should return an id updated', async function(){
            const productId = await productsService.updateProduct(producs[0].id, producs[0]);
            const expected = productId;

            assert.deepEqual(producs[0].id, expected);
            assert.strictEqual(updateStub.called, true);
        });

        it('should return an id deleted', async function(){
            const productId = await productsService.deleteProduct(producs[0].id);
            const expected = productId;

            assert.deepEqual(producs[0].id, expected);
            assert.strictEqual(deleteStub.called, true);
        });
        */
//  })
// })
