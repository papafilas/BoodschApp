import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoodschappComponent } from './boodschapp/boodschapp.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UitlegComponent } from './uitleg/uitleg.component';
import { NavigatieComponent } from './navigatie/navigatie.component';

@NgModule({
  declarations: [
    AppComponent,
    BoodschappComponent,
    UitlegComponent,
    NavigatieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      RouterModule.forRoot([
        { path: '', component: BoodschappComponent , pathMatch: 'full' },
        { path: 'Boodschapp', component: AppComponent},
        { path: 'Uitleg', component: UitlegComponent},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@NgModule({
  exports: [RouterModule]
})
export class AppModule { }
