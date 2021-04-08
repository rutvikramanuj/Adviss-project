import { Directive ,Renderer2,ElementRef,OnInit, HostListener} from '@angular/core';
@Directive({
    selector:'[app-redColor]'
})
export class redColorDirective implements OnInit{

constructor(private renderer: Renderer2 , private elementRef: ElementRef){
  
}
ngOnInit(){
   }
   @HostListener('mouseenter')mouseover(eventData:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','red');

   }
}