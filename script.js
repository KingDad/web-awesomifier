var elements = document.getElementsByTagName('*');
console.log('something happened');

for (i = 0; i < elements.length; i++){
    var toReplace = /\bthe\b/gi;
    elements[i].innerHTML.replace(toReplace, 'a');
  console.log(elements[i].innerHTML);
}
