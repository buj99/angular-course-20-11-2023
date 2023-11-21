import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JokeDetailsComponent } from "./joke-details.component";

const routes: Routes = [
    {path: '', component: JokeDetailsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JokeDetailsRoutingModule{}