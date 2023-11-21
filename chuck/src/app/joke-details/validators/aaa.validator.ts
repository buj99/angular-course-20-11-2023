import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function aaaValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let invalid;
    if (typeof control.value === 'string') {
      invalid = control.value.startsWith('aaa');
    }
    return !invalid ? { badValue: 'author should start with aaa' } : null;
  };
}
