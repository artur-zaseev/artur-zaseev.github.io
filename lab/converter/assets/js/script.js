(function(){

  var course, dol, rub, result;
  
  getCourse("https://www.cbr-xml-daily.ru/daily_json.js", function(data){
    var data = JSON.parse(data);
    document.getElementById("course").value = data.Valute.USD.Value;
    course = data.Valute.USD.Value;
  })
  
  document.getElementById("dol").addEventListener("keyup", function(e){
    dol = e.target.value;
    if(e.target.value > 0) {
      rub = "";
      document.getElementById("rub").value = "";
      checkRub();
    } else {
      document.getElementById("result").innerText = "0";
      document.getElementById("type").innerText = "";
    }
  })

  document.getElementById("rub").addEventListener("keyup", function(e){
    rub = e.target.value;
    if(e.target.value > 0) {
      dol = "";
      document.getElementById("dol").value = "";
      checkDol();
    } else {
      document.getElementById("result").innerText = "0";
      document.getElementById("type").innerText = "";
    }
  })

  function getCourse(url, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        callback(request.responseText); 
      }
    }; 
    request.open('GET', url);
    request.send();
  }

  function checkRub(){
    if (course && dol && !rub) {
      result = course * dol;
      document.getElementById("result").innerText = result.toFixed(2);
      document.getElementById("type").innerText = "руб.";
    } else {
      document.getElementById("result").innerText = "0";
      document.getElementById("type").innerText = "";
    }
  }

  function checkDol(){
    if (course && rub && !dol) {
      result = rub / course;
      document.getElementById("result").innerText = result.toFixed(2);
      document.getElementById("type").innerText = "$";
    } else {
      document.getElementById("result").innerText = "0";
      document.getElementById("type").innerText = "";
    }
  }

})();