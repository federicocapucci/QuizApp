import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  questionList : Question[];
  userResponses : any[];
  score : number = 0;

  constructor(private _questionService: QuestionService, private router: Router) {
    this.questionList = this._questionService.questions
    this.userResponses = this._questionService.userResponses
   }

  ngOnInit(): void {
    this.score = this._questionService.score;
  }

  goBack(){
    this._questionService.userResponses = [];
    this._questionService.score = 0;
    this.router.navigate(['']);
  }
  


}
