
    
  /*  new Promise((resolve,reject) => {
        console.log('1');
        resolve(10)
    }).then((result)=> {
        return new Promise(() => {

        })
    },(err) => {
        console.log(err);
        return err
    }) */
    
class MyPromise{
    constructor(executor){
        this.result = null;
        this.status='pending' //pending fulfilled rejected
        this.resolveFn=[];
        this.rejectFn=[];

        let resolve = (status) => {
            let timer = setTimeout(() => {
                if(this.status !== 'pending') return;
                clearInterval(timer);
                this.result = status;
                this.status = 'fulfilled';
                this.resolveFn.forEach(item => item(this.result))
            },0)
            
        }

        let reject = (status) => {
            this.result = status;
            this.status = 'rejected';
        }

        try{
            executor(resolve,reject);
        }catch(err){
            reject(err)
        }
    }

    then(resolveFn,rejectFn){
        return new MyPromise((resolve,reject) => { //这里是处理链式调用
            this.resolveFn.push(() => {
                try{
                    let x =  resolveFn(this.result); //如果返回的x式promise的话
                    x instanceof MyPromise ? x.then(resolve,reject) :resolve(x);
                }catch(err){
                    reject(err)
                }
            })

            this.rejectFn.push(() => {
                try{
                    let x = rejectFn(this.result);//如果返回
                    x instanceof MyPromise ? x.then(resolve,reject) : reject(x);
                }catch(err){
                    reject(err)
                }
                
            })
        })
    }
    
}

new MyPromise((resolve,reject) => {
    console.log('1');
    resolve(10)
}).then((result)=> {
    console.log(result);
    
},(err) => {
    console.log(err);
    reject(err) 
})