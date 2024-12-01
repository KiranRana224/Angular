import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, map, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute){}
  loginUser:any
  ngOnInit(): void {
    // const event = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
    //   map((event: any) => {
    //     event.target.value;
    //   }),
    //   debounceTime(2000),
    //   distinctUntilChanged()
    // );
    // event.subscribe(res=>{
    //   console.log(res);
      
    // })


  }
  title = 'project';
  @ViewChild('searchInput',{static:true}) searchInput: ElementRef | any;
  
}
