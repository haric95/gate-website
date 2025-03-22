"use client";

import { createContext, PropsWithChildren, useState } from "react";

export type GlobalContextType = {
  galleryIndex: number | null;
  galleryImages: { url: string; credit: string; alt: string }[] | null;
  shaderHighlightedElement: Element | null;
  setGalleryIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setGalleryImages: React.Dispatch<
    React.SetStateAction<{ url: string; credit: string; alt: string }[] | null>
  >;
  setShaderHighlightedElement: React.Dispatch<
    React.SetStateAction<Element | null>
  >;
  loaded: boolean;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>> | null;
};

export const GlobalContext = createContext<GlobalContextType>({
  galleryImages: null,
  galleryIndex: null,
  shaderHighlightedElement: null,
  loaded: false,
  setGalleryImages: () => {},
  setGalleryIndex: () => {},
  setShaderHighlightedElement: () => {},
  setLoaded: null,
});

export default ({ children }: PropsWithChildren) => {
  const [galleryIndex, setGalleryIndex] =
    useState<GlobalContextType["galleryIndex"]>(null);
  const [galleryImages, setGalleryImages] =
    useState<GlobalContextType["galleryImages"]>(null);
  const [shaderHighlightedElement, setShaderHighlightedElement] =
    useState<GlobalContextType["shaderHighlightedElement"]>(null);
  const [loaded, setLoaded] = useState<GlobalContextType["loaded"]>(false);

  return (
    <GlobalContext.Provider
      value={{
        galleryIndex,
        setGalleryIndex,
        galleryImages,
        setGalleryImages,
        shaderHighlightedElement,
        setShaderHighlightedElement,
        loaded,
        setLoaded,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
