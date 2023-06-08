import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
  private firstObsSub: Subscription;

  constructor() { }

  ngOnInit() {
  //  this.firstObsSub =  interval(1000).subscribe(count =>{
  //     console.log(count);
      
  //   });

  const customIntervallObs = Observable.create((observer) =>{
    let count = 0;
    setInterval(()=>{
      observer.next(count);
      count++;
    }, 1000);
  });

  this.firstObsSub = customIntervallObs.subscribe(data => {
    console.log(data);
  });

  }
  ngOnDestroy(): void {
    this.firstObsSub.unsubscribe();
  }

}
