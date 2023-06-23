import { Component } from '@angular/core';
import { faSearch,faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  faSearch = faSearch;
  faArrowLeft = faArrowLeft;
}
