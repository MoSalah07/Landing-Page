const otherLinks = document.querySelector( '.other-links' ),
    card = document.querySelector( '.card' );
card.style.left = - card.clientWidth + 'px';  // For Card  Translate - Width Card To Left 

if(otherLinks) {
    otherLinks.addEventListener( 'click', _ => { 
        card.classList.toggle( 'show-card' );
    } );
}


// ================================== Scrolling =============================
const scrolling = document.querySelector( '.scrolling' );
scrolling.style.display = 'none';
// For Scroll To Top 
scrolling.addEventListener('click', _ => {
    window.scrollTo(0, 0);
} );
// For Icon FadeIn and FadeOut
window.onscroll = _ => {
    window.scrollY >= 800 ? scrolling.style.display = 'block' : scrolling.style.display = 'none';
}


// =============================== Progress ======================================
const progress = document.querySelectorAll( '.semi-prog > span' );

setTimeout(_ => {
    progress.forEach( e => e.style.width = e.getAttribute( 'data-prog-color' ));
}, 2000);

// =============================== Events Date ===================================
const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minEl = document.querySelector('.min');
const secEl = document.querySelector( '.sec' );
const newYear = '1 Jan 2021';

const countDate = _ => {
    const newYearDate = new Date( newYear ),
        currentDate = new Date(),
        totalSeconds = (currentDate - newYearDate) / 1000;
    const days = Math.floor( ( totalSeconds / 3600 / 24 ) ),
        hours = Math.floor( ( totalSeconds / 3600 ) ) % 24,
        min = Math.floor( ( totalSeconds / 60 ) ) % 60,
        sec = Math.floor( totalSeconds ) % 60;
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minEl.textContent = min;
    secEl.textContent = sec;
};
countDate();
setInterval( countDate, 500 );
