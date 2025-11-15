import { Routes } from '@angular/router';
import { ProductoListComponent } from './component/producto-list/producto-list.component';
import { ProductoFormComponent } from './component/producto-form/producto-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/productos',
        pathMatch: 'full'
    },
    {
        path: 'productos',
        component: ProductoListComponent
    },
    {
        path: 'nuevo',
        component: ProductoFormComponent
    }
];
