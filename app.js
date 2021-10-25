//getnumber
function display(num){
    var result=document.getElementById("output");
    result.value+=num;
}
//getresult
function result(){
    var result=document.getElementById("output"); 
    result.value=eval(result.value);
}
//clear result
function Clear(){
    document.getElementById("output").value="";
 
   
}
function del(){
    var number=document.getElementById("output");
    var remove=number.value;
    remove=remove.slice(0,-1);
    number.value=remove;
}

