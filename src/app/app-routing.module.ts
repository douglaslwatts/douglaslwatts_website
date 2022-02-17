import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliComponent } from './cli/cli.component';
import { BashComponent } from './bash/bash.component';
import { RustComponent } from './rust/rust.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { OperatingSystemP2Component } from './operating-system-p2/operating-system-p2.component';
import { OperatingSystemP3Component } from './operating-system-p3/operating-system-p3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cli', component: CliComponent },
  { path: 'bash', component: BashComponent },
  { path: 'rust', component: RustComponent },
  { path: 'about', component: AboutComponent },
  { path: 'operating-system', component: OperatingSystemComponent },
  { path: 'operating-system-p2', component: OperatingSystemP2Component },
  { path: 'operating-system-p3', component: OperatingSystemP3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollOffset: [0, 0], scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
