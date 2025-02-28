"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function MintStageSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <Skeleton className="w-24 h-6" />
          <Skeleton className="w-16 h-4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-32 h-4" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
