"use client";

import { Button } from "../common";
import { useSelectedItems } from "./selected-items-context";

export default function DeleteButton() {
  const { selectedItems } = useSelectedItems();

  return (
    <div className={`${selectedItems.length < 1 && "hidden"}`}>
      <div className="flex items-center">
        <div className="hidden xl:block text-sm italic mr-2 whitespace-nowrap">
          <span>{selectedItems.length}</span> items selected
        </div>
        <Button> Delete</Button>
      </div>
    </div>
  );
}
