## Website Performance Optimization portfolio project

In this project, I optimized two pages:
* Optimizations made to views/js/main.js make views/pizza.html render with a consistent frame-rate at 60fps when scrolling.
* index.html achieves a PageSpeed score of at least 90 for Mobile and Desktop.

## Optimizations
* Refactored Javascript to prevent layout thrashing
* Resized images in Photoshop
* Optimized images with Gulp
* Minified HTML and Javascript with Gulp
* Inlined CSS


## Build Tools
I used Gulp for minification and image optimization. The configuration files are:
- gulfile.js
- package.json

## Link to hosted site
The build files are hosted on GitHub:
- http://gregdavenportdesign.com/udacity-project-4-website-optimization/dist/index.html
- http://gregdavenportdesign.com/udacity-project-4-website-optimization/dist/views/pizza.html

## Updates after code review:
###views/js/main.js

Line 406:
Change querySelectorAll to getElementById.

Line 442:
Change querySelectorAll to get ElementsByClassName.

Line 445:
Store Array Length for Efficiency.

Line 463:
Declare the pizzasDiv variable outside the loop, so only DOM call is made one.

Line 520:
Reduce the number of pizzas. Dynamically calculate the number of pizzas needed to fill the screen, based on screen height.

Line: 523
Replace querySelector with getElementById. Move this DOM call outside the for statement and save it as a local variable.

Line 526:
Declare elem variable in the initialization of the for loop. This will prevent it from being create every time the loop is executed.

###views/css/styles.css
Line 36:
Trigger GPU acceleration
