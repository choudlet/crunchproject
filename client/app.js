$(document).ready(function(){
  var crunchyarray;
  var appendthingy;
  $.get('http://localhost:3000/crunchy', (crunchy) => {
    crunchyarray = crunchy;

  });

  $('button').on('click', function(event){
    event.preventDefault();
    var randomWord = crunchyarray[Math.floor(Math.random() * crunchyarray.length)];
    var appendthingy = `<h1 class='target'>${randomWord}</h1>`;
     $('#appendhere').html(appendthingy);
  });
});
