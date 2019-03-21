import { Component, OnInit } from '@angular/core';
import { InformationService } from '../service/information.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  information: any;
  error = null;

  constructor(private _information: InformationService) {}

  ngOnInit() {
    this._information.get().subscribe((res: any) => {
      this.information = res.data;
    }, (error: any) => {
      this.error = error.statusText;
    });
  }
}
