

var size = 8;
var dot = "*";
var string = '';
for (var i = 0; i<size; i++){
  for (var j = 0; j<size; j++){
    if (i%2===0){
      if (j%2===0){
        string+=dot;
      }else{
        string+=' ';
      }
    }else{
      if (j%2===1){
        string+=dot;
      }else{
        string+=' ';
      }
    }
  }
  string+="\n";
}
console.log(string);