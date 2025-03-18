import { Routes } from '@angular/router';
import { StealthHomeComponent } from './pages/stealth-home/stealth-home.component';
import { StealthExpertDetailComponent } from './pages/stealth-expert-detail/stealth-expert-detail.component';
import { StealthJoinUsComponent } from './pages/stealth-join-us/stealth-join-us.component';
import { StealthServicesComponent } from './pages/stealth-services/stealth-services.component';
import { StealthPortfolioComponent } from './pages/stealth-portfolio/stealth-portfolio.component';
import { StealthBlogComponent } from './pages/stealth-blog/stealth-blog.component';
import { StealthAboutComponent } from './pages/stealth-about/stealth-about.component';
import { CommitmentsComponent } from './pages/commitments/commitments.component';
import { StealthTeamComponent } from './pages/stealth-team/stealth-team.component';
import { StealthContactComponent } from './pages/stealth-contact/stealth-contact.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [

    {
        path: '', component: StealthHomeComponent,
        data: {
            title: 'Best Hospitality Management Company | Stealth Management',
            description:
                'Stealth Management Group LLC is a Hospitality Management Company with excellence in hotel management, dedicated towards success & profits for the owners & investors.',
            keywords: "Hospitality Management Company, hotel management companies in florida, hotel management florida"
        }
    },
    { path: 'expert-detail', component: StealthExpertDetailComponent },
    {
        path: 'join-us', component: StealthJoinUsComponent,
        data: {
            title: 'Join Our Team - Stealth Management Group',
            description:
                'Join Our Team. Explore our job openings and employment opportunities. If you`re a motivated & energetic person in search of a career you`ll love Stealth.',
            keywords: ""
        },
    },
    {
        path: 'hotel-management-services', component: StealthServicesComponent,
        data: {
            title: 'Hotel Management Services - Best Hospitality Service Provider',
            description:
                'Our hotel management services are designed for better performance & revenue growth. We have 40 years of experience in development, operations, and transactions.',
            keywords: "hospitality management services, hotel management services"
        },
    },
    {
        path: 'our-portfolio', component: StealthPortfolioComponent,
        data: {
            title: 'Portfolio | Stealth Management Group LLC',
            description:
                'Stealth Management Group LLC comprises full service branded hotels within Marriott, Choice Hotels and Hilton. We manage a diverse portfolio of hotels in Florida.',
            keywords: ""
        },
    },
    {
        path: 'blogs', component: StealthBlogComponent,
        data: {
            title: 'Blog | Stealth Management Group LLC',
        },
    },
    {
        path: 'about-us', component: StealthAboutComponent,
        data: {
            title: 'About Us | Stealth Management Group LLC',
            description:
                'Stealth Management Group is a hotel management company in Florida that offers a range of hotel management services with an experienced team, & diverse portfolio.',
            keywords: "Hospitality Management Company In Florida, hotel management companies in florida, hotel management florida"
        },
    },
    {
        path: 'commitments', component: CommitmentsComponent,
        data: {
            title: 'Commitments | Stealth Management Group LLC',
        },
    },
    {
        path: 'our-team', component: StealthTeamComponent,
        data: {
            title: 'Hotel Management Team | Stealth Management Group LLC',
            keywords: 'hotel management team',
            description:
                'At Stealth Management Group, our hotel management team has dedication to helping owners & investors succeed & profit while ensuring positive management experience.',
        },
    },
    {
        path: 'contact-us', component: StealthContactComponent,
        data: {
            title: 'Contact Us | Stealth Management Group LLC',
            description:
                'Stealth Management headquarters office is located at 5829 Grand National Drive Orlando, Florida. For more information or any queries, contact us',
            keywords: '',
        },
    },
    {
        path: 'terms-and-condition', component: TermsAndConditionComponent,
        data: {
            title: 'Terms and Condition | Stealth Management Group LLC',
        },
    },
    {
        path: 'privacy-policy', component: PrivacyPolicyComponent,
        data: {
            title: 'Privacy Policy | Stealth Management Group LLC',
        },
    },
    {
        path: 'investor-login', component: SignupComponent,
        data: {
            title: 'Investor Login | Stealth Management Group LLC',
        },
    },
];
