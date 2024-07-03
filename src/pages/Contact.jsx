import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-left">Name</label>
          <Input type="text" id="name" className="w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-left">Email</label>
          <Input type="email" id="email" className="w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block text-left">Message</label>
          <Textarea id="message" className="w-full" />
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;