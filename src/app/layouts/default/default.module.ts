import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent ,
    PostsComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: []
})
export class DefaultModule { }
