var scroll_p = document.getElementById("scrolling");
var main = document.getElementById("ma");
var para = document.getElementsByClassName("pp");

var i;
console.log(para);
window.onscroll = function () {
    // console.log(window.scrollY);

    
        if(window.scrollY<800){
            scroll_p.style.fontSize = (window.scrollY / 9) + "px";
        }

        
        
        if(window.scrollY >= 800){
            
            scroll_p.style.visibility="hidden";
            

        }
        else{
            scroll_p.style.visibility="visible";
            

        }




        if(window.scrollY > 1100){
            main.className="bd";
            
            
        }
        else{
            main.className="db";
        }


        if(window.scrollY >= 1200  && window.scrollY <= 1250){
            para[0].style.color = "white";

        }
        else{
            para[0].style.color = "rgb(88, 85, 85)";
        }





        if(window.scrollY >= 1300  && window.scrollY <= 1350){
            para[1].style.color = "white";

        }
        else{
            para[1].style.color = "rgb(88, 85, 85)";
        }



        if(window.scrollY >= 1400  && window.scrollY <= 1450){
            para[2].style.color = "white";

        }
        else{
            para[2].style.color = "rgb(88, 85, 85)";
        }




        if(window.scrollY >= 1500  && window.scrollY <= 1550){
            para[3].style.color = "white";

        }
        else{
            para[3].style.color = "rgb(88, 85, 85)";
        }



        if(window.scrollY >= 1600  && window.scrollY <= 1650){
            para[3].style.color = "white";

        }
        else{
            para[3].style.color = "rgb(88, 85, 85)";
        }
        


        if(window.scrollY >= 1700  && window.scrollY <= 1750){
            para[4].style.color = "white";

        }
        else{
            para[4].style.color = "rgb(88, 85, 85)";
        }








        if(window.scrollY >= 1800  && window.scrollY <= 1850){
            para[5].style.color = "white";

        }
        else{
            para[5].style.color = "rgb(88, 85, 85)";
        }
        
        


        

        // mobile deviuce responsive
        if(window.screenX < 576){
            if(window.scrollY<800){
                scroll_p.style.fontSize = (window.scrollY / 15) + "px";
            }
        }
        
        
        

        
        
       
            
                
          
     


        
    
}

