import {useEffect, useState} from 'react';
import {Store} from 'redux';
import {buildStore} from 'state/stores/configureStore';
import OfflineDataManager from 'helpers/OfflineDataManager';

const useStore = () => {
  const [store, setStore] = useState<Store | null>(null);

  // Try to load the saved redux state
  useEffect(() => {
    const loadState = async () => {
      const savedState = await OfflineDataManager.loadState();
      setStore(buildStore(savedState));
    };

    loadState();
  }, []);

  return store;
};

export default useStore;
