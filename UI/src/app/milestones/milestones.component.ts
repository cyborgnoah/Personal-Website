import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.css']
})
export class MilestonesComponent implements OnInit {

  dateObj = Date.now()
  constructor() {
}

  ngOnInit() {
    setInterval(() => {
              this.dateObj = Date.now();
            }, 1000);
  }
}
