import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// lottie configs
import { LottieComponent, provideLottieOptions } from 'ngx-lottie'
import player  from 'lottie-web'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LottieComponent
  ],
  providers: [
    // load lottie player service
    provideLottieOptions({
      player: () => player
    })
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
