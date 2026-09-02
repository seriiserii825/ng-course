import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISelectOption } from './interfaces/ISelectOption';

@Component({
  selector: 'app-select-shared',
  imports: [],
  templateUrl: './select-shared.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectShared),
      multi: true,
    },
  ],
})
export class SelectShared implements ControlValueAccessor {
  options = input.required<ISelectOption[]>();
  name = input.required<string>();
  label = input<string>();

  value?: ISelectOption;
  disabled = false;
  isOpen = false;

  onChange: (value: ISelectOption) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: ISelectOption): void {
    this.value = value;
  }

  registerOnChange(fn: (value: ISelectOption) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleOpen(): void {
    if (this.disabled) {
      return;
    }
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.onTouched();
    }
  }

  selectOption(option: ISelectOption): void {
    this.value = option;
    this.onChange(option);
    this.isOpen = false;
    this.onTouched();
  }
}
