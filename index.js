// Создаем пустой массив
let numbers = [];

// Заполняем массив целыми числами от -10 до 10
for (let i = -10; i <= 10; i++) {
  numbers.push(i);
}

// Удаляем все отрицательные числа из массива
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
  }
}

// Возводим каждое число в квадрат
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2;
}

// Сортируем числа в порядке убывания
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}

// Выводим полученный массив в консоль
console.log(numbers);
