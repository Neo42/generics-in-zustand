import create from "zustand/vanilla";

interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const store = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set((state) => ({ bears: 0 }))
}));

store.getState().increasePopulation();
console.log(store.getState().bears);
store.setState({ bears: 10 });
console.log(store.getState().bears);

const subscription = store.subscribe((store) => console.log(store.bears));
