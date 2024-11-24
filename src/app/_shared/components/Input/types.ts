export interface InputProps {
  label?: string;
  name?: string;
  type?: "text" | "password" | "email" | "checkbox";
  placeholder?: string;
  className?: string;
  labelClassName?: string;
}