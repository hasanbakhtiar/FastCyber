const root  = document.querySelector("#root");



// class infoClass{
//     sayHi(){
//         return "Hello React";
//     }
// }

// class schoolItem extends infoClass{
//     saySchool(){
//         return "Hello School";
//     }
// }

// var infoData = new schoolItem();
// console.log(infoData.sayHi());
// console.log(infoData.saySchool());


class infoData{
    constructor(name,year){
        this.nameNd = name;
        this.yearNd = year;

    }

    calculateAge(){
      let namest = this.nameNd;
      let age = new Date().getFullYear() - this.yearNd;

        return  namest + age ;
    }


    sayHi(item){
        return `Hello ${item}`; 
    }

}

const myData = new infoData('Pasha ', 2000);
console.log(myData.calculateAge());
console.log(myData.sayHi('Qaya'));

ReactDOM.render(temp, root);