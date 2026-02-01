import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[reveal]',
  standalone: true,
})
export class Reveal implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement;

    // estado inicial (invisível)
    element.classList.add(
      'opacity-0',
      'translate-y-10',
      'transition-all',
      'duration-700',
      'ease-out'
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove('opacity-0', 'translate-y-10');
          element.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
  }
}
