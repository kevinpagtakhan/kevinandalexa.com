import { useCallback, useState } from "react";
import { type GuestInput } from "../lib/types";
import { Heading } from "./manila/Heading";
import {
  Button, Dropdown, Label, TextInput, 
} from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  createGuest: (guest: GuestInput) => void;
}

export default function CreateGuestForm({
  createGuest,
}: Props): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [role, setRole] = useState<string | undefined>(undefined);

  const resetForm = useCallback(() => {
    setName("");
    setEmail(undefined);
    setRole(undefined);
  }, [setName, setEmail, setRole]);

  const handleSubmit = useCallback(() => {
    setLoading(true);
    createGuest({
      name,
      email,
      role,
    });
    resetForm();
    setLoading(false);
  }, [name, email, role, createGuest, resetForm]);
  
  const roleOptions = [
    {
      id: "Guest",
      displayName: "Guest", 
    },
    {
      id: "Parent",
      displayName: "Parent", 
    },
    {
      id: "PrincipalSponsor",
      displayName: "Principal Sponsor", 
    },
    {
      id: "SecondarySponsor",
      displayName: "Secondary Sponsor", 
    },
    {
      id: "Bridesmaid",
      displayName: "Bridesmaid", 
    },
    {
      id: "Groomsman",
      displayName: "Groomsman", 
    },
  ];

  const selectedRole = roleOptions.find(r => r.id === role);

  return (
    <div className="pb-4">
      <div>
        <Heading h3 text="Add Guest" />
      </div>
      <div className="pb-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          <div>
            <Label htmlFor="create-guest-form-name">Name</Label>
            <TextInput
              id="create-guest-form-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="create-guest-form-email">Email</Label>
            <TextInput
              id="create-guest-form-email"
              value={email ?? ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="create-guest-form-role">Role</Label>
            <Dropdown
              label="asdf"
              inline
              renderTrigger={() => (
                <TextInput
                  id="create-guest-form-role"
                  value={selectedRole?.displayName ?? ""}
                  readOnly
                  rightIcon={HiChevronDown}
                />
              )}
            >
              {roleOptions.map((r) => (
                <Dropdown.Item
                  key={r.id}
                  onClick={() => {
                    setRole(r.id);
                  }}
                >
                  {r.displayName}
                </Dropdown.Item>  
              ))}
            </Dropdown>
            
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-2">
        <div className="md:col-start-5 md:col-end-6">
          <Button color="gray" onClick={resetForm} className="w-full" isProcessing={loading}>Reset</Button>
        </div>
        <div className="md:col-start-6 md:col-end-7">
          <Button onClick={handleSubmit} className="w-full" isProcessing={loading}>Add</Button>
        </div>
      </div>
    </div>
  );
}
