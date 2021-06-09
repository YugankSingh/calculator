var isSecondOperandFirstTime=false;
var isSecondOperand=false;
var operator="";
var operand1="";
var currentOperandUser="";
var currentOperandInternal="";
var dotPresent=false;
function input(digit){
    if(isSecondOperandFirstTime)
        initializeForSecondOperand();
    if(digit!='.')
        currentOperandUser=(currentOperandUser+digit)
    else if(!dotPresent){
        currentOperandUser=(currentOperandUser+'.')
        dotPresent=true;
    }
    document.getElementById("output").innerHTML=(currentOperandUser);
}
function clearOutput(){
    isSecondOperand=false;
    operator="";
    operand1="";
    currentOperandUser="";
    currentOperandInternal="";
    document.getElementById("output").innerHTML="";
    // document.getElementById("output").innerHTML=eval("");
    document.getElementById("input-prev").innerHTML="";
}
function toggleSign(){
    if(currentOperandUser.length>0&&currentOperandUser.charAt(0)=='-')
        currentOperandUser=currentOperandUser.substring(1);
    else
        currentOperandUser='-'+currentOperandUser;
    document.getElementById("output").innerHTML=currentOperandUser;
}
function percent(){
    if(currentOperandInternal=="")
        currentOperandInternal=currentOperandUser/100;
    else if(currentOperandUser.charAt(currentOperandUser.length-1)=='%')
        currentOperandInternal=currentOperandInternal/100;
    else{
        clearOutput();
        document.getElementById("output").innerHTML="Internal Error";
    }
    input('%');
}
function operandClick(currOperator){
        if(operand1!=""&&currentOperandUser!=""){
            solve();
        }
        operator= currOperator;
        document.getElementById("output").innerHTML=currentOperandUser+" "+operator;
        isSecondOperandFirstTime=true;
        isSecondOperand=true;
}

function initializeForSecondOperand(){
    document.getElementById("input-prev").innerHTML=currentOperandUser+ " " + operator;
    if(currentOperandInternal=="")
        operand1=currentOperandUser;
    else
        operand1=currentOperandInternal;
    currentOperandUser="";
    currentOperandInternal="";
    isSecondOperandFirstTime=false;
    document.getElementById("output").innerHTML="";
}
function solve(){
    var ans;
    if(currentOperandInternal=="")
        ans=eval(operand1 + operator + currentOperandUser);
    else
        ans=eval(operand1 + operator + currentOperandInternal);
    if(ans=="")
        document.getElementById("output").innerHTML="Internal Error";
    else
        document.getElementById("output").innerHTML=eval(operand1 + operator + currentOperandUser);
    currentOperandUser=ans;
    currentOperandInternal="";
    operator="";
    operand1="";
}