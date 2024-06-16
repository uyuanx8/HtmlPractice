document.addEventListener("DOMContentLoaded", (event) => {
    var a = 0;
    var box = document.querySelector(".box");
    box.addEventListener("click", function(evt){
        a = (a+1)%4;
        switch(a){
            case 1:
                evt.target.style.width="100px";
                evt.target.style.height="200px";
                break;
            case 2:
                evt.target.style.width="200px";
                evt.target.style.height="200px";
                break;
            case 3:
                evt.target.style.width="200px";
                evt.target.style.height="100px";
                break;
            default:
                evt.target.style.width="100px";
                evt.target.style.height="100px";
                break;
            

        }
    });

});
