const menuBtn = document.getElementById('menu-btn');
      const menu = document.getElementById('menu');
      const closeBtn = document.getElementById('close-btn');
      const dropdownBtns = document.querySelectorAll('.dropdown-btn');

      menuBtn.addEventListener('click', function() {
        menu.classList.toggle('open');
        menuBtn.classList.toggle('open');
      });

      closeBtn.addEventListener('click', function() {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
      });

      dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const dropdown = this.parentElement;
          dropdown.classList.toggle('open');
          const icon = dropdown.querySelector('.dropdown-icon');
          if (dropdown.classList.contains('open')) {
            icon.src = 'images/icon-arrow-up.svg';
          } else {
            icon.src = 'images/icon-arrow-down.svg';
          }
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
        const featuresBtn = document.getElementById('features-btn');
        const featuresDropdown = document.getElementById('features-dropdown');
  
        featuresBtn.addEventListener('click', function() {
          featuresDropdown.classList.toggle('hidden');
        });
      });
    
      document.addEventListener('DOMContentLoaded', function() {
        const featuresBtn = document.getElementById('Company-btn');
        const featuresDropdown = document.getElementById('Company-dropdown');
  
        featuresBtn.addEventListener('click', function() {
          featuresDropdown.classList.toggle('hidden');
        });
      });