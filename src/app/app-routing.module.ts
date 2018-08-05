import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AmountComponent } from './amount/amount.component';

const routes: Routes = [
    { path: '', component: AmountComponent },
    { path: 'products/id/:id', component: ProductComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule],

})
export class AppRoutingModule { }
