import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static validadorPadrao(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  static validadorSenhasIguais(control: AbstractControl) {
    const password: string = control.get('senha').value; // get password from our password form control
    const confirmPassword: string = control.get('confirmacaoSenha').value; // get password from our confirmacaoSenha form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmacaoSenha form control
      control.get('confirmacaoSenha').setErrors({ doNotMatch: true });
    }
  }

  static fullName(control: AbstractControl) {
    const regex = /^[a-záàâãéèêíïóôõöúçñ' ]+$/i
    const space = new RegExp("[ ]{2,}")
    let current: string
    if (control.value)
      current = control.value.substr(control.value.length - 1)

    if (current && space.test(control.value)) {
      control.setValue(control.value.slice(0, control.value.length - 1))
    }

    if (current && (!regex.test(current))) {
      const newValue = control.value.replace(current, '')
      control.setValue(newValue)
      return
    }

    return null
  }

  static Password(control: AbstractControl) {
    if (control.value == null) {
      return control;
    }

    let valido = true;
    let password = control.value;
    // mínimo 6 caracteres, 1 número e 1 caractere especial
    const regex = /^(?=.*\d)(?=.*[$&+=?@#|'<>.^*()%!-])[A-Za-z\d$&+=?@#|'<>.^*()%!-]{6,12}$/;

    if (!regex.test(password)) {
      valido = false;
    }

    if (valido) {
      return null;
    }

    return { invalidPassword: true };
  }

  static validadorEmail(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    const pattern = /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/;

    if (!value.match(pattern)) {
      return { email: true };
    }

    return null;
  }
}