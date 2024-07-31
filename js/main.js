// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});


function toggleDropdown(element) {
  const dropdown = element.parentElement;
  const content = dropdown.querySelector('.dropdown-content');
  dropdown.classList.toggle('open');
  if (dropdown.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + "px";
  } else {
      content.style.maxHeight = null;
  }
}

function selectLocation(location) {
  document.getElementById('selected-location').textContent = location;
  closeAllDropdowns();
}

function selectPrice(price) {
  document.getElementById('selected-price').textContent = price;
  closeAllDropdowns();
}

function selectType(type) {
  document.getElementById('selected-type').textContent = type;
  closeAllDropdowns();
}

function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
      const content = dropdown.querySelector('.dropdown-content');
      dropdown.classList.remove('open');
      content.style.maxHeight = null;
  });
}

document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
      closeAllDropdowns();
  }
});

// video open
function playVideo(event) {
    event.preventDefault();
    var videoContainer = document.getElementById('video-container');
    var thumbnail = document.getElementById('thumbnail');
    var playButton = document.querySelector('.play-button');
    var iframe = document.getElementById('video');

    // Установите URL видео (замените 'YOUR_VIDEO_URL' на реальный URL видео)
    var videoURL = "https://youtu.be/Dmhws_sBEic?si=maDxQH6TMh7mGa9-";
    iframe.src = videoURL;

    // Скрыть изображение и кнопку play
    thumbnail.classList.add('hidden');
    playButton.classList.add('hidden');

    // Показать контейнер с видео
    videoContainer.classList.remove('hidden');
    videoContainer.classList.add('visible');
}


document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      loop: true,
  });
});
