import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Photo } from '../../photo/photo';

@Directive({
  selector: '[PhotoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective {

  @Input() ownedPhoto: Photo

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe(user => {
        if (!user || user.id != this.ownedPhoto.userId) {
          this.renderer.setStyle(this.element.nativeElement, 'display', 'none')
        }
      })
  }
}