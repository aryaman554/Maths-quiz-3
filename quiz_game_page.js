function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = paeseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
     check_button = "<br><br><button class='btn brn-info' onclick='check()'>Check</button>";
      question_number = "<hr>" + number1 + "X" + number2 + "</hr>";
      input_box = "<br>Answer : <input type='text' id='input_check_box'>";
   check_button = "<br><br> <button class = 'btn btn-info' onclick='check()'>Check</button>";
   row = question_number + input + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("number1").value ="";
   document.getElementById("number2").value ="";
}