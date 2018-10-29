import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';

const appRoutes: Routes = [ 
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'categories/:id',
        component: CategoryDetailComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);