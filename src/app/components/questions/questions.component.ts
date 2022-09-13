import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  listOfQuestions: Question[] = [];
  points : number = 0  

  constructor(public _questionService: QuestionService) { 
    
  }

  ngOnInit(): void {
    this.listOfQuestions = this._questionService.getQuestions();    
  }

  answerSelected(answer : Answer, index : number){
    if(this._questionService.isConfirmed){  
      
      return
    }
    this._questionService.optionSelected = answer;
    this._questionService.isDisabled = false;
    this._questionService.indexAnswer = index;      

  }

  correctIcon(answer : Answer){

    return (answer === this._questionService.optionSelected &&this._questionService.isConfirmed && this._questionService.optionSelected.isCorrect)

  }

  incorrectIcon(answer : Answer){

    return (answer === this._questionService.optionSelected &&this._questionService.isConfirmed && !this._questionService.optionSelected.isCorrect)

  }

  AddClassOption(answer : Answer){

    //When selecting an option before accepting
    if(answer === this._questionService.optionSelected && !this._questionService.isConfirmed){      
      return 'active text-light';
    }

    //if answer is correct
   if(answer === this._questionService.optionSelected &&this._questionService.isConfirmed && this._questionService.optionSelected.isCorrect){
    this._questionService.score ++;
      return 'bg-success text-light';
    }  

    //if answer is wrong
    if(answer === this._questionService.optionSelected &&this._questionService.isConfirmed && !this._questionService.optionSelected.isCorrect){
      return 'bg-danger text-light';
    }  

    return

  }

}
