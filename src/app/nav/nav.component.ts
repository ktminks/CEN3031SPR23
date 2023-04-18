import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [MatToolbarModule, MatButtonModule]
})
export class NavComponent {
  
}
