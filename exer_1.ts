// export type User = unknown;

// export const users: unknown[] = [
//     {
//         name: 'Wilker',
//         age: 25,
//         occupation: 'Backend developer'
//     },
//     {
//         name: 'Bob',
//         age: 23,
//         occupation: 'Product Manager'
//     }
// ];

// export function logPerson(user: unknown) {
//     console.log(` - ${user.name}, ${user.age}`);
// }

// console.log('Users:');
// users.forEach(logPerson);

// ---------------------------------- Solução ------------------
export type User = {
    name: String,
    age: Number,
    occupation: String,
};

export const users: User[] = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);