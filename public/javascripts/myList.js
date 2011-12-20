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
			var nValue=document.getElementsByTagName('li').innerHTML;
			$(this).after("<form><input value=" + nValue + "</form>");
			// alert("Item "+n+": "+nValue);
			$(this).remove();
		});
	});
	
	$('#listEdit').hover(
		function(){$(this).addClass("hovered");},
		function(){$(this).removeClass("hovered"); }
	);
});