
import { observable } from 'mobx';


class SamplesStore {

  @observable
  items: string[] = ['a','b'];

}

export default SamplesStore;
