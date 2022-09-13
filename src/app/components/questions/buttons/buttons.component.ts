import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  btnString = 'Accept'

  constructor(public _questionService : QuestionService,
    private router: Router) {}

  ngOnInit(): void {    
  }

  next(){    
    switch(this.btnString) {
    case 'Accept':
        this._questionService.isConfirmed = true;
        this._questionService.isDisabled = false;
        this.btnString = 'Next';    
        if(this._questionService.questions.length -1 == this._questionService.indexQuestion){
          this.btnString = 'Finish';   
        }   
        break;
    case 'Next':
        this._questionService.indexQuestion++;
        this._questionService.userResponses.push(this._questionService.indexAnswer!)
        this._questionService.isDisabled = true;
        this._questionService.isConfirmed = false;
        this.btnString = 'Accept';
        break;
    case 'Finish': 
      this._questionService.userResponses.push(this._questionService.indexAnswer!)
      this._questionService.optionSelected = null;
      this._questionService.isConfirmed = false;
      this._questionService.indexQuestion = 0;
      this.router.navigate(['/answers']);

    }
  }   
}
