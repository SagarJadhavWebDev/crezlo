import { useState } from "react";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";

import { ContentEditable } from "../editor-ui/content-editable";
import { ListMaxIndentLevelPlugin } from "../plugins/list-max-indent-level-plugin";
import { BlockFormatDropDown } from "../plugins/toolbar/block-format-toolbar-plugin";
import { FormatBulletedList } from "../plugins/toolbar/block-format/format-bulleted-list";
import { FormatHeading } from "../plugins/toolbar/block-format/format-heading";
import { FormatNumberedList } from "../plugins/toolbar/block-format/format-numbered-list";
import { FormatParagraph } from "../plugins/toolbar/block-format/format-paragraph";
import { FormatQuote } from "../plugins/toolbar/block-format/format-quote";
import { ElementFormatToolbarPlugin } from "../plugins/toolbar/element-format-toolbar-plugin";
import { FontBackgroundToolbarPlugin } from "../plugins/toolbar/font-background-toolbar-plugin";
import { FontColorToolbarPlugin } from "../plugins/toolbar/font-color-toolbar-plugin";
import { FontFamilyToolbarPlugin } from "../plugins/toolbar/font-family-toolbar-plugin";
import { FontFormatToolbarPlugin } from "../plugins/toolbar/font-format-toolbar-plugin";
import { FontSizeToolbarPlugin } from "../plugins/toolbar/font-size-toolbar-plugin";
import { SubSuperToolbarPlugin } from "../plugins/toolbar/subsuper-toolbar-plugin";
import { ToolbarPlugin } from "../plugins/toolbar/toolbar-plugin";
import { LineHeightToolbarPlugin } from "../plugins/toolbar/line-height-toolbar-plugin";
import { LetterSpacingToolbarPlugin } from "../plugins/toolbar/letter-spacing-toolbar-plugin";
import { ClearFormattingToolbarPlugin } from "../plugins/toolbar/clear-formatting-toolbar-plugin";
import { Separator } from "../../ui/separator";
const placeholder = "...";

export function Plugins({}) {
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <div className="relative">
      <ToolbarPlugin>
        {({ blockType }) => (
          <div className="flex flex-row flex-wrap items-center z-10 gap-2 overflow-auto border-b p-1">
            <BlockFormatDropDown>
              <FormatParagraph />
              <FormatHeading levels={["h1", "h2", "h3", "h4", "h5", "h6"]} />
              <FormatNumberedList />
              <FormatBulletedList />
              <FormatQuote />
            </BlockFormatDropDown>
            <FontFamilyToolbarPlugin />
            <Separator orientation="vertical" className="!h-7" />
            <FontSizeToolbarPlugin />
            <Separator orientation="vertical" className="!h-7" />
            <FontFormatToolbarPlugin format="bold" />
            <FontFormatToolbarPlugin format="italic" />
            <FontFormatToolbarPlugin format="underline" />
            <SubSuperToolbarPlugin />
            <Separator orientation="vertical" className="!h-7" />
            <FontColorToolbarPlugin />
            <FontBackgroundToolbarPlugin />
            <Separator orientation="vertical" className="!h-7" />
            <ElementFormatToolbarPlugin />
            <Separator orientation="vertical" className="!h-7" />
            <LineHeightToolbarPlugin />
            <LetterSpacingToolbarPlugin />
            <Separator orientation="vertical" className="h-8" />
            <ClearFormattingToolbarPlugin />
          </div>
        )}
      </ToolbarPlugin>
      <div className="relative">
        <AutoFocusPlugin />
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable
                  placeholder={placeholder}
                  className="ContentEditable__root relative block h-auto overflow-auto px-8 py-4 focus:outline-none"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />

        <ListPlugin />
        <TabIndentationPlugin />
        <HistoryPlugin />
        <ListMaxIndentLevelPlugin />
      </div>
    </div>
  );
}
