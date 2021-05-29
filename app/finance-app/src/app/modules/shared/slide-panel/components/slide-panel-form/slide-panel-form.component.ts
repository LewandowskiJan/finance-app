import { ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SlidePanelConfiguration } from './../../model/slide-panel-configuration';
import { SlidePanelService } from './../../services/slide-panel.service';

@Component({
  selector: 'app-slide-panel-form',
  templateUrl: './slide-panel-form.component.html',
  styleUrls: ['./slide-panel-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlidePanelFormComponent implements OnInit {
  @Output() public formSubmitEmitter: EventEmitter<Account> = new EventEmitter();
  public slidePanelForm: FormGroup;
  public configuration: SlidePanelConfiguration;
  public icons: string[] = ['&#127829;', '&#127775;', '&#127828;', '&#128040;', '&#128126;', '&#128142;', '&#128140;', '&#128331;'];

  get utfIcon(): FormControl {
    return this.slidePanelForm.get('utfIcon') as FormControl;
  }

  get name(): FormControl {
    return this.slidePanelForm.get('name') as FormControl;
  }

  get alias(): FormControl {
    return this.slidePanelForm.get('alias') as FormControl;
  }

  get isExternal(): FormControl {
    return this.slidePanelForm.get('isExternal') as FormControl;
  }

  constructor(private formBuilder: FormBuilder, private slidePanelService: SlidePanelService) {}

  public ngOnInit(): void {
    this.configuration = this.slidePanelService.getConfiguration();
    this.buildForm();
  }

  public create(): void {
    this.slidePanelForm.markAsTouched();
    this.slidePanelForm.updateValueAndValidity();
    if (!this.slidePanelForm.valid) {
      return;
    }
    const formData: any = this.slidePanelService.prepareFormData(this.slidePanelForm.getRawValue());
    this.formSubmitEmitter.emit(formData);
  }

  private buildForm(): void {
    this.slidePanelForm = this.formBuilder.group({
      name: ['', Validators.required],
      alias: ['', Validators.required],
      isExternal: [false],
      utfIcon: [this.icons[0]],
    });
  }
}
