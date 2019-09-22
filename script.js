document.addEventListener("DOMContentLoaded", function(event) {
    //Disable dark theme 
    document.styleSheets[1].disabled = true;
  });

function changeTheme() {
    
    if(document.styleSheets[1].disabled) {
        //Swap CSS Files
        document.styleSheets[1].disabled = false;
        document.styleSheets[2].disabled = true;

        //Move Switch
        document.getElementById("themeIndicator").style.left = "22px";
    }
    else {
        //Swap CSS Files
        document.styleSheets[2].disabled = false;
        document.styleSheets[1].disabled = true;

        //Move Switch
        document.getElementById("themeIndicator").style.left = "2px";
    }
}