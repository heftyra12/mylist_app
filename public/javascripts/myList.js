$(document).ready(function(){
	$('#addItem').click(function(event){
		var input=document.getElementById('newItem');
		if (input.value!=''){
			$('li:last').after("<li>"+input.value+"</li>");
			//alert("Input: " + input.value);
			document.getElementById('newItem').value='';
		}
	});
	
	$('#listEdit').click(function(event){
		$('li').each(function(n){
			var nValue=document.getElementsByTagName('li');
			$(this).after("<form><input value=" + nValue[n].innerHTML + "</form>");
			alert("Item "+n+": " + "<form><input value=" + nValue[n].innerHTML + "</form>");
		});
	});
	
	$('#listEdit').hover(
		function(){$(this).addClass("hovered");},
		function(){$(this).removeClass("hovered"); }
	);
});