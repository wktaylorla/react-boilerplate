import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../../store/configureStore';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
