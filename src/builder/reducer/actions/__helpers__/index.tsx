import { Config, Data, Slot, UiState } from "../../../types";
import {
  createAppStore,
  defaultAppState as _defaultAppState,
} from "../../../store";
import { PrivateAppState } from "../../../types/Internal";

type Props = {
  Comp: {
    prop: string;
    slot: Slot;
  };
  CompWithDefaults: {
    prop: string;
    slot: Slot;
  };
};

type RootProps = {
  title: string;
  slot: Slot;
};

export type UserConfig = Config<Props, RootProps>;
export type UserData = Data<Props, RootProps>;

export const dzZoneCompound = "my-component:zone1";

export const defaultData: UserData = {
  root: { props: { title: "", slot: [] } },
  content: [],
  zones: { [dzZoneCompound]: [] },
};

export const defaultUi: UiState = _defaultAppState.ui;

export const defaultIndexes: PrivateAppState<UserData>["indexes"] = {
  nodes: {},
  zones: {
    "root:slot": { contentIds: [], type: "slot" },
    [dzZoneCompound]: { contentIds: [], type: "dropzone" },
  },
};

export const defaultState = {
  data: defaultData,
  ui: defaultUi,
  indexes: defaultIndexes,
};

export const appStore = createAppStore();

const config: UserConfig = {
  root: {
    fields: { title: { type: "text" }, slot: { type: "slot" } },
  },
  components: {
    Comp: {
      fields: {
        prop: { type: "text" },
        slot: { type: "slot" },
      },
      defaultProps: { prop: "example", slot: [] },
      render: () => <div />,
    },
    CompWithDefaults: {
      fields: {
        prop: { type: "text" },
        slot: { type: "slot" },
      },
      defaultProps: {
        prop: "example",
        slot: [
          {
            type: "Comp",
            props: {
              prop: "Defaulted item",
              slots: [],
            },
          },
        ],
      },
      render: () => <div />,
    },
  },
};





