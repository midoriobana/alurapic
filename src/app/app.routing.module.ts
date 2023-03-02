import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginGuard } from './core/auth/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolverService } from './photos/photo-list/photo-list-resolver.service';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'user/:userName',
		component: PhotoListComponent,
		resolve: {
			photos: PhotoListResolverService
		},
		canActivate: [AuthGuard]
	},
	{
		path: 'p/add',
		component: PhotoFormComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'p/:photoId',
		component: PhotoDetailsComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'not-found',
		component: NotFoundComponent
	},
	{
		path: '**',
		redirectTo: 'not-found'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }

