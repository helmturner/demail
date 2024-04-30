import { Input } from "@/app/ui/input";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/app/ui/dialog";
import { Label } from "@/app/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/app/ui/select";
import { Button } from "@/app/ui/button";

export const CreateFilterButton = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">
        <FilterIcon className="mr-2 h-4 w-4" />
        Filters
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[475px]">
      <DialogHeader>
        <DialogTitle>Create Filter</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-[auto_1fr] items-center gap-2">
          <Label htmlFor="filter-name">Name</Label>
          <Input id="filter-name" placeholder="Filter name" />
        </div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-2">
          <Label htmlFor="filter-condition">Condition</Label>
          <Select>
            <SelectTrigger>
              <SelectValue
                id="filter-condition"
                placeholder="Select condition"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="from">From</SelectItem>
              <SelectItem value="to">To</SelectItem>
              <SelectItem value="subject">Subject</SelectItem>
              <SelectItem value="body">Body</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-2">
          <Label htmlFor="filter-value">Value</Label>
          <Input id="filter-value" placeholder="Filter value" />
        </div>
        <div className="grid grid-cols-[auto_1fr] items-center gap-2">
          <Label htmlFor="filter-action">Action</Label>
          <Select>
            <SelectTrigger>
              <SelectValue id="filter-action" placeholder="Select action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="archive">Archive</SelectItem>
              <SelectItem value="delete">Delete</SelectItem>
              <SelectItem value="mark">Mark as read</SelectItem>
              <SelectItem value="forward">Forward</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button>Create Filter</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

function FilterIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
