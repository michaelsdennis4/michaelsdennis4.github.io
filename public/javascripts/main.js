console.log('main.js linked!');

//EVENT LISTENERS

$('.item#linkedin').on('click', function(event) {
	event.preventDefault();
	window.open(
    "http://linkedin.com/in/michaelsdennis",
    "Michael's Linked In",
    "resizable,scrollbars,status"
  );	
});

$('.item#github').on('click', function(event) {
	event.preventDefault();
	window.open(
    "http://github.com/michaelsdennis4",
    "Michael's Github",
    "resizable,scrollbars,status"
  );
});

$('a#project1').on('click', function(event) {
	event.preventDefault();
	window.open(
    "https://maria-niforos-antiques.herokuapp.com/",
    "Maria Niforos Antiques",
    "resizable,scrollbars,status"
  );
});

$('a#project2').on('click', function(event) {
	event.preventDefault();
	window.open(
    "http://sheltered-depths-2064.herokuapp.com/",
    "Michael's Forum",
    "resizable,scrollbars,status"
  );
});

$('a#project3').on('click', function(event) {
	event.preventDefault();
	window.open(
    "http://secure-sierra-4955.herokuapp.com/",
    "Tic Tac Toe",
    "resizable,scrollbars,status"
  );
});








