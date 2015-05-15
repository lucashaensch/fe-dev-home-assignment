// you can enter your JS here!
MINOR_VALUE = -10920
MAJOR_VALUE = 0

var outOfBoundaries = function(value){
	if (value > 0 || value < -10920) {
		return true;
	} else {
		return false;
	}
}

var paginationDirection = function(value){
	if (value > 0) {
		return "left";
	} else {
		return "right";
	}
}

$( ".next" ).click(function() {
	$( ".carousel-list" ).css("left", function(index, currValue){
		currValue = currValue.slice(0,-2);
		if (outOfBoundaries(currValue)) {
			if (paginationDirection == "left") {
				return (MINOR_VALUE + "px");
			} else {
				return (MAJOR_VALUE + "px");
			}
		} else {
			return ((currValue - 840) + "px");
		}
	});
});

$( ".prev" ).click(function() {
	$( ".carousel-list" ).css("left", function(index, currValue){
		currValue = currValue.slice(0,-2);
		if (outOfBoundaries(currValue)) {
			if (paginationDirection == "left") {
				return (MINOR_VALUE + "px");
			} else {
				return (MAJOR_VALUE + "px");
			}
		} else {
			return ((currValue + 840) + "px");
		}
	});
});

