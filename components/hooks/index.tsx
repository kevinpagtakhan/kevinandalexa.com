import {
  listGuests as listGuestsRequest,
  createGuest as createGuestRequest,
  deleteGuest as deleteGuestRequest,
} from "@/lib/request";
import { type Guest, type GuestInput } from "@/lib/types";
import {
  useCallback, useEffect, useState, 
} from "react";

export function useGuests(): {
  guests: Guest[];
  isLoadingGuests: boolean;
  createGuest: (guest: GuestInput) => void;
  deleteGuest: (guestId: string) => void;
  listGuests: () => void;
  } {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(false);

  const createGuest = useCallback(
    (guest: GuestInput) => {
      const tempId = Date.now().toString();
      setGuests(guests => {
        return [
          ...guests,
          {
            ...guest,
            id: tempId,
          },
        ];
      });

      createGuestRequest(guest).then((guest) => {
        setGuests(guests => {
          const guestIndexToUpdate = guests.findIndex((g) => g.id === tempId);
          return [
            ...guests.slice(0, guestIndexToUpdate),
            guest,
            ...guests.slice(
              guestIndexToUpdate + 1,
              guests.length,
            ),
          ];
        });
      });
    },
    [],
  );

  const deleteGuest = useCallback(
    (guestId: string) => {
      setGuests(guests => {
        const guestIndexToDelete = guests.findIndex((g) => g.id === guestId);
        return [
          ...guests.slice(0, guestIndexToDelete),
          ...guests.slice(
            guestIndexToDelete + 1,
            guests.length,
          ),
        ];
      });
      deleteGuestRequest(guestId);
    },
    [],
  );

  const listGuests = useCallback(() => {
    setLoading(true);
    setGuests([]);
    listGuestsRequest().then((guests) => {
      setGuests(guests);
      setLoading(false);
    });
  }, [setGuests, setLoading]);

  useEffect(() => {
    listGuests();
  }, [listGuests]);

  return {
    guests: guests.sort((a, b) => a.name.localeCompare(b.name)),
    isLoadingGuests: loading,
    createGuest,
    deleteGuest,
    listGuests,
  };
}
