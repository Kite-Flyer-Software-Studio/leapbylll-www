import React from "react";
import { cn } from "@/lib/utils";
import { IconPhone, IconSettings, IconRocket, IconChartBar } from "@tabler/icons-react";
import { Container } from "@/components/container";
import { Badge as HeaderBadge } from "@/components/badge";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";

import {
  IconCheck,
  IconClock,
  IconExclamationCircle,
  IconLoader2,
  IconPrison,
  IconRipple,
  IconFileText,
  IconCalendarDue,
  IconSend,
  IconChecks,
  IconCalculator,
  IconUsers,
  IconFileCheck,
  IconMail,
} from "@tabler/icons-react";

export function HowItWorks2() {
  return (
    <div id="how-it-works" className="relative overflow-hidden py-20">
      <Container>
        <div className="relative flex flex-col items-center">
          <HeaderBadge>How It Works</HeaderBadge>
          <Heading as="h2" className="mt-4">
            Four simple steps to compliant, investor-ready finances
          </Heading>

          <Subheading as="p" className="mt-6 max-w-3xl text-center">
            From your first call to ongoing monthly support, we make compliance
            predictable and painless – so you can stay focused on building your business.
          </Subheading>
        </div>
        <div className="my-10 grid grid-cols-1 gap-4 md:my-20 md:grid-cols-2 lg:grid-cols-4">
          <Card className="lg:rounded-tl-3xl lg:rounded-bl-3xl">
            <StepBadge step={1} color="blue" />
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
            <CardContent>
              <CardTitle>Understand your business</CardTitle>
              <CardDescription>
                We start with a short call to learn your business model, transaction volume, and goals – so we can recommend the right bundle.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <StepBadge step={2} color="purple" />
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
            <CardContent>
              <CardTitle>Set up your LEAP stack</CardTitle>
              <CardDescription>
                We handle onboarding to our smart accounting system, gather initial documents, and align your compliance calendar for the year.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <StepBadge step={3} color="green" />
            <CardSkeleton>
              <SkeletonThree />
            </CardSkeleton>
            <CardContent>
              <CardTitle>Run your business, we handle the rest</CardTitle>
              <CardDescription>
                Each month we keep your books up‑to‑date, track deadlines, and answer questions, while you focus on customers and product.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="lg:rounded-tr-3xl lg:rounded-br-3xl">
            <StepBadge step={4} color="orange" />
            <CardSkeleton>
              <SkeletonFour />
            </CardSkeleton>
            <CardContent>
              <CardTitle>Review, refine, and grow</CardTitle>
              <CardDescription>
                We review your numbers with you, flag risks, and suggest improvements, so your finances stay investor‑ and bank‑ready.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("relative rounded-lg bg-neutral-50 dark:bg-neutral-800", className)}
    >
      {children}
    </div>
  );
};

export const StepBadge = ({
  step,
  color,
}: {
  step: number;
  color: 'blue' | 'purple' | 'green' | 'orange';
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900',
    purple: 'bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-900',
    green: 'bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-300 border-green-200 dark:border-green-900',
    orange: 'bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-900',
  };

  return (
    <div className="absolute -top-3 -right-3 z-10">
      <div className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full font-semibold text-base shadow-sm border-2",
        colorClasses[color]
      )}>
        {step}
      </div>
    </div>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 px-4 pb-6 md:px-8 md:pb-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal", className)}>
      {children}
    </p>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "hidden size-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition duration-200 active:scale-[0.98] md:size-10 lg:flex dark:border-neutral-800",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-lg md:text-xl font-medium text-black dark:text-white tracking-tight", className)}>
      {children}
    </h3>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative h-60 overflow-hidden md:h-80",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* WhatsApp-style wallpaper background */}
      <div className="absolute inset-0 bg-[#0a1014] dark:bg-[#0a1014]" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }} />

      {/* WhatsApp chat interface */}
      <div className="relative w-[90%] max-w-[300px]">
        <div className="relative rounded-lg bg-[#0b141a] dark:bg-[#0b141a] shadow-2xl overflow-hidden border border-[#202c33]">
          {/* WhatsApp Header */}
          <div className="relative px-4 py-3 bg-[#202c33] border-b border-[#2a3942]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center text-white font-semibold text-sm">
                  LEAP
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#25d366] rounded-full border-2 border-[#202c33]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-white">LEAP CPA Team</p>
                <p className="text-[10px] text-[#8696a0]">online</p>
              </div>
              <IconPhone className="w-5 h-5 text-[#8696a0]" />
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-3 space-y-2 min-h-[280px] max-h-[280px] overflow-hidden">
            <WhatsAppMessage
              side="left"
              text="Hi! 👋 Thanks for reaching out. Tell us about your business model"
              time="9:23 AM"
            />
            <WhatsAppMessage
              side="right"
              text="We're a SaaS startup, around 50 transactions per month"
              time="9:24 AM"
              delivered
            />
            <WhatsAppMessage
              side="left"
              text="Great! What are your main financial goals?"
              time="9:25 AM"
            />
            <WhatsAppMessage
              side="right"
              text="We need investor-ready finances and clean books for fundraising"
              time="9:26 AM"
              delivered
            />
            <WhatsAppMessage
              side="left"
              text="Perfect! Based on your needs, I'd recommend our Starter bundle. Can we schedule a 15-min call?"
              time="9:27 AM"
            />

            {/* Typing indicator */}
            <div className="flex items-start gap-2">
              <div className="bg-[#202c33] rounded-lg rounded-bl-none px-3 py-2 max-w-[75%]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Input Footer */}
          <div className="px-3 py-2 bg-[#202c33] border-t border-[#2a3942] flex items-center gap-2">
            <div className="flex-1 bg-[#2a3942] rounded-lg px-3 py-1.5 flex items-center gap-2">
              <span className="text-sm text-[#8696a0]">😊</span>
              <span className="text-[10px] text-[#8696a0]">Type a message</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center">
              <IconSend className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatsAppMessage = ({
  side,
  text,
  time,
  delivered
}: {
  side: 'left' | 'right';
  text: string;
  time: string;
  delivered?: boolean;
}) => {
  const isRight = side === 'right';

  return (
    <div className={cn("flex", isRight ? "justify-end" : "justify-start")}>
      <div className={cn(
        "rounded-lg px-3 py-1.5 max-w-[75%] shadow-sm",
        isRight
          ? "bg-[#005c4b] rounded-br-none"
          : "bg-[#202c33] rounded-bl-none"
      )}>
        <p className="text-[11px] text-white leading-relaxed">{text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[9px] text-[#8696a0]">{time}</span>
          {isRight && delivered && (
            <IconChecks className="w-3 h-3 text-[#53bdeb]" />
          )}
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl animate-pulse" />

      {/* Main setup wizard card */}
      <div className="relative w-[90%] max-w-[300px]">
        <div className="relative rounded-2xl bg-white dark:bg-neutral-900 border border-purple-200 dark:border-purple-800 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50 border-b border-purple-100 dark:border-purple-900">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center animate-pulse">
                  <IconSettings className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <div>
                  <p className="text-sm font-bold text-purple-900 dark:text-purple-100">LEAP Setup</p>
                  <p className="text-[10px] text-purple-600 dark:text-purple-400">Onboarding in progress</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-purple-900 dark:text-purple-100">80%</p>
                <p className="text-[9px] text-purple-600 dark:text-purple-400">Complete</p>
              </div>
            </div>

            {/* Overall progress bar */}
            <div className="mt-3 h-2 bg-purple-100 dark:bg-purple-900/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full transition-all duration-1000" style={{ width: '80%' }} />
            </div>
          </div>

          {/* Setup steps */}
          <div className="p-4 space-y-3">
            <SetupStep
              icon={<IconCheck className="w-4 h-4 text-white" />}
              title="Smart Accounting System"
              description="Cloud-based system activated"
              status="completed"
              day="Day 1"
            />
            <SetupStep
              icon={<IconCheck className="w-4 h-4 text-white" />}
              title="Document Collection"
              description="Initial docs gathered"
              status="completed"
              day="Day 2"
            />
            <SetupStep
              icon={<IconCheck className="w-4 h-4 text-white" />}
              title="Compliance Calendar"
              description="Annual deadlines synced"
              status="completed"
              day="Day 3"
            />
            <SetupStep
              icon={<IconLoader2 className="w-4 h-4 text-white animate-spin" />}
              title="Initial Onboarding"
              description="In progress..."
              status="inprogress"
              day="Day 4"
            />
            <SetupStep
              icon={<IconClock className="w-4 h-4 text-neutral-400" />}
              title="Ready to Go"
              description="Almost there!"
              status="pending"
              day="Day 5"
            />
          </div>

          {/* Footer CTA */}
          <div className="p-4 border-t border-purple-100 dark:border-purple-900 bg-gradient-to-br from-purple-50/50 to-violet-50/50 dark:from-purple-950/30 dark:to-violet-950/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-[10px] font-semibold text-purple-900 dark:text-purple-100">Estimated: 1 day remaining</span>
              </div>
              <IconRocket className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>

        {/* Floating success badges */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-neutral-900 animate-bounce" style={{ animationDuration: '2s' }}>
          <span className="text-lg">🚀</span>
        </div>
      </div>
    </div>
  );
};

const SetupStep = ({
  icon,
  title,
  description,
  status,
  day,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: 'completed' | 'inprogress' | 'pending';
  day: string;
}) => {
  const statusColors = {
    completed: 'bg-green-500',
    inprogress: 'bg-purple-500 ring-4 ring-purple-200 dark:ring-purple-800',
    pending: 'bg-neutral-300 dark:bg-neutral-700',
  };

  const textColors = {
    completed: 'text-neutral-900 dark:text-neutral-100',
    inprogress: 'text-purple-900 dark:text-purple-100 font-semibold',
    pending: 'text-neutral-500 dark:text-neutral-500',
  };

  return (
    <div className="flex items-start gap-3">
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300",
        statusColors[status]
      )}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className={cn("text-xs font-medium truncate", textColors[status])}>{title}</p>
          <span className="text-[9px] text-neutral-500 dark:text-neutral-400 font-medium ml-2">{day}</span>
        </div>
        <p className="text-[10px] text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
      {status === 'completed' && (
        <div className="shrink-0">
          <IconCheck className="w-3 h-3 text-green-500" />
        </div>
      )}
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 blur-3xl" />

      {/* Main operations dashboard */}
      <div className="relative w-[90%] max-w-[300px]">
        <div className="relative rounded-2xl bg-white dark:bg-neutral-900 border border-green-200 dark:border-green-800 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-b border-green-100 dark:border-green-900">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <IconRocket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-green-900 dark:text-green-100">Auto-Pilot Mode</p>
                  <p className="text-[10px] text-green-600 dark:text-green-400">February 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-green-600 dark:text-green-400">ON</span>
              </div>
            </div>

            {/* Monthly Progress */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-green-900 dark:text-green-100 font-medium">Monthly Tasks</span>
                <span className="text-green-600 dark:text-green-400 font-bold">8/10 Complete</span>
              </div>
              <div className="h-2 bg-green-100 dark:bg-green-900/30 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000" style={{ width: '80%' }} />
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="p-4 space-y-2 max-h-[250px] overflow-y-auto">
            <OperationalTask
              icon={<IconCalculator className="w-4 h-4 text-white" />}
              title="Bookkeeping Updated"
              description="All transactions categorized"
              status="completed"
              dueDate="Feb 5"
            />
            <OperationalTask
              icon={<IconFileCheck className="w-4 h-4 text-white" />}
              title="Annual Return Filed"
              description="Companies Registry submitted"
              status="completed"
              dueDate="Feb 10"
            />
            <OperationalTask
              icon={<IconMail className="w-4 h-4 text-white" />}
              title="BR Notice Signed"
              description="Business registration renewal"
              status="completed"
              dueDate="Feb 12"
            />
            <OperationalTask
              icon={<IconFileText className="w-4 h-4 text-white" />}
              title="Profit Tax Return"
              description="IRD filing in progress"
              status="inprogress"
              dueDate="Feb 28"
            />
            <OperationalTask
              icon={<IconCalendarDue className="w-4 h-4 text-neutral-400" />}
              title="MPF Contributions"
              description="Scheduled for next week"
              status="pending"
              dueDate="Mar 5"
            />
            <OperationalTask
              icon={<IconUsers className="w-4 h-4 text-neutral-400" />}
              title="Payroll Processing"
              description="End of month payroll"
              status="pending"
              dueDate="Mar 1"
            />
          </div>

          {/* Footer Summary */}
          <div className="p-4 border-t border-green-100 dark:border-green-900 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/30 dark:to-emerald-950/30">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs font-bold text-green-600 dark:text-green-400">0</p>
                <p className="text-[9px] text-neutral-600 dark:text-neutral-400">Overdue</p>
              </div>
              <div>
                <p className="text-xs font-bold text-green-600 dark:text-green-400">2</p>
                <p className="text-[9px] text-neutral-600 dark:text-neutral-400">Upcoming</p>
              </div>
              <div>
                <p className="text-xs font-bold text-green-600 dark:text-green-400">100%</p>
                <p className="text-[9px] text-neutral-600 dark:text-neutral-400">On-Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating success badge */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-neutral-900">
          <IconCheck className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

const OperationalTask = ({
  icon,
  title,
  description,
  status,
  dueDate,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: 'completed' | 'inprogress' | 'pending';
  dueDate: string;
}) => {
  const statusConfig = {
    completed: {
      bg: 'bg-green-500',
      text: 'text-neutral-900 dark:text-neutral-100',
      icon: <IconCheck className="w-3 h-3 text-green-500" />,
    },
    inprogress: {
      bg: 'bg-blue-500 ring-4 ring-blue-200 dark:ring-blue-800',
      text: 'text-blue-900 dark:text-blue-100 font-semibold',
      icon: <IconLoader2 className="w-3 h-3 text-blue-500 animate-spin" />,
    },
    pending: {
      bg: 'bg-neutral-300 dark:bg-neutral-700',
      text: 'text-neutral-500 dark:text-neutral-500',
      icon: <IconClock className="w-3 h-3 text-neutral-400" />,
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors">
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300",
        config.bg
      )}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <p className={cn("text-xs font-medium truncate", config.text)}>{title}</p>
          {config.icon}
        </div>
        <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate">{description}</p>
        <div className="flex items-center gap-1 mt-1">
          <IconCalendarDue className="w-3 h-3 text-neutral-400" />
          <span className="text-[9px] text-neutral-500 dark:text-neutral-400 font-medium">{dueDate}</span>
        </div>
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-yellow-500/20 blur-3xl" />

      {/* Review meeting interface */}
      <div className="relative w-[90%] max-w-[300px]">
        <div className="relative rounded-2xl bg-white dark:bg-neutral-900 border border-orange-200 dark:border-orange-800 shadow-2xl overflow-hidden">
          {/* Video Call Header */}
          <div className="relative p-3 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/50 dark:to-amber-950/50 border-b border-orange-100 dark:border-orange-900">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <IconUsers className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-white dark:border-neutral-900" />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-900 dark:text-orange-100">Quarterly Review</p>
                  <p className="text-[9px] text-orange-600 dark:text-orange-400">CPA + Client</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[9px] font-bold text-red-600 dark:text-red-400">REC</span>
              </div>
            </div>

            {/* Participants */}
            <div className="flex gap-1.5">
              <ParticipantAvatar name="CPA" color="from-orange-500 to-amber-500" active />
              <ParticipantAvatar name="You" color="from-blue-500 to-cyan-500" active />
              <ParticipantAvatar name="CFO" color="from-purple-500 to-violet-500" />
            </div>
          </div>

          {/* Screen Share Content */}
          <div className="p-3 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
            <div className="space-y-3">
              {/* Financial Report Being Reviewed */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 border border-orange-100 dark:border-orange-900/50 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <IconChartBar className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <span className="text-xs font-semibold text-orange-900 dark:text-orange-100">Q4 2025 Report</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30">
                    <span className="text-[9px] font-bold text-green-700 dark:text-green-400">APPROVED</span>
                  </div>
                </div>

                {/* Key highlights being discussed */}
                <div className="space-y-1.5">
                  <ReviewInsight
                    label="Revenue Growth"
                    value="+32%"
                    status="positive"
                    note="Strong quarter!"
                  />
                  <ReviewInsight
                    label="Cash Position"
                    value="$125K"
                    status="positive"
                    note="Healthy runway"
                  />
                  <ReviewInsight
                    label="Compliance"
                    value="100%"
                    status="positive"
                    note="All filings on time"
                  />
                </div>
              </div>

              {/* Action Items */}
              <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 border border-orange-100 dark:border-orange-900/50">
                <div className="flex items-center gap-2 mb-2">
                  <IconFileText className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                  <span className="text-[10px] font-semibold text-orange-900 dark:text-orange-100">Recommendations</span>
                </div>
                <div className="space-y-1.5">
                  <ActionItem text="Consider R&D tax credits" priority="high" />
                  <ActionItem text="Review expense categories" priority="medium" />
                  <ActionItem text="Plan for Q1 2026 growth" priority="medium" />
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Call Controls */}
          <div className="p-3 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/30 dark:to-amber-950/30 border-t border-orange-100 dark:border-orange-900">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <IconClock className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                <span className="text-[9px] text-orange-900 dark:text-orange-100 font-medium">45:32</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                  <IconCheck className="w-3 h-3 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="text-[9px] text-neutral-600 dark:text-neutral-400">Next: Mar 15</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-neutral-900">
          <span className="text-lg">📊</span>
        </div>
      </div>
    </div>
  );
};

const ParticipantAvatar = ({
  name,
  color,
  active
}: {
  name: string;
  color: string;
  active?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className={cn(
        "w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center text-[9px] font-bold text-white",
        color,
        active && "ring-2 ring-green-500 ring-offset-1"
      )}>
        {name[0]}
      </div>
      <span className="text-[8px] text-orange-600 dark:text-orange-400">{name}</span>
    </div>
  );
};

const ReviewInsight = ({
  label,
  value,
  status,
  note,
}: {
  label: string;
  value: string;
  status: 'positive' | 'warning' | 'neutral';
  note: string;
}) => {
  const statusColors = {
    positive: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    neutral: 'text-neutral-600 dark:text-neutral-400',
  };

  return (
    <div className="flex items-center justify-between py-1 border-b border-neutral-100 dark:border-neutral-700 last:border-0">
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-orange-400" />
        <span className="text-[10px] text-neutral-700 dark:text-neutral-300">{label}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className={cn("text-[10px] font-bold", statusColors[status])}>{value}</span>
        <span className="text-[9px] text-neutral-500 dark:text-neutral-400 italic">{note}</span>
      </div>
    </div>
  );
};

const ActionItem = ({
  text,
  priority
}: {
  text: string;
  priority: 'high' | 'medium' | 'low';
}) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    low: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  };

  return (
    <div className="flex items-center gap-2">
      <div className={cn(
        "px-1.5 py-0.5 rounded text-[8px] font-bold uppercase",
        priorityColors[priority]
      )}>
        {priority}
      </div>
      <span className="text-[10px] text-neutral-700 dark:text-neutral-300">{text}</span>
    </div>
  );
};

