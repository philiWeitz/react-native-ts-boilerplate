
import { observable } from 'mobx';

export class AppUIStore {

  @observable
  pIsLoading : boolean = true;


  get isLoading() : boolean {
    return this.pIsLoading;
  }

  set isLoading(value : boolean) {
    this.pIsLoading = value;
  }
}

export default AppUIStore;
