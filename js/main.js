var map = L.map('map').setView([28.254337, 83.976034], 20);

L.tileLayer('https://kaditya97.github.io/wrc-tiles/{z}/{x}/{y}.png', {
    attribution: '&copy; kaditya97'
}).addTo(map);