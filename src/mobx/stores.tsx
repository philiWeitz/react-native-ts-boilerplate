
import SamplesStore from './domainStores/samplesStore';
import AppUIStore from './uiStores/appUIStore';

export interface IStores {
  samplesStore: SamplesStore;
  appUIStore: AppUIStore;
}

// combine stores
const stores : IStores = {
  samplesStore: new SamplesStore(),
  appUIStore: new AppUIStore(),
};

export default stores;
