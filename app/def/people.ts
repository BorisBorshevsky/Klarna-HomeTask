/**
 * Created by USER on 8/16/2016.
 */
//<li>Name</li>
// <li>Age</li>
// <li>Phone</li>
// <li>Address</li>
// <li>Portrait picture (jpg)</li>


export interface IPerson {
    name: string;
    age: number;
    phone: string;
    address: string;
    portraitUrl: string;
}

export interface IPersonRaw {
    id: string,
    name: string,
    phone: string,
    avatar_image: string,
    avatar_origin: string,
    email: string,
    quote: string,
    chuck: string,
    birthday: number,
    age:number,
    address: {
        city: string,
        street: string,
        country: string
    }
}
