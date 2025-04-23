import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // Ensure clsx processes inputs first, then merge with twMerge to preserve order
  return twMerge(clsx(...inputs));
}
