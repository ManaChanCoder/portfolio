import { create } from "zustand";

const scrollStore = create((set) => ({
  homeRef: null,
  aboutRef: null,
  projectsRef: null,
  contactRef: null,

  setHomeRef: (ref) => set({ homeRef: ref }),
  setAboutRef: (ref) => set({ aboutRef: ref }),
  setProjectsRef: (ref) => set({ projectsRef: ref }),
  setContactRef: (ref) => set({ contactRef: ref }),
}));

export default scrollStore;
