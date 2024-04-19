import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../../1_app/redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
