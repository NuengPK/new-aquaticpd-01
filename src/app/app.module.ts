import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AquaticFoodComponent } from './aquatic-food/aquatic-food.component';
import { AquaticFoodListComponent } from './aquatic-food/aquatic-food-list/aquatic-food-list.component';
import { AquaticFoodItemComponent } from './aquatic-food/aquatic-food-item/aquatic-food-item.component';
import { AquaticFoodDetallComponent } from './aquatic-food/aquatic-food-detall/aquatic-food-detall.component';
import { DistridutionListComponent } from './distridution-list/distridution-list.component';
import { DistributionEditComponent } from './distridution-list/distribution-edit/distribution-edit.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AquaticFoodComponent,
    AquaticFoodListComponent,
    AquaticFoodItemComponent,
    AquaticFoodDetallComponent,
    DistridutionListComponent,
    DistributionEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
