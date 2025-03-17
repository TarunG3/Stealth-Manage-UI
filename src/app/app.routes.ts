import { Routes } from '@angular/router';
import { StealthHomeComponent } from './pages/stealth-home/stealth-home.component';
import { StealthExpertDetailComponent } from './pages/stealth-expert-detail/stealth-expert-detail.component';
import { StealthJoinUsComponent } from './pages/stealth-join-us/stealth-join-us.component';
import { StealthServicesComponent } from './pages/stealth-services/stealth-services.component';

export const routes: Routes = [
    {path: '', component: StealthHomeComponent,
        data: {
            title: 'Best Hospitality Management Company | Stealth Management',
            description:
                'Stealth Management Group LLC is a Hospitality Management Company with excellence in hotel management, dedicated towards success & profits for the owners & investors.',
            keywords: "Hospitality Management Company, hotel management companies in florida, hotel management florida"
        }
    },
    {path: 'expert-detail', component: StealthExpertDetailComponent},
    {path: 'join-us', component: StealthJoinUsComponent,
        data: {
            title: 'Join Our Team - Stealth Management Group',
            description:
                'Join Our Team. Explore our job openings and employment opportunities. If you`re a motivated & energetic person in search of a career you`ll love Stealth.',
            keywords: ""
        },
    },
    {path: 'hotel-management-services', component: StealthServicesComponent,
        data: {
            title: 'Hotel Management Services - Best Hospitality Service Provider',
            description:
                'Our hotel management services are designed for better performance & revenue growth. We have 40 years of experience in development, operations, and transactions.',
            keywords: "hospitality management services, hotel management services"
        },
    },
];
