import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app';
import {TodosService} from './todos-service';

bootstrap(AppComponent, [TodosService]);
