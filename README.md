[Live Site Demo](https://souperstition.github.io/Cat-Documentation-Page/)

# Cat Documentation Page

## Table of Contents 

- [Project Overview](#project-overview)
- [Built With](#built-with)
- [Tools Used](#tools-used)
- [Methodology](#methodology)

## Project Overview 

This was my take on the "technical documentation page" assignment from FCC. The requirements were:

- Choose a topic to create a documentation page for
- Use semantic HTML elements (main, nav, header, section)
- Nav element must include:
 - A header element with the title of the page
 - Links directing the user to each section of the page (at least 5 total)
- Sections must include a combination of: 
 - Text elements
 - Code blocks
 - List elements
- Sidebar should be fixed to the left on desktop screens
- Use at least one media query

Outside these guidelines, I decided to also add:
- A collapsible top navigation menu on small screen sizes
- A button that appears when the navigation menu scrolls out of view, directing the user to the top of the page
- Smooth scrolling between page sections
- A title image for each section
- Fade in animation when titles scroll into view

Once I was ready to add content, I decided to use [Cat Ipsum](http://www.catipsum.com/) to fill out the page. Once I started putting things onto the page, I noticed the text read as a sort of strange, creepy poetry.. I decided to keep it.

[[back to top]](#table-of-contents)

## Built With

- HTML
- CSS
- Javascript

[[back to top]](#table-of-contents)

## Tools Used

### Color Scheme

Resource: [Happy Hues](https://www.happyhues.co/) 

Once choosing the color scheme, I set up my CSS variables:

~~~css
:root {
    --dark: #0e172c;
    --h3-background: rgba(254, 199, 215, 0.5);
    --p-background: rgba(255, 255, 255, 0.9);
    --lilac: #d9d4e7;
    --vivid-purple: #a786df;
    --off-white: #fffffe;
    --light-pink: #fec7d7;
  }
~~~

This made it easy to apply them throughout the document.

### Animations 

Resource: [Animate on Scroll](https://michalsnik.github.io/aos/) library

The package needs to be imported in the HTML file:

~~~html
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script src="app.js"></script>
~~~

I then initialized it in my app.js file with my desired settings:

~~~js
//AOS
AOS.init( {
    mirror: true,
    offset: 0,
    delay: 100,
    duration: 2500,
});

$(window).on('load', function() { setTimeout(function() { AOS.refresh(); }, 500); });
~~~

To use, I just needed to add a special attribute to the HTML elements I wished to animate:

~~~html
<img data-aos="fade-in" src="cat7.png" alt="">
~~~

The AOS library comes with several animation options, but I chose to go with the fade in animation as it was the least intrusive.

### Fonts

Kreon and Red Hat: https://fonts.googleapis.com/css2?family=Assistant:wght@300&family=Kreon:wght@400;700&family=Red+Hat+Mono:wght@300&display=swap 
Material Icons: https://fonts.googleapis.com/icon?family=Material+Icons
Font Awesome: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css

[[back to top]](#table-of-contents)

## Methodology 

In order to save screen space on phones, I used a media query to alter the layout for portrait mode. 

~~~css
@media (orientation: portrait) {
    body {
        flex-direction: column;
    }

    main {
        // push content below nav but erase all other margins
        margin: 2rem 0 0; 
    }

    code, ul {
        max-width: 80vw;
    }

    nav {
        position: fixed;
        bottom: unset;
        width: 100%;
        max-width: 100vw;
        background: var(--lilac);
        z-index: 999;
        padding: 0;
    }

    #topnav {
        display: none;
        grid-template-columns: auto auto;
        gap: 5px;
        background: var(--lilac);
        width: 100%;
        padding: 10px;
    }
}

@media (orientation: landscape) {
    #topnav {
        display: flex !important;
    }

    #topBtn {
        display: none !important;
    }
}
~~~

The *topBtn* element mentioned above is a button that displays only on small screens to allow the user to scroll to the top. By default, it is hidden:

~~~css
#topBtn {
    display: none; 
    position: fixed;
    cursor: pointer; 
    bottom: 20px; 
    right: 30px; 
    z-index: 99; 
    border: .5vmin solid var(--lilac);
    outline: none; 
    background-color: var(--lilac); 
    color: var(--vivid-purple); 
    padding: 0.5vmin; 
    border-radius: 50%; 
    font-size: calc(16px + 1vw); 
    height: calc(30px + 1vw);
    width: calc(30px + 1vw);
    text-align: center;
    box-shadow: 0 0 2vmin rgba(0,0,0,0.5);
}

#topBtn:hover {
    background-color: var(--vivid-purple); 
    color: var(--off-white);
}
~~~

It is made visible on smaller screens using javascript.

~~~js
mybutton = document.getElementById('topBtn');

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

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
~~~

As a result, portrait viewers will get a one column layout with the navigation at the top of the screen. The navigation is collapsible so it doesn't take up more screen space than necessary. Font sizes and content scale for different screen sizes so differences are very minimal.

[[back to top]](#table-of-contents)



 
