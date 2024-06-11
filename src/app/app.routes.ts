import { Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { PlayComponent } from './play/play.component';

export const routes: Routes = [
    { path: "play", component: PlayComponent, pathMatch: 'full' },
    { path: "result", component: ResultComponent, pathMatch: 'full' },
    { path: "**", redirectTo: "play" }];
