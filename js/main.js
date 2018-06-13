/*=========================================================
                        NAVBAR
/*=========================================================*/
const $navbar = document.querySelector('.navbar');
const $backToTop = document.querySelector('.back-to-top');


function showHideNav() {
    if (window.scrollY > 50) {
        // Show White Nav
        $navbar.classList.add('navbar-white');
        // // Show Back To Top Button
        $backToTop.classList.add('dblock');
    } else {
        // Hide White Nav
        $navbar.classList.remove('navbar-white');
        // Hide Back To Top Button
        $backToTop.classList.remove('dblock');
    }
}

window.addEventListener('scroll', showHideNav);
/*=========================================================
                            MENU
/*=========================================================*/
const $buttons = document.querySelectorAll('button[data-toggle]');
const $headers = document.querySelectorAll('.card-header');


// Looping and adding event listeners
$buttons.forEach(button => button.addEventListener('click', handleClick));

// Deleting Header card-active class
function resetHeaders() {
    $headers.forEach(header => header.classList.remove('card-active'));
}

// Toggle Active Class
function handleClick() {
    // Probably not the best way to select parent DIV
    header = this.parentElement.parentElement;
    // Check if closed is clicked
    if(!header.classList.contains('card-active')) {
        resetHeaders();
    }
    header.classList.toggle('card-active');
}

/*=========================================================
                        GOOGLE MAP
/*=========================================================*/
function initMap() {
    // Map Options
    let options = {
        zoom: 10,
        center: { lat: 40.733837, lng: -73.584152 }
    }

    // New Map
    let map = new google.maps.Map(document.getElementById('map'), options);

    // Add Marker
    let marker = new google.maps.Marker({
        position: { lat: 40.733837, lng: -73.584152 },
        map: map
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<p class="text-dark p-0 m-0">4130 Turkey Pen Road</p>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

