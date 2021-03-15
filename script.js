// let user = {
//     name: "Johan",
//     age: 40,
// }

// user .  Isadmin = true


//  alert(user.Isadmin)



// let user = {
//     name: "Makarov",
//     age: 26,
// }

//  user . Hobby = "bike"

// alert(user.Hobby)


// let user = {}
//     user ["like birds"] = true
//       alert (user["like birds"]) 
//     delete user ["like birds"] 

// let user = {
//     name: "John",
//     age: 30 
// };

// let key = prompt('Что вы хотите узнать о пользователе?',"name");

// alert (user[key])


// let fruit = prompt ('Какой фрукт купить ?','apple');

// let bag = {
//     [fruit]: 5,
// };

// alert( bag.apple);


// let fruit = prompt ('какой фрукт можно выбрать ?', 'apple');
// let bag = {};

// bag [fruit] = 5





// function makeUser(name, age) {
//     return {
//         name:name,
//         ahe: age,
//     };
// }

// let user = makeUser('John', 30);
// alert(user.name);

// let obj = { 
//     let: 1,
//     for: 3,
//     return: 4,
// }

// alert (obj.let + obj.for + obj.return)

// let obj = {
//     0:"Тест"
// };

// alert (obj['0'])
// alert (obj[0])

// let obj = {};
// obj.__proto__ = 5;
// alert(obj.__proto__)

// let user = {
//     name: "john",
//     age: 30,
// }

// alert (user.noSuchProperty === undefined)


// let user = { name: "John", age: 30,};

// alert("age" in user);
// alert("blabla" in user);


// let user = {
//     age:undefined,
// }

// alert ("age" in user);


// const user = {
//     age: 30,
//     name:'Makarov',
//     hobby:"bike",
//     love: true
// };

// for (let key in user) {
    alert( key)

    alert( user[key])
}

let codes = {
    "49": "GER",
    "43": "GBR",
    "41": "SWe",
    "1": "USA",    
};

for (let code in codes) {
    alert(code);
}


let codes = {
    "+49": "GER",
    "+43": "GBR",
    "+41": "SWe",
    "+1": "USA",    
};

for (let code in codes) {
    alert(code);
}

let user = {
//     name: 'John',
//     surName: "Smith",
// };

// user.age = +25 

// for (let prop in user) {
//     alert (prop);
// }


    ///Задачи >>

// let user = {
//     name: "John",
//     surname: "Smith",

//     name: "Pete"
// }

// delete  user.name

// alert (user.name)

//     function isEmpty(obj) {
//         for (let key in obj) {
//             return true
//         }
//         return false
//     }



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130 
// }

// alert ("John" + "Ann" + "Pete" )



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,

// };

// let sum = 0 
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum)


// function multiplayNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj [key]) {
//             obj[key] *= 2;
//         }
//     }
// }

