$(window).ready(function() {
    console.log('Launcher extention ready');
});

// external js: packery.pkgd.js, jquery-ui-draggable.js

// initialize Packery
var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    // columnWidth helps with drop positioning
    columnWidth: 100,
    rowHeight: 125,
    gutter: 45
});
  
// make all items draggable
var $items = $grid.find('.grid-item').draggable();
// bind drag events to Packery
$grid.packery( 'bindUIDraggableEvents', $items );

$('.item-development').click(function() {
  chrome.tabs.create({
    url: 'https://github.com'
  });
  chrome.tabs.create({
    url: 'https://codepen.io'
  });
  chrome.tabs.create({
    url: 'https://pinterest.com'
  });
  //window.open('https://github.com');
  //window.open('https://codepen.io/');
  //window.open('https://cdnjs.com/libraries/gsap');
  //window.open('https://code.jquery.com/');
  //window.open('https://flutter.dev/docs/development/ui/widgets-intro');
});

$('.item-design').click(function() {
    window.open('https://figma.com');
    window.open('https://coolors.co/app');
    window.open('https://https://www.materialui.co/colors');
    window.open('https://material.io/resources/icons/?style=baseline');
    window.open('https://uplabs.com');
    window.open('https://dribble.com');
    window.open('https://www.awwwards.com/');
    window.open('https://www.pinterest.com/');
});

$('.item-music').click(function() {
  window.open('https://open.spotify.com');
  window.open('https://soundcloud.com');
  window.open('https://bandcamp.com');
  window.open('https://ujomusic.com');
});

$('.item-entertainment').click(function() {
  window.open('https://youtube.com');
  window.open('https://twitch.com');
  window.open('https://netflix.com');
  window.open('https://hulu.com');
});

$('.item-social').click(function() {
  window.open('https://twitter.com');
  window.open('https://instagram.com');
  window.open('https://facebook.com');
});

$('.item-jobs').click(function() {
  window.open('https://depaul.joinhandshake.com/');
  window.open('https://indeed.com');
  window.open('https://glassdoor.com');
  window.open('https://wayup.com');
  window.open('https://www.google.com/search?q=user+experience&ibp=htl;jobs#fpstate=tldetail&htidocid=B-0kVG4FiJoY_hX1AAAAAA%3D%3D&htivrt=jobs');
  window.open('https://depaul.joinhandshake.com/');
});

$('.item-news').click(function() {
  window.open('https://cnn.com');
  window.open('https://nytimes.com');
  window.open('https://news.google.com');
  window.open('https://wsj.com');
  window.open('https://msnbc.com');
  window.open('https://abcnews.go.com');
});

$('.item-communication').click(function() {
  window.open('https://mail.google.com');
  window.open('https://slack.com');
  window.open('https://discordapp.com');
  window.open('https://messenger.com');
});

$('.item-depaul').click(function() {
  window.open('https://d2l.depaul.edu/d2l/home');
  window.open('https://campusconnect.depaul.edu/psp/CSPRD92/?cmd=login');
  window.open('https://depaul.starfishsolutions.com/starfish-ops/instructor/serviceCatalog.html?tenantId=1022#/');
});