function ChangeColor()
{
  var mainDiv = document.querySelector("#mainDiv");
  mainDiv.style.backgroundColor = "blue";
 
}

window.onload = function() {

	alert("Window loaded")

	var allLinks = document.querySelectorAll("a")
	for (var i=0; i<allLinks.length; i++)
	{
		allLinks[i].addEventListener("click", LinkClicked);
	}

}

function LinkClicked()
{
	//alert("Link Clicked");
}
