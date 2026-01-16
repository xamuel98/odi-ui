import { createContext, useContext } from "react";

export interface ListboxContextValue {
  onSelect?: ((value: string) => void) | undefined;
  activeOptionId: string | null;
  setActiveOptionId: (id: string | null) => void;
  registerOption: (id: string) => void;
}

export const ListboxContext = createContext<ListboxContextValue | undefined>(
  undefined
);

export const useListboxContext = () => {
  const context = useContext(ListboxContext);
  if (!context) {
    throw new Error("Listbox sub-components must be used within a Listbox");
  }
  return context;
};
