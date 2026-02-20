var k=0;
var a=0;
var b=0;
var ch1,ch2;
function compute(x){
    var y = $("#display").val();
    y=y+x;
    $("#display").val(y);
}
function operation(x){
    var str;
 if(k==0){
    str=$("#display").val();
    a=parseInt(str);
    $('#display').val("");
    k++;
    ch1=x;
 } 
 else if(k==1){
str=$("#display").val();
    b=parseInt(str);
    $('#display').val("");
    switch(ch1){
        case '+':c=a+b;
           break;
        case '-':
        break;
    }
    alert("value="+c);
    ch1=x;
    k=0
 }
}