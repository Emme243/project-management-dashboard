export const requiredMsg = (filed: string) => `${filed} is required`;
export const invalidEmailMsg = () => 'This is not a valid email';
export const minLengthMsg = (length: number) => `At least ${length} characters`;
export const maxLengthMsg = (length: number) => `Not longer than ${length} characters`;
export const notMatchingPasswordMsg = () => 'Passwords must match';
export const onlyLettersMsg = () => 'Only alphabets are allowed for this field';

export const onlyLettersRegex = /^[aA-zZÁÉÍÓÚÑáéíóúñ\s]+$/;
