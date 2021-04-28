import axios from "axios";

export {};

const url: string = "https://jsonplaceholder.typicode.com/users";

axios.get(url).then((res) => {
  interface Article {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  }
  let data: Article[] = res.data;
  console.log(data);
});
