import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {
  name: string;

  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe( params => {this.name = params['name'] ; }
    );
  }

  ngOnInit() {
  }

}
