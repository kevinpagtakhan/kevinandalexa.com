
import { Table } from "flowbite-react";
import { type Guest } from "../lib/types";
import { HiOutlineTrash } from "react-icons/hi";
import { Heading } from "./manila/Heading";

interface Props {
  guests: Guest[];
  isLoadingGuests: boolean;
  deleteGuest: (guestId: string) => void;
}

export default function GuestList({
  guests,
  // isLoadingGuests,
  deleteGuest,
}: Props): JSX.Element {

  const headers = [
    {
      id: "name",
      displayName: "Name",
    },
    {
      id: "role",
      displayName: "Role",
    },
    {
      id: "actions",
      displayName: "Actions",
    },
  ];

  const renderCell = (guest: Guest, key: string): JSX.Element => {
    switch (key) {
    case "name":
      return (
        <div>
          <p>{guest.name}</p>
          <small>{guest.email}</small>
        </div>
      );
    case "role":
      return (
        <div className="sm:visible">{guest.role}</div>
      );
    case "rsvp":
      return <p>{1}</p>;
    
    case "actions":
      return (
        <>
          <div onClick={() => {
            deleteGuest(guest.id);
          }}>
            <HiOutlineTrash cursor="pointer" size={20} />
          </div>
        </>
      );
    default:
      return <>1</>;
    }
  };

  return (
    <div>
      <div>
        <Heading h3 text="Guest List" />
      </div>
      <Table
        theme={{
          root: {
            wrapper: "border-gray-400 border-2 rounded-lg",
          },
        }}
      >
        <Table.Head>
          {headers.map(h => (
            <Table.HeadCell key={h.id}>
              {h.displayName}
            </Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body>
          {guests.map((g, i) => (
            <Table.Row key={i}>
              {headers.map((h, j) => (
                <Table.Cell key={`${i}-${j}`}>
                  {renderCell(g, h.id)}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );

  // const columns = [
  //   {
  //     name: "NAME",
  //     uid: "name", 
  //   },
  //   {
  //     name: "ROLE",
  //     uid: "role", 
  //   },
  //   {
  //     name: "RSVP",
  //     uid: "rsvp", 
  //   },
  //   {
  //     name: "ACTIONS",
  //     uid: "actions", 
  //   },
  // ];

  // const renderCell = (guest: Guest, key: string | number): JSX.Element => {
  //   switch (key) {
  //   case "name":
  //     return (
  //       <div>
  //         <p>{guest.name}</p>
  //         <small>{guest.email}</small>
  //       </div>
  //     );
  //   case "role":
  //     return (
  //       <p>{1}</p>
  //     );
  //   case "rsvp":
  //     return <p>{1}</p>;

  //   case "actions":
  //     return (
  //       <>
  //         <div onClick={() => {
  //           deleteGuest(guest.id);
  //         }}>
  //           <Delete style={{
  //             cursor: "pointer",
  //           }} />
  //         </div>
  //       </>
  //     );
  //   default:
  //     return <>1</>;
  //   }
  // };

  // // if (isLoadingGuests || guests.length === 0) {
  // //   return (
  // //     <Row
  // //       justify="center"
  // //       align="center"
  // //     >
  // //       {isLoadingGuests && <Loading />}
  // //     </Row>
  // //   );
  // // }

  // return (
  //   <Table
  //     // css={{
  //     //   height: "auto",
  //     //   minWidth: "100%",
  //     // }}
  //     shadow="none"
  //     // bordered
  //   >
  //     <TableHeader columns={columns}>
  //       {(column) => (
  //         <TableColumn
  //           key={column.uid}
  //           hideHeader={column.uid === "actions"}
  //           align={column.uid === "actions" ? "center" : "start"}
  //         >
  //           {column.name}
  //         </TableColumn>
  //       )}
  //     </TableHeader>
  //     <TableBody items={guests}>
  //       {(item) => (
  //         <TableRow>
  //           {(columnKey) => (
  //             <TableCell>{renderCell(item, columnKey)}</TableCell>
  //           )}
  //         </TableRow>
  //       )}
  //     </TableBody>
  //   </Table>
  // );
}
