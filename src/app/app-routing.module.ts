import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'user/flavio', component: PhotoListComponent
  },
  {
    path: 'p/add', component: PhotoFormComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}