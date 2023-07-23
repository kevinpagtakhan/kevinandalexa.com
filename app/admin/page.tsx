"use client";

import GuestList from "@/components/guest-list-table";
import CreateGuestForm from "@/components/create-guest-form";
import { useGuests } from "@/components/hooks";
import { Container } from "@/components/manila/Container";
import { Heading } from "@/components/manila/Heading";

export default function Admin(): JSX.Element {
  const {
    guests,
    isLoadingGuests,
    createGuest,
    deleteGuest,
  } = useGuests();

  return (
    <Container>
      <Heading h1 text="Manage Guests" />
      <CreateGuestForm createGuest={createGuest} />
      <GuestList
        guests={guests}
        isLoadingGuests={isLoadingGuests}
        deleteGuest={deleteGuest}
      />
    </Container>
  );
}
