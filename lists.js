
let addbtn = document.getElementById("add");
let removebtn = document.getElementById("remove");

// Adding items on the list.
addbtn.addEventListener("click", function(){
    let userinput = document.getElementById("item").value;

    if(userinput ===""){
        window.alert("please add an item first")
    }
    else{
        let lists = document.getElementById("list");
        let listofitems = document.createElement("li");
        listofitems.innerHTML=userinput;
        lists.appendChild(listofitems);
        document.getElementById("item").value = "";
        changeColorsOfLists();
    }
    
})
//  removing items on the list
removebtn.addEventListener("click", function(){
    let removeitem = document.getElementById("item").value;
    let lists = document.getElementById("list");
    let listItems = lists.getElementsByTagName("li");
    let founditem = false;

    if(removeitem === ""){
        window.alert("Enter the item you want to remove")
    }
    else{
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].innerHTML === removeitem) {
                let removedText = listItems[i].innerHTML;
                

                lists.removeChild(listItems[i]);
                addToRemovedItems(removedText);

                
                
                founditem = true;
                window.alert("Item removed successfully!");
                document.getElementById("item").value = "";
                changeColorsOfLists();
                break;
            }
        }
        
        if (!founditem) {
            window.alert("Item not found in the list!");
        }
    }
})

function addToRemovedItems(itemText) {
    let removedSection = document.getElementById("removed-items-section");
    
    if (removedSection === null) {
        removedSection = document.createElement("div");
        removedSection.id = "removed-items-section";
        
        let heading = document.createElement("h2");
        heading.innerHTML = "Removed Items";
        let removedList = document.createElement("ul");
        removedList.id = "removed-list";
        
        removedSection.appendChild(heading);
        removedSection.appendChild(removedList);
        let inputDiv = document.querySelector("div");
        inputDiv.parentNode.insertBefore(removedSection, inputDiv.nextSibling);
    }
    
    let removedList = document.getElementById("removed-list");
    
    let removedItem = document.createElement("li");
    removedItem.innerHTML = itemText;
    
    removedItem.style.color = "red";
    
    removedList.appendChild(removedItem);
}

// Adding the background colors and the text colors

function changeColorsOfLists(){

    let theLists = document.getElementById("list");

    let li = theLists.querySelectorAll("li");

    console.log(li);

    for(let i = 0; i < li.length ; i++){

        let list = li[i];
        if((i+1) % 2 == 0){
            list.style.background = "yellow";  
        }else{
            list.style.background = ""; 
        }
    }
}
