import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolverService } from './photos/photo-list/photo-list-resolver.service';
import { SigninComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignupComponent } from './home/signup/signup.component';

const routes: Routes = [
	{
		path: '',
		component: SigninComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'signup',
		component: SignupComponent,
	},
	{
		path: 'user/:userName',
		component: PhotoListComponent,
		resolve: {
			photos: PhotoListResolverService
		}
	},
	{
		path: 'user/:userName', component: PhotoListComponent,
		resolve: {
			photos: PhotoListResolverService
		}
	},
	{ path: 'p/add', component: PhotoFormComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

