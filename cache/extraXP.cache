allNames = ""
index = 0


extraXP.onshow=function(){
  let query = "SELECT state FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query)

    if (req1.status == 200) { //transit worked.
            allCustomerData = JSON.parse(req1.responseText)
            console.log("parsed result in onshow:  " + allCustomerData)
            if (index < 1 ) { 
                for (i = 0; i <= allCustomerData.length - 1; i++) {
                    Dropdown1.addItem(allCustomerData[i])
                    index = 1
                }
        }
    } else {
       
        NSB.MsgBox("Error: " + req1.status);
    }  
}
    
Dropdown1.onclick=function(choice){
  if (typeof(choice) == "object")   // user clicked the control
    return
  let query = "SELECT * FROM customer WHERE state = " + '"' + Dropdown1.selection + '"'  
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cab24313&pass=BIA375Baker&database=cab24313&query=" + query)

    if (req1.status == 200) { //transit worked.
        results = JSON.parse(req1.responseText)
        console.log(results)
    if (results.length == 0)
        NSB.MsgBox("There are no customers of that type.")
    else {        
        // output the names of all the customers
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        choiceOutput3.value = message
      } 

  } else
        
        NSB.MsgBox("Error code: " + req1.status)
}
