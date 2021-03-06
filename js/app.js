$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
	$(document).one('keydown', function(e) {
		if (e.keyCode == 88) {
			playSade();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
		  $('.ryu-throwing').hide();			
			$('.ryu-cool').show();
		}
	})
	$(document).keyup(function(e) {
		if (e.keyCode == 88) {
			$('#smooth-operator')[0].pause()
			$('.ryu-still').hide();
		  $('.ryu-throwing').hide();				
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
		}
	});

});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playSade() {
  $('#smooth-operator')[0].volume = 1;
  $('#smooth-operator')[0].load();
  $('#smooth-operator')[0].play();
  $('#document').unbind('keydown');
}