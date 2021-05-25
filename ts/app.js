// console.log(22)
//
// let age:number | string = 22;
// age = 'Hello'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var names = ['Vika', 'Vova', 'Bogdan'];
var names2 = ['Vika', 'Vova', 'Bogdan'];
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
var EGenders;
(function (EGenders) {
    EGenders["MALE"] = "male";
    EGenders["FEMALE"] = "female";
})(EGenders || (EGenders = {}));
function userLogger(users) {
    users.forEach(function (user) {
        var _a;
        (_a = user.cars) === null || _a === void 0 ? void 0 : _a.forEach(function (car) {
            console.log(car.color);
        });
    });
}
var ivan = {
    age: 22,
    name: 'Ivan',
    wife: false,
    gender: EGenders.MALE,
    cars: [{ color: 'silver' }],
    goWork: function () {
    }
};
userLogger([ivan]);
//  KEY OF
var keys = ['age', 'name', 'cars', 'wife', 'goWork'];
function getValueOfKey(key) {
    console.log(ivan[key]);
}
// PARTIAL - ЧАСТКОВА ПЕРЕДАЧА - IMPORTANT !!!
var viktoriia = {
    age: 36,
    name: 'Viktoriia',
    husband: true
};
getValueOfKey("wife");
//  ABSTRACT CLASS (it's not possible to create INSTANCE(образець), just - INHERITANCE(наслідування))
var ACar = /** @class */ (function () {
    function ACar(wheels, power) {
        this.wheels = wheels;
        this.power = power;
    }
    ACar.prototype.ride = function () {
        console.log("Ride with " + this.power * 2 + " kmh");
    };
    return ACar;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, power, color) {
        var _this = _super.call(this, wheels, power) || this;
        _this.color = 'white';
        return _this;
    }
    return Car;
}(ACar));
var bibizika = new Car(4, 100);
bibizika.ride();
