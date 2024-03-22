import { useMemo } from "react";
import { data, studentGraphData } from "../utils/data";
import { AxisOptions, Chart } from "react-charts";
import { ResizableBox as ReactResizableBox } from "react-resizable";
import { Styles } from "../../../App";
import { colors } from "../../../assets/colors";

export const GradesGraph = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<data> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxis = useMemo(
    (): AxisOptions<data>[] => [
      {
        getValue: (datum) => datum.value,
      },
    ],
    []
  );

  return (
    <div style={styles.container}>
      <ReactResizableBox width={500} height={350}>
        <Chart
          options={{
            data: studentGraphData,
            primaryAxis: primaryAxis,
            secondaryAxes: secondaryAxis,
          }}
        />
      </ReactResizableBox>
    </div>
  );
};

const styles: Styles = {
  container: {
    flex: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    border: "1px solid",
    borderColor: colors.darkGrey,
    borderRadius: "10px",
  },
};
