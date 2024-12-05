import type { ReactNode } from "react";

export interface DeviceProviderProps {
  children: ReactNode;
  deviceType: string;
}