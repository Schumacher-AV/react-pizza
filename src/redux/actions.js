export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

/*---*/

export const addToBasketAC = itemId => ({
    type: ADD_TO_BASKET,
    id: itemId,
});
export const removeFromBasketAC = (itemId, cost, count) => ({
    type: REMOVE_FROM_BASKET,
    id: itemId,
    cost: cost,
    count: count,
});