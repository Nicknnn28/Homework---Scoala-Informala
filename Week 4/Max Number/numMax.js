function NumarMaxim()
       {
        var array=new Array()
		var n=3;
        var a=0; 				        
		    a=parseInt(document.getElementById("input.a").value);
			array.push(a);
		var b=0; 				        
		    b=parseInt(document.getElementById("input.b").value); 
			array.push(b);
		var c=0; 				        
		    c=parseInt(document.getElementById("input.c").value);
			array.push(c);
			
			     if (!a&&!b&&!c)
				    {
					 alert("Introduceți valorile lui „a”, „b” și „c”!");
				    return a;
				    }
				 
				    
			      else if (!a&&!b)
				       { alert("Introduceți valorile lui „a” și „b”!");
						return a;
					   }
       	          else if (!a&&!c)
				       { alert("Introduceți valorile lui „a” și „c”!");
						return a;
					   }
       	          else if (!b&&!c)
				       { alert("Introduceți valorile lui „b” și „c”!");
						return b;
					   }
		          else if (!a)
				    {
					 alert("Introduceți valoarea lui „a”!");
					 return a;
				    }
       	
				  else if (!b)
				       { 
				       alert("Introduceți valoarea lui „b”!");
						return b;
					   }
	              else if (!c)
				       { alert("Introduceți valoarea lui „c”!");
						return c;
					   }
       	
				
        var max = 0;
	        max = array[0];
	          i = 1;
	     while (i < n)
	          {
		       if (array[i] > max)
		         {
			       max = array[i];
		         }
		     i = i + 1;
	}
	alert("Numarul cel mai mare este:"+" "+ max+" !")	
	console.log("Numarul cel mai mare este:"+" "+ max+" !")	 	                   	                                     
 }


