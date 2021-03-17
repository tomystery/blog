
  new Promise((resolve,reject) => {
    resolve(5);
  }).then((result) => {
    console.log(result);
    resolve(result)
  },(err) => {
    console.log('err');
    reject(err)
  }).then((result) => {
    console.log(result);
    resolve(result)
  },(err) => {
    reject(err)
    console.log('err');
  })
