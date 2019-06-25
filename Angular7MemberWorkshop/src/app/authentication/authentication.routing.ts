import { Routes, RouterModule } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const RouteList: Routes = [
    { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
    {path:AuthURL.Dashboard,component:DashboardComponent}
];

export const AuthenticationRouting = RouterModule.forChild(RouteList); // forChild ไว้ต่อ url ข้างหลัง 