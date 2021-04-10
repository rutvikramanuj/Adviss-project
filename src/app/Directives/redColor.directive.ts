import { Directive ,Renderer2,ElementRef,OnInit,HostBinding, HostListener, Input} from '@angular/core';
import { paintBucket } from 'ngx-bootstrap-icons';
@Directive({
    selector:'[app-redColor]'
})
export class redColorDirective implements OnInit{
    @Input() defaultColor:string = 'pink';
@HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
constructor(private renderer: Renderer2 , private elementRef: ElementRef){
  
}
ngOnInit(){
   }
   @HostListener('mouseenter')mouseover(eventData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','red');
    this.backgroundColor=this.defaultColor;
   }
}