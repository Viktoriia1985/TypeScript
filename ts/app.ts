// console.log(22)
//
// let age:number | string = 22;
// age = 'Hello'


// function multiplier(a:number, b:number): number {
//     return a * b
// }
//
// let number = multiplier(10, 9);
// console.log(number);


// function multiplier(a: number, b: number): void {   //: 'Void' означає, що функція повна: вона виконується, але не повертається
//     console.log(a * b);
// }
//
// let number = multiplier(10, 9);
// console.log(number);


// function multiplier(a: number, b?: number): void {   //: 'Void' означає, що функція повна: вона виконується, але не повертається
//     console.log(a * b);
// }
//
// let number = multiplier(10);
// console.log(number);


// class Car {
// //    модифікатор доступу: private, protected, public
//     protected year: number;
//     private producer: string;
//     public power: number = 200;
//
//     constructor(year: number, producer: string) {
//         this.year = year;
//         this.producer = producer;
//     }
//
//     changePower(newPower: number): void {
//         this.power = newPower;
//     }
// }
//
// class SuperCar extends Car {
//     public color: string;
//
//     constructor(year: number, producer: string, color: string) {
//         super(year, producer);
//         this.color = color;
//     }
// }
//
// const car1 = new Car(2008, 'Vaz');
// const superCar = new SuperCar(2020, 'Mazda', 'red');
//
// console.log(car1);
// console.log(superCar);
//
// console.log(car1.power);

//
// const user = {
//     name: 'Vika',
//     laptop: {
//         model: 'Lenovo',
//         memory:8
//     },
//     car: {
//         year: 2007
//     },
//     bike: {
//         price: 9999,
//         currency: 'USD'
//     }
// }
//
// // console.log(user && user.bike && user.bike.price);
// console.log(user?.bike?.price); //Elvis


let names: string[] = ['Vika', 'Vova', 'Bogdan'];
let names2: Array<string | number> = ['Vika', 'Vova', 'Bogdan'];

// names = ['Olga'];
// names = 33 //error

//--------------------------------------------------------------------------------------
// PROMISE example from smak.shop from Viktor Kmin
//
// createTokenPair(tokenObject: Partial<IAccessToken>: Promise<IAccessToken> {
// const tokenToCreate = new AccessTokenModel(tokenObject);
//
// return tokenToCreate.save();
// }
//---------------------------------------------------------------------------------------


// ENUM  - набір предефайних значень

enum EGenders {
    MALE = 'male',
    FEMALE = 'female',
}

interface ICar {
    color: string
}

interface IUser {
    age: number,
    name: string,
    wife?: boolean,
    husband?: boolean,
    gender?: EGenders,
    cars?: [ICar],
    goWork?: Function
}

function userLogger(users: Array<IUser>): void {
    users.forEach((user) => {
        user.cars?.forEach(car => {   // Skip loop when array is not present
            console.log(car.color);
        })
    })
}

let ivan: IUser = {
    age: 22,
    name: 'Ivan',
    wife: false,
    gender: EGenders.MALE,
    cars: [{color: 'silver'}],
    goWork: () => {
    }

}

userLogger([ivan]);


//  KEY OF
const keys: Array<keyof IUser> = ['age', 'name', 'cars', 'wife', 'goWork']

function getValueOfKey(key: keyof IUser): void {
    console.log(ivan[key])
}

// PARTIAL - ЧАСТКОВА ПЕРЕДАЧА - IMPORTANT !!!

let viktoriia: Partial<IUser> = {
    age: 36,
    name: 'Viktoriia',
    husband: true
}


getValueOfKey("wife");


//  ABSTRACT CLASS (it's not possible to create INSTANCE(образець), just - INHERITANCE(наслідування))

abstract class ACar {
    wheels: number;
    power: number;
    color: string;


    constructor(wheels: number, power: number) {
        this.wheels = wheels;
        this.power = power;
    }

    ride() {
        console.log(`Ride with ${this.power * 2} km\h`)
    }
}


class Car extends ACar {
    color: string = 'white';

    constructor(wheels: number, power: number, color?: string) {
        super(wheels, power);
    }
}

const bibizika = new Car(4, 100);
bibizika.ride();












