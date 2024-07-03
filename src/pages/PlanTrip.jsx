import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PlanTrip = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold">Plan Your Trip</h1>
      <form className="space-y-4">
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
    </div>
  );
};

export default PlanTrip;