/// <reference path="./global.d.ts" />

// @ts-check

export function cookingStatus(timer) {
    if (timer == 0) {
        return 'Lasagna is done.'
    }
    else if (timer > 0) {
        return 'Not done, please wait.'
    }
    return 'You forgot to set the timer.'
}

export function preparationTime(layers, time = 2) {
    return layers.length * time;
}

export function quantities(layers = []) {
    let noodles = 0;
    let sauce = 0;

    for (var i =0; i<= layers.length; i++) {
        if (layers[i] == 'noodles') {
            noodles += 50;
        }
        else if (layers[i] == 'sauce') {
            sauce += 0.2;
        }
    }
    let result = {
        'noodles': noodles,
        'sauce': sauce
    }
    return result;
}

export function addSecretIngredient(friend, mine) {
    mine.push(friend[friend.length-1]);
}

export function scaleRecipe(recipe, portion) {
    let scaledRecipe = {};
    let factor = portion/2;
    for (const item in recipe) {
        scaledRecipe[item] = recipe[item] * factor;
    }
    return scaledRecipe;

}