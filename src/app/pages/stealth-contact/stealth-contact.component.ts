import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ApiService } from '../../shared/services/api.service';
import { GoatCampaignService } from '../../services/goat-campaign.service';
import { environment } from '../../../environments/environment';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { of } from 'rxjs';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { FormatNumberPipe } from "./format-number.pipe";

let googleClientLoaded = false;
@Component({
  selector: 'app-stealth-contact',
  imports: [CommonModule, LazyLoadImageModule, ReactiveFormsModule, GoogleMapsModule, InlineSVGModule, FormatNumberPipe],
  templateUrl: './stealth-contact.component.html',
  styleUrl: './stealth-contact.component.scss'
})
export class StealthContactComponent {
  apiLoaded$!: Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: 28.47707, lng: -81.4549 };
  zoom = 16;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [this.center];
  contactForm: FormGroup = new FormGroup({});

  @ViewChild('form_contact_us', { static: true }) form: NgForm = new NgForm([], []);

  faq = [
    {
      question: 'What brands can a hotel management company manage?',
      ans: 'Hotel management companies can manage some brands and flag affiliates. Stealth Management Group LLC is approved to manage all select service brands within the Marriott, Hilton, and Choice hotels. View our portfolio and see what brands we partner with. (full- service for choice)',
    },
    {
      question: 'Do you operate restaurants?',
      ans: 'Yes, Stealth Management Group designs spaces, culinary concepts and menus and operates restaurants of various capacities and cuisines throughout Florida.',
    },
    {
      question: 'What do hotel management companies do?',
      ans: 'Hotel management companies run the daily operations comprising the front and back of the house, as well as all amenities and services offered within a hotel. Additionally, hotel management firms assist clients with branding, sales and marketing, generating revenue, technology, development and design, and renovations. Get in touch with the Stealth Management Group to discover the possibilities.',
    },
    {
      question: 'Which regions does the Stealth Management Group manage in?',
      ans: 'Stealth Management Group operates properties in all major markets throughout the United States, from Florida to Utah and Tennessee.',
    },
    {
      question: 'How can food and beverage services boost hotel revenue?',
      ans: "Food and beverage services provide added value above a guest's room revenue. Innovative restaurants that appeal to both the local and tourism sectors considerably increase hotel revenue. Creating the ideal food and beverage outlets for your hotels and resorts enhances overall profitability, positions you in the neighborhood, and elevates the guest experience. Work with the Stealth Management Group to discover how.",
    },
  ];

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private common: CommonService,
    private api: ApiService,
    private goatCampaign: GoatCampaignService
  ) {}

  contacts: any[] = [];

  ngOnInit(): void {
    this.createForm();
    this.apiLoaded$ = googleClientLoaded
      ? of(true)
      : this.httpClient
          .jsonp(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyD3KhWFTr0HhBrTSX0bpNipKO0Z1t83yuM`,
            'callback'
          )
          .pipe(
            map(() => {
              return true;
            }),
            catchError(() => {
              return of(false);
            }),
            tap(isLoaded => (googleClientLoaded = isLoaded))
          );

    this.api.getContacts().subscribe((res: any) => {
      if (res['data']['section']['contents']) {
        this.contacts = res['data']['section']['contents'];
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
      .postQuery({ ...this.contactForm.value, type: 'QUERY' })
      .subscribe((res: any) => {
        if (res['status']) {
          this.common.Toast.fire({
            title: 'Your query is submitted',
            icon: 'success',
          });

          this.goatCampaign.sendEmail({
            from: environment.EMAIL_TO,
            to: environment.EMAIL_TO,
            subject: 'Stealth Manage Contact US Form',
            html: `
            </br>
            </br>            
            <p>Company Name: ${this.contactForm.value?.name?.firstName} </p>
            </br>
            <p>Name: ${this.contactForm.value?.name?.lastName} </p>
            </br>
            <p>Email ID: ${this.contactForm.value?.contact?.email} </p>
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
          number: [0, [Validators.required]],
        }),
      }),
      message: [null, [Validators.required]],
    });
  }
}
