<link href='https://fonts.googleapis.com/css?family=Nosifer|League+Script|Yellowtail|Permanent+Marker|Codystar|Eater|Molle:400italic|Snowburst+One|Shojumaru|Frijole|Gloria+Hallelujah|Calligraffitti|Tangerine|Monofett|Monoton|Arbutus|Chewy|Playball|Black+Ops+One|Rock+Salt|Pinyon+Script|Orbitron|Sacramento|Sancreek|Kranky|UnifrakturMaguntia|Creepster|Pirata+One|Seaweed+Script|Miltonian|Herr+Von+Muellerhoff|Rye|Jacques+Francois+Shadow|Montserrat+Subrayada|Akronim|Faster+One|Megrim|Cedarville+Cursive|Ewert|Plaster' rel='stylesheet' type='text/css'>

<link href="tdesignAPI/css/api.css" rel="stylesheet">
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
<script type="text/javascript" src="tdesignAPI/js/html2canvas.js"></script>

<script src="tdesignAPI/js/jquery.form.js"></script>
<script src="tdesignAPI/js/jquery.form.js"></script>

<link rel="stylesheet" href="tdesignAPI/vendor/jquery-ui/jquery-ui.css" />
<script src="tdesignAPI/vendor/jquery-ui/jquery-ui.js"></script>
<script src="tdesignAPI/vendor/jquery-ui-rotatable/jquery.ui.rotatable.min.js"></script>
<script src="tdesignAPI/js/jquery.ui.touch-punch.min.js"></script>
<script src="tdesignAPI/vendor/tinymce/tinymce.min.js"></script>
<script src="tdesignAPI/vendor/tinymce/jquery.tinymce.min.js"></script>
<script src="tdesignAPI/js/mainapp.js"></script>

<div class="container design_api_container">
	<div class='design_api'>
		<!--=============================================================-->
		<div id="menu">
			<div class="menu_option sel_type">

			</div>
			<div class="menu_option sel_color">
				<i class="fa fa-paint-brush fa-3x"></i>

			</div>
			<div class="menu_option sel_art">
				<i class="fa fa-camera-retro fa-3x"></i>
			</div>
			<div class="menu_option sel_custom_icon">
				<span class="glyphicon glyphicon-open"></span>
			</div>
			<div class="menu_option sel_text">
				<i class="fa fa-font fa-3x"></i>

			</div>
		</div>
		<!--=============================================================-->
		<div id='options'>
			<div class="T_type">
				<div id="radio1" ><img src="tdesignAPI/images/menu_icons/submenu/tee.jpg" width="100%" height="100%" />
				</div>
				<!--<div id="radio2" ><img src="tdesignAPI/images/menu_icons/submenu/collar.jpg" width="100%" height="100%" />
				</div>-->
				<div id="radio3" ><img src="tdesignAPI/images/menu_icons/submenu/hoodie.jpg" width="100%" height="100%" />
				</div>
			</div>

			<div class="color_pick">
				<div class="color_radio_div" id="red"></div>
				<div class="color_radio_div" id="black"></div>
				<div class="color_radio_div" id="white"></div>
				<div class="color_radio_div" id="navy"></div>
				<div class="color_radio_div" id="green"></div>
			</div>
			<div class="default_samples">

				
				<?php
				$dir    = 'tdesignAPI/images/Images';
				$files1 = scandir($dir);
			//$files2 = scandir($dir, 1);
				foreach ($files1 as &$value) {
					if (strpos($value,'.png') !== false) {
    		//echo 'true';
						echo '<div class="sample_icons"><img src="tdesignAPI/images/Images/' .$value. '" width="100%" height="100%" /></div>' ;
					}elseif(strpos($value,'.') === false){
			//echo '<div class="sample_icons"><img src="tdesignAPI/images/folder.png" width="100%" height="100%" />' .$value. '</div>' ;
					}
    		//echo "Value: $value<br />\n";
				}
				?>
			</div>
			<div class="custom_icon">
				<form id="form1" runat="server">
					<span class="btn btn-default btn-file"> Browse
						<input type='file' id="imgInp" />
					</span>

				</form>
			</div>

			<div class="custom_font">

				<select id="fs" onchange="changeFont(this.value);">
					<option value="arial">Arial</option>
					<option value="Nosifer, cursive">Nosifer</option>
					<option value="League Script, cursive">League Script</option>
					<option value="Yellowtail, cursive">Yellowtail</option>
					<option value="Permanent Marker, cursive">Permanent Marker</option>
					<option value="Codystar, cursive">Codystar</option>
					<option value="'Eater', cursive">Eater</option>
					<option value="Molle, cursive">Molle</option>
					<option value="Snowburst One, cursive">Snowburst One</option>
					<option value="Shojumaru, cursive">Shojumaru</option>
					<option value="Frijole, cursive">Frijole</option>
					<option value="Gloria Hallelujah, cursive">Gloria Hallelujah</option>
					<option value="Calligraffitti, cursive">Calligraffitti</option>
					<option value="Tangerine, cursive">Tangerine</option>
					<option value="Monofett, cursive">Monofett</option>
					<option value="Monoton, cursive">Monoton</option>
					<option value="Arbutus, cursive">Arbutus</option>
					<option value="Chewy, cursive">Chewy</option>
					<option value="Playball, cursive">Playball</option>
					<option value="Black Ops One, cursive">Black Ops One</option>
					<option value="'Rock Salt', cursive">Rock Salt</option>
					<option value=" 'Pinyon Script', cursive">Pinyon Script</option>
					<option value="'Orbitron', sans-serif">Orbitron</option>
					<option value="'Sacramento', cursive">Sacramento</option>
					<option value="'Sancreek', cursive">Sancreek</option>
					<option value="'Kranky', cursive">Kranky</option>
					<option value="'UnifrakturMaguntia', cursive">UnifrakturMaguntia</option>
					<option value="'Creepster', cursive">Creepster</option>
					<option value="'Pirata One', cursive">Pirata One</option>
					<option value="'Seaweed Script', cursive">Seaweed Script</option>
					<option value="'Miltonian', cursive">Miltonian</option>
					<option value="'Herr Von Muellerhoff', cursive">Herr Von Muellerhoff</option>
					<option value="'Rye', cursive"> 'Rye'</option>
					<option value="'Jacques Francois Shadow', cursive">Jacques Francois Shadow</option>
					<option value="'Montserrat Subrayada', sans-serif">Montserrat Subrayada</option>
					<option value="'Akronim', cursive">Akronim</option>
					<option value="'Faster One', cursive">Faster One</option>
					<option value="'Megrim', cursive">Megrim</option>
					<option value="'Cedarville Cursive', cursive">Cedarville Cursive</option>
					<option value="'Ewert', cursive">Ewert</option>
					<option value="'Plaster', cursive">Plaster</option>
					<option value="verdana">Verdana</option>
					<option value="impact">Impact</option>
					<option value="ms comic sans">MS Comic Sans</option>
				</select>
				<select id="font_size" onchange="changeFontSize(this.value);">
					<?php
					for($i=10;$i<=140;$i+=2){
						?>

						<option value="<?php echo $i; ?>px"><?php echo $i; ?>px</option>
						<?php		
					}
					?>


				</select>
				<input type="color" id="color_picker" name="favcolor" onChange="changeColor(this.value);" placeholder="Color Name" />
				<div>
					<button class="btn btn-sm btn-default bold_button_pop_font" onclick="bold();"><i class="glyphicon glyphicon-bold"></i></button>
					<button class="btn btn-sm btn-default italic_button_pop_font" onclick="italic();"><i class="glyphicon glyphicon-italic"></i></button>
					<button class="btn btn-sm btn-default underline_pop_font" onclick="underline();"><i class="underline_text">U</i></button>
				</div>
				<div>
					<button class="btn btn-sm btn-default left_pop_font" onclick="left_text();"><i class="glyphicon glyphicon-align-left"></i></button>
					<button class="btn btn-sm btn-default center_pop_font" onclick="center_text();"><i class="glyphicon glyphicon-align-center"></i></button>
					<button class="btn btn-sm btn-default right_pop_font" onclick="right_text();"><i class="glyphicon glyphicon-align-right"></i></button>	
				</div>
				<textarea id="custom_text" style="text-align:center;" placeholder="Create Your Custom Text..."></textarea>
				<button type="button" class="btn btn-primary" id="apply_text">
					New
				</button>
				

			</div>
		</div>
		<!--=============================================================-->
		<!--=========================preview start====================================-->

		<div id='preview_t'>
			<div id="preview_front">
				<div class="front_print">

				</div>
			</div>
			<div id="preview_back">
				<div class="back_print">

				</div>
			</div>

		</div>
		<!--=============================================================-->
		<!--======================view start=======================================-->

		<div id='view_mode'>
			<div  class="mode"><img id="o_front" src="tdesignAPI/images/product/tee/black/black_front.png" width="100%" height="80%" />FRONT
			</div>
			<div  class="mode"><img id="o_back" src="tdesignAPI/images/product/tee/black/black_back.png" width="100%" height="80%" />BACK
			</div>
			<div class="mode">
				<i class="fa fa-binoculars fa-4x preview_images" id="preview_images" data-toggle="modal" data-target=".bs-example-modal-lg"></i>Preview
			</div>
		</div>
		<!--=====================View Ends========================================-->
		<div id="overview">
			<div class="">

				<table class="table">
					<tr>
						<th>Size</th>
						<th>Quantity</th>
					</tr>
					<tr>
						<td><b>S</b></td>
						<td>
							<input id="small"  onchange="changeval()" name="small" type="number" value="1" class="form-control small input-md" min=0 max=99999 />
						</td>
					</tr>
					<tr>
						<td><b>M</b></td>
						<td>
							<input id="medium"  onchange="changeval()" name="medium" type="number" value="0" class="form-control medium input-md" min=0 max=99999 />
						</td>
					</tr>
					<tr>
						<td><b>L</b></td>
						<td>
							<input id="large" onchange="changeval()"  name="large" type="number" value="0" class="form-control large input-md" min=0 max=99999 />
						</td>
					</tr>
					<tr>
						<td><b>XL</b></td>
						<td>
							<input id="xlarge"  onchange="changeval()" name="xlarge" type="number" value="0" class="form-control xlarge input-md" min=0 max=99999 />
						</td>
					</tr>
					<tr>
						<td><b>XXL</b></td>
						<td>
							<input id="xxlarge" onchange="changeval()"  name="xxlarge" type="number" value="0" class="form-control xxlarge input-md" min=0 max=99999 />
						</td>
					</tr>
					<tr>
						<td><b>Total</b></td>
						<td>
							<input id="total" name="total" type="number" value="1" class="form-control total input-md" disabled min=1 max=99999 />
						</td>
					</tr>

				</table>

				<button type="button" class="btn btn-primary btn-block preview_images"  data-toggle="modal" data-target=".bs-example-modal-lg">
					Proceed
				</button>
			</div>
		</div>
	</div>

			<div class="layer" style="z-index:999999999">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close close_img" data-dismiss="modal">
							<span aria-hidden="true">&times;</span><span class="sr-only close_img">Close</span>
						</button>
						<h4 class="modal-title">Showcase</h4>
					</div>
					<div class="modal-body">
						<div id="print_preview_body">
						<h1><div id="front_print_preview"></div><br/><center>Front<center></h1>
						<h1><div id="back_print_preview"></div><br/><center>Back<center></h1>
						</div>
						<div class="modal-footer">
				<div class="row">
					<form method="POST" enctype="multipart/form-data" id="imageFileForm" action="checkout/checkout.php">
						<div class="col-md-1">
							<button type="button" class="btn btn-default close_img" data-dismiss="modal">
								Close
							</button>
						</div>
						<div class="col-md-2">
							Price :545/-
						</div>

						<div class="col-md-6">
							<center>
								<table class="table">

									<tr>
										<td><b>S</b></td>
										<td><b>M</b></td>
										<td><b>L</b></td>
										<td><b>XL</b></td>
										<td><b>XXL</b></td>
										<td><b>Total</b></td>
									</tr>
									<tr>
										<td>
											<input id="small2" onchange="changeval2()"  name="small" type="number" value="1" class="form-control small input-md" min=0 max=99999 />
										</td>

										<td>
											<input id="medium2" onchange="changeval2()"  name="medium" type="number" value="0" class="form-control medium input-md" min=0 max=99999 />
										</td>

										<td>
											<input id="large2" onchange="changeval2()"  name="large" type="number" value="0" class="form-control large input-md" min=0 max=99999 />
										</td>

										<td>
											<input id="xlarge2" onchange="changeval2()"  name="xlarge" type="number" value="0" class="form-control xlarge input-md" min=0 max=99999 />
										</td>

										<td>
											<input id="xxlarge2" onchange="changeval2()"  name="xxlarge" type="number" value="0" class="form-control xxlarge input-md" min=0 max=99999 />
										</td>

										<td>
											<input id="total2" name="total" type="number" value="1" class="form-control total input-md" disabled min=1 max=99999 />
										</td>
									</tr>

								</center>
							</table>
						</div>
						<div class="col-md-2">
							<input type="hidden" name="img_front" id="img_front" value="" />
							<input type="hidden" name="img_back" id="img_back" value="" />
							<button type="submit" class="btn btn-primary">
								Buy Now!
							</button>
						</div>
					</form>

				</div>
			</div>
		</div>

	</div>
</div>

</div>

<div id="text_pop_div" class="hidden text_pop_div" >

	<div style="margin-left: 10px; margin-bottom: 5px;">
		<select class="pop_font" onchange="changeFont(this.value, this);" style="width: 90px;">
			<option value="arial">Arial</option>
			<option value="Nosifer, cursive">Nosifer</option>
			<option value="League Script, cursive">League Script</option>
			<option value="Yellowtail, cursive">Yellowtail</option>
			<option value="Permanent Marker, cursive">Permanent Marker</option>
			<option value="Codystar, cursive">Codystar</option>
			<option value="'Eater', cursive">Eater</option>
			<option value="Molle, cursive">Molle</option>
			<option value="Snowburst One, cursive">Snowburst One</option>
			<option value="Shojumaru, cursive">Shojumaru</option>
			<option value="Frijole, cursive">Frijole</option>
			<option value="Gloria Hallelujah, cursive">Gloria Hallelujah</option>
			<option value="Calligraffitti, cursive">Calligraffitti</option>
			<option value="Tangerine, cursive">Tangerine</option>
			<option value="Monofett, cursive">Monofett</option>
			<option value="Monoton, cursive">Monoton</option>
			<option value="Arbutus, cursive">Arbutus</option>
			<option value="Chewy, cursive">Chewy</option>
			<option value="Playball, cursive">Playball</option>
			<option value="Black Ops One, cursive">Black Ops One</option>
			<option value="'Rock Salt', cursive">Rock Salt</option>
			<option value="'Pinyon Script', cursive">Pinyon Script</option>
			<option value="'Orbitron', sans-serif">Orbitron</option>
			<option value="'Sacramento', cursive">Sacramento</option>
			<option value="'Sancreek', cursive">Sancreek</option>
			<option value="'Kranky', cursive">Kranky</option>
			<option value="'UnifrakturMaguntia', cursive">UnifrakturMaguntia</option>
			<option value="'Creepster', cursive">Creepster</option>
			<option value="'Pirata One', cursive">Pirata One</option>
			<option value="'Seaweed Script', cursive">Seaweed Script</option>
			<option value="'Miltonian', cursive">Miltonian</option>
			<option value="'Herr Von Muellerhoff', cursive">Herr Von Muellerhoff</option>
			<option value="'Rye', cursive"> 'Rye'</option>
			<option value="'Jacques Francois Shadow', cursive">Jacques Francois Shadow</option>
			<option value="'Montserrat Subrayada', sans-serif">Montserrat Subrayada</option>
			<option value="'Akronim', cursive">Akronim</option>
			<option value="'Faster One', cursive">Faster One</option>
			<option value="'Megrim', cursive">Megrim</option>
			<option value="'Cedarville Cursive', cursive">Cedarville Cursive</option>
			<option value="'Ewert', cursive">Ewert</option>
			<option value="'Plaster', cursive">Plaster</option>
			<option value="verdana">Verdana</option>
			<option value="impact">Impact</option>
			<option value="ms comic sans">MS Comic Sans</option>
		</select>
		<select class="font_size_pop_font" onchange="changeFontSize(this.value, this);">
			<?php
			for($i=10;$i<=140;$i+=2){
				?>

				<option value="<?php echo $i; ?>px"><?php echo $i; ?>px</option>
				<?php		
			}
			?>


		</select>
		<input type="color" class="pop_font_color" name="favcolor" onChange="changeColor(this.value, this);" placeholder="Color Name" />

	</div>
	<div style="margin-left: 10px; margin-bottom: 5px;">
		<button class="btn btn-sm btn-default bold_button_pop_font" onclick="bold(this);"><i class="glyphicon glyphicon-bold"></i></button>
		<button class="btn btn-sm btn-default italic_button_pop_font" onclick="italic(this);"><i class="glyphicon glyphicon-italic"></i></button>
		<button class="btn btn-sm btn-default underline_pop_font" onclick="underline(this);"><i class="underline_text">U</i></button>

		<button class="btn btn-sm btn-default left_pop_font" onclick="left_text(this);"><i class="glyphicon glyphicon-align-left"></i></button>
		<button class="btn btn-sm btn-default center_pop_font" onclick="center_text(this);"><i class="glyphicon glyphicon-align-center"></i></button>
		<button class="btn btn-sm btn-default right_pop_font" onclick="right_text(this);"><i class="glyphicon glyphicon-align-right"></i></button>
	</div>


</div>

