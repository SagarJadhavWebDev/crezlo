"use client";

import { useCallback, useState } from "react";
import { $getSelectionStyleValueForProperty, $patchStyleText } from "@lexical/selection";
import { $getSelection, $isRangeSelection, BaseSelection } from "lexical";
// import { TypeIcon } from "lucide-react";

import { useToolbarContext } from "../../context/toolbar-context";
import { useUpdateToolbarHandler } from "../../editor-hooks/use-update-toolbar";
import { FontPicker } from "../../../fonts";
// import { Select, SelectContent, SelectItem, SelectTrigger } from "@/app/[websiteId]/[...slug]/ui/select";

const FONT_FAMILY_OPTIONS = [
  ["Arial", "Arial, sans-serif"],
  ["Helvetica", "Helvetica, sans-serif"],
  ["Times New Roman", '"Times New Roman", serif'],
  ["Courier New", '"Courier New", monospace'],
  ["Verdana", "Verdana, sans-serif"],
  ["Georgia", "Georgia, serif"],
  ["Palatino", "Palatino, serif"],
  ["Garamond", "Garamond, serif"],
  ["Bookman", "Bookman, serif"],
  ["Comic Sans MS", '"Comic Sans MS", cursive'],
  ["Trebuchet MS", '"Trebuchet MS", sans-serif'],
  ["Arial Black", '"Arial Black", sans-serif'],
  ["Impact", "Impact, sans-serif"],
  ["Lucida Console", '"Lucida Console", monospace'],
  ["Tahoma", "Tahoma, sans-serif"],
  ["Monaco", "Monaco, monospace"],
  ["Roboto", "Roboto, sans-serif"],
  ["Open Sans", '"Open Sans", sans-serif'],
  ["Lato", "Lato, sans-serif"],
  ["Montserrat", "Montserrat, sans-serif"],
  ["Poppins", "Poppins, sans-serif"],
  ["Inter", "Inter, sans-serif"],
  ["Playfair Display", '"Playfair Display", serif'],
  ["Merriweather", "Merriweather, serif"],
  ["Source Sans Pro", '"Source Sans Pro", sans-serif'],
];

export function FontFamilyToolbarPlugin() {
  const style = "font-family";
  const [fontFamily, setFontFamily] = useState("Arial");

  const { activeEditor } = useToolbarContext();

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection)) {
      setFontFamily($getSelectionStyleValueForProperty(selection, "font-family", "Arial"));
    }
  };

  useUpdateToolbarHandler($updateToolbar);

  const handleClick = useCallback(
    (option: string) => {
      activeEditor.update(() => {
        const selection = $getSelection();
        if (selection !== null) {
          $patchStyleText(selection, {
            [style]: option,
          });
        }
      });
    },
    [activeEditor, style]
  );

  const buttonAriaLabel = "Formatting options for font family";

  return (
    <FontPicker
      value={fontFamily}
      showFilters={false}
      onChange={(value) => {
        setFontFamily(value);
        handleClick(value);
      }}
      className="!h-8 w-min gap-1"
    />
  );

  // return (
  //   <Select
  //     value={fontFamily}
  //     onValueChange={(value) => {
  //       setFontFamily(value);
  //       handleClick(value);
  //     }}
  //     aria-label={buttonAriaLabel}
  //   >
  //     <SelectTrigger className="!h-8 w-min gap-1">
  //       <TypeIcon className="size-4" />
  //       <span>{FONT_FAMILY_OPTIONS.find(([_, v]) => v === fontFamily)?.[0] ?? "Arial"}</span>
  //     </SelectTrigger>
  //     <SelectContent>
  //       {FONT_FAMILY_OPTIONS.map(([option, value]) => (
  //         <SelectItem key={option} value={value}>
  //           {option}
  //         </SelectItem>
  //       ))}
  //     </SelectContent>
  //   </Select>
  // );
}
