$(document).ready(function(){
	$('#addItem').click(function(event){
		var input=document.getElementById('newItem');
		$('#formId').before("<ul>"+input.value+"</ul>");
		// alert("Input: " + input.value);
		document.getElementById('newItem').value='';
	});
	
	$('#listEdit').click(function(event){
		//alert("Edit pressed");
	});
	
	$('#listEdit').hover(
		function(){$(this).addClass("hovered");},
		function(){$(this).removeClass("hovered"); }
	);
});