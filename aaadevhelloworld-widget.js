//Definicion de Librerias
['https://cnd.jsdelivr.net/npm/axios/dist/axios.min.js'].forEach(u =>
{
    var script = document.createElement('script');
    script.src = u;
    document.head.appendChild(script);
});

class TestWebComponentWidget extends HTMLElement{
    static _WIDGETNAME = 'aaadevhelloworld-widget';
    static _WIDGETURL = 'https://blue-flower-040073910.5.azurestaticapps.net/';
}
//función que se ejecuta una vez que el custom element es intanciado en la inteface del worksapace
function connectecCallback(){
  this.classList.add('neo-widget');
  this.classList.add(`wigget--${TestWebComponentWidget._WIDGETNAME}`)
  this.style.overflowX = 'hidden'


  fetch(`${TestWebComponentWidget._WIDGETURL}/${TestWebComponentWidget._WIDGETNAME}.html`)
  .then(data => data.text)
  .then(html => {
     this.innerHTML += `<link rel="stylesheet" href= "${TestWebComponentWidget._WIDGETURL}/${TestWebComponentWidget._WIDGETNAME}.css" `
     this.innerHTML += html;
     this.initWidgetCode();
  })
};

function initWidgetCode(){
    console.log('Init widget code');
}

var widget = customElements.define(TestWebComponentWidget._WIDGETNAME,TestWebComponentWidget);