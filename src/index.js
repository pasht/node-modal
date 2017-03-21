/**
 * Created by administrator on 3/20/17.
 */
// Test function
export function saysomething(msg){
    console.log(msg);
}

function extend(obj){
    [].slice.call(arguments,1).forEach((source)=>{
        for(let attr in source){
            obj[attr] = source[attr]
        }
    })
}

export function alter(obj,...others){
    Object.assign(obj,...others);

    return obj;
}

// Node library Node modal
class NodeModal{
    constructor(html,opts={}){
        this.options = {
            backgroundColor : "rgba(0,0,0,0.4)"
        };
        //Object.assign(this.options,opts);
        extend(this.overlay,opts);
        this.overlay = document.createElement('div');
        this.overlay.innerHTML = html;
        this.overlay.style['backgroundColor'] = this.options.backgroundColor;
        this.overlay.className = 'modal-overlay';

        // Append this element to body of the document
        document.body.appendChild(this.overlay);

        this.overlay.addEventListener('click',(evt)=>{
           if(evt.target == this.overlay)
               this.close();
        });

    }

    show(){
        this.overlay.style['display'] = 'block';
    }
    hide(){
        this.overlay.style['display'] = 'none';
    }
    dispose(){
        this.overlay.parentNode.removeChild(this.overlay);
    }
    close(){
        var index = activeModals.indexOf(this);
        if(index >= 0){
            activeModals.splice(index, 1);
        }
        this.dispose();
    }
}
// Active models
var activeModals = [];

export function create(html,options){
    const _modal = new NodeModal(html,options)
    activeModals.push(_modal);

    return _modal;

}
