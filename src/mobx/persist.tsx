
import { AsyncStorage } from 'react-native';
import { create, IHydrateResult } from 'mobx-persist';


export interface IHydrateStore {
  key : string;
  store : object;
}


class Persist {

  private hydrate : <T>(key: string, store: T) => IHydrateResult<T>;

  constructor() {
    this.hydrate = create({
      storage: AsyncStorage,
      jsonify: true,
    });
  }

  hydrateStores(stores: IHydrateStore[]) : Promise {
    return Promise.all(stores.map((item: IHydrateStore) => {
      console.log(`Hydrate ${item.key}`);
      return this.hydrate(item.key, item.store);
    }));
  }

}

export default new Persist();
