import {createContext} from 'react';

const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer
} = createContext();

export {
  BookstoreServiceProvider,
  BookstoreServiceConsumer
};