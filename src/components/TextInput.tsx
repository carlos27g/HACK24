import React from "react";
import { colors } from "../assets/colors";
import { Styles } from "../App";

export type TextInputProps = {
  label: string;
  value: string;
  title?: string;
  onChange: (newValue: string) => void;
};

export const TextInput = (porps: TextInputProps) => {
  const { label, value, onChange, title } = porps;
  return (
    <div>
      <div style={styles.title}>{title ?? label}</div>
      <input
        type={label}
        value={value}
        placeholder="Mathematics endterm 2021"
        onChange={(event) => onChange(event.target.value)}
        style={styles.input}
      />
    </div>
  );
};

const styles: Styles = {
  title: {
    color: colors.primary,
    fontSize: "1em",
    fontWeight: "normal",
    margin: "0 10px",
  },
  input: {
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #bd0320",
  },
};
