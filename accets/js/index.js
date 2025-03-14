const dropdownLink = document.querySelector('.dropdown > a');
const icon = document.querySelector('#myIcon');

dropdownLink.addEventListener('mouseover', function() {
  icon.classList.remove('ti-angle-down');
  icon.classList.add('ti-angle-up');
});

dropdownLink.addEventListener('mouseout', function() {
  icon.classList.remove('ti-angle-up');
  icon.classList.add('ti-angle-down');
});
