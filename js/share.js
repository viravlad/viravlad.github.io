document.addEventListener("DOMContentLoaded", function(event) {

	//change twitter content
  var twitterText=["Hey Twitter is changing !! Nice!!","Yes,fresh news!","NIce!!"];
  var twitterText2=["Hey Twitter!! I love more Instagram!!","New content added","Waitting for fresh news"];
  var twitterCount=0;
  var twitterChange=document.getElementsByClassName("twitterChange");
	function changeTwitter()
	{
		twitterChange[0].innerHTML=twitterText[twitterCount];
	  	twitterChange[1].innerHTML=twitterText2[twitterCount];
	  	twitterCount++;
		  	if(twitterCount>=twitterText.length)
		  	{
		  		twitterCount=0;
		  	}
    setTimeout(changeTwitter, 5000);
	}
	changeTwitter()



  var category = [{ 'type': 'Men'},{'type': 'Kids'}];
	// Put the object into storage
	localStorage.setItem('category', JSON.stringify(category));
	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('category');

	console.log('retrievedObject: ', JSON.parse(retrievedObject));

	


  // Append categories for Search Inpt(datalist)
  var categoryArray=JSON.parse(retrievedObject);
  var options = '';
	for(var i=0;i<categoryArray.length;i++)
	{
		options += '<option value="'+categoryArray[i].type+'" />';
		document.getElementById("items").innerHTML=options;
	}  	

	//LOGIN FORM 
	document.getElementById("btn").addEventListener("click",function(){
    var x = document.getElementById("formContainer");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
})

	// email register

	function createMail(name)
	{
	  this.name=name;
	}
	function repeatMail(mail)
	{
		for(var i in mailContaniner)
		{
			if(retrievedMailSaved[i].name===mailContaniner[i].name)
				{
					mailSucces.style.display="none";
					mailRepeat.style.display="block";
					return false;
				}
			 mailContaniner.push(mail);
			 return true;
		
		}
	}
	var mailContaniner=[];
	document.getElementById("onSubmit").addEventListener("click",function(){
	  var mailRepeat=document.getElementById("mailRepeat");
	  var mailErr=document.getElementById("mailErr");
	  var mailSucces=document.getElementById("mailSucces");
	  var inptVal=document.getElementById("inptEmail").value;
	  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;  
	  var Mail=new createMail(inptVal);
	  mailSucces.style.display="none"
	  
	  for(var i in mailContaniner)
	  	{
	  		if(mailContaniner[i].name===Mail.name)
	  			{
		    		mailRepeat.style.display="block";
		    		return false;
	  			}
	  			mailRepeat.style.display="none";
		}

	  if (inptVal === '' || !re.test(inptVal))
		{
			mailErr.style.display="block";
		    return false;
		}
	  mailErr.style.display="none";
	  mailSucces.style.display="block"
	  mailContaniner.push(Mail)
	  // Put the object into storage
	  localStorage.setItem('mailContaniner', JSON.stringify(mailContaniner));
	

	repeatMail(Mail)
	
})
	
 var retrievedMail = localStorage.getItem('mailContaniner');
 var retrievedMailSaved=JSON.parse(retrievedMail)
 console.log(retrievedMailSaved);


	

})