import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ApiService } from '../../shared/services/api.service'; 
import { CommonService } from '../../services/common.service';
import { GoatCampaignService } from '../../services/goat-campaign.service';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { JoinUsPipe } from "./join-us.pipe";

@Component({
  selector: 'app-stealth-join-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, JoinUsPipe],
  templateUrl: './stealth-join-us.component.html',
  styleUrl: './stealth-join-us.component.scss'
})
export class StealthJoinUsComponent implements OnInit {
  joinUsData: any[] = [];

  search = new FormControl('', Validators.required);

  searchData = {
    pagination: false,
    search: '',
    limiy: 10,
    page: 1
  }

  timeoutClear: any;

  contactForm: FormGroup = new FormGroup({});

  isDataLoaded = false;

  isSearching = false;

  @ViewChild('modal', { static: true }) modal!: ElementRef;

  @ViewChild('closeModal', { static: true }) closeModal!: ElementRef;

  @ViewChild('liveToast', { static: true }) liveToast!: ElementRef;

  @ViewChild('form_join_us', { static: true }) form!: NgForm;

  selectedJob: any;

  constructor(private api: ApiService, private fb: FormBuilder, private common: CommonService, private goatCampaign: GoatCampaignService) { }

  ngOnInit(): void {

    this.getData();

    this.search.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        this.isSearching = true;
        this.searchData.search = value || ''; // Handle null case by defaulting to empty string
        this.getData();
      });
    this.createForm()
  }

  joinUs = [
    {
      title: 'Creative and Art',
      name: 'User Experience Designer Employee',
      jobDescription: ['New York, USA', 'Full Time'],
      componanyName: 'Awesome Solution Ltd.',
      color: 'colors1'
    },
    {
      title: 'Creative and Art',
      name: 'User Experience Designer Employee',
      jobDescription: ['New York, USA', 'Full Time'],
      componanyName: 'Awesome Solution Ltd.',
      color: 'colors2'
    },
    {
      title: 'Creative and Art',
      name: 'User Experience Designer Employee',
      jobDescription: ['New York, USA', 'Full Time'],
      componanyName: 'Awesome Solution Ltd.',
      color: 'colors3'
    },
    {
      title: 'Creative and Art',
      name: 'User Experience Designer Employee',
      jobDescription: ['New York, USA', 'Full Time'],
      componanyName: 'Awesome Solution Ltd.',
      color: 'colors4'
    },
    {
      title: 'Creative and Art',
      name: 'User Experience Designer Employee',
      jobDescription: ['New York, USA', 'Full Time'],
      componanyName: 'Awesome Solution Ltd.',
      color: 'colors5'
    },
    {
      title: 'Creative and Art',
      name: 'User Experience Designer Employee',
      jobDescription: ['New York, USA', 'Full Time'],
      componanyName: 'Awesome Solution Ltd.',
      color: 'colors1'
    }
  ]


  getData() {
    this.api.getJoinUs(this.searchData)
      .subscribe({
        next: (res: any) => {
          this.isSearching = false;
          if (res['status']) {

            if (res['status']) {

              this.joinUsData = res['data']['joinUs'];
            }
          }
        },

        error: (err) => {
          this.isSearching = false;
        },
        complete: () => {
          this.isDataLoaded = true;
        }
      })
  }

  onApplyJob(elem: any) {
    this.selectedJob = elem;
    this.modal.nativeElement.click();
  }

  onSelectedResume(event: any) {

    const formData = new FormData();

    formData.append('file', event.target.files[0]); // data to upload ...
    formData.append("folderName", 'resume')

    this.api.fileUpload(formData).subscribe((res) => {

      if (res['status']) {
        this.contactForm.patchValue({
          subFields: res?.data?.path
        })
      }
    });
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: this.fb.group({
        firstName: [null, [Validators.required]],
      }),
      contact: this.fb.group({
        email: [null, [Validators.required, Validators.email]]
      }),
      subFields: [null, [Validators.required]],
      message: [null, [Validators.required]]
    });
  }

  submitForm() {

    if (this.contactForm.invalid) {

      this.liveToast.nativeElement.style.display = 'block';
      clearTimeout(this.timeoutClear);
      this.timeoutClear = setTimeout(() => {
        this.liveToast.nativeElement.style.display = 'none';
      }, 4000);

      return;
    }

    this.api.postQuery({ ...this.contactForm.value, type: 'RESUME' })
      .subscribe((res: any) => {
        if (res['status']) {
          this.common.Toast.fire({
            title: 'Your Resume is submitted',
            icon: 'success'
          });

          this.goatCampaign.sendEmail({
            "from": environment.EMAIL_TO,
            "to": environment.EMAIL_TO,
            "subject": "Stealth Manage Join US Form",
            "html": `
            </br>
            </br>            
            <p>User Name: ${this.contactForm.value?.name?.firstName} </p>
            </br>
            <p>Email ID: ${this.contactForm.value?.contact?.email} </p>
            </br>
            <p>Resume: ${this.contactForm.value?.subFields} </p>
            </br>
            <p>Company Name: ${this.selectedJob?.componanyName} </p>
            </br>
            <p>Job Name: ${this.selectedJob?.name} </p>
            </br>
            <p>Job Title: ${this.selectedJob?.title} </p>
            </br>
            </br>
            <p>Message: ${this.selectedJob?.message} </p>
            `
          });
          this.form.resetForm();
          this.createForm();
          this.closeModal.nativeElement.click();
        }
      })
  }
}
