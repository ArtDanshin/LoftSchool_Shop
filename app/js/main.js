var loftShop = (function () {

	// Инициализация
	var init = function () {
		$(".sort-block__select").select2({
			minimumResultsForSearch: Infinity
		});
	};

	// Прослушивание событий
	var _setUpListners = function () {
		
	};

	return {
		init: init
	}
})();

loftShop.init();