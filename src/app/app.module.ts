import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { PdfComponent } from './pdf/pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DokanComponent } from './dokan/dokan.component';
import { AdComponent } from './ad/ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    PdfComponent,
    BookmarkComponent,
    LoginComponent,
    DokanComponent,
    AdComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
