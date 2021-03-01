import React from "react";
import BookstoreService from "../../services/book-service";
import { BookstoreServiceConsumer } from "../BookstoreServiceContext";


const WithBookstoreService = () => (Wrapped:any) => {
  return ( props: any) => {
    return (
      <BookstoreServiceConsumer>
        {
          (BookstoreService) => {
            return (<Wrapped {...props}
bookstoreService={BookstoreService}/>
              )
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default WithBookstoreService;