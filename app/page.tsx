"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert(`Button clicked ${clickCount + 1} times!`);
  };
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <Button size="lg" onClick={handleClick}>
        Click Me
      </Button>
      <p className="text-sm text-muted-foreground">
        Button has been clicked {clickCount} times
      </p>
    </div>
  );
}