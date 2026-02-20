function chprime(){
    //alert ("hii....")
    var n=document.getElementById("lnumber").value;
    var i,f=0;
    for(i=2;i<=n/2+1;i++){
        if(n%i==0){
            f=1;
            break;
        }
    }
    if(f==0){
        alert(n+ "is a prime number");
    }else{
        alert("is not prime");
    }
}
function primerange(){
    l=lowerbound
    u=upperbound
    
}