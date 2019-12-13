import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'setup/divisions',
        loadChildren: () =>
            import(`./pages/division/division.module`).then(m => m.DivisionModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ]
})
export class SetupRoutingModule { }
