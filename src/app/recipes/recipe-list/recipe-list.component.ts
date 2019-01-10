import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Enchiladas', 'Mexican dish',
        'https://www.jessicagavin.com/wp-content/uploads/2018/04/chicken-enchiladas-5-1200.jpg'),
        new Recipe('Fish Tacos', 'Another dish',
        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/23/1024x512/landscape-1496701523-delish-fishtacos-01.jpg'),
    ];

    constructor() { }

    ngOnInit() {
    }

    onRecipeSelected(recipe: Recipe) {
        console.log(recipe)
        this.recipeWasSelected.emit(recipe);
    }
}
