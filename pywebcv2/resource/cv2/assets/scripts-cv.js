
var API_ENDPOINT = "https://2yyqcglno6.execute-api.ap-southeast-1.amazonaws.com/Stage/"    // postReader1
var API_ENDPOINT = "https://t9ahxmiiz9.execute-api.ap-southeast-1.amazonaws.com/Prod" //gowebmvc2
/*
document.getElementById("submit").onclick = function(){

	vid = document.getElementById("ID").value;
	vpass = document.getElementById("PASSWORD").value;
	console.log('vid='+ vid);
	console.log('vpass='+ vpass);
	document.getElementById("tel").textContent="000000000";

	$.ajax({
          
	      url: API_ENDPOINT + '?id=0',
	      type: 'GET',
	    //   data:  JSON.stringify(inputData),
	      //dataType: 'json',
	    //   contentType: 'application/json; charset=utf-8',
		  contentType: 'application/x-www-form-urlencoded',
		//   contentType: 'application/json',
	      success: function (response) {
					console.log('response='+ response[0]);
					console.log('tel=' + response[0].tel);
					let tel = response[0].tel
	                // let data = JSON.parse(response);
					// console.log('data=' + data);
					document.getElementById("tel").textContent="" + tel;
					
	      },
	      error: function () {
	      	  
	          alert("ajax err=");
	      }
	  });
};
*/
document.getElementById("submitPost").onclick = function(){

	vid = document.getElementById("ID").value;
	vpass = document.getElementById("PASSWORD").value;

	var inputData = {
		"id": $('#ID').val(),
		"password" : $('#PASSWORD').val()
	};
	
	console.log('inputData=', inputData);


	$.ajax({
          
	      url: API_ENDPOINT,
	      type: 'POST',
		  data:  JSON.stringify(inputData),
		  async: false,
	    //   data:  JSON.stringify(inputData),
	      //dataType: 'json',
	    //   contentType: 'application/json; charset=utf-8',
		//   contentType: 'application/json; charset=utf-8',
		//   contentType: 'application/json',
	      success: function (response) {
					console.log('response='+ response[0]);
					console.log('tel=' + response[0].tel);
					let tel = response[0].tel
	                // let data = JSON.parse(response);
					// console.log('data=' + data);
					document.getElementById("tel").textContent="" + tel;
					
	      },
	      error: function () {
	      	  
	          alert("ajax err=");
	      }
	  });
}

