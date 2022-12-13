let showNotebtn = document.querySelector('.add-note');
let editNote = document.querySelector('.edit-note');
let titleInput = document.querySelector('.note-title');
let bodyInput = document.querySelector('.note-body');
let noteBox = document.querySelector('.note-box');
let closeIcons = document.querySelector('.fa-arrow-left');
let allF = document.querySelector('.allF');
let container = document.querySelector('.container');
let notemessage = document.querySelector('.no-notes-message');
let saveEdit = document.querySelector('.fa-arrow-right');
let months = ["january","february" , "march" , "april","may","june","july","august","september","october","november","december"];
let noteBox2=[];
let i =0;


window.onload=function(){
    /*
    
    if(localStorage.getItem( `savenotes${i}`)!=null){
        let createLocal = document.createElement("div");
        i++;
        let getlocal = JSON.parse(localStorage.getItem( `savenotes${i}`) );
         createLocal.innerHTML = getlocal;
         noteBox.innerHTML =createLocal;
        
         
        
    }else{
         notemessage.style.display="block";
    }
   */
}


showNotebtn.onclick=function(){
    editNote.style.left = '50%';
    saveEdit.style.display="none";
    titleInput.value='';
    bodyInput.value='';
    

}





closeIcons.addEventListener("click",function(){
    editNote.style.left = '-100%';
    
    
    
    let CreateDiv = document.createElement("div");
    CreateDiv.classList="note";
    
    noteBox2.push(CreateDiv);
    if(noteBox2.length>0){
        notemessage.style.display="none";
        
    } 
    
      
    
    
    
    
   
   
    let createH3 = document.createElement("h3");
    let textH3= document.createTextNode(titleInput.value);
    createH3.classList="note-title-input";
    noteBox.append(CreateDiv);
    CreateDiv.append(createH3);
    createH3.appendChild(textH3);
   
    
    
    let createP = document.createElement("p");
    let textP= document.createTextNode(bodyInput.value);
    createP.classList="note-body-input";
    
    CreateDiv.append(createP);
    createP.appendChild(textP);
    
    let createHR = document.createElement("hr");
    CreateDiv.append(createHR);
    
    
    let date = new Date();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let  year = date.getFullYear();
    let second =date.getSeconds();
    
    let createDate = document.createElement("p");
    let history = ` ${month} ${day}, ${year} , ${second}`;
    let textDate= document.createTextNode(history);
    createDate.classList="date";
    
    CreateDiv.append(createDate);
    createDate.appendChild(textDate);
    
    let createPoint = document.createElement("i");
    createPoint.classList="fa fa-ellipsis-h";
    CreateDiv.append(createPoint);
    
    
    let createSettings = document.createElement("div");
    let createMenu = document.createElement("div");
    let createEdit = document.createElement("span");
    let createDelete = document.createElement("span");
    let createEditI = document.createElement("i");
    let createDeleteI = document.createElement("i");
    
    
    
   
 
    
    let textEdit= document.createTextNode("Edit");
    let textDelete= document.createTextNode("Delete");
    
    
    
    createSettings.classList=" settings ";
    createMenu.classList="menu";
    createEdit.classList=" edit-btn ";
    createDelete.classList="delete-btn";
    createDeleteI.classList="fa fa-solid fa fa-trash"; 
    createEditI.classList="fa fa-solid fa fa-pencil";
    
    
    CreateDiv.append(createSettings);
    createSettings.append(createMenu );
    createMenu.append(createEdit);
    createMenu.append(createDelete);
    createEdit.append(createEditI);
    createDelete.append(createDeleteI);
    createEdit.append(textEdit);
    createDelete.append(textDelete);
    

    
    
    for(; i<noteBox2.length ; i++){
        var allNotes =` ${noteBox2[i].outerHTML}` ;
         let v = localStorage.setItem( `savenotes${i}`, allNotes    ) ;
         
     
    }
    
    
    
        
    
   
createDelete.addEventListener("click",function(){
    CreateDiv.remove();
    localStorage.removeItem(`savenotes${i}`)
    noteBox2.pop(CreateDiv);
    console.log("-------------------------------------");
    console.log(noteBox2);
    console.log(noteBox2.length);
    if(noteBox2.length>0){
        notemessage.style.display="none";
    } 
    
    else{
        
        notemessage.style.display="block";
    }
    
});
    

    
    
createEdit.addEventListener("click",function(){
    
    editNote.style.left = '50%';
    closeIcons.style.display="none";
    saveEdit.style.display="block";
    
    saveEdit.addEventListener("click",function(){
        
         editNote.style.left = '-100%';
         
         createH3.innerHTML= titleInput.value;
         createP.innerHTML= bodyInput.value;
        
        let date = new Date();
        let month = months[date.getMonth()];
        let day = date.getDate();
        let  year = date.getFullYear();
        let second =date.getSeconds();
        let history = ` ${month} ${day}, ${year} , ${second}`;
        createDate.innerHTML =history;
        
        
    });
    
    
    
    
    
    
});
     
 
});

   
     


    
