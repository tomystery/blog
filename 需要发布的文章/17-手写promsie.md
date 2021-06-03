```js
//简易版本
class MyPromise{
    constructor(executor){
        this.status = 'pending';//fulfilled rejected pending
        this.result = null;
        this.resolveFn = [];
        this.rejectFn = [];

        let resolve = (success) => {
            
            let timer = setTimeout(() => {
                if(this.status !== 'pending') return;
                clearTimeout(timer);
                this.status = 'fulfilled';
                this.result = success;
                this.resolveFn.forEach((item) => item(this.result)
            },0)
            
        }

        let reject = (error) => {
            this.status = 'rejected';

        }

        try{
            executor(resolve,reject)
        }catch(err){
            reject(err)
        }
    }
    then(fulfilledCallback,rejectCallback){
        return new MyPromise((resolve,reject) => {
            this.resolveFn.push(() => {
                try{
                    x = fulfilledCallback(this.result);
                    x instanceof MyPromise ? x.then(resolve,reject) : resolve(x);
                }catch(err){
                    reject(err)
                }
            })

            this.rejectFn.push(() => {
                try{
                    let x = rejectCallback(this.value);
                    x instanceof MyPromise ? x.then(resolve,reject) : resolve(x);
                }catch(err){
                    reject(err)
                }
            })
        })
}
}
```