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


// document.querySelectorAll('.filter-section h3').forEach(header => {
//   header.addEventListener('click', () => {
//       const section = header.parentElement;
//       section.classList.toggle('collapsed');
//       const content = section.querySelector('.filter-content');
//       if (section.classList.contains('collapsed')) {
//           content.style.display = 'none';
//       } else {
//           content.style.display = 'block';
//       }
//   });
// });


$(function() {
  $("#property-size-slider").slider({
      range: true,
      min: 0,
      max: 2400,
      values: [400, 2000],
      slide: function(event, ui) {
          $("#size-min").text(ui.values[0]);
          $("#size-max").text(ui.values[1]);
      }
  });
});

document.querySelectorAll('.filter-title').forEach(title => {
  title.addEventListener('click', () => {
      const filterItem = title.closest('.filter-item');
      const content = filterItem.querySelector('.filter-content') || filterItem.querySelector('.slider-container');
      const arrow = title.querySelector('.arrow');

      filterItem.classList.toggle('open');
      
      if (filterItem.classList.contains('open')) {
          content.style.height = `${content.scrollHeight}px`;
          arrow.style.transform = 'rotate(180deg)';

          content.addEventListener('transitionend', function handler() {
              content.style.height = 'auto';
              content.removeEventListener('transitionend', handler);
          });
      } else {
          content.style.height = `${content.scrollHeight}px`;

          content.offsetHeight;

          content.style.height = '0';
          arrow.style.transform = 'rotate(0deg)';
      }
  });
});





// Ensure content height is reset correctly on page load
window.addEventListener('load', () => {
  document.querySelectorAll('.filter-item.open .filter-content').forEach(content => {
      content.style.height = `${content.scrollHeight}px`;
  });
});



var slider1 = document.getElementById('property-size-1');
var slider2 = document.getElementById('property-size-2');

noUiSlider.create(slider1, {
    start: [600, 1800],
    connect: true,
    range: {
        'min': 0,
        'max': 2400
    },
    format: {
        to: function(value) {
            return Math.round(value);
        },
        from: function(value) {
            return Number(value);
        }
    }
});

noUiSlider.create(slider2, {
    start: [10000, 30000],
    connect: true,
    range: {
        'min': 0,
        'max': 40000
    },
    format: {
        to: function(value) {
            return Math.round(value);
        },
        from: function(value) {
            return Number(value);
        }
    }
});

slider1.noUiSlider.on('update', function(values, handle) {
    document.getElementById('slider-value-1').textContent = `Size: ${values[0]} - ${values[1]} sqft`;
});

slider2.noUiSlider.on('update', function(values, handle) {
    document.getElementById('slider-value-2').textContent = `Price: $${values[0]} - $${values[1]}`;
});



const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const BtnText = optionMenu.querySelector(".Btn-text");

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
});

options.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        BtnText.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});



// Get references to the elements
document.addEventListener('DOMContentLoaded', function () {
    const twoColumnsBtn = document.getElementById('two-columns');
    const oneColumnBtn = document.getElementById('one-column');
    const catalogRow = document.querySelector('.catalog-row');

    // По умолчанию две колонки
    twoColumnsBtn.addEventListener('click', function () {
        catalogRow.classList.add('two-columns');
        catalogRow.classList.remove('one-column');
        twoColumnsBtn.classList.add('active');
        oneColumnBtn.classList.remove('active');
    });

    // Одна колонка
    oneColumnBtn.addEventListener('click', function () {
        catalogRow.classList.add('one-column');
        catalogRow.classList.remove('two-columns');
        oneColumnBtn.classList.add('active');
        twoColumnsBtn.classList.remove('active');
    });
});


// tab
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  
  // Remove active class from all buttons
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show the current tab and add an active class to the clicked button
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



