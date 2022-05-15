import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'signup', 
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  { path: 'aboutus', 
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  { path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'home', 
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  },
  { path: 'cart', 
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./others/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
//  { path: 'home', component: GalleryComponent},
 // { path: 'login', component: LoginComponent},
 // { path: 'aboutus', component: AboutUsComponent},
 // { path: 'signup', component: SignupComponent},
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
