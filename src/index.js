import './main.scss';
import cards from './cards.js';
import renderCards from './renderCards'
import sortcards from './sortcards'

let top_show = 150;
let delay = 1000;
let cardsShift = 0;
let cardsDisplayed = [];


let renderLoadMoreButton = () => {
    $('<button>', {
        class: 'mainarea__searchResults__loadMore',
        id: 'loadMore',
        append: $('<p>', {
            class: 'mainarea__searchResults__loadMore__text',
            text: `Загрузить ещё ${20}`
        })
    }).appendTo('.mainarea__searchResults');
}

let loadMore = function() {
    $('#loadMore').on('click', function() {
        console.log(`click`);
        importcards(20);
        refreshCards(cardsDisplayed);
        addFiller();
    })
}

let addFiller = function() {
    $('<div>', {
        class: 'filler'
    }).appendTo(".mainarea__searchResults__cards");
}

let toTopVisibilityHandler = () => { $(window).scroll(function () {
    if ($(this).scrollTop() > top_show) $('#toTop').fadeIn();
    else $('#toTop').fadeOut();
    });
}

let toTopClickListener = () => {
    $('#toTop').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
}

let importcards = (number) => {
    var importedCards = cards.slice(cardsShift, number+cardsShift);
    cardsDisplayed = cardsDisplayed.concat(importedCards);
    cardsShift += number;
}

let refreshCards = () => {
    $(".mainarea__searchResults__cards").empty();
    renderCards(cardsDisplayed);
}

let triggerArrow = (el) => {
    if (el.hasClass('arrow-up')) {
        el.removeClass('arrow-up');
        el.addClass('arrow-down');
    }   else {
        el.removeClass('arrow-down');
        el.addClass('arrow-up');
    }
    if ($('.mainarea__searchResults__sortBy__button.active') != el) {
        $('.mainarea__searchResults__sortBy__button.active').removeClass('active');
        el.addClass('active');
    }
}

let sortByPriceListener = () => {
    $('#sortByPrice').on('click', function() {
        if ($('#sortByPrice').hasClass('arrow-up')) {
            sortcards('price', 'down', cardsDisplayed)
        }   else if ($('#sortByPrice').hasClass('arrow-down')) {
            sortcards('price', 'up', cardsDisplayed)
        }
        refreshCards();
        triggerArrow($('#sortByPrice'));
    });
}

let sortByRoomsListener = () => {
    $('#sortByRooms').on('click', function() {
        if ($('#sortByRooms').hasClass('arrow-up')) {
            sortcards('rooms', 'down', cardsDisplayed)
        }   else if ($('#sortByRooms').hasClass('arrow-down')) {
            sortcards('rooms', 'up', cardsDisplayed)
        }
        refreshCards();
        triggerArrow($('#sortByRooms'));
    })
}

let moblieMenuListener = () => {
    var mobileMenu = $('#mobileMenu');
    $('.header__mobileMenu__trigger').on('click', function() {
        mobileMenu.css('width', '250px');
    })
    $('.closebtn').on('click', function(ev) {
        mobileMenu.css('width', "0");
    })
}


$( document ).ready(function(){
    renderLoadMoreButton();
    loadMore();
    importcards(21);
    renderCards(cardsDisplayed);
    toTopVisibilityHandler();
    toTopClickListener();
    sortByPriceListener();
    sortByRoomsListener();
    moblieMenuListener();
})