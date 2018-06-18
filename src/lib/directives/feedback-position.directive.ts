import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[feedbackPosition]'
})
export class FeedbackPositionDirective implements OnInit {

  @Input('feedbackPosition') position: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let init_class = this.el.nativeElement.firstElementChild.className;
    this.el.nativeElement.firstElementChild.className = init_class + ' ' + this.position;
  }

}
