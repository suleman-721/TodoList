function todoList(){
    var input=document.getElementById('inputField').value;
    var text=document.createTextNode(input);

var img = document.createElement("img");
   img.src="icons/del.png"
   img.onclick = function () { var dli = this.parentNode; var dol = dli.parentNode; dol.removeChild(dli); };

     var input2=document.createElement('li');
     input2.appendChild(text);
     input2.appendChild(img);

      if (input === '') {
    alert("You must write something!");
  }
   else {
    
     document.getElementById('list').appendChild(input2);

document.getElementById('inputField').value="";
  }

   }




function removeAll(){

document.getElementById('list').style.display='none';


}



