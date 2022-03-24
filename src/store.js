import create from 'zustand';

const useStore = create(set => ({
  countA: 0,
  countB: 0,
  incrementCountA: () => set(state => ({ countA: state.countA + 1 })),
  decrementCountA: () => set(state => ({ countA: state.countA - 1 })),
  incrementCountB: () => set(state => ({ countB: state.countB + 1 })),
  decrementCountB: () => set(state => ({ countB: state.countB - 1 })),
}));

export default useStore;
