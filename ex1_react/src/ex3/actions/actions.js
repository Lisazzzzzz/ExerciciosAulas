export const DEPOSITAR = 'DEPOSITAR';
export const LEVANTAR = 'LEVANTAR';

export const depositar = (amount) => ({
    type: DEPOSITAR,
    amount,
});

export const levantar = (amount) => ({
    type: LEVANTAR,
    amount,
});