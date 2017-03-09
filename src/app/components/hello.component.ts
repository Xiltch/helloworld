import { Component } from '@angular/core';

@Component({
    selector: 'hw-main',
    template: `
    <div>
      {{ text }}
    </div>
  `
})

export class HelloComponent {
    public text: string;
    constructor() {
        this.text = 'Hello Component has loaded!';
    }
}