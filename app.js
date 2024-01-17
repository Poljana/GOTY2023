
const sidetoggle = document.getElementById('sidebartoggle');
const sidebar = document.querySelector('sidebar');

sidetoggle.addEventListener('mouseover', function() {

    sidebar.classList.remove("hidden");

});

sidetoggle.addEventListener('mouseout', function() {

    sidebar.classList.add("hidden");

});

sidebar.addEventListener('mouseover', function() {

    sidebar.classList.remove("hidden");

});

sidebar.addEventListener('mouseout', function() {

    sidebar.classList.add("hidden");

});