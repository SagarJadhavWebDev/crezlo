import { DropZoneProps } from "../components/DropZone/types";
import { Metadata } from "./Data";
import { WithChildren, WithCrezloProps } from "./Utils";

export type CrezloContext = {
  renderDropZone: React.FC<DropZoneProps>;
  metadata: Metadata;
  isEditing: boolean;
  dragRef: ((element: Element | null) => void) | null;
};

export type DefaultRootFieldProps = {
  [key: string]: any;
  title?: string;
};

export type DefaultRootRenderProps<
  Props extends DefaultComponentProps = DefaultRootFieldProps
> = WithCrezloProps<WithChildren<Props>>;

export type DefaultRootProps = DefaultRootRenderProps; // Deprecated

export type DefaultComponentProps = { [key: string]: any };
