import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  //List of questions, add here
  questions: Question[] = [
    new Question("Which is the Capital of Argentina?", [
      new Answer('Cordoba', 0),
      new Answer('Buenos Aires', 1),
      new Answer('Catamarca', 0),
      new Answer('Santa Fe', 0),
    ]),
    new Question("Which animal/s you can see in the Mexican flag?", [
      new Answer('A bear', 0),
      new Answer('A Coyote and an Ant', 0),
      new Answer('A Hawk and a Snake', 1),
      new Answer('2 Snakes', 0),
    ]),
    new Question('How many stars does the American flag have?', [
      new Answer('50', 1),
      new Answer('69', 0),
      new Answer('40', 0),
      new Answer('70', 0),
    ]),
    new Question('Which European country is famous for its pasta and pizzas?', [
      new Answer('Spain', 0),
      new Answer('Italy', 1),
      new Answer('France', 0),
      new Answer('Germany', 0),
    ]),
    new Question('How many alphabets do the japanese have?', [
      new Answer('None', 0),
      new Answer('One', 0),
      new Answer('Two', 0),
      new Answer('Three', 1),
    ]),
    new Question('Which country flag has a shield?', [
      new Answer('Cameroon', 0),
      new Answer('Eswatini', 1),
      new Answer('Zimbabwe', 0),
      new Answer('Nepal', 0),
    ]),
     new Question('What color do you get if you mix yellow and red?', [
      new Answer('Cyan', 0),
      new Answer('Green', 0),
      new Answer('Orange', 1),
      new Answer('Brown', 0),
    ]),
    new Question('How many primary colors exist?', [
      new Answer('1', 0),
      new Answer('2', 0),
      new Answer('3', 1),
      new Answer('4', 0),
    ]),
    new Question('how many colors can the human eye see?', [
      new Answer('3 colors', 0),
      new Answer('128 colors', 0),
      new Answer('256 colors', 0),
      new Answer('More than 256 colors', 1),
    ]),
    new Question('What is the most-used color in national flags?', [
      new Answer('Blue', 0),
      new Answer('Red', 1),
      new Answer('White', 0),
      new Answer('Green', 0),
    ]),
    new Question('Traditionally, what color is considered unisex for babies?', [
      new Answer('Pink', 0),
      new Answer('Cyan', 0),
      new Answer('Yellow', 1),
      new Answer('White', 0),
    ]),
    new Question('What color planet is Mars otherwise known as?', [
      new Answer('Red', 1),
      new Answer('Brown', 0),
      new Answer('Orange', 0),
      new Answer('Red and Black', 0),
    ]),
    new Question('What color submarine did The Beatles sing about in 1966?', [
      new Answer('Pink', 0),
      new Answer('Yellow', 1),
      new Answer('Orange', 0),
      new Answer('Fucsia', 0),
    ]),
    new Question('How many different colors are there in the Google logo?', [
      new Answer('3', 0),
      new Answer('4', 1),
      new Answer('5', 0),
      new Answer('6', 0),
    ]),

    new Question('Orly airport serves which European city?', [
      new Answer('Brussels', 0),
      new Answer('Amsterdam', 0),
      new Answer('Rome', 0),
      new Answer('Paris', 1),
    ]),
    new Question('Which word means a list of things you wish to achieve in your lifetime?', [
      new Answer('Bucket List', 1),
      new Answer('Mystery List', 0),
      new Answer('Goal List', 0),
      new Answer('Strange List', 0),
    ]),
    new Question('Voodoo beliefs originated in which Caribbean island nation??', [
      new Answer('Dominica', 0),
      new Answer('Jamaica', 0),
      new Answer('Haiti', 1),
      new Answer('Antigua & Barbuda', 0),
    ]),
    new Question('Flamenco is a traditional dance style associated with which country??', [
      new Answer('Mexico', 0),
      new Answer('Argentina', 0),
      new Answer('Portugal', 0),
      new Answer('Spain', 1),
    ]),
    new Question('Cupid is the Roman equivalent of which Greek God?', [
      new Answer('Eolos', 0),
      new Answer('Apollo', 0),
      new Answer('Eros', 1),
      new Answer('Persefone', 0),
    ]),
    
    new Question('Photophobia is extreme sensitivity to what?', [
      new Answer('Photos', 0),
      new Answer('Light', 1),
      new Answer('Darkness', 0),
      new Answer('Wind', 0),
    ]),
    new Question("According to the saying, you shouldn't put all of which food in one basket?", [
      new Answer('Oranges', 0),
      new Answer('Fish', 0),
      new Answer('Eggs', 1),
      new Answer('Apples', 0),
    ]),
    new Question('Which color of cat is associated with witches?', [
      new Answer('White', 0),
      new Answer('3-colored', 0),
      new Answer('Black', 1),
      new Answer('Gray', 0),
    ]),
    new Question('Which color of moon means once in a very long time?', [
      new Answer('Black', 0),
      new Answer('Red', 0),
      new Answer('Blue', 1),
      new Answer('Yellow', 0),
    ]),
    new Question('According to Greek myth, the labyrinth built by Daedalus housed which monster?', [
      new Answer('Hieropant', 0),
      new Answer('Gryphon', 0),
      new Answer('Minotaur', 1),
      new Answer('Centaur', 0),
    ]),
    new Question('Which aquatic animal builds dams to block rivers? ', [
      new Answer('Seal', 0),
      new Answer('Other', 0),
      new Answer('Beaver', 1),
      new Answer('Penguin', 0),
    ]),
    new Question('Kabuki is a form of theater in which country?', [
      new Answer('China', 0),
      new Answer('Korea', 0),
      new Answer('Japan', 1),
      new Answer('Thailand', 0),
    ]),
    new Question('Bacon comes from which animal?', [
      new Answer('Chicken', 0),
      new Answer('Goat', 0),
      new Answer('Pork', 1),
      new Answer('Horse', 0),
    ]),
    new Question("Which country's flag has a green star on a red background?", [
      new Answer('Vietnam', 0),
      new Answer('China', 0),
      new Answer('Morocco', 1),
      new Answer('Cameroon', 0),
    ]),
  ]  
 
  optionSelected :Answer | null = {name:'',isCorrect:1} ;
  isDisabled :boolean = true;
  isConfirmed :boolean = false;
  indexQuestion: number = 0;
  score: number = 0;
  indexAnswer : number  | null = null;
  userResponses : number[]=[]

  constructor() { }

  getQuestions(){   
    this.questions.sort(()=>(Math.random()-0.5))   
    for(let question of this.questions){
      question.answers.sort(()=>(Math.random()-0.5))   
    }
    
    this.questions = this.questions.slice(0, 10)

    return this.questions
  }
}
