import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const PlanTrip = () => {
  const [tripDetails, setTripDetails] = useState({
    startDate: "",
    endDate: "",
    people: "",
    requests: "",
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
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-center">Plan Your Kayak Trip</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <Input id="startDate" name="startDate" type="date" value={tripDetails.startDate} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="endDate">End Date</Label>
          <Input id="endDate" name="endDate" type="date" value={tripDetails.endDate} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="people">Number of People</Label>
          <Input id="people" name="people" type="number" value={tripDetails.people} onChange={handleChange} />
        </div>
        <div>
          <Label htmlFor="requests">Special Requests</Label>
          <Textarea id="requests" name="requests" value={tripDetails.requests} onChange={handleChange} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default PlanTrip;