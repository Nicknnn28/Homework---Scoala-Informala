function SumaOdd()
{
	var n=0;
	var n=parseInt(document.getElementById("n").value);
	if (n==0)
	{
		var paragraf=document.getElementById("rezultat");
		paragraf.innerHTML=0;
	}
	   else 
	   {
		   var i=1;
		   var s=0;
		   
		   while (i<=n)
		   {
			   
			   if (i%2!==0)
			   {
				   s=s+i;
			   }
			   i=i+1;
		   }
		   var paragraf=document.getElementById("rezultat");
	paragraf.innerHTML=("Rezultat:"+" "+s);
	console.log("Rezultat:"+" "+s);
	   }
	
	
	
}