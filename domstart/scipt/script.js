const inputagarr=getobjarr();
const getagarr=inputagarr.map((val,idx,arr)=>{
    return gettag(val);
});
const inputcontref=document.getElementById("inputcontainer");

for(let i of getagarr){
    inputcontref.appendChild(i);
}

const btn=document.createElement("button");
btn.classList.add("callbtn");
btn.innerHTML="SAVE";
inputcontref.appendChild(btn);

btn.addEventListener("click",datasend); //send data

const calldoc=document.getElementById("tablecontainer"); //index div idhr aagya
const table=getTableTag(); //return table bnakr
calldoc.appendChild(table); 

