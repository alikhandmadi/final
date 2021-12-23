function next() {
	document.getElementById('e1').innerHTML=' ';
	document.getElementById('e2').innerHTML=' ';
	document.getElementById('e4').innerHTML=' ';
	document.getElementById('e5').innerHTML=' ';
	document.getElementById('ee').innerHTML=' ';
	document.getElementById('e3').innerHTML=' ';
	document.getElementById('e6').innerHTML=' ';
	document.getElementById('e7').innerHTML=' ';
	document.getElementById('e8').innerHTML=' ';
	document.getElementById('e9').innerHTML=' ';
	var nex=[],
	p1=document.getElementsByName('password')[0].value,
	p2=document.getElementsByName('Re-password')[0].value;
	 nex[0]=document.getElementsByName('fname')[0].value;
	nex[1]=document.getElementsByName('lname')[0].value;
	nex[2]=document.getElementById('gender').value;
	nex[3]=document.getElementsByName('date')[0].value;
	nex[4]=document.getElementsByName('email')[0].value;
	nex[5]=document.getElementsByName('password')[0].value;
	nex[6]=document.getElementsByName('country')[0].value;
	nex[7]=document.getElementsByName('city')[0].value;
	nex[8]=document.getElementsByName('street')[0].value;
	nex[9]=document.getElementsByName('n1')[0].value;
	nex[10]=document.getElementsByName('n2')[0].value;
	var u=false, d=false, n=false, o=true, chp=false, pp=false, ff=true, ff1=true, gee=false;
	 if(nex[0][0].charCodeAt(0)<65 || nex[0][0].charCodeAt(0)>90){
		document.getElementById('e1').innerHTML='Please, enter the correct information';
	 	ff=false;
	  }
	for(let i=1; i<nex[0].length; i++){
		if(nex[0][i].charCodeAt(0)>122 || nex[0][i].charCodeAt(0)<97 || ff==false){
			document.getElementById('e1').innerHTML='Please, enter the correct information';
			ff=false;
		}
	}
	if(nex[1][0].charCodeAt(0)<65 || nex[1][0].charCodeAt(0)>90){
		document.getElementById('e2').innerHTML='Please, enter the correct information';
		ff1=false;
	}
	for(let i=1; i<nex[1].length; i++){
		if(nex[1][i].charCodeAt(0)>122 || nex[1][i].charCodeAt(0)<97 || ff1==false){
			document.getElementById('e2').innerHTML='Please, enter the correct information';
			ff1=false;
		}
	}
	(nex[2][0]=="C")?document.getElementById('ee').innerHTML='Please, choose gender':gee=true;
	var br=false;
	if(nex[3][0]=='1' || nex[3][0]=='2') br=true;
	var l,cha=false, chm=false, chr=false, chmail=false;
	for (let i=1; i<nex[4].length; i++) {
        if(nex[4][i]=='@'){
            cha=true;
            l=i+4;
        }
    }
    if(cha==true){
        while(l<nex[4].length-2){
            if(nex[4][l]=='.'){
                chm=true;
                break;
            }
            l++;
        }
    }
    if(chm==true){
        while(l<nex[4].length){
            if(nex[4][l].charCodeAt(0)<96 && nex[4][l].charCodeAt(0)>123){
                chr=false;
                break;
            }
            else chr=true;
            l++;
        }
    }
    (cha==true && chm==true && chr==true) ? chmail=true: document.getElementById('e3').innerHTML='Please, enter the correct email address';
	(p1==p2)?pp=true:document.getElementById('e5').innerHTML='Please, enter again';
	for(let i of p1)(i.charCodeAt(0)>64 && i.charCodeAt(0)<91)?u=true:(i.charCodeAt(0)>96 && i.charCodeAt(0)<123)?d=true:
	(i.charCodeAt(0)>47 && i.charCodeAt(0)<58)?n=true:o=false;
	(p1.length>7 && o==true && u==true && d==true && n==true && pp==true)?chp=true:
	document.getElementById('e4').innerHTML='Please, use number, uppercase and lowercase letter (8)';
	var ss;
	ss=true;
	if(nex[6][0].charCodeAt(0)<65 || nex[6][0].charCodeAt(0)>90){
		document.getElementById('e6').innerHTML='Please, enter your state';
	 	ss=false;
	}
	for(let i=1; i<nex[6].length; i++){
		if(nex[6][i].charCodeAt(0)>122 || nex[6][i].charCodeAt(0)<97 || ss==false){
			document.getElementById('e6').innerHTML='Please, enter your state';
			ss=false;
			break;
		}
	}
	var ss1;
	ss1=true;
	if(nex[7][0].charCodeAt(0)<65 || nex[7][0].charCodeAt(0)>90){
		document.getElementById('e7').innerHTML='Please, enter your city';
		ss1=false;
	}
	for(let i=1; i<nex[7].length; i++){
		if(nex[7][i].charCodeAt(0)>122 || nex[7][i].charCodeAt(0)<97 || ss1==false){
			document.getElementById('e7').innerHTML='Please, enter your city';
			ss1=false;
			break;
		}
	}
	var ss2;
	ss2=true;
	if(nex[8][0].charCodeAt(0)<65 || nex[8][0].charCodeAt(0)>90){
		document.getElementById('e8').innerHTML='Please, enter your street';
		ss2=false;
	}
	for(let i=1; i<nex[8].length; i++){
		if(nex[8][i].charCodeAt(0)>122 || nex[8][i].charCodeAt(0)<97 || ss2==false){
			document.getElementById('e8').innerHTML='Please, enter your street';
			ss2=false;
			break;
		}
	}
	var nuch=false;
	if(nex[9]=="" || nex[10]=='') document.getElementById('e9').innerHTML='&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Please,enter the number home';
	else{
		nuch=true;
		nex[9]=nex[9]+"/"+nex[10];
	}
	var check=false;
	if(ff==true && ff1==true && gee==true && br==true && chmail==true && chp==true && ss==true && ss1==true && ss2==true && nuch==true)	check=true;
	if(check==true){
		document.querySelector('fieldset').remove();
		const fi=document.createElement('fieldset');
		const le=document.createElement('legend');
		le.textContent="Well, Done";
		const fo=document.querySelector('form');
		const ta=document.createElement('table');
		fo.appendChild(fi);
		fi.appendChild(le);
		fi.appendChild(ta);
		const gor=[];
		const ver=[];
		var soz=["First name:", "Last name:", "Your gender:", "DOB:", "Email:", "Password:", "State:", "City:","Street:", "Number:"];
		const v=[];
		for(let i=0; i<10; i++){
			gor[i]=document.createElement('tr');
			v[i]=document.createElement('td');
			ver[i]=document.createElement('td');
			gor[i].appendChild(v[i]);
			gor[i].appendChild(ver[i]);
			v[i].textContent=soz[i];
			ver[i].textContent=nex[i];
			ta.appendChild(gor[i]);
		}
	}
}