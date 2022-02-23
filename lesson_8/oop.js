const transport={
    maxspeed:'',
    title:'',
    model:'',
    start: function (){
        console.log(' ${this.title} stsrted!')
    },
}
const  bmw={
    ...transport,
    speed:null,
    nowspeed:0,
    gas: function (){
        this.nowspeed += this.speed
        console.log(this.nowspeed)
    }
}

bmw.model='B 760Li';
bmw.title='BMW';
bmw.maxspeed=650;
bmw.speed=120;

console.log(bmw)