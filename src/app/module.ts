import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HelloComponent } from './components/hello.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [HelloComponent],
    bootstrap: [HelloComponent]
})
export class AppModule { }