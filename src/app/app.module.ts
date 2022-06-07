import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CliComponent } from './cli/cli.component';
import { BashComponent } from './bash/bash.component';
import { RustComponent } from './rust/rust.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { OperatingSystemP2Component } from './operating-system-p2/operating-system-p2.component';
import { OperatingSystemP3Component } from './operating-system-p3/operating-system-p3.component';
import { ArchInstallComponent } from './arch-install/arch-install.component';

@NgModule({
  declarations: [
    AppComponent,
    CliComponent,
    BashComponent,
    RustComponent,
    AboutComponent,
    HomeComponent,
    OperatingSystemComponent,
    OperatingSystemP2Component,
    OperatingSystemP3Component,
    ArchInstallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
