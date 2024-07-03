import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Details:", contactDetails);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" type="text" value={contactDetails.name} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={contactDetails.email} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" value={contactDetails.message} onChange={handleChange} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;