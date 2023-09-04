"use client";
import { SafeUser } from "@/app/types";
import { Listing, Reservations } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservations;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId,
  currentUser,
}) => {
  const router = useRouter();
  return <div>ListingCard</div>;
};

export default ListingCard;
