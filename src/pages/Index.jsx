import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <header className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/sollenkroka.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">Welcome to Kayak Trip Planner</h1>
        </div>
      </header>
      <section className="p-4">
        <h2 className="text-2xl font-semibold">Plan Your Kayak Trip from Sollenkroka</h2>
        <p className="mt-2 text-lg">Explore the beautiful waterways and plan your perfect kayak trip.</p>
      </section>
      <section className="p-4">
        <h2 className="text-2xl font-semibold">Map</h2>
        <div className="mt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.1234567890123!2d18.69869029448855!3d59.372972225392466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDIyJzIzLjAiTiAxOMKwNDEnNTYuNiJF!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-64 border-0"
          ></iframe>
        </div>
      </section>
      <section className="p-4">
        <h2 className="text-2xl font-semibold">Plan Your Trip</h2>
        <form className="mt-4 space-y-4">
          <div>
            <label htmlFor="start-date" className="block text-left">Start Date</label>
            <Input type="date" id="start-date" className="w-full" />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-left">End Date</label>
            <Input type="date" id="end-date" className="w-full" />
          </div>
          <div>
            <label htmlFor="number-of-people" className="block text-left">Number of People</label>
            <Input type="number" id="number-of-people" className="w-full" />
          </div>
          <div>
            <label htmlFor="special-requests" className="block text-left">Special Requests</label>
            <Input type="text" id="special-requests" className="w-full" />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </section>
      <footer className="p-4 bg-gray-800 text-white">
        <p>Contact us at info@kayaktripplanner.com</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;