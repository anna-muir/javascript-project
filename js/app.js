/*
* Declares constant ul, which wraps the navigation within an
unordered list.
* Declares constant title, which wraps the title in the navigation
bar within a div element.
*/
const ul = document.createElement('ul');
const title = document.createElement('div');

// Gives title a class name of title and the inner HTML Title.
title.className = 'title';
title.innerHTML = 'Title';

// Appends title to the unordered list that wraps the navigation
ul.append(title);


// Array navLinks: to be used in the for loop below for innerHTML and ids of li elements
const navLinks = [
    'Section 1', 
    'Section 2', 
    'Section 3', 
    'Section 4'
];

// For loop: loops through 4 times
for (let i = 0; i<=3; i++) {
    // Creates 4 li variables and sets them equal to the variable li
    const li = document.createElement('li');
        // Sets the id of the li elements to the corresponding navLinks array element 
        li.setAttribute('id', navLinks[i]);
        // Sets the innerHTML of the li elements to the corresponding navLinks array element
        li.innerHTML = navLinks[i];
        // Appends each li element to the ul
        ul.appendChild(li);
        // Gives each li element a class name of links
        li.className = 'links';    
}
//Appends the entire list of li elements within the ul to the body
document.body.append(ul);


// Creates a function called clickEvent with parameter evt
function clickEvent(evt) {
    evt.preventDefault();
    // Sets variable target to evt.target
    let target = evt.target;
    // Sets variable sectionOne to the div element with the id section-one
    let sectionOne = document.getElementById('section-one');
    // Sets variable sectionTwo to the div element with the id section-two
    let sectionTwo = document.getElementById('section-two');
    // Sets variable sectionThree to the div element with the id section-three
    let sectionThree = document.getElementById('section-three');
    // Sets variable sectionFour to the div element with the id section-four
    let sectionFour = document.getElementById('section-four');
    /* Condition: if the target's id is Section 1, when the event is fired, 
    * scroll sectionOne into view
    */
    if (target.id === 'Section 1') {
        sectionOne.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    /* Condition: if the target's id is Section 2, when the event is fired, 
    * scroll sectionTwo into view
    */
    else if(target.id === 'Section 2') {
        sectionTwo.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    /* Condition: if the target's id is Section 3, when the event is fired, 
    * scroll sectionThree into view
    */
    else if (target.id === 'Section 3') {
       sectionThree.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    /* Condition: if the target's id is Section 4, when the event is fired, 
    * scroll sectionFour into view
    */
    else if (target.id === 'Section 4') {
        sectionFour.scrollIntoView({block: 'start', behavior: 'smooth'});
    }
    
}
// Adds event listener to ul, saying when the target is clicked, run clickEvent (defined above)
ul.addEventListener('click', clickEvent);



// Adds event listener, saying when the window is scrolled, run the function below
window.addEventListener('scroll', () => {
    /* Defines variables - sectionNum are the div sections of the page and linkNum
    * are the navigation links
    */ 
    let sectionOne = document.getElementById('section-one');
    let linkOne = document.getElementById('Section 1');
    let sectionTwo = document.getElementById('section-two');
    let linkTwo = document.getElementById('Section 2');
    let sectionThree = document.getElementById('section-three');
    let linkThree = document.getElementById('Section 3');
    let sectionFour = document.getElementById('section-four');
    let linkFour = document.getElementById('Section 4');
    // Defines variables to detect the location of the div sections of the page
    let boundingOne = sectionOne.getBoundingClientRect();
    let boundingTwo = sectionTwo.getBoundingClientRect();
    let boundingThree = sectionThree.getBoundingClientRect();
    let boundingFour = sectionFour.getBoundingClientRect();
    
    /* Condition: if section one is in the viewport, add the active class only to linkOne
    * and add active-section class only to sectionOne
    * Reference for condition: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
    */ 
    if (boundingOne.top >= 0 && boundingOne.left >= 0 &&
        boundingOne.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        boundingOne.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            linkOne.classList.add('active');
            linkThree.classList.remove('active');
            linkTwo.classList.remove('active');
            linkFour.classList.remove('active');

            sectionOne.classList.add('active-section');
            sectionTwo.classList.remove('active-section');
            sectionThree.classList.remove('active-section');
            sectionFour.classList.remove('active-section');
        }
     /* Condition: if section two is in the viewport, add the active class only to linkTwo 
     * and add active-section class only to sectionTwo 
     */
    else if (boundingTwo.top >= 0 && boundingTwo.left >= 0 &&
            boundingTwo.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            boundingTwo.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                linkTwo.classList.add('active');
                linkOne.classList.remove('active');
                linkThree.classList.remove('active');
                linkFour.classList.remove('active'); 

                sectionTwo.classList.add('active-section');
                sectionOne.classList.remove('active-section');
                sectionThree.classList.remove('active-section');
                sectionFour.classList.remove('active-section');
        }
     /* Condition: if section three is in the viewport, add the active class only to linkThree 
     * and add active-section class only to sectionThree
     */
    else if (boundingThree.top >= 0 && boundingThree.left >= 0 &&
            boundingThree.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            boundingThree.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                linkThree.classList.add('active');
                linkOne.classList.remove('active');
                linkTwo.classList.remove('active');
                linkFour.classList.remove('active');

                sectionThree.classList.add('active-section');
                sectionTwo.classList.remove('active-section');
                sectionOne.classList.remove('active-section');
                sectionFour.classList.remove('active-section');
            }
    /* Condition: if section four is in the viewport, add the active class only to linkFour 
    * and add active-section class only to sectionFour
    */
    else if (boundingFour.top >= 0 && boundingFour.left >= 0 &&
            boundingFour.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            boundingFour.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                linkFour.classList.add('active');
                linkOne.classList.remove('active');
                linkTwo.classList.remove('active');
                linkThree.classList.remove('active');

                sectionFour.classList.add('active-section');
                sectionOne.classList.remove('active-section');
                sectionTwo.classList.remove('active-section');
                sectionThree.classList.remove('active-section');
                }

    // These active classes will be run when the page is scrolled or when the links are clicked

});