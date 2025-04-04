"use client";

import { useContext, useEffect, useState } from "react";
import { StepsContext } from "@/context/steps";
import dynamic from "next/dynamic"; // dynamic import for components
import doneAnimation from "@/animations/done.json";
import waveAnimation from "@/animations/wave.json";
import { useRouter } from "next/navigation";

// ❗ Dynamically import ALL UI components to avoid SSR issues
const StepBar = dynamic(() => import("@/components/step_bar"), { ssr: false });
const BasicInfoCard = dynamic(() => import("@/components/basic_info"), {
  ssr: false,
});
const FitGoal = dynamic(() => import("@/components/fit_goal"), { ssr: false });
const MedicalCard = dynamic(() => import("@/components/medical"), {
  ssr: false,
});
const SleepCard = dynamic(() => import("@/components/sleep"), { ssr: false });
const Lifestyle = dynamic(() => import("@/components/lifestyle"), {
  ssr: false,
});
const AvailabilityCard = dynamic(() => import("@/components/availability"), {
  ssr: false,
});
const DietCard = dynamic(() => import("@/components/diet"), { ssr: false });
const Loader = dynamic(() => import("@/components/loader"), { ssr: false });
const Program = dynamic(() => import("@/components/program"), { ssr: false });

// Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const { step_num, loadComponent, steps_list, getAllAnswers } =
    useContext(StepsContext);

  const [is_loading, setIsLoading] = useState<boolean>(false);

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

  return (
    <div className="w-full px-1 lg:w-3/4 2xl:w-2/4 mx-auto">
      <StepBar generateProgram={generateProgram} is_loading={is_loading} />
      {getStepComponent()}

      {/* If you want to use Lottie below */}
      {/* {typeof window !== 'undefined' && (
        <Lottie animationData={waveAnimation} loop={true} />
      )} */}
    </div>
  );
}
