import { Injectable } from '@angular/core';
import { CanActivate, Router,
   ActivatedRouteSnapshot, RouterStateSnapshot,
    CanLoad, Route} from '@angular/router';
import { WorkflowService } from './workflow.service';


@Injectable()
export class WorkflowGuardService implements CanActivate {

  constructor(private router: Router, private workFlowService: WorkflowService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{

    const path: string = route.routeConfig.path;
    return this.verifyWorkflow(path);
  }

  verifyWorkflow(path):boolean{

    const firstPath: string = this.workFlowService.getFirstInvalidStep(path);

    if(firstPath.length > 0){
      const url = `/${firstPath}`;
      this.router.navigate([url]);
      return false;
    }

    return true; 
  }

}
