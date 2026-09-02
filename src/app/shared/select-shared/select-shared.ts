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
  activeIndex = -1;

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
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled) {
      return;
    }
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.isOpen ? this.moveActive(1) : this.open();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.isOpen ? this.moveActive(-1) : this.open();
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.isOpen && this.activeIndex >= 0) {
          this.selectOption(this.options()[this.activeIndex]);
        } else {
          this.toggleOpen();
        }
        break;
      case 'Escape':
        if (this.isOpen) {
          event.preventDefault();
          this.close();
        }
        break;
    }
  }

  private open(): void {
    this.isOpen = true;
    const current = this.options().findIndex((option) => option.value === this.value?.value);
    this.activeIndex = current >= 0 ? current : 0;
  }

  private close(): void {
    this.isOpen = false;
    this.onTouched();
  }

  private moveActive(delta: number): void {
    const length = this.options().length;
    if (length === 0) {
      return;
    }
    this.activeIndex = (this.activeIndex + delta + length) % length;
  }

  selectOption(option: ISelectOption): void {
    this.value = option;
    this.onChange(option);
    this.isOpen = false;
    this.onTouched();
  }
}
