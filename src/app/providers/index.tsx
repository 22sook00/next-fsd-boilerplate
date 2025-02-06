"use client";
import { BaseLayout } from "@/widgets/layout";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default Providers;
