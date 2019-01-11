import { Component, OnInit, ViewChild, ElementRef, Output,
    EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    // The alias corresponds to the #reference in the template!
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();
    constructor() { }

    ngOnInit() {
    }
    onAddItem() {
        const ingredientName = this.nameInputRef.nativeElement.value;
        const amountName = this.amountInputRef.nativeElement.value;
        this.ingredientAdded.emit(new Ingredient(ingredientName, amountName));
    }

}
