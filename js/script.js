$(document).ready(function(){

	// the answer
	var result = [];

	//where what is typed in shows up
	var inputBar = [];


	//assigns a value to each td and prints it in the input bar
	var one = function () {
		inputBar.push("1");
		$("#result").html(inputBar)
	}

	var two = function () {
		inputBar.push("2");
		$("#result").html(inputBar)
	}

	var three = function () {
		inputBar.push("3");
		$("#result").html(inputBar)
	}

	var four = function () {
		inputBar.push(4);
		$("#result").html(inputBar)
	}

	var five = function () {
		inputBar.push(5);
		$("#result").html(inputBar)
	}

	var six = function () {
		inputBar.push(6);
		$("#result").html(inputBar)
	}

	var seven = function () {
		inputBar.push(7);
		$("#result").html(inputBar)
	}

	var eight = function () {
		inputBar.push(8);
		$("#result").html(inputBar)
	}

	var nine = function () {
		inputBar.push(9);
		$("#result").html(inputBar)
	}

	var zero = function () {
		inputBar.push(0);
		$("#result").html(inputBar)
	}

	var period = function () {
		inputBar.push(".");
		$("#result").html(inputBar)
	}

	var minus = function () {
		inputBar.push("-");
		$("#result").html(inputBar)
	}

	var multiply = function () {
		inputBar.push("*");
		$("#result").html(inputBar)
	}

	var plus = function () {
		inputBar.push("+");
		$("#result").html(inputBar)
	}

	var divide = function () {
		inputBar.push("/");
		$("#result").html(inputBar)
	}

	var period = function () {
		inputBar.push(".");
		$("#result").html(inputBar)
	}

	var clear = function () {
		inputBar = [];
		$("#result").html(inputBar)
	}


	//creates a string of whatever is in the input bar
	var equals = function () {
		inputBar = inputBar.join("")
		result.push(inputBar)
		//for loop is to loop over the result array (which only has 1 element!) and eval() evaluates it
		for (var i = 0; i < result.length; i ++) {
				result = (eval(result[0]));	
		}

		$("#result").html(result)

		//result and inputBar are emptied out so that it does not interfere with the next computation
		result = []
		inputBar = []
	}

	var avg = function () {
		var sum = []
		inputBar = inputBar.join("")
		result.push(inputBar)

		for (var i = 0; i < result.length; i ++) {
				sum = (eval(result[0]))	
		}

		//inputBar.split("+") is to create an array whose length is the number of numbers that are being averaged

		//for some reason when I tried to do result = result.split("+") it told me split was not a fn even though inputBar and result had the same content 
		inputBar = inputBar.split("+")

		var avg = sum / inputBar.length


		$("#result").html(avg)
		result = []
		inputBar = []
	}


	//runs the functions detailed above
	$("#one").click(one)
	$("#two").click(two)
	$("#three").click(three)
	$("#four").click(four)
	$("#five").click(five)
	$("#six").click(six)
	$("#seven").click(seven)
	$("#eight").click(eight)
	$("#nine").click(nine)
	$("#zero").click(zero)
	$("#minus").click(minus)
	$("#multiply").click(multiply)
	$("#plus").click(plus)
	$("#divide").click(divide)
	$("#period").click(period)
	$("#clear").click(clear)
	$("#equals").click(equals)
	$("#avg").click(avg)

});