var loftShop = (function () {

	// Инициализация
	var init = function () {
		_selectSort();
		_sliderPrice();
		_accordeon();
		_styleCat();
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

	// Вид каталога
	var _styleCat = function () {
		$('.view-points__link').on('click', function(event) {
			event.preventDefault();

			var $this = $(this);

			if ($this.hasClass('view-points__link_all')) {
				$('.view-points__link').removeClass('view-points__link_tab-current').removeClass('view-points__link_list-current').removeClass('view-points__link_all-current');
				$('.view-points__link_all').addClass('view-points__link_all-current');
				$('.products').removeClass('products_tab').removeClass('products_all').removeClass('products_list');
				$('.products').addClass('products_all');
			}
			if ($this.hasClass('view-points__link_tab')) {
				$('.view-points__link').removeClass('view-points__link_tab-current').removeClass('view-points__link_list-current').removeClass('view-points__link_all-current');
				$('.view-points__link_tab').addClass('view-points__link_tab-current');
				$('.products').removeClass('products_tab').removeClass('products_all').removeClass('products_list');
				$('.products').addClass('products_tab');
			}
			if ($this.hasClass('view-points__link_list')) {
				$('.view-points__link').removeClass('view-points__link_tab-current').removeClass('view-points__link_list-current').removeClass('view-points__link_all-current');
				$('.view-points__link_list').addClass('view-points__link_list-current');
				$('.products').removeClass('products_tab').removeClass('products_all').removeClass('products_list');
				$('.products').addClass('products_list');
			}
		})
	}

	return {
		init: init
	}
})();

loftShop.init();