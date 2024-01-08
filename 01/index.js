// let nepal = {
//     mountains: [ 'everest','fish tail','annapura','a'],
//     printWithDash :  function (){
//         setTimeout(() => console.log(this.mountains.join('-')), 1000);
//     }
// }

// nepal.printWithDash();


///````` altgr+;

///destructor 
// let uniStu = ({name,uni})=> {
//     console.log(`${name} and ${uni}`);
// }

// uniStu({name:'ulas',uni:'iü'});
//array destructor
// let [,,theValue] = ['a','b','c'];
// console.log(theValue);


///spread arrays  , same with objs
// var a1 = [4,5,67,753];
// var a2 = [3,566,78,4];
// var all = [...a1,...a2];
// console.log(all);

// var a4 = [1,2,3,4,5,6];
// var [,first, ...rest]= a4;

// console.log(rest);

class Holiday {
    constructor(destination,days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        console.log(`${this.destination} will take ${this.days} days`);
    }
}
//var trip = new Holiday("eskişehir",5);
//trip.info();
///sub class 
class Expedition extends Holiday {
    constructor(destination,days,gear){
         super(destination,days); //// super function takes everything from the parent class as it is
         this.gear = gear;
    }

    info(){
        super.info();
        console.log("additional info" + this.gear);
    }
}

var trip = new Expedition('izmir',55,3);

trip.info();