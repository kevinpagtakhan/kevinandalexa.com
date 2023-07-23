import { type Guest, type GuestInput } from "./types";

export async function listGuests (): Promise<Guest[]> {
  const data = await fetch("/api/internal/guests");
  return await data.json();
}

export async function createGuest (guest: GuestInput): Promise<Guest> {
  const data = await fetch("/api/internal/guest", {
    method: "POST",
    body: JSON.stringify({
      name: guest.name,
      email: guest.email,
      role: guest.role,
    }),
  });

  return await data.json() as Guest;
}

export async function deleteGuest (guestId: string): Promise<Guest> {
  return deleteGuests([guestId]);
}

export async function deleteGuests (guestIds: string[]): Promise<Guest> {
  const data = await fetch("/api/internal/guests", {
    method: "DELETE",
    body: JSON.stringify(guestIds),
  });

  return await data.json();
}