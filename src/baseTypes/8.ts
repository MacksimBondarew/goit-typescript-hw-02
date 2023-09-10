/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type gender = "male" | "female"

let myGender: gender = "male";
myGender = "female";

export {};
