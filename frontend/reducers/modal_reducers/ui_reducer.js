import { combineReducers } from 'redux';
import { ModalReducer } from './modal_reducer';

export const UIReducer = combineReducers({
  modal: ModalReducer
});
