import calculator from "../src/calc.js";
import assert from 'assert'; 
 
describe('Tasks', function () {
    describe('test', function () {
        it('test test', function () {

        });
    });
    describe('sum', function () {
        it('1 + 1 = 2', function () {
            assert.equal((new calculator(1,1)).sum(),2);
        });

        it('2 + 2 = 4', function () {
            //(new calculator(2,2)).sum()
            // let a = new calculator(2,2);
            // a.sum();
            assert.equal((new calculator(2,2)).sum(),4);
        });

        it('1 + 1 + 1 + 1 + 1 = 5', function () {
            let obj = (new calculator(1,1, 'multiple'));
            obj =  obj.sum().sum(1).sum(1).sum(1);
            assert.equal(obj.res(),5)
        });

        it('3 + 3 + 3 + 3 + 3 = 15', function () {
            let obj = (new calculator(3,3, 'multiple'));
            obj =  obj.sum().sum(3).sum(3).sum(3);
            assert.equal(obj.res(),15)
        });

        it('20 + 20 + 10 + 10 = 60', function () {
            let obj = (new calculator(20,20, 'multiple'));
            obj =  obj.sum().sum(10).sum(10);
            assert.equal(obj.res(),60)
        });

        it('200 + 200 + 10 + 10 = 420', function () {
            let obj = (new calculator(200,200, 'multiple'));
            obj =  obj.sum().sum(10).sum(10);
            assert.equal(obj.res(),420)
        });
// it('trash', function () {
        //     assert.equal((new calculator("asd",2).sum(),"Error");
        // });

        // it('trash', function () {
        //     assert.equal(new calculator(2,"asdasdasd",'sum'),"Error");
        // });
    });

    describe('devide', function () {
        it('1 - 1 = 0', function () {
            assert.equal((new calculator(1,1)).minus(),0);
        });

        it('6 - 2 = 4', function () {
            assert.equal((new calculator(6,4)).minus(),2);
        });

        it('10 - 9 - 8 = -7', function () {
            let obj = (new calculator(10,9, 'multiple'));
            obj = obj.minus().minus(8)
            assert.equal(obj.res(),-7)
        });

        it('200 - 25 - 25 = 150', function () {
            let obj = (new calculator(200,25, 'multiple'));
            obj =  obj.minus().minus(25);
            assert.equal(obj.res(),150)
        });
    });

    describe('multiply', function () {
        it('6 * 2 = 12', function () {
            assert.equal((new calculator(6,2)).multiply(),12);
        });

        it('5 * 1 = 5', function () {
            assert.equal((new calculator(5,1)).multiply(), 5);
        });
        it('7 * 0 = 0', function () {
            assert.equal((new calculator(7,0)).multiply(),0);
        });
        it('5 * 5 * 4 * 2 = 200', function() {
            let obj = (new calculator(5,5, 'multiple'));
            obj = obj.multiply().multiply(4).multiply(2);
            assert.equal(obj.res(), 200)
        });

        it('10 * 10 * 0.2 = 20', function() {
            let obj = (new calculator(10,10, 'multiple'));
            obj = obj.multiply().multiply(0.2);
            assert.equal(obj.res(), 20)
        });

        it('30 * 30 * 4 = 3600', function() {
            let obj = (new calculator(30,30, 'multiple'));
            obj = obj.multiply().multiply(4)
            assert.equal(obj.res(),3600)
        });
    });

    describe('del', function () {
        it('8 / 8 = 1', function () {
            assert.equal((new calculator(8,8)).del(),1);
        });
        it('6 / 2 = 3', function () {
            assert.equal((new calculator(6,2)).del(),3);
        });
        it('10 / 2 = 5', function () {
            assert.equal((new calculator(10,2)).del(), 5);
        });
        it('4 / 0 = error', function () {
            assert.equal((new calculator(4,0)).del(),'Error');
        });
        it('30 : 3 : 5 : 8 = 0.25', function() {
            let obj = (new calculator(30,3, 'multiple'));
            obj = obj.del().del(5).del(8)
            assert.equal(obj.res(), 0.25)
        });

        it('100 : 5 : 200 = 0.1', function() {
            let obj = (new calculator(100,5, 'multiple'));
            obj = obj.del().del(200)
            assert.equal(obj.res(), 0.1)
        });

        it('70 : 10 : 70 = 0.1', function() {
            let obj = (new calculator(70,10, 'multiple'));
            obj = obj.del().del(70)
            assert.equal(obj.res(), 0.1)
        });
    });
});