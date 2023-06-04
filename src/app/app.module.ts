import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { ListComponentComponent } from '@components/list-component/list-component.component';
import { IconsModule } from './icons/icons.module';
import { universityReducer } from '@states/universities/universities.reducers';
import { UniversityEffect } from '@states/universities/universities.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniversityDetailModalComponent } from './components/modals/university-detail-modal/university-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListComponentComponent,
    UniversityDetailModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ universities: universityReducer }),
    EffectsModule.forRoot([UniversityEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
