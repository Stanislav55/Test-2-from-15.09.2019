let dots = document.getElementsByClassName('dots-item'),
	dotsArea = document.getElementsByClassName('dots-block')[0],
	slides = document.getElementsByClassName('slides-item'),
	prevBtn = document.getElementById('left-button'),
	nextBtn = document.getElementById('right-button'),
	slideIndex = 1;

showSlides(slideIndex);

function showSlides (n, v) {
	if (n < 1) {
		slideIndex = slides.length;
	} else if (n > slides.length) {
		slideIndex = 1;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('active');
	}

	if(v == 'pb') {
		animate(slides[slideIndex - 1], 'right', 640, 0, 700);

	} else {
		animate(slides[slideIndex - 1], 'left', 640, 0, 700);
	}

	dots[slideIndex - 1].classList.add('active');
}

prevBtn.onclick = function () {
	prevBtn.disabled = true;
	showSlides(slideIndex +=-1, 'pb');
}

nextBtn.onclick = function () {
	nextBtn.disabled = true;
	showSlides(slideIndex += 1, 'nb');
}

dotsArea.onclick = function (e) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
			if(slideIndex != i)
				showSlides(slideIndex = i);
		}
	}
}

function animate(object, property, start_value, end_value, time) {
  var frame_rate = 0.06; // 60 FPS
  var frame = 0;
  var delta = (end_value - start_value) / time / frame_rate;
    object.style.display = 'block';
  var handle = setInterval(function() {
    frame++;
    var value = start_value + delta * frame;
    object.style[property] = value + "px";
    if (value == end_value) {
    	object.style.left = 'auto';
    	prevBtn.disabled = false;
    	nextBtn.disabled = false;
      clearInterval(handle);
    }
  }, 1 / frame_rate);
}

let persone = {
	name: "John",
	age: 25,
	isMarried: false
};

console.log(persone["name"]);

let arr = ['apple', 'orange', 'green'];

console.log(arr[1]);

//alert("Hello World!");

/*let answer = confirm("Are you here?");
console.log(answer);*/

//let answer = +prompt("Есть ли вам 18?", "Да");

//console.log(typeof(answer));

let incr = 10,
	decr = 10;

console.log(++incr);
console.log(--decr);


