menu_list_array = ["Pepperoni pizza","Veg supreme pizza","Giovanni pizza","Veg Extra large pizza","Chicken pizza","Paneer Tikka Pizza","Pepperoni Pizza deluxe"];
                    ;

function getmenu(){
var htmldata="";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
     document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
    }

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}


