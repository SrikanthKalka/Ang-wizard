import { Injectable } from '@angular/core';
import { Steps } from './workflow.model';
import { element } from 'protractor';

@Injectable()
export class WorkflowService {

  private workflow = [
    { step: Steps.userinfo, valid: false},
    { step: Steps.cardinfo, valid: false},
    { step: Steps.addressinfo, valid: false},
  ];

  validateStep(step: string){
   
    let found = false; 
    for(let i =0; i< this.workflow.length && !found; i++){
      
        if(this.workflow[i].step == step){
          found = this.workflow[i].valid = true;
        }
    }
  }
  resetSteps(){
    // reset if any of the workflow is found invalid
    this.workflow.forEach(element => {
      element.valid = false;
    })
  } 
  
  getFirstInvalidStep(step:string): string {
    // if all the previous steps are validated then return blank or else return the first invalid step
    let found = false;
    let valid = true;
    let redirectToStep = '';

    for(let i = 0; i<this.workflow.length && !found && valid; i++){
      const item = this.workflow[i];
      if(item.step == step){
        found = true;
        redirectToStep = '';
      } else {
        valid = item.valid;
        redirectToStep = item.step;
      }
    }
    return redirectToStep;
  }
  
  constructor() { }

}
