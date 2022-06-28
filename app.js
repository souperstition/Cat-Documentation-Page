//nav hide on click
const topMenu = document.querySelector('#topnav');
const navBtn = document.querySelector('.fa-bars');

navBtn.addEventListener('click', () => {
	topMenu.classList.toggle('hidden');
});

//top button
mybutton = document.getElementById('topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//AOS
AOS.init({
	mirror: true,
	offset: 0,
	delay: 100,
	duration: 2500
});

$(window).on('load', function() {
	setTimeout(function() {
		AOS.refresh();
	}, 500);
});
