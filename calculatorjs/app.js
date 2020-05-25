const calc = document.querySelector(".calc-form");
// const keys = document.getElementsByClassName(".keys");
var operator;
var val1,val2;
var res="";
function dis(val){
    if(val=='+' || val=='-' || val=='*' || val=='/'){
        res += val;
    }
    else if(val=="="){
        console.log(res);
    }
    else{
        //res += val+operator;
        res =1+2+4;
    }

    console.log(res);

}
