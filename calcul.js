function premier(p){
    x=Number(p);
    i=2;
    while(x%i!=0 && i<=x/2){
        i=i+1;

    }
    return i==parseInt((x/2)+1);

}
function verif(){
    p=document.getElementById("pre").value;
    if((p=="")||(isNaN(p))){
        alert("saisir un nombre ");
        document.getElementById("pre").value="";
        document.getElementById("pre").focus();
        return false;
    }
    else{
    i=2;
    while((i<p)&&(p%i!=0)){
        i=i+1;
    }
    if(i==p){
        alert(p+" nombre est premier")
    }
    else{
        alert(p+" nombre est NO premier")
    }
}
}
function parfait(){
    n=document.getElementById("par").value;
    if((isNaN(n))||(n=="")){
        alert("donner un nombre")
        n=document.getElementById("par").value="";
        n=document.getElementById("par").focus();
        return false;
    }
    s=1
    for(i=2;i<n;i++){
        if(n%i==0){
            s=s+1;
        }
    }
    if(s==n){
        alert('nombre est parfait')
    }
    else{
        alert("nombre NO parfait")
    }
}
function fact(){
    n=document.getElementById('fa').value;
    if((isNaN(n))||(n=="")){
        alert("donner un nombre")
        n=document.getElementById("fa").value="";
        n=document.getElementById("fa").focus();
        return false
    }
    s=1
    for(i=2;i<=n;i++){
        s=s*i
    }
    alert(s)
}
function pgcd(){
    p1=document.getElementById('p1').value;
    p2=document.getElementById('p2').value;
    if((isNaN(p1))||(p1=="")){
        alert("donner un nombre")
        n=document.getElementById("p1").value="";
        n=document.getElementById("p1").focus();
        return false
    }
    if((isNaN(p2))||(p2=="")){
        alert("donner un nombre")
        n=document.getElementById("p2").value="";
        n=document.getElementById("p2").focus();
        return false
    }
    while(p1*p2!=0){
        if(p1>p2){
            p1=p1-p2
        }
        else{
            p2=p2-p1
        }
    }
    alert(p1+p2)
}
function somm(n){
    a=1
    for(i=2;i<n;i++){
        if(n%i==0){
            a=a+i
        }
    }
    return a
}
function amis(){
    p1=document.getElementById('a1').value;
    p2=document.getElementById('a2').value;
    p1=Number(p1)
    p2=Number(p2)
    if((isNaN(p1))||(p1=="")){
        alert("donner un nombre")
        n=document.getElementById("a1").value="";
        n=document.getElementById("a1").focus();
        return false
    }
    if((isNaN(p2))||(p2=="")){
        alert("donner un nombre")
        n=document.getElementById("a2").value="";
        n=document.getElementById("a2").focus();
        return false
    }
    if(somm(p2)==somm(p1)){
        alert("les deux nombre sont amis le somme de primer nombre"+somm(p1)+"et  le 2eme"+somm(p2))

    }
    alert("n'est pas amis le somme de primer nombre"+somm(p1)+"et  le 2eme"+somm(p2))

    }

