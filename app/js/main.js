var loftShop = (function () {

	// Инициализация
	var init = function () {
		_selectSort();
		_sliderPrice();
		_accordeon();
		_styleCat();
		_slideShow();
		_textColumn();
		_resetCheck();
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
		$( ".filter-price__slider" ).slider({
			range: true,
	 		min: 0,
			max: 10000,
			values: [ 750, 5000 ],
			slide: function( event, ui ) {
				$( "#priceIn" ).val( ui.values[ 0 ]);
				$( "#priceOut" ).val( ui.values[ 1 ]);
			}
		});
			$( "#priceIn" ).val( $( ".filter-price__slider" ).slider( "values", 0 ) );
			$( "#priceOut" ).val( $( ".filter-price__slider" ).slider( "values", 1 ) );
	}

	// Сброс фильтров
	var _resetCheck = function () {
		$('.filters-check-reset').on('click', function(event) {
			event.preventDefault();
			var $this = $(this),
				item = $this.closest('.filters-item__body');
				check = item.find('.filter-check__point')

				check.attr('checked', false);
		})
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

	// Слайдшоу
	var _slideShow = function () {
		$('.product-slide__link').on('click', function(event){
			event.preventDefault();

			var $this = $(this),
				item = $this.closest('.product-slide__img'),
				conteiner = $this.closest('.product__wrap-img-artic'),
				display = conteiner.find('.product__wrap-img-big'),
				path = item.find('.product-slide-img').attr('src'),
				duration = 300;

			if (!item.hasClass('active')) {
				item.addClass('active').siblings().removeClass('active');

				display.find('.product-slide-img-current').fadeOut('duration', function() {
					$(this).attr('src', path).fadeIn(duration);
				});
			}
		})
	}

	// Columnizer

	var _textColumn = function () {
		$('.info-page__text').columnize({
			columns: 2,
			width: 20
		});

	}

	return {
		init: init
	}
})();

loftShop.init();