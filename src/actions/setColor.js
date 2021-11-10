import { MODE_DEFAULT, MODE_GREEN, MODE_BLUE, MODE_RED } from "../constants";

export const actionSetDefault = () =>({
    type: MODE_DEFAULT
});

export const actionSetGreen = () =>({
    type: MODE_GREEN
});

export const actionSetBlue = () =>({
    type: MODE_BLUE
});

export const actionSetRed = () =>({
    type: MODE_RED
});