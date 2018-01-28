
import SamplesStore from './domainStores/samplesStore';
import GlobalAppUIStore from './uiStores/globalAppUIStore';

export interface IStores {
  samplesStore: SamplesStore;
  appUIStateStore: GlobalAppUIStore;
}

// combine stores
const stores : IStores = {
  samplesStore: new SamplesStore(),
  appUIStateStore: new GlobalAppUIStore(),
};

export default stores;
