import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTimerComponent implements OnInit, AfterContentChecked {
  @Input() control: FormControl;

  form = this.fb.group({
    hour: this.fb.control(0),
    min: this.fb.control(0),
    sec: this.fb.control(0),
  });

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(startWith(this.control.value))
      .subscribe((seconds: number | null) => {
        this.secondsToForm(seconds ?? 0);
        this.cdr.markForCheck();
      });

      this.form.valueChanges
        .subscribe((d) => {
          console.log(d);
          
        })
  }

  ngAfterContentChecked(): void {}

  private secondsToForm(seconds: number) {
    const hour = Math.floor(seconds / 3600);
    const min = Math.floor((seconds - hour * 3600) / 60);
    const sec = seconds % 60;
    this.form.patchValue({
      hour,
      min,
      sec,
    });
  }

  private formToSeconds(hour: number, min: number, seconds: number) {
    return hour * 3600 + min * 60 + seconds;
  }
}
