$(document).ready(function(){
    
  $('#submitWeather').click(function(){
       
       var city=$("#city").val();
       
       if(city !=''){
           
           $.ajax({
               
               url:'http://api.openweathermap.org/data/2.5/weather?q='
                + city + "&units=metric" + "&APPID=32ba04435b7437d7005b1e121c2aa267",
               type: "GET",
               dataType: "jsonp",
               success: function(data){
                   var widget=show(data);
                   
                   $("#show").html(widget);
                   $("#city").val('');
                  
               }
               
           });
       }else{
           $("#error").html('Field cannot be empty'); 
       }
       
   });
    
});

function show(data){
    return "<h3 style='font-size:40px; font-weight: bold;' class='text-center'>3 Days Weather for " + data.name +", " + data.sys.country +"</h3>" +
           "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
           "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" + 
           "<h3><strong>Average Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
           "<h3><strong>Average Pressure</strong>: " + data.main.pressure + " hPa</h3>"  +
           "<h3><strong>Average Humidity</strong>: " + data.main.humidity + "%</h3>"  +
           "<h3><strong>Min.Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>"  +
           "<h3><strong>Max.Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>"  +
           "<h3><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</h3>"  +
           "<h3><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</h3>";
}