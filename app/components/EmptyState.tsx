"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "./Heading";
import Button from "./Button";

interface EmtyStateProps {
  tittle?: string;
  subtitle?: string;
  showRest?: Boolean;
}

const EmptyState: React.FC<EmtyStateProps> = ({
  tittle = "No exact matches",
  subtitle = "Try to change your filters",
  showRest,
}) => {
  const router = useRouter();

  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
      <Heading title={tittle} subtitle={subtitle} />
      <div className='w-48 mt-4'>
        {showRest && (
          <Button
            outline
            label='Remove all filters'
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
