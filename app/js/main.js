var loftShop = (function () {

	// Инициализация
	var init = function () {
		_selectSort();
		_sliderPrice();
	};

	// Прослушивание событий
	var _setUpListners = function () {
		
	};

	// Select2 - Селектор сориторовки
	var _selectSort = function () {
		$(".sort-block__select").select2({
			minimumResultsForSearch: Infinity
		});
	}

	// jQuery UI Slider - Слайдер фильтра цены
	var _sliderPrice = function () {
		console.log('I am hero')
		$( ".filter-price" ).slider({
			range: true,
	 		min: 0,
			max: 500,
			values: [ 75, 300 ]
		});
	}

	return {
		init: init
	}
})();

loftShop.init();