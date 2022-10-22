import { Control } from "react-hook-form";

export type FormValues = {
  date: Date;
  amount: number;
  description: string;
};

export type CustomControl = ControllerFieldState<FormValues, any>