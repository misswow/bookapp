function gettag(obj){
    const{Number,Text,Date}=inputypeconst;
    const {key,type,id}=obj;
    let input= null;

    switch(type){
        case Number:
        case Text:
        case Date:
            input=document.createElement("input");
            input.type=type;
            input.id=type+id;
            input.name=key;
            break;
        default:
            input=document.createElement("input");
            input.type=type;
            input.id=type+id;
            input.name=key;
            break;
    }
    const indiv=document.createElement("div");
    
    if(input===null){
        return indiv;
    }
    const element=document.createElement("label");
    element.setAttribute("for",key+id);
    element.innerHTML=key;
    input.id=type+id;
    indiv.appendChild(element);
    indiv.appendChild(input);
    return indiv;
}

function getTableTag() {
    const table = document.createElement("table"); //create table
    table.id = "bookTable";

    const tHead = document.createElement("thead"); //table head create
    const tBody = document.createElement("tbody"); //table body create
    tBody.classList.add("bookTableBody"); //give class to table body
    
    const inputTagArr = getobjarr(); //call this func
    const tHeadings = inputTagArr.map( (val, idx, arr) => {
        const th = document.createElement("th");//create table head tag 
        th.classList.add("th");//add classes
        th.innerHTML = val.key;
        return th;
    } ) 

    tHead.append(...tHeadings); //send value to thead
    tHead.classList.add("thead");//given class

    table.appendChild(tHead); //insert to table
    table.appendChild(tBody);

    return table;
}

function adddata(){
    const Info = [];
    for(let {type,id} of getobjarr()){
        const tag = document.getElementById(`${type +id}`);
        if (tag.value){
            Info.push(tag.value);
            tag.value="";
        }
    }
    console.log(Info);
    return Info;
}
function datasend(){
    const data = adddata();
    if(data.length!=getobjarr().length){
        alert("All data is not filled");
    }
    else{
        const row = document.querySelector("#tablecontainer table tbody");
        const tr = document.createElement('tr');
        for(let val of data){
            const td = document.createElement('td');
            td.innerHTML=val;
            tr.appendChild(td);
        }
        row.append(tr);
    }
}