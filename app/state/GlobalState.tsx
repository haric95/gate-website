"use client";

import { createContext, PropsWithChildren, useState } from "react";

export type GlobalContextType = {
  galleryIndex: number | null;
  galleryImages: string[] | null;
  setGalleryIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setGalleryImages: React.Dispatch<React.SetStateAction<string[] | null>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  galleryImages: null,
  galleryIndex: null,
  setGalleryImages: () => {},
  setGalleryIndex: () => {},
});

export default ({ children }: PropsWithChildren) => {
  const [galleryIndex, setGalleryIndex] =
    useState<GlobalContextType["galleryIndex"]>(null);
  const [galleryImages, setGalleryImages] =
    useState<GlobalContextType["galleryImages"]>(null);

  return (
    <GlobalContext.Provider
      value={{
        galleryIndex,
        setGalleryIndex,
        galleryImages,
        setGalleryImages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
