// you can enter your JS here!
var direction = "right",
	carouselOnTheMove = false,
	hotelImageSize = 840,
	pagination,
	carousel = (function() {
		var MINOR_VALUE = -10920,
			MAJOR_VALUE = 0,
			outOfBoundaries = function(value, direction){
				if ( (direction === "right" && value <= MINOR_VALUE) || (direction === "left" && value >= MAJOR_VALUE) ) {
					return true;
				} else {
					return false;
				}
			},
			setCooldown = function(){
				carouselOnTheMove = true;
				setTimeout(function(){
					carouselOnTheMove = false;
				},450);
			},
			setPagination = function(){
				clearInterval(pagination);
				pagination = setInterval(function(){
					configureCarouselClick({});
				},5000);
			},
			configureCarouselClick = function(event){
				if (!carouselOnTheMove) {
					direction = (event && event.target && event.target.className === "prev-icon") ? "left" : "right";
					$( ".carousel-list" ).css("left", function(index, currValue){
						currValue = Number(currValue.slice(0,-2));
						if (outOfBoundaries(currValue, direction)) {
							if (direction === "left") {
								return (MINOR_VALUE + "px");
							} else {
								return (MAJOR_VALUE + "px");
							}
						} else {
							return ((direction === "left") ? (currValue + hotelImageSize) + "px" : (currValue - hotelImageSize) + "px");
						}
					});
					setCooldown();
				};
			};

			// Event listeners 
			$( ".prev" ).click(function(event) {
				configureCarouselClick(event);
			}); 

			$( ".next" ).click(function(event) {
				configureCarouselClick(event);
			});

			$( ".one_photo" ).click(function(a){
				var dataIndex = this.getAttribute("data-index") - 1;
				var oldPosition = $( ".carousel-list" ).css("left").slice(0,-2);
				var newPosition = -1 * (dataIndex * hotelImageSize);
				$( ".carousel-list" ).css("left", newPosition);
				setPagination();
			});

			// Adding descriptions to span
			$( ".photo-description" ).each(function(k,v){
				var altDescription = v.nextSibling.getAttribute('alt');
				v.innerHTML = altDescription;
			});

			// Setting pagination for the first time
			pagination = setInterval(function(){
				configureCarouselClick({});
			},5000);
	})();