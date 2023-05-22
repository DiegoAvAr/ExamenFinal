import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';





import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { RouterModule, Routes } from '@angular/router';
import { Pestana1Component } from './pestana1/pestana1.component';
import { Pestana2Component } from './pestana2/pestana2.component';
import { Pestana3Component } from './pestana3/pestana3.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TituloComponent } from './titulo/titulo.component';
import { FooterComponent } from './footer/footer.component'; // Importa RouterModule y Routes


const routes: Routes = [
  { path: 'pestana1', component: Pestana1Component },
  { path: 'pestana2', component: Pestana2Component },
  { path: 'pestana3', component: Pestana3Component },
  { path: 'inicio', redirectTo: '/pestana1', pathMatch: 'full' },
  { path: '**', redirectTo: '/pestana1' }
];
  
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    Pestana1Component,
    Pestana2Component,
    Pestana3Component,
    TarjetaComponent,
    TituloComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
