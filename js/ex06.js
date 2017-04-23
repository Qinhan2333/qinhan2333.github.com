$(document).ready(function() {
	$(".ui-pic").click(function(){
		var img=$(this).find("img").attr("src");
		$(".ui-content").hide();
		$("#ui-hide-img").attr("src",img);
		$("#ui-hide").fadeIn(100);
    });
    $("#ui-hide").click(function(){
		$(this).fadeOut(100,function(){
			$(".ui-content").show();
        });
    });
});
$(document).ready(function() {
	$(".ui-mid tr td:eq(0)").css("background-color","rgb(192,192,192)");
	$("#num2").hide();
	$("#num3").hide();
	$(".ui-mid tr td:eq(0)").click(function(){
		$(".ui-mid tr td:eq(0)").css("background-color","rgb(192,192,192)");
		$(".ui-mid tr td:eq(1)").css("background-color","white");
		$(".ui-mid tr td:eq(2)").css("background-color","white");
		$("#num1").show();
		$("#num2").hide();
		$("#num3").hide();
	});
	$(".ui-mid tr td:eq(1)").click(function(){
		$(".ui-mid tr td:eq(1)").css("background-color","rgb(192,192,192)");
		$(".ui-mid tr td:eq(0)").css("background-color","white");
		$(".ui-mid tr td:eq(2)").css("background-color","white");
		$("#num2").show();
		$("#num1").hide();
		$("#num3").hide();
	});
	$(".ui-mid tr td:eq(2)").click(function(){
		$(".ui-mid tr td:eq(2)").css("background-color","rgb(192,192,192)");
		$(".ui-mid tr td:eq(1)").css("background-color","white");
		$(".ui-mid tr td:eq(0)").css("background-color","white");
		$("#num3").show();
		$("#num2").hide();
		$("#num1").hide();
	});
});
$(document).ready(function() {
	function inorder(index){
		$(this).find('.table-num').text(index+1);
	}
	function del() {
		$(this).parents(".bot-li").remove();
		$("li").each(inorder);
	}
	$("li").each(inorder);
	$('.table-del').bind('click',del);
	$(".add").click(function() {
		$("ul").append("<li class='bot-li'></li>");
		$("li:last").append("<table class='bot-table'></table>");
	    $("li:last").children('.bot-table').append("<tr class='ui-tr'></tr>");
		$("li:last").find('.ui-tr').append("<td class='table-num'></td>");
		$("li:last").find('.ui-tr').append("<td class='table-content'></td>");
		$("li:last").find('.ui-tr').append("<td class='table-del'>Delete</td>");
		$("li").each(inorder);
		$('.table-del').bind('click',del);
		});
	$("li").each(inorder);
    $('.table-del').bind('click',del);
});