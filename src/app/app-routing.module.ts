import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { PdfComponent } from './pdf/pdf.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { NoAuthGuard } from './core/guard/no-auth.guard';
import { DokanComponent } from './dokan/dokan.component';
import { AdComponent } from './ad/ad.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'bookmarks', component: BookmarkComponent, canActivate: [AuthGuard]
  },
  {
    path: 'dokan', component: DokanComponent
  },
  {
    path: 'ad', component: AdComponent
  },
  {
    path: 'book/:book_id', component: PdfComponent
  },
  {
    path: 'books/category/:category_id', component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
