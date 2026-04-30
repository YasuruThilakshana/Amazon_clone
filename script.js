// Hamburger Menu and Sidebar Functionality
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        sidebar.classList.toggle('active');
    });
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        sidebar.classList.remove('active');
    });
}

// Close sidebar when clicking on a link
const sidebarLinks = document.querySelectorAll('.sidebar-content a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        sidebar.classList.remove('active');
    });
});

// Header Slider Functionality
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none' ;
    }
    imgs[n].style.display = 'block' ;
}

changeSlide();

if (prev_btn) {
    prev_btn.addEventListener('click', (e)=>{
        if (n > 0) {
            n--;
        }else{
            n = imgs.length - 1;
        }
        changeSlide();
    });
}

if (next_btn) {
    next_btn.addEventListener('click', (e)=>{
        if (n < imgs.length - 1) {
            n++;
        }else{
            n = 0;
        }
        changeSlide();
    });
}

// Product Scroll with Mouse Wheel
const scrollContainer = document.querySelectorAll('.product');
for( const item of scrollContainer){
    item.addEventListener('wheel',(evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
