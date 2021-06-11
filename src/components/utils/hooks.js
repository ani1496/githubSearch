import { useReducer } from 'react';

export const reducer = (state, payload) => (payload? {...state, ...payload} : state);
export const useStoreState = (initialState) => useReducer(reducer, initialState);