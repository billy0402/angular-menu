import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../public-services/http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  goods: any[] = [];

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getData('/goods').subscribe(
      data => {
        this.goods = data;
      }
    );
  }

}
