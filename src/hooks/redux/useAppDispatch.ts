import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../store/configureStore';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
