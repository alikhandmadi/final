
function send() {
    document.getElementById('error1').innerHTML='&emsp;';
    document.getElementById('error2').innerHTML='&emsp;';
    document.getElementById('error3').innerHTML='&emsp;';
    document.getElementById('fin').innerHTML='';
    var name=document.getElementsByName('jname')[0].value, email=document.getElementsByName('jemail')[0].value,
    mes=document.getElementsByName('message')[0].value, chu=false,chn=false, cha=false, chm=false, chr=false, chmail=false, chg=false;
    for (let i=0; i<name.length-1; i++) {
        if(name[0].charCodeAt(0)<91 && name[0].charCodeAt(0)>64 && name[i]==' ' && name[i+1].charCodeAt(0)<91 && name[i+1].charCodeAt(0)>64){
            chu=true;
            break;
        }
    }
    chu==true ?chn=true:document.getElementById('error1').innerHTML='Please, enter the correct information.';
    for (let i=1; i<email.length; i++) {
        if(email[i]=='@'){
            cha=true;
            l=i+4;
        }
    }
    if(cha==true){
        while(l<email.length-2){
            if(email[l]=='.'){
                chm=true;
                break;
            }
            l++;
        }
    }
    if(chm==true){
        while(l<email.length){
            if(email[l].charCodeAt(0)<96 && email[l].charCodeAt(0)>123){
                chr=false;
                break;
            }
            else chr=true;
            l++;
        }
    }
    (cha==true && chm==true && chr==true) ? chmail=true: document.getElementById('error2').innerHTML='Please, enter the correct email address.';
    (mes!="")   ? chg=true: document.getElementById('error3').innerHTML='Please, enter the message.';
    if(chn==true && chmail==true && chg==true){
    	document.getElementById('fin').innerHTML='Done, thank you for message.';
    }
}