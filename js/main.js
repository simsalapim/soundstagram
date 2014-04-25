$(document).ready(function(){

  var amountOfImages=0

function search(){
  $('#images a').html('');
  var input=$("#span2").val();
 $.getJSON("https://api.instagram.com/v1/tags/"+input+"/media/recent?client_id=ec69237c1eb044d7bf6703f26761d1b8&callback=?", processImages);

};

$('#span2').keydown(function(event){
  if(event.keyCode==13){
    event.preventDefault();
    search();
  }
});
if(window.innerWidth>978){
  var amountOfImages=(Math.floor((window.innerWidth-400)/50))*7
  var j= amountOfImages
}
else{
  var amountOfImages=(Math.floor((window.innerWidth-20)/50))*7
  var j= amountOfImages
}
  var imgClass1;
  var imgClass2;
  var imgClass3;
  var imgClass4;
  var imgClass5;
  var imgClass6;
  var imgClass7;
  var imgClass8;
  var imgClass9;
  var imgClass10;
  var imgClass11;
  var imgClass12;
  var imgClass13;
  var imgClass14;
  var imgClass15;
  var imgClass16;

function processImages(data) {
  $("#noSearchResults").fadeOut();
  if(data.data.length==0) {
    if(data.pagination.next_max_tag_id==undefined){
      $("#noSearchResults").fadeIn();
      return;
    }
    else{
      j=amountOfImages
      return;
    }
  }
  else{
    for(var i=0;i<(data.data.length);i++){
      if(j>0){
        var username = data.data[i].user.username;
        var likes = data.data[i].likes.count;
        var url = data.data[i].images.standard_resolution.url; 
        var thumbnailUrl =  data.data[i].images.thumbnail.url;
        
        if(likes==0){
          var imgClass="1";
          imgClass1++
        }
        else if (likes==1){
          var imgClass="2";
                    imgClass2++

        }
        else if (likes==2){
          var imgClass="3";
                    imgClass3++

        }
        else if (likes==3){
          var imgClass="4";
                    imgClass4++

        }
        else if (likes==4){
          var imgClass="5";
                    imgClass5++

        }
        else if (likes==5){
          var imgClass="6";
                    imgClass6++

        }
        else if (likes<7){
          var imgClass="7";
                    imgClass7++

        }
        else if (likes<10){
          var imgClass="8";
                    imgClass8++

        }
        else if (likes<20){
          var imgClass="9";
                    imgClass9++

        }
        else if (likes<30){
          var imgClass="10";
                    imgClass10++

        }
        else if (likes<50){
          var imgClass="11";
                    imgClass11++

        }
        else if (likes<70){
          var imgClass="12";
                    imgClass12++

        }
        else if (likes<100){
          var imgClass="13";
                    imgClass13++

        }
        else if (likes<500){
          var imgClass="14";
                              imgClass14++


        }
        else if (likes<1000){
          var imgClass="15";
                              imgClass15++

        }
        else{
          var imgClass="16";
                              imgClass1++

        }
        $('#images').append("<a href="+url+" data-lightbox='images' id='thumbnailImages' class="+imgClass+" title= 'User: "+username+", "+likes+" likes'><img src="+thumbnailUrl+" class="+imgClass+" height='50' width='50'></a>")
        j-=1
      }
    }
  if(j>0){
  $.getJSON(data.pagination.next_url+"&callback=?", processImages);
  
  }
  else{
    j=amountOfImages
    return;

    }
  }
}


$(document).on("mouseover", "#images img", function() {
  var imageClass=$(this).attr("class");
  var audio=new Audio("wood/wood"+imageClass+".ogg");;
  audio.play();
});

});