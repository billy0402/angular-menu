import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../public-services/http.service';

@Component({
  selector: 'app-royal',
  templateUrl: './royal.component.html',
  styleUrls: ['./royal.component.scss']
})
export class RoyalComponent implements OnInit {

  storeDetail: object[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpService
  ) { }

  ngOnInit() {
    let storeid = this.route.snapshot.params["storeid"];

    this.http.getData('/storeDetail/' + storeid).subscribe(
      data => {
        console.table(data);
        this.storeDetail = data;
      }
    )
  }

}
