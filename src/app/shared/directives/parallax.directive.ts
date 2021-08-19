import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appParallax]'
})
export class ParallaxDirective {

    @Input() parallaxRatio = 1;
    @Input() target!: HTMLElement;

    public initialTop = 0;

    constructor(private eleRef: ElementRef) {
        setTimeout(() => this.initEventListener(), 1);
    }

    private initEventListener(): void {

        this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;

        this.target.addEventListener('scroll', (event: any) => {
            this.eleRef.nativeElement.style.top = (this.initialTop - ((this.target.scrollTop) * this.parallaxRatio)) + 'px';
        });
    }
}