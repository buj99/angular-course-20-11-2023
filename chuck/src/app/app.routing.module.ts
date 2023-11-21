import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'list', loadComponent: () => import('./joke-list/joke-list.component').then(c => c.JokeListComponent)},
    {path: 'details', loadChildren: () => import('./joke-details/joke-details.module').then(m => m.JokeDetailsModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}