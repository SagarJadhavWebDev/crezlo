import { AppStore } from "../";

type NodeMethods = {
  sync: () => void;
  hideOverlay: () => void;
  showOverlay: () => void;
};

type CrezloNodeInstance = {
  id: string;
  methods: NodeMethods;
  element: HTMLElement | null;
};

export type NodesSlice = {
  nodes: Record<string, CrezloNodeInstance | undefined>;
  registerNode: (id: string, node: Partial<CrezloNodeInstance>) => void;
  unregisterNode: (id: string, node?: Partial<CrezloNodeInstance>) => void;
};

export const createNodesSlice = (
  set: (newState: Partial<AppStore>) => void,
  get: () => AppStore
): NodesSlice => ({
  nodes: {},
  registerNode: (id: string, node: Partial<CrezloNodeInstance>) => {
    const s = get().nodes;

    const emptyNode: CrezloNodeInstance = {
      id,
      methods: {
        sync: () => null,
        hideOverlay: () => null,
        showOverlay: () => null,
      },
      element: null,
    };

    const existingNode: CrezloNodeInstance | undefined = s.nodes[id];

    set({
      nodes: {
        ...s,
        nodes: {
          ...s.nodes,
          [id]: {
            ...emptyNode,
            ...existingNode,
            ...node,
            id,
          },
        },
      },
    });
  },
  unregisterNode: (id) => {
    const s = get().nodes;
    const existingNode: CrezloNodeInstance | undefined = s.nodes[id];

    if (existingNode) {
      const newNodes = { ...s.nodes };

      delete newNodes[id];

      set({
        nodes: {
          ...s,
          nodes: newNodes,
        },
      });
    }
  },
});
