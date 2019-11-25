import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './layout/loading.component';
import { DataService, JwtService } from '../core/services';
import { SeoService } from '../core/services/seo.service';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IsLoggedDirective } from '../core/directives/is-logged.directive';
import { ApiService } from '../core/services/api.service';
import { UserService } from '../core/services/user.service';
import { AuthGuard } from '../core/guard/auth.guard';
import { NoAuthGuard } from '../core/guard/no-auth.guard';
import { HttpTokenInterceptor } from '../core/interceptor';
import { BsDropdownModule } from 'ngx-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        CollapseModule,
        RouterModule,
        HttpClientModule,
        BsDropdownModule.forRoot()
    ],
    declarations: [
        LoadingComponent,
        HeaderComponent,
        SidebarComponent,
        IsLoggedDirective
    ],
    exports: [
        LoadingComponent,
        HeaderComponent,
        SidebarComponent,
        IsLoggedDirective
    ],
    providers: [
        DataService,
        SeoService,
        ApiService,
        UserService,
        JwtService,
        AuthGuard,
        NoAuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ],
    
})
export class SharedModule { }