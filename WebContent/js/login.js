var canvas = document.getElementById("canvas"); //获取到canvas对象！
var context = canvas.getContext("2d"); //获取到canvas的绘图环境！
canvas.width = 150; //设置canvas宽度
canvas.height = 50; //设置canvas高度
context.font = "bold 20px 微软雅黑"; //设置字体
context.strokeRect(0, 0, 150, 50); //绘制一个矩形框
var aCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var code = '';

function checkLogin() {
	if($('#userid').val() == 'admin' && $('#password').val() == '1234' && $('#code').val() == code) {
		$('#alert').html();
		$('#userid').css('color', 'black');
		$('#password').css('color', 'black');
		$('#code').css('color', 'black');
		window.location = 'starter.html';
	}
	if($('#userid').val() != 'admin') {
		$('#alert').html();
		$('#code').css('color', 'black');
		$('#password').css('color', 'black');
		$('#userid').css('color', 'red');
		$('#alert').html('用户名错误');
	}
	if($('#userid').val() == 'admin' && $('#password').val() != '1234') {
		$('#alert').html();
		$('#userid').css('color', 'black');
		$('#code').css('color', 'black');
		$('#password').css('color', 'red');
		$('#alert').html('密码错误');
	}
	if($('#userid').val() == 'admin' && $('#password').val() == '1234' && $('#code').val() != code) {
		createVerificationCode();
		$('#alert').html();
		$('#userid').css('color', 'black');
		$('#password').css('color', 'black');
		$('#code').css('color', 'red');
		$('#alert').html('验证码错误');

	}
}

function showAndHide() {
	if($('#password').attr("type") == 'password') {
		$('#password').attr('type', 'text');
		$('#icon').removeClass('glyphicon-eye-close');
		$('#icon').addClass('glyphicon-eye-open');
	} else {
		$('#password').attr('type', 'password');
		$('#icon').removeClass('glyphicon-eye-open');
		$('#icon').addClass('glyphicon-eye-close');
	}
}

function createVerificationCode() {
	code = '';
	context.clearRect(0, 0, 150, 50); //清除画布
	getValidate(4); //生成一个四位数的验证码
}

function getValidate(n) {
	for(var i = 0; i < n; i++) {
		var x = 20 + i * 20;
		var y = 20 + Math.random() * 10;
		var index = Math.floor(Math.random() * aCode.length); //获取到随机的索引值
		var txt = aCode[index]; //获取到随机的内容
		code += txt;
		context.fillStyle = getColor(); //设置字体颜色
		context.translate(x, y); //字体移动
		var deg = 90 * Math.random() * Math.PI / 180;
		context.rotate(deg); //字体随机旋转度数
		context.fillText(txt, 0, 0); //将文字写到canvas上面
		context.rotate(-deg);
		context.translate(-x, -y);
	}
}

function getColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

$(document).ready(function() {
	createVerificationCode();
});