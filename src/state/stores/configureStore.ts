import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import rootReducer, {RootState} from '../reducers/rootReducer';
import OfflineDataManager from 'helpers/OfflineDataManager';

let store: EnhancedStore;

function buildStore(initialState: RootState) {
  store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  // TODO: remove this if you don't want your state to be saved offline on every change
  store.subscribe(() => {
    OfflineDataManager.saveState(store.getState());
  });

  return store;
}

const dispatch = (params: any) => {
  store.dispatch(params);
};

export {buildStore, dispatch};
