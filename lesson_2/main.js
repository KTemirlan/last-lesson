 const users = [
     {
         username: "Jack",
         salary: 500
     },
     {
         username: "Joe",
         salary: 5000
     },
      {
         username: "Vito",
        salary: 10000
     },
     {
        username: "Vito",
         salary: 10000
    }
 ];

 for(let i = 0; i < users.length; i++){
     console.log(users[i]);
 }
 for(let user of users){
     console.log(user);
 }
 const obj = {
     key1: "a1",
     key2: "a2",
     key3: "a3",
     key4: "a4",
     key5: "a5",
     key6: "a6",
     key7: "a7",
     key8: "a8",
     key9: "a9",
     key10: "a10",
     username: "Jack"
 };

 for(let key in obj){
    console.log(key + ": " + obj[key]);
 }
 let i = 0;
 while(i < 10){
     console.log("Hello!");
     i++;
 }
console.log(users);
const filteredUsers = [];
for(let user of users){
    if(user.salary > 500){
        filteredUsers.push(user);
    }
}
console.log(filteredUsers);



