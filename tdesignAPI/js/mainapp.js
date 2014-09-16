var $type="tee",$color="black",$y_pos="front",$nos_icons=0,$nos_text=0,$custom_img=0;
$(document).ready(function(){
	
	//ONLOAD
	$("#preview_front").css('background-image', 'url(tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_front.png) ') ;
	$("#preview_back").css('background-image', 'url(tdesignAPI/images/product/'+$type+'/'+$color+'/'+$color+'_back.png) ') ;
	//$("#preview_front, #preview_back , #preview_left, #preview_right").css('background-color', 'blue') ;
	$("#preview_front,.T_type").removeClass('dis_none');
	$("#preview_back,.color_pick,.default_samples,.custom_icon,.custom_font").addClass('dis_none') ;
	//$('.modal').css('dispaly','none');

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

/*
 * Font resiZable
 * 
 * 
 * 
 *
var initDiagonal;
var initFontSize;

$(function() {
    $("#resizable").resizable({
        alsoResize: '#content',
        create: function(event, ui) {
            initDiagonal = getContentDiagonal();
            initFontSize = parseInt($("#content").css("font-size"));
        },
        resize: function(e, ui) {
            var newDiagonal = getContentDiagonal();
            var ratio = newDiagonal / initDiagonal;
            
            $("#content").css("font-size", initFontSize + ratio * 3);
        }
    });
});

function getContentDiagonal() {
    var contentWidth = $("#content").width();
    var contentHeight = $("#content").height();
    return contentWidth * contentWidth + contentHeight * contentHeight;
}
/*
 * 
 * 
 * 
 */

	$('#apply_text').click(function(){
		
		var text_val = jQuery("textarea#custom_text").val();
		if(!text_val)
			return false;
		
			$("."+$y_pos+"_print").append("<div id=text"+($nos_text)+" class='new_text'  onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);'><span class='drag_text property_icon'  ></span><textarea id='text_style' >"+text_val+"</textarea><span class='delete_text property_icon' onClick='delete_text(this);' ></span></div>");
			$( "#text"+($nos_text)+"" ).draggable({ containment: "parent" });
			$( "#text"+($nos_text)+"" ).resizable({
				maxHeight: 480,
				maxWidth: 450,
				minHeight: 60,
				minWidth: 60
			});

		var $font_			=$('#custom_text').css("font-family");
		var $font_size		=$('#custom_text').css("font-size");
		var $font_weight	=$('#custom_text').css("font-weight");
		var $font_style		=$('#custom_text').css("font-style");
		var $font_color		=$('#custom_text').css("color");
		//alert($font_u);
		
		
		$("#text"+($nos_text)+" textarea" ).css("font-family", $font_);
		$("#text"+($nos_text)+" textarea" ).css("font-size", $font_size);
		$("#text"+($nos_text)+" textarea" ).css("font-weight", $font_weight);
		$("#text"+($nos_text)+" textarea" ).css("font-style", $font_style);
		$("#text"+($nos_text)+" textarea" ).css("color", $font_color);
		$("#text"+($nos_text)).css({'top':'100px','left':'150px'});
		//document.getElementById("text"+($nos_text)+" textarea").style.textDecoration=(""+$font_u+"");
		++$nos_text;
	});
$('.preview_images').click(function(){
	capture();
	//$('.modal').addClass('in');
	$('.layer').css('visibility','visible');
	//$('.layer').css('visibility','visible');
	//$('body').css('position','fixed');
	//$('.modal').css({'display':'block','height':'auto'});
	//$('.design_api').css('position', 'fixed');
	//$('.modal').css('overflow', 'scroll');
});


$('.close_img').click(function(){

	
	$('.layer').css('visibility','hidden');
	//$('.layer').css('visibility','hidden');
	//$('body').css('position','relative');
	
});

function capture() {
	
	$("#preview_back").removeClass('dis_none') ;
	$("#preview_front").removeClass('dis_none') ;
	$("#image_reply").empty();
	$y_pos="front";
	 html2canvas($('#preview_front'), {
            onrendered: function(canvas) {
                document.getElementById("image_reply").appendChild(canvas);
				//Set hidden field's value to image data (base-64 string)
				$('#img_front').val(canvas.toDataURL("image/png"));
            }
        });
	//$('#preview_front').hide();
	//$('#preview_back').show();
    html2canvas($('#preview_back'), {
            onrendered: function(canvas) {
				//$('#img_back').val(canvas.toDataURL("image/png"));
                document.getElementById("image_reply").appendChild(canvas);
				$('#img_back').val(canvas.toDataURL("image/png"));
				$("#preview_back").addClass('dis_none') ;
            }
        });
}


});

	function image_icon($srcimg){
			$("."+$y_pos+"_print").append("<div id=icon"+($nos_icons)+" class='new_icon' onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);'><span class='delete_icon property_icon' onClick='delete_icons(this);'></span><img src='"+$srcimg+"' width='100%' height='100%' /></div>");
			$( "#icon"+($nos_icons)+"" ).draggable({ containment: "parent" });
			$( "#icon"+($nos_icons)+"" ).resizable({
				maxHeight: 480,
				maxWidth: 450,
				minHeight: 60,
				minWidth: 60
				});
			$( "#icon"+($nos_icons)+"" ).css({'top':'100px','left':'150px'});
			++$nos_icons;
	}

function delete_icons(e){
		
		$(e).parent('.new_icon').remove();
		
		--$nos_icons;
	}
	function show_delete_btn(e){
	
		$(e).children('.property_icon').show();
	}
	function hide_delete_btn(e){
	
		$(e).children('.property_icon').hide();
	}
	
	/*=============================================*/
function delete_text(f){
			$(f).parent('.new_text').remove();
			--$nos_icons;
	}

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();            
            reader.onload = function (e) {
	
				$("."+$y_pos+"_print").append("<div id='c_icon"+($custom_img)+"' class='new_icon'><span class='delete_icon' onClick='delete_icons(this);' ></span><img src='#' id='c_img"+$custom_img+"' width='100%' height='100%' /></div>");
				$( "#c_icon"+($custom_img)+"" ).draggable({ containment: "parent" });
				$( "#c_icon"+($custom_img)+"" ).resizable({
					maxHeight: 480,
					maxWidth: 450,
					minHeight: 60,
					minWidth: 60
				});		
			
			
			$("#c_img"+($custom_img)+"").attr('src', e.target.result);
			++$custom_img;
			};
            reader.readAsDataURL(input.files[0]);
        }
}