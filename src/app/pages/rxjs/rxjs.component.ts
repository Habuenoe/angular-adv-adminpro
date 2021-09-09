import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit, OnDestroy {
  intervalSubscription: Subscription;

  constructor() {
    // this.retornaObservable()
    //   .pipe(retry(1))
    //   .subscribe((valor) => console.log('Subs:', valor), (error) => console.log('Error: ', error), () => console.log('---Obs terminado----'));
  }

  retornaIntervalo() {
    return interval(500).pipe(
      // take(10),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false)),
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llegó al valor de 2');
        }
      }, 1000);
    });
  }

  ngOnInit(): void {
    this.intervalSubscription = this.retornaIntervalo().subscribe((valor) => console.log(valor));
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
