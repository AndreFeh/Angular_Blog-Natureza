import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { ContentComponent } from './pages/content/content.component';
import { CardClassicComponent } from './components/cards-home/card-classic/card-classic.component';
import { CardDestaqueComponent } from './components/cards-home/card-destaque/card-destaque.component';
import { CardMainComponent } from './components/cards-home/card-main/card-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    FooterBarComponent,
    ContentComponent,
    CardClassicComponent,
    CardDestaqueComponent,
    CardMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
