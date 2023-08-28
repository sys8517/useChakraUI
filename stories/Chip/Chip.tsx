"use client";
import { Button } from "@chakra-ui/react";

interface ChipProps {
  text: string;
}

export default function Chip({ text }: ChipProps) {
  return (
    <>
      <Button py={"7px"} variant={"outline"} borderRadius={"full"}>
        {text}
      </Button>
    </>
  );
}
