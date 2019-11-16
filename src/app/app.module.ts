import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UrlGeneratorComponent } from './url-generator/url-generator.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor'
import { ErrorInterceptor } from './_helpers/error.interceptor'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatIconModule } from '@angular/material/icon'

import { UserDetails } from './user-details/user-details.component'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [AppComponent, UrlGeneratorComponent, UserDetails],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
