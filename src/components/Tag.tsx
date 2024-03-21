import React from "react";
import { colors } from "../assets/colors";
import { Styles } from "../App";

export type TagProps = {
  value: string;
  selected: boolean;
  onPress?: () => void;
  style?: React.CSSProperties;
};

export const Tag = (props: TagProps) => {
  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: props.selected ? colors.primary : colors.background,
        color: props.selected ? colors.background : colors.black,
        ...props.style,
      }}
      onClick={props.onPress}
    >
      {props.value}
    </div>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    borderRadius: 10,
    width: "min-content",
    padding: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.background,
    cursor: "pointer",
    justifyContent: "center",
    margin: 5,
  },
};
