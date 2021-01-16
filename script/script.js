
let elems = document.querySelector('body');



const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.creator = function(){

    switch(this.selector){
        case '.block':
            const newElem = document.createElement('div');
            newElem.classList.add('block');
            elems.append(newElem);
            newElem.textContent = 'Блок DIV';
    
            newElem.style.cssText =`width: ${this.width}; height: ${this.height}; background: ${this.bg}; font-size: ${this.fontSize};`;
            break;
            case '#best':
                const newElem2 = document.createElement('p');
                elems.append(newElem2);    
                newElem2.textContent = 'Блок P';
    
                newElem2.style.cssText =`width: ${this.width}; height: ${this.height}; background: ${this.bg}; font-size: ${this.fontSize};`;
                break;
    }

};

let newElement = new DomElement ('.block', '100px', '100px', 'red', '20px');
newElement.creator();

