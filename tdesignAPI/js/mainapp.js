var $type="tee",$color="black",$y_pos="front",$nos_icons=0,$nos_text=0,$custom_img=0,$zindex=1000;

$(document).ready(function(){

	//ONLOAD
	$("#preview_front").css('background-image', 'url(tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_front.png) ') ;
	$("#preview_back").css('background-image', 'url(tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_back.png) ') ;

	$("#preview_front,.T_type").removeClass('dis_none');
	$("#preview_back,.color_pick,.default_samples,.custom_icon,.custom_font").addClass('dis_none') ;


	$('#fs').val('arial');
	$('#font_size').val('10px');
	$('#color_picker').val('#000000');


	//ONLOAD OVER
	
	/*==========================SWITCH MENU===========================*/
	$(".sel_type").click(function(){
		$(".T_type").removeClass('dis_none');
		$(".color_pick,.default_samples,.custom_icon,.custom_font").addClass('dis_none') ;
	});
	$(".sel_color").click(function(){
		$(".color_pick").removeClass('dis_none');
		$(".T_type,.default_samples,.custom_icon,.custom_font").addClass('dis_none') ;
	});
	$(".sel_art").click(function(){
		$(".default_samples").removeClass('dis_none');
		$(".T_type,.color_pick,.custom_icon,.custom_font").addClass('dis_none') ;
	});
	$(".sel_custom_icon").click(function(){
		$(".custom_icon").removeClass('dis_none');
		$(".T_type,.color_pick,.default_samples,.custom_font").addClass('dis_none') ;
	});
	$(".sel_text").click(function(){
		$(".custom_font").removeClass('dis_none');
		$(".T_type,.color_pick,.default_samples,.custom_icon").addClass('dis_none') ;
	});
	
	/*=========================SWITCH MENU OVER=====================*/
	/*==========================select type=====================*/
	$("#radio1").click(function(){	//tee
		$type="tee";
		change_it();
		
	});
	$("#radio2").click(function(){	//polo
		$type="polo";
		change_it();
		
	});
	$("#radio3").click(function(){	//hoodie
		$type="hoodie";
		change_it();
	});
	/*==========================select type over=====================*/
	/*==========================select back or front=====================*/
	$("#o_front").click(function(){
		$y_pos="front";
		$("#preview_front").css('background-image', 'url(tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_'+$y_pos+'.png) ') ;
		$("#o_front").attr('src','tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_front.png');
		$("#o_back").attr('src','tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_back.png');
		$("#preview_front").removeClass('dis_none') ;
		$("#preview_back").addClass('dis_none') ;
		
	});
	$("#o_back").click(function(){
		$y_pos="back";
		$("#preview_back").css('background-image', 'url(tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_'+$y_pos+'.png) ') ;
		$("#o_front").attr('src','tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_front.png');
		$("#o_back").attr('src','tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_back.png');
		$("#preview_back").removeClass('dis_none') ;
		$("#preview_front").addClass('dis_none') ;
		
	});
	/*==========================select back or front OVER=====================*/
	/*==========================select COLOR=====================*/
	$('#red').click(function(){
		$color="red";
		change_it();
	});
	$('#black').click(function(){
		$color="black";
		change_it();
	});
	$('#white').click(function(){
		$color="white";
		change_it();
	});
	$('#green').click(function(){
		$color="green";
		change_it();
	});
	$('#navy').click(function(){
		$color="navy";
		change_it();
	});
	function change_it(){
		$("#preview_back").css('background-image', 'url(tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_back.png) ') ;
		$("#preview_front").css('background-image', 'url(tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_front.png) ') ;
		$("#o_front").attr('src','tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_front.png');
		$("#o_back").attr('src','tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_back.png');
		
	}
	/*==========================select COLOR OVER=====================*/
	/*=====================SAMPLE ICONS========================*/
	$(".sample_icons").click(function(){
		var $srcimg=$(this).children("img").attr('src');
		image_icon($srcimg);
		
	});

	$(".folder_toggle").click(function(){
		$i=$(this).attr('value');
		$folder=$(this).attr('data-folder');
		$.ajax({
			url: 'tdesignAPI/control/newcontent.php?folder='+$folder,
			success: function()
			{
				$("#toggle_show"+$i ).empty().load("tdesignAPI/control/newcontent.php?folder="+$folder);
			}
		});
	});
	/*=====================SAMPLE ICONS over========================*/


	function rgb2hex(orig){
		var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
		return (rgb && rgb.length === 4) ? "#" +
		("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
	}


	$(document).on({
		'mouseup':function(e) {

			if (!$('.selected').is(e.target) && $('.selected').has(e.target).length === 0){

				hide_delete_btn($('.selected'));
			}
  				}//end click event
  			});

	$('#apply_text').click(function(){
		
		var text_val = jQuery("textarea#custom_text").val();
		if(!text_val)
			return false;
		
		$("."+$y_pos+"_print").append("<div id=text"+($nos_text)+" class='item new_text' style='min-width: 250px; min-height: 65px; z-index: "+$zindex+"'><textarea class='custom_textarea text_style'  >"+text_val+"</textarea><div class='toolbox'></div></div>");
		$( "#text"+($nos_text)+"" ).draggable({ containment: "parent", stack: "div" });

		var toolbox 		= $('#text_pop_div').html();
		var $font_			= $('#custom_text').css("font-family");
		var $font_size		= $('#custom_text').css("font-size");
		var $font_weight	= $('#custom_text').css("font-weight");
		var $font_style		= $('#custom_text').css("font-style");
		var $font_color		= $('#custom_text').css("color");
		var $text_align		= $('#custom_text').css("text-align");
		var $text_dec		= $('#custom_text').css("text-decoration");

		var $hexcolor 		= rgb2hex($font_color);

		if ($font_ == '"Helvetica Neue", Helvetica, Arial, sans-serif'){
			$font_ = 'arial';
		}
		
		$("#text"+($nos_text)+" textarea" ).css("font-family", $font_);
		$("#text"+($nos_text)+" textarea" ).css("font-size", $font_size);
		$("#text"+($nos_text)+" textarea" ).css("font-weight", $font_weight);
		$("#text"+($nos_text)+" textarea" ).css("font-style", $font_style);
		$("#text"+($nos_text)+" textarea" ).css("color", $font_color);
		$("#text"+($nos_text)+" textarea" ).css("text-align", $text_align);
		$("#text"+($nos_text)+" textarea" ).css("text-decoration", $text_dec);
		var item = "#text"+($nos_text);


		$(item).on({
			'click':function(e) {
   					$.each( $('.selected'), function( ix, item ) { //clear last selected items
   						hide_delete_btn($(item)); //hide the buttons en stuff
   					});
   					$(item).addClass('selected'); //add selected class for the mouse up function
   					show_delete_btn($(item));//add the border items

  				}//end click event
  			});

		$(item).resizable({ handles: 'n, e, s, se, w, ne, nw', minHeight: 65, minWidth: 250, containment: "parent",  grid: 10 }).rotatable({snap: true, step: 15});
		$(item+' div.ui-rotatable-handle').addClass("ui-rotatable-handle-sw");
		$(item+' div.ui-rotatable-handle').addClass("property_icon");
		$(item+' div.ui-resizable-handle').addClass("property_icon");
		$(item+' div.ui-resizable-handle').addClass("property_icon");

		$(item+' div.ui-resizable-se').addClass("property_icon");
		$(item+' div.ui-resizable-se').addClass("ui-resizable-se_icon");

		$(item+' div.ui-resizable-se').removeClass("ui-icon-gripsmall-diagonal-se");
		$(item+' div.ui-resizable-se').removeClass("ui-icon");

		$(item+' div.ui-resizable-ne').addClass("ui-resizable-ne_icon");
		$(item+' div.ui-resizable-ne').addClass("delete_icon");
		$(item+' div.ui-resizable-ne').addClass("property_icon");
		$(item+' div.ui-resizable-ne').removeClass("ui-resizable-handle-ne");
		$(item+' div.ui-resizable-ne').removeClass("ui-resizable-ne");

		$(item+' div.ui-resizable-nw').addClass("ui-resizable-move_icon");
		$(item+' div.ui-resizable-nw').addClass("drag_text");
		$(item+' div.ui-resizable-nw').addClass("property_icon");
		$(item+' div.ui-resizable-nw').removeClass("ui-resizable-handle-nw");
		$(item+' div.ui-resizable-nw').removeClass("ui-resizable-handle");
		$(item+' div.ui-resizable-nw').removeClass("ui-resizable-nw");

		$(item).children('.toolbox').html(toolbox);
		$(item+' div.toolbox').addClass("property_icon");
		$(item+' div.toolbox').find('.pop_font').val($font_);
		$(item+' div.toolbox').find('.pop_font_color').val($hexcolor);
		$(item+' div.toolbox').find('.bold_button_pop_font').val($font_weight);
		$(item+' div.toolbox').find('.italic_button_pop_font').val($font_style);
		$(item+' div.toolbox').find('.font_size_pop_font').val($font_size);

		$(item).css({'top':'100px','left':'150px', 'z-index':$zindex});
		
		++$nos_text;
		++$zindex;
	});

	$('.preview_images').click(function(){
		capture();
		$('.layer').css('visibility','visible');
	});

	$('.close_img').click(function(){
		$('.layer').css('visibility','hidden');
	});

	function capture() {
		$('#front_print_preview').html('<div class="loading"></div>');
		$('#back_print_preview').html('<div class="loading"></div>');
		$("#preview_back").removeClass('dis_none') ;
		$("#preview_front").removeClass('dis_none') ;
		$("#image_reply").empty();
		$y_pos="front";


		textarea_to_div("#preview_front");
		textarea_to_div("#preview_back");

		html2canvas(document.querySelector("#preview_front"), {logging: false, scale: 2, useCORS: true}).then(canvas => {
			
			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpg);base64,/, "");
			$('#front_print_preview').html('');
			document.getElementById("front_print_preview").appendChild(canvas);
			$('#img_front').val(imagedata);
			div_to_textarea("#preview_front");
		});
		

		html2canvas(document.querySelector("#preview_back"), {logging: false,  scale: 2, useCORS: true}).then(canvas => {

			var imagedata = canvas.toDataURL('image/png');
			var imgdata = imagedata.replace(/^data:image\/(png|jpg);base64,/, "");
			$('#back_print_preview').html('');
			document.getElementById("back_print_preview").appendChild(canvas);
			$('#img_back').val(imagedata);
			div_to_textarea("#preview_back");
		});

		$("#preview_back").addClass('dis_none') ;
		$("#preview_front").removeClass('dis_none') ;


}//end function

function div_to_textarea(div) {
	$(div).find('.converted_div').each(function(index, item) {
		var divHtml = $(item).html();
		var style = $(item).attr('style');
		var editableText = $("<textarea />");
		divHtml.replace('<br>', /\n/g);
		editableText.val(divHtml);
		$(item).replaceWith(editableText);
		$(editableText).addClass('custom_textarea');
		$(editableText).addClass('text_style');
		$(editableText).attr('style', style);


	});
}

function textarea_to_div(div) {
	$(div).find('.custom_textarea').each(function(index, item) {
		var style = $(item).attr('style');
		var html = $(item).val();
		var viewableText = $("<div>");
		html.replace(/\n/g, '<br>');
		viewableText.html(html);
		$(item).replaceWith(viewableText);
		$(viewableText).addClass('custom_textarea');
		$(viewableText).addClass('text_style');
		$(viewableText).addClass('converted_div');
		$(viewableText).attr('style', style);
		//console.log(viewableText);

	});
}
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			image_icon(e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
	}
}

$("#imgInp").change(function() {
	readURL(this);
});


 $(document).on("click",".delete_icon",function() {
	$(this).parent().remove();
 });

}); //end doc load

function image_icon($srcimg){
	$("."+$y_pos+"_print").append("<div id=icon"+($nos_icons)+" class='item new_icon' onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);'><img src='"+$srcimg+"' width='100%' height='100%' /></div>");
	var item = "#icon"+($nos_icons)+"";
	$(item).draggable({ containment: "parent",  stack: "div" });

	$(item).resizable({ handles: 'n, e, s, w, se, nw, ne', containment: "parent", grid: 10  }).rotatable({snap: true, step: 15});
	$(item+' div.ui-rotatable-handle').addClass("ui-rotatable-handle-sw");
	$(item+' div.ui-rotatable-handle').addClass("property_icon");
	$(item+' div.ui-resizable-handle').addClass("property_icon");
	$(item+' div.ui-resizable-handle').addClass("property_icon");

	$(item+' div.ui-resizable-nw').addClass("property_icon");
	$(item+' div.ui-resizable-nw').addClass("ui-resizable-nw_icon");

	$(item+' div.ui-resizable-se').addClass("property_icon");
	$(item+' div.ui-resizable-se').addClass("ui-resizable-se_icon");

	$(item+' div.ui-resizable-se').removeClass("ui-icon-gripsmall-diagonal-se");
	$(item+' div.ui-resizable-se').removeClass("ui-icon");

	$(item+' div.ui-resizable-ne').addClass("ui-resizable-ne_icon");
	$(item+' div.ui-resizable-ne').addClass("delete_icon");
	$(item+' div.ui-resizable-ne').addClass("property_icon");
	$(item+' div.ui-resizable-ne').removeClass("ui-resizable-handle-ne");
	$(item+' div.ui-resizable-ne').removeClass("ui-resizable-ne");

$(item+"div[class*='ui-rotatable-handle-']").bind("mousedown", function(e) {
	$(item).rotatable("instance").startRotate(e);
});
$(item).css({'top':'100px','left':'150px', 'z-index':$zindex});

++$nos_icons;
++$zindex;


}


function show_delete_btn(e){
	
	$(e).children('.property_icon').show();
}
function hide_delete_btn(e){

	$(e).children('.property_icon').hide();
}

/*=============================================*/

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();            
		reader.onload = function (e) {

			$("."+$y_pos+"_print").append("<div id='c_icon"+($custom_img)+"' class='new_icon' ><img src='#' id='c_img"+$custom_img+"' width='100%' height='100%' /></div>");

			var item = "#c_img"+($custom_img)+"";		
			$(item).resizable({ handles: 'n, e, s, w, se, nw, ne', containment: "parent", grid: 10  }).rotatable({snap: true, step: 15});
			$(item+' div.ui-rotatable-handle').addClass("ui-rotatable-handle-sw");
			$(item+' div.ui-rotatable-handle').addClass("property_icon");
			$(item+' div.ui-resizable-handle').addClass("property_icon");
			$(item+' div.ui-resizable-handle').addClass("property_icon");

			$(item+' div.ui-resizable-nw').addClass("property_icon");
			$(item+' div.ui-resizable-nw').addClass("ui-resizable-nw_icon");

			$(item+' div.ui-resizable-se').addClass("property_icon");
			$(item+' div.ui-resizable-se').addClass("ui-resizable-se_icon");

			$(item+' div.ui-resizable-se').removeClass("ui-icon-gripsmall-diagonal-se");
			$(item+' div.ui-resizable-se').removeClass("ui-icon");

			$(item+' div.ui-resizable-ne').addClass("ui-resizable-ne_icon");
			$(item+' div.ui-resizable-ne').addClass("delete_icon");
			$(item+' div.ui-resizable-ne').addClass("property_icon");
			$(item+' div.ui-resizable-ne').removeClass("ui-resizable-handle-ne");
			$(item+' div.ui-resizable-ne').removeClass("ui-resizable-ne");
			
			$(item+' div.ui-resizable-ne').addClass("ui-resizable-ne_icon");
			$(item+' div.ui-resizable-ne').addClass("delete_icon");
			$(item+' div.ui-resizable-ne').addClass("property_icon");
			$(item+' div.ui-resizable-ne').removeClass("ui-resizable-handle-ne");
			$(item+' div.ui-resizable-ne').removeClass("ui-resizable-ne");
			$(item).css({'top':'100px','left':'150px', 'z-index':$zindex});

			$("#c_img"+($custom_img)+"").attr('src', e.target.result);

			++$custom_img;
			++$zindex;
			
		};
		reader.readAsDataURL(input.files[0]);
	}
}

function changeval() {
	$total = parseInt($("#small").val()) + parseInt($("#medium").val()) + parseInt($("#large").val()) + parseInt($("#xlarge").val()) + parseInt($("#xxlarge").val());
	
		$('.small').val($("#small").val());
		$('.medium').val($("#medium").val());
		$('.large').val($("#large").val());
		$('.xlarge').val($("#xlarge").val());
		$('.xxlarge').val($("#xxlarge").val());
		$('.total').val($total);
	}

	function changeval2() {
		$total = parseInt($("#small2").val()) + parseInt($("#medium2").val()) + parseInt($("#large2").val()) + parseInt($("#xlarge2").val()) + parseInt($("#xxlarge2").val());
		
		$('.small').val($("#small2").val());
		$('.medium').val($("#medium2").val());
		$('.large').val($("#large2").val());
		$('.xlarge').val($("#xlarge2").val());
		$('.xxlarge').val($("#xxlarge2").val());
		$('.total').val($total);
	}
	
	function underline(selected_item) {
		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
		}else{
			var	edited_text = $('#custom_text');
		}
		var style = edited_text.css('text-decoration').indexOf('underline');
		if (style == -1){
			edited_text.css("text-decoration", 'underline');
		}else{
			edited_text.css("text-decoration", 'none');
		}

	}

	function center_text(selected_item) {
		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
		}else{
			var	edited_text = $('#custom_text');
		}
		edited_text.css("text-align", 'center');


	}

	function right_text(selected_item) {
		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
		}else{
			var	edited_text = $('#custom_text');	
		}
		edited_text.css("text-align", 'right');

	}

	function left_text(selected_item) {
		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
		}else{
			var	edited_text = $('#custom_text');
		}
		edited_text.css("text-align", 'left');
	}


	function bold(selected_item) {

		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
		}else{
			var	edited_text = $('#custom_text');
		}
		var style = edited_text.css('font-weight');
		if (style == '700'){
			edited_text.css("font-weight", '400');
		}else{
			edited_text.css("font-weight", '700');
		}

	}

	function italic(selected_item) {

		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
		}else{
			var	edited_text = $('#custom_text');

		}
		var style = edited_text.css('font-style');
		if (style == 'normal'){
			edited_text.css("font-style", 'italic');
		}else{
			edited_text.css("font-style", 'normal');
		}

	}

	function changeFont(_name, selected_item) {
		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
			edited_text.css("font-family", _name);
		}else{
			$('#custom_text').css("font-family", _name);
		}

	}

	function changeFontSize(_size, selected_item) {
		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
			edited_text.css("font-size", _size);
		}else{
			$('#custom_text').css("font-size", _size);
		}
	}

	function changeColor(_color, selected_item) {
		if (selected_item){
			var edited_text = $(selected_item).parent().parent().parent().find('.custom_textarea');
			edited_text.css("color", _color);
		}else{
			$('#custom_text').css("color", _color);
		}
	}
