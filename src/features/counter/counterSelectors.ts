import { RootState } from '../../store/configureStore';

export const selectCounterValue = (state: RootState) => state.counter.value;
