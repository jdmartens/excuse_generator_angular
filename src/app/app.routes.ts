import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AdvancedExcuseComponent } from './advanced-excuse/advanced-excuse.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'advanced-excuse', component: AdvancedExcuseComponent },
  { path: 'about', component: AboutComponent },
];
