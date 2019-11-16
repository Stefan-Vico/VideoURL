import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlGeneratorComponent } from './url-generator/url-generator.component';
import { UserDetails } from './user-details/user-details.component';
import { AuthGuard } from './_helpers/auth.guard';


const routes: Routes = [
  { path: '', component: UrlGeneratorComponent, canActivate: [AuthGuard] },
  { path: 'user-details', component: UserDetails},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
