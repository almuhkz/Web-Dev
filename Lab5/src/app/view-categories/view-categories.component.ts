import { Component } from '@angular/core';
import {categories} from '../category';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {
  categories = categories;
}
