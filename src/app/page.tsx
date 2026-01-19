import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to Real-time POS</h1>
      <Input />
      <Button className="bg-red-400 dark:bg-amber-300">Click me</Button>
      <DarkmodeToggle />
    </div>
  );
}
