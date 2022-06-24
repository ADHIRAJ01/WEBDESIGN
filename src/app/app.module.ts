import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LeadsComponent } from './pages/leads/leads.component';
import { LeadsToolsComponent } from './pages/leads/leads-tools/leads-tools.component';
import { LeadsGridComponent } from './pages/leads/leads-grid/leads-grid.component';
import { DownloadExcelComponent } from './pages/leads/leads-tools/download-excel/download-excel.component';
import { DownloadPdfComponent } from './pages/leads/leads-tools/download-pdf/download-pdf.component';
import { HighlightDirective } from './pages/leads/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LeadsComponent,
    LeadsToolsComponent,
    LeadsGridComponent,
    DownloadExcelComponent,
    DownloadPdfComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
