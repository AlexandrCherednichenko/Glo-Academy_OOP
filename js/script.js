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
}

DomElement.prototype.createElement = function (){
   let newSelector = prompt('Введите имя стелектора Selector (если вы начнёте запись с "." тогда создаться div. А если с "#" тогда создаться p)');
   let newHeight = prompt('Введите значение высоты элемента');
      while (!isNumder(newHeight)){
         newHeight = prompt('Введите значение высоты элемента');
      }
   let newWidth = prompt('Введите значение ширины элемента');
      while (!isNumder(newWidth)){
         newWidth = prompt('Введите значение ширины элемента');
      }
   let newBackground = prompt('Введите значение цвета для фона (в формате HEX без #)');
   let newFontSize = prompt('Введите размер для шрифта');
      while (!isNumder(newFontSize)){
         newFontSize = prompt('Введите размер для шрифта');
      }
   let newDomElement = new DomElement (newSelector, newHeight, newWidth, newBackground, newFontSize);
   let firstElemSelector = newDomElement.selector.substr(0, 1);
   
   if (firstElemSelector === '.'){
      let div = document.createElement('div');
      div.classList.add(newDomElement.selector.substr(1));
      div.innerHTML = prompt("Введите текст который мы запишем в элементе");
      console.log('div: ', div);
      div.style.height = newHeight + "px";
      div.style.width = newWidth + "px";
      div.style.backgroundColor = "#" + newBackground;
      div.style.fontSize = newFontSize + "px";
      document.body.append(div);
   } else if (firstElemSelector === '#'){
      let p = document.createElement('p');
      p.setAttribute( "id", newDomElement.selector.substr(1));
      p.innerHTML = prompt("Введите текст который мы запишем в элементе");
      console.log('p: ', p);
      p.style.height = newHeight + "px";
      p.style.width = newWidth + "px";
      p.style.backgroundColor = "#" + newBackground;
      p.style.fontSize = newFontSize + "px";
      document.body.append(p);
   }
};

DomElement.prototype.createElement();