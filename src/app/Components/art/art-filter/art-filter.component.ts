import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


export interface Genres {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Genres[];
}



@Component({
  selector: 'app-art-filter',
  templateUrl: './art-filter.component.html',
  styleUrls: ['./art-filter.component.css']
})
export class ArtFilterComponent {
  genres: Genres = {
    name: 'All',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Landscape', completed: false, color: 'primary'},
      {name: 'Digital Art', completed: false, color: 'primary'},
      {name: 'Painting', completed: false, color: 'primary'},
      {name: 'Sculpture', completed: false, color: 'primary'},
      {name: 'Abstract', completed: false, color: 'primary'},
      {name: 'Contemporary', completed: false, color: 'primary'},
    ]
  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.genres.subtasks != null && this.genres.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.genres.subtasks == null) {
      return false;
    }
    return this.genres.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.genres.subtasks == null) {
      return;
    }
    this.genres.subtasks.forEach(t => t.completed = completed);
  }

}
