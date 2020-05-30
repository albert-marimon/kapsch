/*REQUIRED IMPORTS*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*COMPONENTS IMPORT*/
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/error/error.component';


/*ROUTES*/
const appRoutes: Routes = [
	{path: '', component: SearchComponent},
	{path: 'search', component: SearchComponent},
	{path: '**', component: ErrorComponent}
];

/*CONFIGURATION EXPORT*/
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);