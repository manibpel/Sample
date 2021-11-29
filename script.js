/********************function for Contact form*****************/
function getInputValue(){
            var inputVal = document.getElementById("name").value;
            var inputVal1 = document.getElementById("mail").value;
            var inputVal2 = document.getElementById("message").value;

            if (inputVal == "") {
              alert("Please enter a name");
              return false;
            } 
            else if(inputVal1 == ""){
              alert("Please enter a mail");
              return false;
            }
            else if(inputVal2 == ""){
              alert("Please enter a message");
              return false;
            }
            else{
              alert("Your message has been sent.");
              return true;
            }
          }