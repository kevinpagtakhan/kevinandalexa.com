export interface Guest {
  id: string;
  name: string;
  email?: string;
  role?: string;
}

export type GuestInput = OmitId<Guest>;

export type OmitId<T> = Omit<T, "id">;