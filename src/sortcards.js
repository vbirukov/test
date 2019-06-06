let sortcards = (by, direction, data) => {
    if (by == 'price') {
        if (direction == 'up') {
            data.sort(SortByPriceUp);
        } else {
            data.sort(sortByPriceDown);
        }
    } else if (by == 'rooms') {
        if (direction == 'up') {
            data.sort(sortByRoomsUp);
        } else {
            data.sort(sortByRoomsDown);
        }
    }
}

let sortByPriceDown = (a, b) => {
    console.log(`comparing: ${a.price} and ${b.price}`);
    if (parseInt(a.price) > parseInt(b.price)) {
        return 1
    } else if (parseInt(b.price) > parseInt(a.price)) {
        return -1
    }
}

let SortByPriceUp = (a, b) => {
    if (parseInt(a.price) > parseInt(b.price)) {
        return -1
    } else if (parseInt(b.price) > parseInt(a.price)) {
        return 1
    }
}

let sortByRoomsDown = (a, b) => {
    console.log(`comparing: ${a.rooms} and ${b.rooms}`);
    if (parseInt(a.rooms) > parseInt(b.rooms)) {
        return 1
    } else if (parseInt(b.rooms) > parseInt(a.rooms)) {
        return -1
    }
}

let sortByRoomsUp = (a, b) => {
    if (parseInt(a.rooms) > parseInt(b.rooms)) {
        return -1
    } else if (parseInt(b.rooms) > parseInt(a.rooms)) {
        return 1
    }
}

export default sortcards;