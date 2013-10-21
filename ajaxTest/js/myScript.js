//AJAX code to send data to the database without refreshing the page
$("#sub").click( function() {
    
    $.post( $("#myForm").attr("action"), 
    $("#myForm :input").serializeArray(), 
    
    function(info){ 
        $("#result").html(info); 
    });

    clearInput();
});

//This makes the form submit data without refreshing the page
$("#myForm").submit( function() { 
    return false;
});

//This clears the form after submition
function clearInput() {
    $("#myForm :input").each( function() {
        $(this).val('');
    });
}

//$(document).ready(function() {

    //$("#sub").click(function() {                

      //$.ajax({    //create an ajax request to load_page.php
        //type: "GET",
        //url: "display.php",             
        //dataType: "html",   //expect html to be returned                
        //success: function(response){                    
            //$("#responsecontainer").html(response); 
            //alert(response);
        //}

    //});
//});
//});