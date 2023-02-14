import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'invalid-feedback',
  templateUrl: './invalid-feedback.component.html',
  styles: [
  ]
})
export class InvalidFeedbackComponent {

  @Input() field: FormControl
  @Input() name: 'Campo'
  errorMessage: string

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'invalid-feedback')
  }

  isError(field) {
    this.errorMessage = ''
    if (field.errors?.required) {
      this.errorMessage = 'Campo obrigatório'
    } else if (field.errors?.invalidDate || field.errors?.bsDate) {
      this.errorMessage = 'Data inválida'
    } else if (field.errors?.pattern) {
      this.errorMessage = `${this.name} inválido`
    } else if (field.errors?.invalid) {
      this.errorMessage = `${this.name} inválido`
    } else if (field.errors?.['Mask error'] || field.errors?.mask) {
      this.errorMessage = `${this.name} inválido`
    } else if (field.errors?.min) {
      this.errorMessage = `Valor mínimo ${field.errors.min.min}`
    } else if (field.errors?.max) {
      this.errorMessage = `Valor máximo ${field.errors.max.max}`
    } else if (field.errors?.doNotMatch) {
      this.errorMessage = `As senhas informadas não conferem`
    } else if (field.errors?.minlength) {
      this.errorMessage = `Mínimo ${field.errors.minlength.requiredLength} caracteres`
    } else if (field.errors?.maxlength) {
      this.errorMessage = `Máximo ${field.errors.minlength.requiredLength} caracteres`
    } else if (field.errors?.lowerCase) {
      this.errorMessage = `Letras maiúsculas não são aceitas`
    }
    return this.errorMessage != ''
  }
}
