import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";

const Index = () => {
  const [tripDetails, setTripDetails] = useState({
    date: "",
    duration: "",
    people: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip Details:", tripDetails);
  };

  return (
    <div className="text-center">
      <header className="relative h-64 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/sollenkroka.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Kayak Trips from Sollenkroka</h1>
          <p className="mt-2 text-lg">Plan your perfect kayak adventure</p>
        </div>
      </header>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="mt-4 text-lg">
          Discover the beauty of Sollenkroka and its surroundings by planning your kayak trip with us. Enjoy the serene waters and breathtaking views.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Map</h2>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.1234567890123!2d18.69869029448855!3d59.372972225392466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDIyJzIzLjAiTiAxOMKwNDEnNTUuOCJF!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="mx-auto border-0"
          ></iframe>
        </div>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Plan Your Trip</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" name="date" type="date" value={tripDetails.date} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="duration">Duration (days)</Label>
            <Input id="duration" name="duration" type="number" value={tripDetails.duration} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="people">Number of People</Label>
            <Input id="people" name="people" type="number" value={tripDetails.people} onChange={handleChange} />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
      <footer className="mt-8 border-t pt-4">
        <p>Contact us at: info@kayaktrips.com</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-400">Twitter</a>
          <a href="#" className="text-pink-500">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;