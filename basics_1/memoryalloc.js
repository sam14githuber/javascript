//stack - stores primitive dt - pass copy - changes made in copy
//heap - stores non-primitive dt - pass reference- changes made in original value

let a = "temp";
let b = a;
b="c";
console.log(a)
console.log(b)

let user1 = {
    email: "sam@123",
    upi: "user@ybl",
}
let user2 = user1;
user2.upi = "upi@ybl";
console.log(user1.upi);
console.log(user2.upi)