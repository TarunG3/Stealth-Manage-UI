import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { GoatCampaignService } from '../../services/goat-campaign.service';
import { CommonService } from '../../services/common.service';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, InlineSVGModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private goatCampaign: GoatCampaignService,
    private common: CommonService
  ) {}

  contactForm: FormGroup = new FormGroup({});

  @ViewChild('form_investor', { static: true }) form: NgForm = new NgForm([], []);

  investorData:any;

  ngOnInit(): void {
    this.createForm();

    this.api.getInvestor().subscribe((res: any) => {

      if(res['status']){
        this.investorData = res['data']['section'];
      }
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.common.Toast.fire({
        title: 'Please fill all required details',
        icon: 'error',
      });
      return;
    }

    this.api
      .postQuery({ ...this.contactForm.value, type: 'INVESTOR' })
      .subscribe((res: any) => {
        if (res['status']) {
          this.common.Toast.fire({
            title: 'Submitted Successfully',
            icon: 'success',
          });

          this.goatCampaign.sendEmail({
            from: environment.EMAIL_TO,
            to: environment.EMAIL_TO,
            subject: 'Stealth Manage Investor Form',
            html: `
          		</br>
          		</br>
          		<p>Company Name: ${this.contactForm.value?.name?.firstName} </p>
          		</br>
          		<p>Name: ${this.contactForm.value?.name?.lastName} </p>
          		</br>
          		<p>Email ID: ${this.contactForm.value?.contact?.email} </p>
          		</br>
          		<p>Phone Number: ${this.contactForm.value?.contact?.phone?.number} </p>
          		</br>
              <p>Message: ${this.contactForm.value?.message} </p>
          		`,
          });
          this.form.resetForm();
          this.createForm();
        }
      });
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: this.fb.group({
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
      }),
      contact: this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        phone: this.fb.group({
          dialCode: [0],
          iso2: ['string'],
          country: ['string'],
          number: [undefined, [Validators.required]],
        }),
      }),
      message: [null, [Validators.required]],
    });
  }
}
