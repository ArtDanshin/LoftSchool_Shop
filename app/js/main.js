var loftShop = (function () {

	// Инициализация
	var init = function () {
		_selectSort();
		_sliderPrice();
		_accordeon();
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
		$( ".filter-price" ).slider({
			range: true,
	 		min: 0,
			max: 500,
			values: [ 75, 300 ]
		});
	}

	// Аккордеон
	var _accordeon = function () {
		$('.filter-item-head__title').on('click', function(event) {
			event.preventDefault();
			var $this = $(this),
				item = $this.closest('.filters__item'),
				list = $this.closest('.filters'),
				content = item.find('.filters-item__body'),
				duration = 300;

			if (!item.hasClass('filters__item_active')) {
				item.addClass('filters__item_active');
				content.stop(true, true).slideDown(duration)
			} else {
				item.removeClass('filters__item_active');
				content.stop(true, true).slideUp(duration)
			}
		})
	}

	return {
		init: init
	}
})();

loftShop.init();