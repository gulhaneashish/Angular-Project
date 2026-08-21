import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordStrengthValidator(
  control: AbstractControl
): ValidationErrors | null {

  const value = control.value;

  if (!value) {
    return null;
  }

  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);

  if (!hasUppercase || !hasLowercase || !hasNumber) {
    return {
      passwordStrength: true
    };
  }

  return null;
}