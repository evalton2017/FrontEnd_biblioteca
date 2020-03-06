import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/user/home',
        pathMatch:'full'
        
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}