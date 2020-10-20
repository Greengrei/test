// //Burger
// $(document).ready(function () {
// 	$('.header__menu-burger').on('click', function () {
// 		$('.header__menu').slideToggle(300, function () {
// 			if ($(this).css('display') === "none") {
// 				$(this).removeAttr('style');
// 			}
// 		});
// 	});
// });

// ///TAB menu
// $(document).ready(function () { // Ждём загрузки страницы
// 	$(".tabs_menu li").click(function () { // Событие нажатия на элемент меню вкладок
// 		if (!$(this).hasClass("active")) { // Проверка, не нажали ли мы на уже активный пункт
// 			var i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)
// 			$(".tabs_menu li.active").removeClass("active"); // Удаляем активный класс у прошлого пункта меню
// 			$(".tabs .active").hide().removeClass(
// 				"active"); // Скрываем и удаляем активный класс у прошлого контейнера с содержимым
// 			$(this).addClass("active"); // Добавляем нажатому пункту меню активный класс
// 			$($(".tabs").children(".all__slider")[i]).fadeIn(1000).addClass(
// 				"active"); // Показываем и добавляем активный класс соответствующему контейнеру
// 			}	
// 			$(".all__slider-box-one").slick('reinit'); // для табов, корректное отображение slick-слайдера 		
// 			$(".all__slider-box-tue").slick('reinit');// для табов, корректное отображение slick-слайдера 		
// 			$(".all__slider-box-frie").slick('reinit');// для табов, корректное отображение slick-слайдера 		
// 			$(".all__slider-box-fou").slick('reinit');// для табов, корректное отображение slick-слайдера 		
// 		});	
// });

// $(window).ready(function () {
// 	$('.all__slider-box').slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		arrows: true,
// 		nextArrow: '<img class="slider-arrows next" src="img/next.svg" alt="arrows-right">',
// 		prevArrow: '<img class="slider-arrows prev" src="img/prev.svg" alt="arrows-left">',
// 		responsive: [{
// 			breakpoint: 760,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				infinite: true,
// 			}
// 		}]
// 	});
// });

// $(window).ready(function () {
// 	$('.all__slider-box-one').slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		//autoplay: true,
// 		arrows: true,
// 		nextArrow: '<img class="slider-arrows next" src="img/next.svg" alt="arrows-right">',
// 		prevArrow: '<img class="slider-arrows prev" src="img/prev.svg" alt="arrows-left">',
// 		responsive: [{
// 			breakpoint: 760,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				infinite: true,
// 			}
// 		}]
// 	});
// });

// $(window).ready(function () {
// 	$('.all__slider-box-tue').slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		//autoplay: true,
// 		arrows: true,
// 		nextArrow: '<img class="slider-arrows next" src="img/next.svg" alt="arrows-right">',
// 		prevArrow: '<img class="slider-arrows prev" src="img/prev.svg" alt="arrows-left">',
// 		responsive: [{
// 			breakpoint: 760,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				infinite: true,
// 			}
// 		}]
// 	});
// });

// $(window).ready(function () {
// 	$('.all__slider-box-frie').slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		//autoplay: true,
// 		arrows: true,
// 		nextArrow: '<img class="slider-arrows next" src="img/next.svg" alt="arrows-right">',
// 		prevArrow: '<img class="slider-arrows prev" src="img/prev.svg" alt="arrows-left">',
// 		responsive: [{
// 			breakpoint: 760,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				infinite: true,
// 			}
// 		}]
// 	});
// });

// $(window).ready(function () {
// 	$('.all__slider-box-fou').slick({
// 		slidesToShow: 4,
// 		slidesToScroll: 1,
// 		infinite: true,
// 		//autoplay: true,
// 		arrows: true,
// 		nextArrow: '<img class="slider-arrows next" src="img/next.svg" alt="arrows-right">',
// 		prevArrow: '<img class="slider-arrows prev" src="img/prev.svg" alt="arrows-left">',
// 		responsive: [{
// 			breakpoint: 760,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 				infinite: true,
// 			}
// 		}]
// 	});
// });

// // Popup
// $('.open-popup-link1').magnificPopup({
// 	type: 'inline',

// 	callbacks: {
// 		open: function () {

// 			$('.white').on('click', function (event) {
// 				event.preventDefault();
// 				$.magnificPopup.close();
// 			});
// 		}
// 	},
// });

// $('.privacy').magnificPopup({
// 	type: 'inline',

// 	callbacks: {
// 		open: function () {

// 			$('.white').on('click', function (event) {
// 				event.preventDefault();
// 				$.magnificPopup.close();
// 			});
// 		}
// 	},
// });

// $('.terms').magnificPopup({
// 	type: 'inline',

// 	callbacks: {
// 		open: function () {

// 			$('.white').on('click', function (event) {
// 				event.preventDefault();
// 				$.magnificPopup.close();
// 			});
// 		}
// 	},
// });





















		// $(document).ready(function () {
		// 	$("#team__button").click(function () {
		// 		$(".team__item").css({
		// 			height: "100%"
		// 		});
		// 	});
		// });

		// $(document).ready(function () {
		// 	$(".testimonials__botton").click(function () {
		// 		$(".testimonials__box").css({
		// 			height: "100%"
		// 		});
		// 	});
		// });

		// $(document).ready(function () {
		// 	$(".blog__botton").click(function () {
		// 		$(".blog__box").css({
		// 			height: "100%"
		// 		});
		// 	});
		// });


		// // accordion
		// $(document).ready(function () {
		// 	$('.faq__left-h3').click(function () {
		// 		$(this).next().slideToggle(500);

		// 		if ($(this).find('.faq__left-img .bottom').css('display') == 'none') {
		// 			$(this).find('.faq__left-img .bottom').css('display', 'block');
		// 			$(this).find('.faq__left-img .top').css('display', 'none');
		// 		} else {
		// 			$(this).find('.faq__left-img .bottom').css('display', 'none');
		// 			$(this).find('.faq__left-img .top').css('display', 'block');
		// 		}
		// 	});
		// });


		// // Burger
		// $(document).ready(function () {
		// 	$('.header__menu-burger').on('click', function () {
		// 		$('.header__menu').slideToggle(300, function () {
		// 			if ($(this).css('display') === "none") {
		// 				$(this).removeAttr('style');
		// 			}
		// 		});
		// 	});
		// });


		// //Animations 
		// $(document).ready(function () {
		// 	const controller = new ScrollMagic.Controller({
		// 		paused: true
		// 	});
		// 	var logo = new TimelineMax({});
		// 	logo.from('.header__logo', 10, {
		// 		top: '-125px',
		// 		opacity: 0,
		// 	});
		// 	var scene = new ScrollMagic.Scene({
		// 		triggerElement: ".header__logo",
		// 		triggerHook: 0.5,
		// 	}).setTween(logo).addTo(controller);
		// 	let head = new TimelineMax();
		// 	head.fromTo('.menu__item', 1, {
		// 			y: -100,
		// 			opacity: 0
		// 		}, {
		// 			y: 0,
		// 			opacity: 1
		// 		})
		// 		.fromTo('.header__menu-bottom>h3', 1, {
		// 			x: -500,
		// 			opacity: 0.2
		// 		}, {
		// 			x: 0,
		// 			opacity: 1
		// 		})
		// 		.fromTo('.header__menu-bottom>h1', 1, {
		// 			x: -500,
		// 			opacity: 0.2
		// 		}, {
		// 			x: 0,
		// 			opacity: 1,
		// 			duration: 1
		// 		})
		// 		.fromTo('.header__menu-bottom>h2', 1, {
		// 			x: -500,
		// 			opacity: 0.2
		// 		}, {
		// 			x: 0,
		// 			opacity: 1,
		// 			duration: 2
		// 		})
		// });


		// const controller = new ScrollMagic.Controller({
		// 	paused: true
		// });

		// const q = new TimelineMax({});
		// q.from('.info__item', 2, {
		// 	rotation: '-325deg',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// const sceneq = new ScrollMagic.Scene({
		// 		triggerElement: ".header__block-button",
		// 		triggerHook: 0.5,
		// 	})
		// 	.setTween(q)
		// 	.addTo(controller);



		// const controllerw = new ScrollMagic.Controller({
		// 	paused: true
		// });

		// const w = new TimelineMax({});
		// w.from('.video__left', 2, {
		// 	x: '-325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// w.from('.video__right-tittle>p', 0.5, {
		// 	x: '325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// w.from('.video__right-tittle>h4', 1, {
		// 	x: '325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// w.from('.video__right-tittle>h5', 1.5, {
		// 	x: '325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// w.from('.video__right-tittle>h6', 2, {
		// 	x: '325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });

		// const scenew = new ScrollMagic.Scene({
		// 		triggerElement: "#about",
		// 		triggerHook: 1,
		// 	})
		// 	// .addIndicators({
		// 	// 	colorTrigger: "green",
		// 	// 	colorStart: "blue",
		// 	// 	colorEnd: "red",
		// 	// 	indent: 5
		// 	// })
		// 	.setTween(w)
		// 	.addTo(controller);

		// const controllere = new ScrollMagic.Controller({
		// 	paused: true
		// });



		// const e = new TimelineMax({});
		// e.from('.service__left-block', 2, {
		// 	x: '-325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });

		// const scenee = new ScrollMagic.Scene({
		// 		triggerElement: ".service__h4",
		// 		triggerHook: 1,
		// 	})
		// 	.setTween(e)
		// 	.addTo(controller);


		// const r = new TimelineMax({});
		// r.from('.fatures__left>h6', 1, {
		// 	x: '-325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// r.from('.fatures__left>h4', 1, {
		// 	x: '-325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// r.from('.fatures__left>p', 1, {
		// 	x: '-325px',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// r.from('.img__bottom', 2, {
		// 	scale: '-2',
		// 	rotation: '145deg',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// const scener = new ScrollMagic.Scene({
		// 		triggerElement: ".fatures",
		// 		triggerHook: 1,
		// 	})
		// 	.setTween(r)
		// 	.addTo(controller);



		// const t = new TimelineMax({});
		// t.from('.img__right', 2, {
		// 	rotation: '-245deg',
		// 	scale: '2',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });

		// const scenet = new ScrollMagic.Scene({
		// 		triggerElement: ".timeTable",
		// 		triggerHook: 1,
		// 	})
		// 	.setTween(t)
		// 	.addTo(controller);




		// const y = new TimelineMax({});
		// y.from('.red__img', 2, {
		// 	rotation: '-345deg',
		// 	scale: '3',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });

		// const sceney = new ScrollMagic.Scene({
		// 		triggerElement: ".red",
		// 		triggerHook: 1,
		// 	})
		// 	.setTween(y)
		// 	.addTo(controller);



		// const u = new TimelineMax({});
		// u.from('.contactForm__box-left', 2, {
		// 	rotation: '345deg',
		// 	x: '-900px',
		// 	scale: '2',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });
		// u.from('.contactForm__box-right', 2, {
		// 	rotation: '-345deg',
		// 	x: '900px',
		// 	scale: '2',
		// 	opacity: 0,
		// 	ease: Power4.easeOut
		// });


		// const sceneu = new ScrollMagic.Scene({
		// 		triggerElement: ".contactForm",
		// 		triggerHook: 1,
		// 	})
		// 	.setTween(u)
		// 	.addTo(controller);