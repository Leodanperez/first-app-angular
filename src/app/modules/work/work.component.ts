import { Component, OnInit } from '@angular/core';
import { Path } from '../../config';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styles: [
  ]
})
export class WorkComponent implements OnInit {

  path: string = Path.url;
  constructor() { }

  ngOnInit(): void {
  }

}
