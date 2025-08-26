"use client";

import { useCallback, useState } from "react";
import { $getSelectionStyleValueForProperty, $patchStyleText } from "@lexical/selection";
import { $getSelection, $isRangeSelection, BaseSelection } from "lexical";
import { StretchHorizontalIcon } from "lucide-react";

import { useToolbarContext } from "../../context/toolbar-context";
import { useUpdateToolbarHandler } from "../../editor-hooks/use-update-toolbar";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";

export function LineHeightToolbarPlugin() {
  const { activeEditor } = useToolbarContext();

  const [lineHeight, setLineHeight] = useState(1.0);

  const $updateToolbar = (selection: BaseSelection) => {
    if ($isRangeSelection(selection)) {
      setLineHeight(parseFloat($getSelectionStyleValueForProperty(selection, "line-height", "1.0")));
    }
  };

  useUpdateToolbarHandler($updateToolbar);

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

  const onLineHeightChange = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ "line-height": value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <Button size={"icon"} className="px-0 !h-8 !w-8" variant={"outline"}>
          <span className="size-4 rounded-full">{<StretchHorizontalIcon className="size-4" />}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 px-1">
        <Input
          type="range"
          min={0.0}
          max={2.0}
          step={0.1}
          onChange={(e) => {
            e.stopPropagation();
            onLineHeightChange?.(e?.currentTarget?.value, true);
          }}
          className=""
          value={lineHeight}
        />
      </PopoverContent>
    </Popover>
  );
}
