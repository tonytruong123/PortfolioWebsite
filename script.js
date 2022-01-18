
window.addEventListener("load", ()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // Page Loader
    document.querySelector(".page-loader").classList.add("fade-out");
    // After a while the circle loading effect will stop working
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    },1000);
});

//toggle-ball
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(":root,toggle");
ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    // apply for the ball too
    ball.classList.toggle("active");
    });

// Toggle navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

//activate them
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// Active Section
// why do we use hash in here?
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // activate the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection;
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});

// About Tabs

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    // if we choose the one is not active
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        // we will pick the current active one and remove the active status of it
        tabsContainer.querySelector(".active").classList.remove("active");
        // add active status to the option that we pick
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// portfolio Item details popup
document.addEventListener("click", (e)=> {
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        // when the detail about the project is pop up, the scroll will be 
        // automatically scrolled to the location (0,0) which is the top page
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    // we want to hide the scroll when the info of the project pop up
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

// now we want to make the close button to work
// we call the function because right now the main screen is the popup => close the current main screen
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//hide popup when clicking outside of it
// when we hit the screen randomly, we want to hide it
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("nav-inner")){
        document.querySelector(".home-text").classList.add("active");
        // we want to hide the scroll when the info of the project pop up
        document.body.classList.toggle("hide-scrolling");
        document.querySelector(".main").classList.toggle("fade-out");

    }
})




// how can we locate the right info when we want to open a project
// we locate them by the image
function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML=
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}


