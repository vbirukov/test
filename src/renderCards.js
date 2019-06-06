let renderCards = (cards) => {
    cards.forEach(function(element) {
        $('<div>', 
            {
                class: `mainarea__searchResults__cards__card ${element.status}`,
                append: $('<div>', 
                    {
                        class: 'mainarea__searchResults__cards__card__topBar',
                        append: $ ( '<div>', {
                            class: 'mainarea__searchResults__cards__card__topBar__left',
                            append: $( element.topBar.discount > 0 ? '<p>' : '', {
                                class: 'mainarea__searchResults__cards__card__topBar__left__discount',
                                text: `-${element.topBar.discount}%`
                            })
                            .add($( element.topBar.spcl ? '<p>' : '', {
                                class: 'mainarea__searchResults__cards__card__topBar__left__spcl',
                                text: element.topBar.spcl ? 'ШОК ЦЕНА' : ''
                            }))
                        }).
                        add($('<button>', {
                            class: 'mainarea__searchResults__cards__card__topBar__star',
                            append: $(element.topBar.marked ? '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>' : '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>')
                        }))
                    })
                .add($('<div>', 
                    {
                        class: 'mainarea__searchResults__cards__card__plan',
                        append: $('<img>', 
                        {
                            src: element.plan, 
                            class: 'mainarea__searchResults__cards__card__img'
                        })
                    }))
                .add($('<h2>', 
                    {
                        class: 'mainarea__searchResults__cards__card__name',
                        text: element.name
                    }))
                .add($('<div>', 
                    {
                        class: 'mainarea__searchResults__cards__card__details',
                        append: $('<div>', {
                            class: 'mainarea__searchResults__cards__card__details__finishing info-block',
                            append: $('<p>', 
                            {
                                class: 'info-block__text',
                                text: element.finishing
                            })
                        })
                        .add($('<div>', 
                            {
                                class: 'mainarea__searchResults__cards__card__details__space info-block',
                                append: $('<p>', {
                                    text: element.square,
                                    class: 'info-block__text',
                                })
                                .add($('<p>', {
                                    text: 'М',
                                    class: 'info-block__sign'
                                }))
                                .add($('<p>', {
                                    text: "площадь",
                                    class: 'info-block__label'
                                }))
                            }))
                        .add($('<div>', 
                            {
                                class: 'mainarea__searchResults__cards__card__details__floor info-block',
                                append: $('<p>', {
                                    text: element.floor,
                                    class: 'info-block__text'
                                })
                                .add($('<p>', {
                                    class: 'info-block__label',
                                    text: "этаж"
                                }))
                            }))
                    }))
                .add($('<h2>', 
                    {
                        class: 'mainarea__searchResults__cards__card__price',
                        text: element.price
                    }))
                .add($('<div>', 
                    {
                        class: 'mainarea__searchResults__cards__card__status',
                        append: $('<p>', 
                            {
                                class: 'mainarea__searchResults__cards__card__status__title',
                                text: element.status
                            })
                    }))
            }).appendTo(".mainarea__searchResults__cards");
    });
}

export default renderCards;