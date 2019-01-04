import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Enchiladas', 'Mexican dish',
        'https://www.jessicagavin.com/wp-content/uploads/2018/04/chicken-enchiladas-5-1200.jpg'),
    ];

    constructor() { }

    ngOnInit() {
    }

}
