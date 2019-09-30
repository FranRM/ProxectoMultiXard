import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Location } from '@angular/common';
import {ActivatedRoute} from'@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  private location:Location;
  title = 'MultiXardApp';
  volverBenvida(): void {
    this.location.go('/benvida');
  }
}