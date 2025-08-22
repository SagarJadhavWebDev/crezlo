import { Components } from "../../components/Components";
import { SidebarSection } from "../../../SidebarSection";
import { Outline } from "../Outline";
import { usePropsContext } from "../..";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/ui";
import { BookCopy } from "lucide-react";

export const LeftSidebarSection = () => {
  const { leftSidebarTabs = [] } = usePropsContext();
  return (
    <Tabs defaultValue="components" className="w-full p-1 bg-white">
      <TabsList className="w-full justify-evenly">
        <TabsTrigger value="components" className="truncate">
          <span className="flex flex-row items-center gap-1">
            <BookCopy size={14} /> Components
          </span>
        </TabsTrigger>
        {leftSidebarTabs.map((i) => (
          <TabsTrigger key={i.key} value={i.key} className="truncate">
            {i.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="overflow-y-auto bg-white" style={{ maxHeight: "calc(100vh - 110px)" }}>
        <TabsContent value="components" className="bg-white p-2">
          <>
            <Components />
            <SidebarSection title="Outline">
              <Outline />
            </SidebarSection>
          </>
        </TabsContent>
        {leftSidebarTabs.map((i) => (
          <TabsContent className="bg-white" value={i.key}>
            {i.body}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};
