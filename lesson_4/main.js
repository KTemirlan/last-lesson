// function
function getFullName(firstName,lastName){
    console.log(firstName,lastName);
}

const mass=[
    {
        firstName: "Jack",
        lastName:"Barbaro"

    }
]
for (let i=0; i<mass.length; i++){
    getFullName(mass[i].firstName, mass[i].lastName)
}

// anonymaus function
function test(anonymausF){
}



// callback
function plus(cb,num1,num2){
    let total=num1+num2;

    cb(total)
}
plus(function (total){
    console.log(total)},20,12);

// () => {}

function f1(){
  console.log("Hello! I Am f1!")
}

const f2=()=>{
    console.log("Hello! I Am f2!")
}
const fullname1 = () => {
  
}