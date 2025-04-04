"use client";

// imports
import { useContext, useEffect, useState } from "react";
import { StepsContext } from "@/context/steps";
import StepBar from "@/components/step_bar";
import BasicInfoCard from "@/components/basic_info";
import FitGoal from "@/components/fit_goal";
import MedicalCard from "@/components/medical";
import SleepCard from "@/components/sleep";
import Lifestyle from "@/components/lifestyle";
import AvailabilityCard from "@/components/availability";
import DietCard from "@/components/diet";
import Loader from "@/components/loader";
import Loading from "@/components/loading";
import dynamic from "next/dynamic"; // dynamic import
import doneAnimation from "@/animations/done.json";
import waveAnimation from "@/animations/wave.json";
import Program from "@/components/program";
import { useRouter } from "next/navigation";

// Dynamically import Lottie for client-side only
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  // variables
  const { step_num, loadComponent, steps_list, getAllAnswers } =
    useContext(StepsContext);

  const [is_loading, setIsLoading] = useState<boolean>(false);

  // functions
  useEffect(() => {
    loadComponent("BasicInfoCard", BasicInfoCard);
    loadComponent("FitGoal", FitGoal);
    loadComponent("MedicalCard", MedicalCard);
    loadComponent("SleepCard", SleepCard);
    loadComponent("Lifestyle", Lifestyle);
    loadComponent("AvailabilityCard", AvailabilityCard);
    loadComponent("DietCard", DietCard);
  }, []);

  const generateProgram = async () => {
    try {
      setIsLoading(true);
      const response = await getAllAnswers();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getStepComponent = () => {
    const {
      title,
      icon,
      description,
      id,
      component: Card,
    } = steps_list[step_num];
    if (Card) return <Card id={id} title={title} description={description} />;
    return <Loader />;
  };

  // returns
  return (
    <div className="w-full px-1 lg:w-3/4 2xl:w-2/4 mx-auto">
      <StepBar generateProgram={generateProgram} is_loading={is_loading} />
      {getStepComponent()}

      {/* Optional: Using Lottie safely below (if needed for animations in page) */}
      {/* {typeof window !== 'undefined' && (
        <Lottie animationData={waveAnimation} loop={true} />
      )} */}
    </div>
  );
}
