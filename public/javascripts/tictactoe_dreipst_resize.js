$(document).ready(function(){
			tamano();
			$("#chat").load('chat.ejs');
			$('#chat_container').perfectScrollbar();
			
			$("#input_chat").keyup(function (e) {
				if (e.keyCode == 13) {
					$("#div_1_chat").append("<p class='chat'><span style='font-weight:400; color:#16C4F0'>Yo: </span>"+$(this).val()+"</p>");
					$(this).val("");
					$('#chat_container').animate({ scrollTop: $(window).height() }, 1000);
					// Do something
				}
			});
		});
		
	$( window ).resize(function() {
			tamano();
	});
		
	function tamano(){
			var wHeight = $(window).height();// Windows Height
			var wWidth = $(window).width();// Windows Width
			
			var space = 0;
			var margin_top = wHeight*0.3;
			var margin_left = wWidth*0.12;
			
			$("#user_1_back").width(wWidth*0.25);
			$("#user_1_back").height(wHeight*0.1);
			$("#user_1_back").css( "margin-top", margin_top+"px" );
			
			$("#user_1_mid").width(wWidth*0.25);
			$("#user_1_mid").height(wHeight*0.1);
			$("#user_1_mid").css( "margin-top", margin_top+"px" );
			
			$("#user_1_name").css( "margin-top", margin_top*1.07+"px" );
			$("#user_1_name").css( "margin-left", margin_left+"px" );
			
			$("#user_1_shape").css( "margin-top", margin_top*0.93+"px" );
			
			//USER 2
			$("#user_2").width(wWidth*0.25);
			$("#user_2").height(wHeight*0.1);
			
			$("#user_2_back").width(wWidth*0.25);
			$("#user_2_back").height(wHeight*0.1);
			
			$("#user_2_back").css( "margin-top", margin_top+"px" );
			
			$("#user_2_mid").width(wWidth*0.25);
			$("#user_2_mid").height(wHeight*0.1);
			$("#user_2_mid").css( "margin-top", margin_top+"px" );
			
			$("#user_2_name").css( "margin-top", margin_top*1.07+"px" );
			$("#user_2_name").css( "margin-left", margin_left*0.3+"px" );
			
			$("#user_2_shape").css( "margin-top", margin_top*0.93+"px" );
			
			
			//*************************************
			
			$("#head_space").height(wHeight*0.04);
			
			if(wHeight > wWidth){
				space = wWidth*0.025;
				
				$("#game_all").height(wWidth*0.34);// Size footer height to 18.5% from the windows
				$("#game_all").width(wWidth*0.34);// Size footer height to 18.5% from the windows
				
				$("#game_table").height(wWidth*0.34);// Size footer height to 18.5% from the windows
				$("#game_table").width(wWidth*0.34);// Size footer height to 18.5% from the windows
				
				$("#user_1_shape").width(wWidth*0.078);
				$("#user_1_shape").height(wWidth*0.078);
				
				$("#user_2_shape").width(wWidth*0.078);
				$("#user_2_shape").height(wWidth*0.078);
			}
			else{
				space = wHeight*0.025;
				
				$("#game_all").height(wHeight*0.6046);// Size footer height to 18.5% from the windows
				$("#game_all").width(wHeight*0.6046);// Size footer height to 18.5% from the windows
				
				$("#game_table").height(wHeight*0.6046);// Size footer height to 18.5% from the windows
				$("#game_table").width(wHeight*0.6046);// Size footer height to 18.5% from the windows
				
				$("#user_1_shape").width(wHeight*0.138);
				$("#user_1_shape").height(wHeight*0.138);
				
				$("#user_2_shape").width(wHeight*0.138);
				$("#user_2_shape").height(wHeight*0.138);
			}
			
			$("#game_table").attr("cellspacing", space+"px");
			
			$("#footer").height(wHeight*0.235);// Size footer height to 18.5% from the windows
			$("#chat_container").height(wHeight*0.13);
			
			$("#score_num").height($("#score_box").height()*0.6);
			$("#turn").height($("#score_box").height()*0.4);
		}// JavaScript Document