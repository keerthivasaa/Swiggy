export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Swiggy: undefined;
  Search: undefined;
  Cart: undefined;
  Account: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  id: string;
  imageUri: string;
};

export type Song = {
  id: string,
  imageUri: string,
  hotelName: string;
  item: string;
  address: string,
  rating: number,
  kilometers: number;
  deliveryTime: number;
  offers: number;
  coupons: string;
}

