

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
function getQuote() {

    $.ajax({
      headers: {
        "X-Mashape-Key": //"Your key goes here" ,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat='
    }).done(function(response){
      var data = JSON.parse(response)
      $('#quote').animate({opcaity: 0}, 500,
        function(){
          $(this).animate({opcaity: 1},500);
          $('#quote-text').html(data.quote);
        });

      $('#author').animate({opcaity: 0}, 500,
        function(){
          $(this).animate({opcaity: 1},500);
          $('#author-name').html(data.author);
        });
      var color = Math.floor(Math.random() * colors.length);
      $('html body').animate({backgroundColor: colors[color],color: colors[color]},1000);           
      $('#new_quote').animate({backgroundColor: colors[color]},1000);
    });
};

$(document).ready(function(){
  getQuote();
  $('#new_quote').on('click', getQuote);

   $('#tweet-quote').on('click', function() {
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + 'brian' + '" ' + 'bier quotes'));
    
  });
  $('#tumblr-quote').on('click', function() {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent('currentAuthor')+'&content=' + encodeURIComponent('brian'));
  });
})