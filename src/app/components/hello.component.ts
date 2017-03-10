import { Component } from '@angular/core';

export class Item {
    id: number;
    title: string;
}

const ITEMS: Item[] = [
    { id: 1, title: 'First Item'},
    { id: 2, title: 'Second Item'},
    { id: 3, title: 'Third Item'}
];

@Component({
    selector: 'hw-main',
    template: `
    <div>
      {{ text }}
      <br>
      <h2>{{item.title}}</h2>
      <div>
        <label>title: </label>
        <br>
        <input [(ngModel)]="item.title" placeholder="title">
      </div>
      <div>
        <ul>
            <li *ngFor="let x of items">
                {{x.id}}: {{x.title}}
            </li>
        </ul>
      </div>
    </div>
  `
})
export class HelloComponent {
    public text: string;
    item: Item;
    items: Item[];

    constructor() {
        this.text = 'Hello Component has loaded!';
        this.item = {
            id: 0,
            title: 'Dummy Item'
        };
        this.items = ITEMS;
    }
}