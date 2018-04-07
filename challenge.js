$("button").click(function(){
    $( ".target" ).empty()
    $( ".error" ).empty()
		var Input = $('input').val()
    if(Input){
        var string = "Please wait " + Input+ " seconds"
        console.log(string)
        $(".target").append(string);
        setTimeout(function() {
          $(".target").text("finished waiting");
        }, Input*1000);

      }else{
        console.log("error")
        $(".error").text("Input filled is blank");
      }
});
