window.onload = function(){ 
	document.getElementById("zero").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '0';
		}
	};
	document.getElementById("one").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '1';
		}
	};
	document.getElementById("two").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '2';
		}
	};
	document.getElementById("three").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '3';
		}
	};
	document.getElementById("four").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '4';
		}
	};
	document.getElementById("five").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '5';
		}
	};
	document.getElementById("six").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '6';
		}
	};
	document.getElementById("seven").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '7';
		}
	};
	document.getElementById("eight").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '8';
		}
	};
	document.getElementById("nine").onclick = function() {
		var add = document.getElementById("numberpaddisplay");
		if (ismaxlength(add) == false){
			add.value += '9';
		}
	};
	document.getElementById("del").onclick = function() {
		var del = document.getElementById("numberpaddisplay");
		del.value = "";
	};
	document.getElementById("enter").onclick = function() {
		var submit = document.getElementById("numberpaddisplay");
		submit.value = "";
	};

	function ismaxlength(input) {
		input = input.value
		if (input.length < 8){
			return false;
		} else{
			return true;
		}
	};
};
