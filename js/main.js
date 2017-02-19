jQuery(document).ready(function($) {
	var $grid = $('.portfolio-items').isotope({
	  itemSelector: '.portfolio-item',
	  layoutMode: 'fitRows'
	});
	// filter functions
	var filterFns = {
	  // show if name ends with -ium
	  ium: function() {
	    var name = $(this).find('.name').text();
	    return name.match( /ium$/ );
	  }
	};
	// bind filter button click
	$('.portfolio-filter').on( 'click', '.categories', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue = filterFns[ filterValue ] || filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.portfolio-filter').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', '.categories', function() {
	    $buttonGroup.find('.active').removeClass('active');
	    $( this ).addClass('active');
	  });
	});
});	