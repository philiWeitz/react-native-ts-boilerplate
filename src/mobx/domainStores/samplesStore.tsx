
import { persist } from 'mobx-persist';
import { observable, action } from 'mobx';


class SamplesStore {

  @persist('list')
  @observable
  items: string[] = ['a','b'];

  @persist
  @observable
  counter: number = 0;

  @action
  incCounter() {
    this.counter = this.counter + 1;
  }

  @action
  pushAndPopItem(item: string) {
    this.items.push(item);
    this.items.shift();
  }
}

export default SamplesStore;
