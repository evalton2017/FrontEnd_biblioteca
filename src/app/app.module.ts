import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import {LivroModule} from './livro/livro.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NbThemeModule, NbTreeGridModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbCardModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EditoraModule} from './editora/editora.module';
import {VinculoEditoraModule} from './vinculo-editora/vinculo-editora.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    LivroModule,
    EditoraModule,
    VinculoEditoraModule,
    NgbModule,
    //Modulo Nebular
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbThemeModule.forRoot(),
    NbEvaIconsModule,
    NbSelectModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
