const body=document.body;

function createinput(type, className,plasenolder){
     const input=document.createElement("input");
     input.setAttribute("type",type);
     input.setAttribute("class",className);
     input.setAttribute("plasenolder",plasenolder);
     return input;
}
const form=document.createElement("div");
form.setAttribute("class","form");
form.append(createinput("text","login","Введите ваш логин"))
form.append(createinput("password","password","Введите ваш пароль"))
form.append(createinput("submit","send","Отправить"))
console.log(form)
