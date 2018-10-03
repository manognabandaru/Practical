import {Component,Input,Output,EventEmitter} from '@angular/core';
//import {  } from 'protractor';

@Component({
    selector:'test-comp',
    template:`<h1>Test Component</h1>
    <h1>Hello {{name}}</h1>
    <input [id]="myId" type="text" value="Mano">
    {{received}}
    <button (click)="sendParent()">Send Parent</button>`,
    styles:[]


})

export class TestComponent{
public name="Navi";
public myId="testId";
@Input() received;
@Output() child = new EventEmitter;

sendParent(){
    this.child.emit('Child will be emitted');
}



}