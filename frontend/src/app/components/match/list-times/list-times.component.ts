import {Component, OnInit} from '@angular/core';
import {MatchFirestoreService} from "../../../shared/services/match-firestore.service";
import {Time} from "../../../shared/model/time";



@Component({
  selector: 'app-list-times',
  templateUrl: './list-times.component.html',
  styleUrls: ['./list-times.component.scss']
})
export class ListTimesComponent implements OnInit {
  times : Time[]= []
  constructor(private MatchService:MatchFirestoreService) {

  }

  ngOnInit() {
    this.times = this.MatchService.getTimes();
  }

}
