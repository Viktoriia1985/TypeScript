import {ICar} from "./car.interface";
import {EGenders} from "./genders.enum";




export interface IUser {
    age: number,
    name: string,
    wife?: boolean,
    husband?: boolean,
    gender?: EGenders,
    cars?: [ICar],
    goWork?: Function
}