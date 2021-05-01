import { ResourcesComponent } from './resources/resources.component';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessageCenterComponent } from './message-center/message-center.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { KbplProjectsComponent } from './kbpl-projects/kbpl-projects.component';
import { GridViewComponent } from './clients/grid-view/grid-view.component';
import { InventoryComponent } from './stores/inventory/inventory.component';
import { InventoryyComponent } from './inventoryy/inventoryy.component';

export const routes: Routes = [
    {
        path: 'mrc',
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'radar', pathMatch: 'full' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Carriers' } },
            { path: 'radar', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: 'Radar' } },
             { path: 'clients', loadChildren: './clients/clients.module#ClientsModule', data: { breadcrumb: 'Clients' } },
            // { path: 'clients',component: GridViewComponent, data: { breadcrumb: 'Clients' } },
            { path:'projects',loadChildren:'./kbpl-projects/kbpl-projects.module#KBPLProjectsModule'},
            {path:'contractors',component:ContractorsComponent,data:{breadcrumb:"Contractors"}},
            { path: 'contracts', loadChildren: './mrc-projects/mrc-projects.module#MrcProjectsModule', data: { breadcrumb: '' } },
            { path: 'stores', loadChildren: './stores/stores.module#StoresModule', data: { breadcrumb: 'Stores' } },
            { path: 'ho-activity', loadChildren: './ho-activity/ho-activity.module#HoActivityModule', data: { breadcrumb: 'Ho-Activity' } },
            { path: 'inventoryy', loadChildren: './inventoryy/inventoryy.module#InventoryyModule', data: { breadcrumb: 'Ho-Activity' } },
            { path: 'purchase', loadChildren: './purchase/purchase.module#PurchaseModule', data: { breadcrumb: 'Purchase' } },
            { path: 'resources', loadChildren: './resources/resources.module#ResourcesModule',component:ResourcesComponent, data: { breadcrumb: 'Resources' } },
            { path: 'hr', loadChildren: './hr/hr.module#HrModule', data: { breadcrumb: 'Projects' } },
            { path: 'accounting', loadChildren: './accounting/accounting.module#AccountingModule', data: { breadcrumb: 'Finance' } },
            // { path: 'logistics', loadChildren: './logistics/logistics.module#LogisticsModule', data: { breadcrumb: 'Logistics' } },
            { path: "message-center", component:MessageCenterComponent, data: { breadcrumb: "Message Center" }}
        ]
    },
    { path: '', loadChildren: './logins/logins.module#LoginsModule', data: { breadcrumb: 'Login' } },
    // { path: 'paymentpage/:packageId', component: PaymentPageComponent, data: { breadcrumb: 'Login' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' } }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    // useHash: true
});