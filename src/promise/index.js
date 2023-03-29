const promise = new Promise(function (resolve, reject){
    resolve('hey!')
});

const cows = 9;

const countCows = new Promise (function (resolve, reject){
    if(cows > 10 ){
        resolve(`We have ${cows} cows o the farm`);
    }else {
        reject("there is no cows on the farm");
    }
});

countCows.then((resultl) => {
    console.log(resultl);
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log('finally'));
