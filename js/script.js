// 1) Сделать класс DomElement, который содержит свойства
//   - selector, 
//   - height, 
//   - width, 
//   - bg, 
//   - fontSize

// содержит метод, который создает элемент на странице в зависимости от условия:  
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector  начинается с решетки # то создаем параграф с id
// пример:
// если передана строка '.block', то функция конструктор создает элемент с class="block"
// если передана строка '#best', то функция конструктор создает элемент с id =best"

// с помощью cssText задавать стили: 
//   - высотой - height,
//   - шириной - width, 
//   - background - bg
//   - размер текста fontSize 
// внутрь созданного блока записывать любой текст. Метод записи может быть любым.

// 2) Создать новый объект на основе класса DomElement

// 3) Вызвать его метод чтобы получить элемент на странице

'use strict'
let isNumder = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};

function DomElement (selector, height, width, bg, fontSize){
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
};

DomElement.prototype.createElement = function (){
   let newSelector = prompt('Введите имя стелектора Selector (если вы начнёте запись с "." тогда создаться div. А если с "#" тогда создаться p)');
   let newHeight = prompt('Введите значение высоты элемента (Height)');
      while (!isNumder(newHeight)){
         newHeight = prompt('Введите значение высоты элемента (Height)');
      }
   let newWidth = prompt('Введите значение ширины элемента (Width)');
      while (!isNumder(newWidth)){
         newWidth = prompt('Введите значение ширины элемента (Width)');
      }
   let newBackground = prompt('Введите значение цвета для фона (Background-color)');
   let newFontSize = prompt('Введите значение высоты для шрифта (Font-Size)');
      while (!isNumder(newFontSize)){
         newFontSize = prompt('Введите значение высоты для шрифта (Font-Size)');
      }
   let newDomElement = new DomElement (newSelector, newHeight, newWidth, newBackground, newFontSize);
   let firstElemSelector = newDomElement.selector.substr(0, 1);
   
   if (firstElemSelector === '.'){
      let div = document.createElement('div');
      div.classList.add(newDomElement.selector.substr(1));
      console.log('div: ', div);
   } else if (firstElemSelector === '#'){
      let p = document.createElement('p');
      p.setAttribute( "id", newDomElement.selector.substr(1));
      console.log('p: ', p);
   }
};

DomElement.prototype.createElement();
