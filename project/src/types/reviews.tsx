
export type User = {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
};

export type Reviews = {
    comment: string;
    date: string;
    id: number;
    rating: number;
    user: User;
};

export type ReviewData = {
    comment: string;
    rating: number;
    hotelId: number;
  };
