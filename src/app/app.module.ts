import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopContainerComponent } from './components/top-container/top-container.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentAccountComponent } from './components/current-account/current-account.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentLastWeekComponent } from './components/payment-last-week/payment-last-week.component';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    TopContainerComponent,
    HeaderComponent,
    CurrentAccountComponent,
    FooterComponent,
    PaymentLastWeekComponent,
    PaymentListComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
