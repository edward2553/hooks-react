export const randomNumber = () => Math.random() * (10 - 1) + 1;

export const generateId = () => new Date().getTime() * randomNumber();