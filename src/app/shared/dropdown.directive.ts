import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show') show = false;
    @HostListener('click') toggleOpen() {
        this.show = !this.show;
    }
    constructor() { }

}
