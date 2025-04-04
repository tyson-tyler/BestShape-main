import { ReactNode } from "react";

type BasicInfoAnswers = {
  name: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
  body_type: string;
  neck: number;
  waist: number;
  hip: number;
  is_fat_accurate: boolean | null;
};

type FitGoalAnswers = {
  fitness_goal: string;
  workout_days: number;
  activity: string;
};

type StepType = {
  id: string;
  icon: string;
  title: string;
  description: string;
  component: ReactNode | null;
  answers: BasicInfoAnswers | FitGoalAnswers;
};

const steps_list: StepType[] = [
  {
    id: "BasicInfoCard",
    icon: "📝",
    title: "Personal Information 📝",
    description: "To get started, we need some basic information from you",
    component: null,
    answers: {
      name: "",
      age: 22,
      gender: "M",
      height: 175,
      weight: 70,
      body_type: "healthy",
      neck: 50,
      waist: 90,
      hip: 60,
      is_fat_accurate: null,
    },
  },
  {
    id: "FitGoal",
    icon: "🏃",
    title: "Fitness Goal 🏃",
    description: "What do you want to achieve on your new fitness journey",
    component: null,
    answers: {
      fitness_goal: "burn_fats",
      workout_days: 3,
      activity: "0",
    },
  },
];

export default steps_list;
