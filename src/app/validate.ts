import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the hero's alter ego */
export const identityRevealedValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const id = control.get('id');
  const name = control.get('name');

  return name && id && name.value === id.value
    ? { identityRevealed: true }
    : null;
};
