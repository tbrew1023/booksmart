$(window).ready(function() {
    console.log('the window is ready');
});

// external js: packery.pkgd.js, jquery-ui-draggable.js

// initialize Packery
var $grid = $('.grid').packery({
    itemSelector: '.grid-item',
    // columnWidth helps with drop positioning
    columnWidth: 200
  });
  
  // make all items draggable
  var $items = $grid.find('.grid-item').draggable();
  // bind drag events to Packery
  $grid.packery( 'bindUIDraggableEvents', $items );