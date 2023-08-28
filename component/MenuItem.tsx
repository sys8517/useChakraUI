"use client";

import { Button, Icon } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
type MenuItemProps = {
  title: string;
  isNewPost?: boolean;
};
export default function MenuItem({ title, isNewPost }: MenuItemProps) {
  return (
    <Button
      w={"100%"}
      fontSize={"sm"}
      display={"flex"}
      justifyContent={"space-between"}
      bg={"none"}
      padding={"0px"}
    >
      {title}
      {isNewPost === true ? <WarningIcon color={"green.400"} /> : null}
    </Button>
  );
}
