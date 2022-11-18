import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html'
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
