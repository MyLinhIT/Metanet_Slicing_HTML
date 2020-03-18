function openNav() {
    document.getElementById("sidebar-menu").style.opacity = 1;
    document.getElementById("navbar-search").style.opacity = 1;
    document.getElementById("mySidenav").style.width = "80%";
}

function closeNav() {
    document.getElementById("sidebar-menu").style.opacity = 0;
    document.getElementById("navbar-search").style.opacity = 0;
    document.getElementById("mySidenav").style.width = "0";
}

function openSearch() {
    document.getElementsByClassName("box-search")[0].style.opacity = 1;
    document.getElementsByClassName("box-search")[0].style.width = "100%";
    document.getElementsByClassName("box-search__btn")[0].style.opacity = 1;
}

function closeSearch() {
    document.getElementsByClassName("box-search")[0].style.opacity = 0;
    document.getElementsByClassName("box-search")[0].style.width = 0;
    document.getElementsByClassName("box-search__btn")[0].style.opacity = 0;
}

function activeDot(index) {
    document.getElementsByClassName("stacked-cards__card")[index].click();
    const dots = document.getElementsByClassName(" container-dot__item");

    for (let i = 0; i < dots.length; i++) {
        if (i === index) {
            dots[i].className += " active ";
        }
        else {
            dots[i].classList.remove("active")
        }
    }

}

let slideIndex = 1;
currentDiv(slideIndex);

function currentDiv(n) {
    let slides = document.getElementsByClassName("wrap-slide__img");
    for (let i = 0; i < slides.length; i++) {
        if (i === n) {
            slides[i].style.display = "block";
        }
        else {
            slides[i].style.display = "none"
        }
    }
    const dots = document.getElementsByClassName(" container-dot__item");
    for (let i = 0; i < dots.length; i++) {
        if (i === n) {
            dots[i].className += " active ";
        }
        else {
            dots[i].classList.remove("active")
        }
    }
}

function openDay(evt, day) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(day).style.display = "block";
    evt.currentTarget.className += " active";
}

function activeNavbarItem(index) {
    const items = document.getElementsByClassName('navbar-content-item');
    for (let i = 0; i < items.length; i++) {
        if (i === index) {
            dots[i].className += " active ";
        }
        else {
            dots[i].classList.remove("active")
        }
    }

}
