
import { observable } from 'mobx';

export class GlobalAppUIStore {

  @observable
  isLoading : boolean = false;


  set setIsLoading(value : boolean) {
    this.isLoading = value;
  }
}

export default GlobalAppUIStore;
