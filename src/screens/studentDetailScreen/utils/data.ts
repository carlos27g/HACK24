import { Status } from "../../studentsOverviewScreen/Components/SearchBar";

export const student = {
  name: "Laura Frey",
  father: "John Frey",
  phoneContact: "+49 0176 70747819",
  age: 12,
  competencies: 25,
  progress: -45,
  status: Status.OnTrack,
  picture: "https://adrienzaradez.com/laura.png",
  primaryLanguage: "German",
};

export const studentTestedCompetences = [
  {
    name: "Addition",
    result: 1,
  },
  {
    name: "Subtraction",
    result: 3,
  },
  {
    name: "Multiplication",
    result: 3,
  },
  {
    name: "Division",
    result: 4,
  },
  {
    name: "Fractions",
    result: 2,
  },
  {
    name: "Decimals",
    result: 5,
  },
  {
    name: "Geometry",
    result: 2,
  },
  {
    name: "Algebra",
    result: 3,
  },
  {
    name: "Statistics",
    result: 4,
  },
];

export type data = {
  date: Date;
  value: number;
};

export type graphData = {
  label: string;
  data: data[];
};

export const studentGraphData = [
  {
    label: "Addition grades",
    data: [
      { date: new Date("2021-01-01"), value: 3 },
      { date: new Date("2021-02-01"), value: 4 },
      { date: new Date("2021-03-01"), value: 3 },
      { date: new Date("2021-04-01"), value: 2 },
      { date: new Date("2021-05-01"), value: 3 },
      { date: new Date("2021-06-01"), value: 4 },
      { date: new Date("2021-07-01"), value: 1 },
    ],
  },
  {
    label: "Subtraction grades",
    data: [
      { date: new Date("2021-01-01"), value: 4 },
      { date: new Date("2021-02-01"), value: 1 },
      { date: new Date("2021-03-01"), value: 1 },
      { date: new Date("2021-04-01"), value: 4 },
      { date: new Date("2021-05-01"), value: 3 },
      { date: new Date("2021-06-01"), value: 4 },
      { date: new Date("2021-07-01"), value: 4 },
    ],
  },
  {
    label: "Multiplication grades",
    data: [
      { date: new Date("2021-01-01"), value: 2 },
      { date: new Date("2021-02-01"), value: 3 },
      { date: new Date("2021-03-01"), value: 4 },
      { date: new Date("2021-04-01"), value: 2 },
      { date: new Date("2021-05-01"), value: 3 },
      { date: new Date("2021-06-01"), value: 4 },
      { date: new Date("2021-07-01"), value: 1 },
    ],
  },
  {
    label: "Division grades",
    data: [
      { date: new Date("2021-01-01"), value: 3 },
      { date: new Date("2021-02-01"), value: 4 },
      { date: new Date("2021-03-01"), value: 3 },
      { date: new Date("2021-04-01"), value: 2 },
      { date: new Date("2021-05-01"), value: 3 },
      { date: new Date("2021-06-01"), value: 4 },
      { date: new Date("2021-07-01"), value: 1 },
    ],
  },
];
