import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titulo!: String;

  constructor(){ }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
