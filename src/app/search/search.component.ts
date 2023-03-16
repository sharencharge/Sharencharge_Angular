import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output()
  eventSearchValue : EventEmitter<string> = new EventEmitter<string>();

  searchValue : string  = '';

  onKeyUp(): void {
    this.eventSearchValue.emit(this.searchValue);
}

}
