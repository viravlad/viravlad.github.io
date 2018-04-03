document.addEventListener("DOMContentLoaded", function(event) {  
		var secondRowContainer=document.getElementById("second-row-container");
		var thirdRowContainer=document.getElementById("third-row-container");
		var onSaleIcon=document.getElementsByClassName("onSaleIcon");
		var bannerPrice=document.getElementsByClassName("banner-price");
		var hr=document.getElementsByClassName("hrLine");
		var imgThirdRowContainer=document.getElementsByClassName("img-third-row-container");
		var imgSecondRowContainer=document.getElementsByClassName("img-second-row-container");
		var btnsIcons=document.getElementsByClassName("btns-icons");
		var prodTitle=document.getElementsByClassName("prodTitle");
	document.getElementById("row").addEventListener("click",function(){
		secondRowContainer.classList.add("row");
		thirdRowContainer.classList.add("row");
		secondRowContainer.classList.remove("column");
		thirdRowContainer.classList.remove("column");
		onSaleIcon[0].style.top="23%";
		onSaleIcon[1].style.top="23%";

		var i=0;
		for(i=0;i<imgThirdRowContainer.length;i++){
			imgThirdRowContainer[i].style.margin="-4%";
			imgSecondRowContainer[i].style.margin="-4%";
			}
		

		var j=0
		for(j=0; j<hr.length;j++){
				hr[j].style.bottom="18%";
				btnsIcons[j].style.bottom="5%";
				prodTitle[j].style.bottom="8%";
				bannerPrice[j].style.bottom="9%";
		}

	})
	document.getElementById("column").addEventListener("click",function(){
		secondRowContainer.classList.add("column");
		thirdRowContainer.classList.add("column");
		secondRowContainer.classList.remove("row");
		thirdRowContainer.classList.remove("row");
		onSaleIcon[0].style.top="15%";
		onSaleIcon[1].style.top="15%";
		

		var i=0;
		for(i=0;i<imgThirdRowContainer.length;i++){
			imgThirdRowContainer[i].style.margin="0%";
			imgSecondRowContainer[i].style.margin="0%";
		}

		var j=0
		for(j=0;j<hr.length;j++){
			btnsIcons[j].style.bottom="0%";
			hr[j].style.bottom="8%";
			bannerPrice[j].style.bottom="0%";
			btnsIcons[j].style.bottom="3%";
			prodTitle[j].style.bottom="3%";
		}




	})

  //Change text every 5 seconds and fade Effect added
  var text=["vel,vulputate vel nibh.Class aptent taciti sociosqu ad litora torquent","HEllloooo","Hiiiiiiiiii"];
  var count=0;
  var span=document.getElementsByClassName("testimonial");

  // change ffunction
  function changeFunction()
  {
  // fade function	
  	function fadeOut(el)
  	{
		  el.style.opacity = 1;

		  (function fade() 
		  {
		    if ((el.style.opacity -= .1) < 0) 
		    {
		      el.style.display = "none";
			} else 
			    {
			      requestAnimationFrame(fade);
			    }
		  })();
	}

// fade in

	function fadeIn(el, display)
	{
			el.style.opacity = 0;
			 el.style.display = display || "block";
				  (function fade() 
					  {
					    var val = parseFloat(el.style.opacity);
					    if (!((val += .1) > 1)) 
					    {
					      el.style.opacity = val;
					      requestAnimationFrame(fade);
					    }
					  })();
	}
			var el = document.querySelector('.js-fade');

			fadeOut(el);
			fadeIn(el);
			fadeIn(el, "inline-block");

	// condition for changing elements
  	span[0].innerHTML=text[count];
  	span[1].innerHTML=text[count];
	  	count++;
	  	if(count>=text.length)
	  	{
	  		count=0;
	  	}
	    setTimeout(changeFunction, 5000);
}	
		changeFunction();
});