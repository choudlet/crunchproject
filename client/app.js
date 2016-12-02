$(document).ready(function(){
  var cruncharray;
  $.get('http://localhost:3000/crunchy', (crunchy) => {
    crunchyarray = crunchy;

  });

  
});
