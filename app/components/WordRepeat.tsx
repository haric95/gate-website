import { Props } from "next/script";
import React, { PropsWithChildren, ReactNode, useMemo, useState } from "react";

type WordRepeatProps = {
  children: ReactNode | null | undefined;
};

export default ({ children }: WordRepeatProps) => {
  return (
    <div className="relative">
      <span className="absolute left-[-4px] top-[-4px]">{children}</span>
      <span className="absolute left-[-2px] top-[-2px]">{children}</span>
      <span className="">{children}</span>
      {/* <span className="absolute">{children}</span> */}
    </div>
  );
};
