const users=[
    {
        username:"Jack",
        wasBorn:"01.05.2000",
        firstName:"Jack",
        lastName:"Barbaro"
    },

     {
        username:"John",
        wasBorn:"0.10.1995",
        firstName:"John",
        lastName:"Barbaro"
    },
]

function  getFullName(user){
    return user.firstName + " "  + user.lastName;
}

function userinfo(user){
    console.log("Username: " + user.username);
    console.log("Was Born:" + user.wasBorn);
    console.log("firstName:" + user.firstName);
    console.log("lastName:" + user.lastName);
    console.log("Full Name:"+getFullName(user));
    console.log("---------------")
}
for(let i=0; i < users.length; i++) {
    userinfo(users[i]);
}