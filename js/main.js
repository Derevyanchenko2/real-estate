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
