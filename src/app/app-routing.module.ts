import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './components/answers/answers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [  
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'questions', component: QuestionsComponent},
  {path:'answers', component: AnswersComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
