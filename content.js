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
    url: 'https://webflow.com/'
  });
  chrome.tabs.create({
    url: 'https://codepen.io'
  });
  chrome.tabs.create({
    url: 'https://github.com'
  });
});

$('.item-design').click(function() {
  chrome.tabs.create({
    url: 'https://uplabs.com'
  });
  chrome.tabs.create({
    url: 'https://dribble.com'
  });
  chrome.tabs.create({
    url: 'https://www.awwwards.com/'
  });
  chrome.tabs.create({
    url: 'https://www.pinterest.com/'
  });
  chrome.tabs.create({
    url: 'https://coolors.co/app'
  });
  chrome.tabs.create({
    url: 'https://www.materialui.co/colors'
  });
  chrome.tabs.create({
    url: 'https://material.io/resources/icons/?style=baseline'
  });
  chrome.tabs.create({
    url: 'https://figma.com'
  });
});

$('.item-music').click(function() {
  chrome.tabs.create({
    url: 'https://open.spotify.com'
  });
  chrome.tabs.create({
    url: 'https://www.bandcamp.com/'
  });
  chrome.tabs.create({
    url: 'https://www.ujomusic.com/'
  });
  chrome.tabs.create({
    url: 'https://soundcloud.com'
  });
});

$('.item-entertainment').click(function() {
  chrome.tabs.create({
    url: 'https://twitch.com'
  });
  chrome.tabs.create({
    url: 'https://www.netflix.com/'
  });
  chrome.tabs.create({
    url: 'https://www.hulu.com/'
  });
  chrome.tabs.create({
    url: 'https://youtube.com'
  });
});

$('.item-social').click(function() {
  chrome.tabs.create({
    url: 'https://instagram.com'
  });
  chrome.tabs.create({
    url: 'https://www.facebook.com/'
  });
  chrome.tabs.create({
    url: 'https://twitter.com'
  });
});

$('.item-jobs').click(function() {
  chrome.tabs.create({
    url: 'https://indeed.com'
  });
  chrome.tabs.create({
    url: 'https://www.glassdoor.com/'
  });
  chrome.tabs.create({
    url: 'https://www.wayup.com/'
  });
  chrome.tabs.create({
    url: 'https://www.google.com/search?q=user+experience&ibp=htl;jobs#fpstate=tldetail&htidocid=B-0kVG4FiJoY_hX1AAAAAA%3D%3D&htivrt=jobs'
  });
  chrome.tabs.create({
    url: 'https://depaul.joinhandshake.com'
  });
});

$('.item-news').click(function() {
  chrome.tabs.create({
    url: 'https://cnn.com'
  });
  chrome.tabs.create({
    url: 'https://nytimes.com'
  });
  chrome.tabs.create({
    url: 'https://www.news.google.com/'
  });
  chrome.tabs.create({
    url: 'https://www.wsj.com/'
  });
  chrome.tabs.create({
    url: 'http://msnbc.com'
  });
  chrome.tabs.create({
    url: 'https://abcnews.go.com/'
  });
});

$('.item-communication').click(function() {
  chrome.tabs.create({
    url: 'https://slack.com'
  });
  chrome.tabs.create({
    url: 'https://discordapp.com/'
  });
  chrome.tabs.create({
    url: 'https://messenger.com/'
  });
  chrome.tabs.create({
    url: 'https://mail.google.com'
  });
});

$('.item-depaul').click(function() {
  chrome.tabs.create({
    url: 'https://campusconnect.depaul.edu/psp/CSPRD92/?cmd=login'
  });
  chrome.tabs.create({
    url: 'https://depaul.starfishsolutions.com/starfish-ops'
  });
  chrome.tabs.create({
    url: 'https://depaul.joinhandshake.com/'
  });
  chrome.tabs.create({
    url: 'https://d2l.depaul.edu/d2l/home'
  });
});