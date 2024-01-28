function counter(){

	var counter = document.getElementById("counter");

	var value = 0;

	counter.innerHTML = "<h1 id = 'value' align = 'center'> " + value + "</h1>"


	const left_button = document.getElementById("left");

	const right_button = document.getElementById("right");

	left_button.addEventListener("click",()=>{
		value -= 1;
		updatedisplay()

	})
	right_button.addEventListener("click", () =>{

		value += 1;

		updatedisplay();

	})
	function updatedisplay(){

				if(value < 0){
			value = 0;
		}
 

			counter.innerHTML = "<h1 id = 'value' align = 'center'> " + value + "</h1>"

		
	}



	

	



	




}
document.addEventListener("DOMContentLoaded", counter,false);