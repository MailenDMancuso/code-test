/** Interface fot the User Details object */
export interface UserDetails {
  id: {
    name: string;
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  }
  picture: {
    medium: string;
  }
  login: {
    uuid: string;
  }
}
