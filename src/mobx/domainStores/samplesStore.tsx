
import { persist } from 'mobx-persist';
import { observable, action } from 'mobx';


class SamplesStore {

  @observable
  items: string[] = ['a','b'];

  @persist
  @observable
  counter: number = 0;

  @action
  incCounter() {
    this.counter = this.counter + 1;
  }

}

export default SamplesStore;
