import { Routes } from "@angular/router";
import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const appRoute:Routes =[
    {path: 'events', component: EventListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path:'', redirectTo: '/events', pathMatch: 'full'}
]