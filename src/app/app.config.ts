import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-27cfb","appId":"1:1031503411084:web:52b1a4a5dec4c2f115c8a9","storageBucket":"simple-crm-27cfb.appspot.com","apiKey":"AIzaSyAKGeDjPUHAsyDbl9ratJYQuDcRD8XOM6w","authDomain":"simple-crm-27cfb.firebaseapp.com","messagingSenderId":"1031503411084"})), provideFirestore(() => getFirestore())]
};
