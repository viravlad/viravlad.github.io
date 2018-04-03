
document.addEventListener("DOMContentLoaded", function(event) {
        

        var myIndex = 0;
        carousel();

            function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                var y = document.getElementsByClassName("slides");
                var z = document.getElementsByClassName("slide-text");
                for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";
                  y[i].style.background="black";
                  z[i].style.color="black";
                }
                myIndex++;
                if (myIndex > x.length) {myIndex = 1;}    
                x[myIndex-1].style.display = "block";
                y[myIndex-1].style.background="green";
                z[myIndex-1].style.color="white";
                setTimeout(carousel, 2500);    
}


  });
