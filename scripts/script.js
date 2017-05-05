
$(document).ready(function(){

	$('a').click(function(event){
		event.preventDefault();
	});

	$('.collapse').click(function(){

		x='#'+this.id.replace('collapse_','');
		y='#'+this.id;

		if ($(x).hasClass('hidden')){
			$(x).removeClass('hidden');
			$(y).children().attr('src','images/blockhead.png');
		}
		else {
			$(x).addClass('hidden');
			$(y).children().attr('src','images/blockhead_collapsed.png');
		}

	});

	var z=false;

	$('.popuphover').removeClass('popuphover');

	$('.popupctrl').click(function(){

		if ($(this).hasClass('active')){
			CloseMenu(this);
			z=false;
		}
		else {
			CloseMenu('.active');
			OpenMenu(this);
			z=true;
		}

	});

	$('.popupctrl').mouseover(function(){

		if (z){
			CloseMenu('.active');
			OpenMenu(this);
		}

	});

	$(document).click(function(event){

		if ( !$(event.target).parents().andSelf().is('.popupmenu') && z ){
			CloseMenu('.active');
			z=false;
		}

	 });

	var n=0;

	$(':checkbox').change(function(event){

		$( '#' + $(event.target).attr('id').replace('imod_checkbox_','') ).toggleClass('imod_highlight');

		if (this.checked) {
			n=n+1;
		}
		else {
			n=n-1;
		}

		$('#gdiscussion_inlinemod_count').text(n);

	 });

});

function CloseMenu(id) {
	$(id).parents('.popupmenu').children('.popupbody').css('display','none');
	$(id).removeClass('active');
}

function OpenMenu(id) {
	$(id).parents('.popupmenu').children('.popupbody').css('display','block');
	$(id).addClass('active');
}

function sidebar(){
	if ( $('#sidebar').css('display')=='none' ){

		$('#content_container').animate({
			marginRight: '-285'
		}, 400 );
		$('#content').animate({
			marginRight: '285'
		}, 400, function(){

			$('#sidebar').css('display','block');
			$('#sidebar_container').css('width','270');

			$('#sidebar').animate({
				opacity: 1
			}, 400 );

		});

		$('#sidebar_button').attr('src','images/tab-collapsed.gif');

	}
	else {

		$('#sidebar').animate({
			opacity: 0
		}, 400, function(){

			$('#sidebar').css('display','none');
			$('#sidebar_container').css('width','0');

			$('#content_container,#content').animate({
				marginRight: '0'
			}, 400 );

		});

		$('#sidebar_button').attr('src','images/tab-expanded.gif');

	}
}

/*
	if ($.browser.mozilla){
		$('head').append('<link rel="stylesheet" type="text/css" href="styles/mozilla.css" />');
	}
*/
