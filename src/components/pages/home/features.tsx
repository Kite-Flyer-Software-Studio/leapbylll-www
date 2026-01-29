import React from "react";
import { Badge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "@/components/skeletons/first";
import { SkeletonTwo } from "@/components/skeletons/second";
import { SkeletonThree } from "@/components/skeletons/third";
import { SkeletonAllInOne } from "@/components/skeletons/all-in-one";

export const Features = () => {
  return (
    <div id="why-leap" className="relative z-20 py-10 lg:py-40 overflow-hidden flex flex-col items-center">
      <Badge>Why LEAP</Badge>
      <Heading className="mt-4" as="h2">Why Hong Kong founders choose LEAP</Heading>
      <Subheading className="text-center">
        More than just accounting – we&apos;re your compliance partner who understands startups,
        speaks your language, and keeps your business on track from day one.
      </Subheading>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-neutral-200 dark:divide-neutral-800 mt-12">
          <div className="md:border-r border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Dedicated CPA advisor
              </h2>
              <CardDescription>
                You get a named CPA who knows your business, not a rotating support inbox.
                Talk to someone who understands your cap table, cash flow, and plans – and
                stays with you as you grow.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Bespoke smart accounting
              </h2>
              <CardDescription>
                Our cloud-based, proprietary smart accounting system captures your finances
                accurately and flags issues early, so there are no surprises at audit or tax time.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
          </div>
          <div className="md:border-r border-neutral-200 dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Flexible, fair pricing
              </h2>
              <CardDescription>
                Transparent benchmark pricing by revenue, plus bundles tailored to your stage,
                transaction volume, and complexity – so you only pay for what you really need.
              </CardDescription>
            </CardContent>
            <CardSkeleton>
              <SkeletonThree />
            </CardSkeleton>
          </div>
          <div className="dark:border-neutral-800">
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                All-in-one business solution
              </h2>
              <CardDescription>
                From incorporation and company secretarial work to ongoing accounting, audit,
                and tax advisory, everything sits under one roof with one accountable partner.
              </CardDescription>
            </CardContent>
            <CardSkeleton className="[perspective:1200px]">
              <SkeletonAllInOne />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </div>
  );
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-neutral-600 dark:text-neutral-400 mt-2 max-w-md text-balance">
      {children}
    </p>
  );
};

const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 sm:h-60 flex flex-col md:h-80 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
