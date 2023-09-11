/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

const exampleOne: KeyValuePair<string, number> = {
  key: "one",
  value: 1,
}

export {};