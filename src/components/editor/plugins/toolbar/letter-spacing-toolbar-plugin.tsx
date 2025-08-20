"use client";

import { useCallback, useState } from "react";
import { $getSelectionStyleValueForProperty, $patchStyleText } from "@lexical/selection";
import { $getSelection, $isRangeSelection, BaseSelection } from "lexical";
import { StretchVerticalIcon } from "lucide-react";

import { useToolbarContext } from "../../context/toolbar-context";
import { useUpdateToolbarHandler } from "../../editor-hooks/use-update-toolbar";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";

export function LetterSpacingToolbarPlugin() {
  const { activeEditor } = useToolbarContext();

  const [letterSpacing, setLetterSpacing] = useState(0);

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection)) {
      setLetterSpacing(getNumberFromPixel($getSelectionStyleValueForProperty(selection, "letter-spacing", "0px")));
    }
  };

  useUpdateToolbarHandler($updateToolbar);

  const getNumberFromPixel = (pixel: string) => {
    const match = pixel.match(/-?\d+(\.\d+)?/);
    return match ? Number(match[0]) : 0;
  };

  const applyStyleText = useCallback(
    (styles: Record<string, string>, skipHistoryStack?: boolean) => {
      activeEditor.update(
        () => {
          const selection = $getSelection();
          if (selection !== null) {
            $patchStyleText(selection, styles);
          }
        },
        skipHistoryStack ? { tag: "historic" } : {}
      );
    },
    [activeEditor]
  );

  const onLetterSpacingChange = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ "letter-spacing": value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  console.log("LETTER SPACING:", letterSpacing);
  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <Button size={"icon"} className="!h-8 !w-8" variant={"outline"}>
          <span className="size-4 rounded-full">{<StretchVerticalIcon className="size-4" />}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 px-1">
        <Input
          type="range"
          min={-100}
          max={100}
          step={1}
          onChange={(e) => {
            e.stopPropagation();
            onLetterSpacingChange?.(`${e?.target?.value ?? 0}px`, true);
          }}
          value={letterSpacing}
        />
      </PopoverContent>
    </Popover>
  );
}
