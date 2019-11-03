
checkBtn.onclick=function(){
    let choice = choiceInput.value
    let query = "SELECT * FROM customer WHERE state = " + '"' + choice + '"'  

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query)

    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 0)
        NSB.MsgBox("There are no customers of that type.")
    else {        
       
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        choiceOutput.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
