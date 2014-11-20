
$(document).ready(function() {

//add button function 
$("#add").click(function() {
	if ( $.trim( $('#message').val() ) === '' ) {
		return;
	}
	else {
    addItem();
	}
});

//pressing enter to add
	$("#message").keypress(function(e){
		if(e.which==13){
			addItem();
			e.preventDefault();
		}
	});
  
//adding items
	function addItem() {
		var itemToAdd = $("#message").val();
		var createItem = '<div class="add-item"><div class="check"><input type="checkbox" class="checkbox"></div><input type="text" class="item-field" value=" '+itemToAdd + ' "><button class = "remove" type="button">x</button></div>';
		$("#shopping-list").append(createItem);
		$("#message").attr("placeholder", "Add an item").val("");
		$('input.check').change(function(){
		$(this).siblings('itemToAdd').toggleClass('strike');
	});
	}
  
//removing the items 
  $('#shopping-list').on('click', '.remove', function() {
    $(this).parent("div:first").remove();
});
  
//crossing out items 
	$('#shopping-list').on('change','input[type=checkbox]',function(){
    	var myInput = $(this).parent().siblings('input[type=text]');
    	if ($(this).is(':checked')) {
    		$(myInput).css('textDecoration','line-through');
            $(myInput).css('color','gray');
    	}
    	else{
    		$(myInput).css('textDecoration','none');
            $(myInput).css('color','black');
    	}
});

});
