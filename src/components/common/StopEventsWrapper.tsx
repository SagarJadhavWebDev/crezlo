import React from "react";

type StopEventsWrapperProps = {
  children: React.ReactNode;
  events?: string[]; // which events to block
};

export const StopEventsWrapper: React.FC<StopEventsWrapperProps> = ({
  children,
  events = ["click", "submit"],
}) => {
  const stopHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handlers = events.reduce((acc, event) => {
    // React synthetic events are camelCase: onClick, onSubmit, etc.
    const reactEvent = `on${event.charAt(0).toUpperCase()}${event.slice(1)}`;
    acc[reactEvent] = stopHandler;
    return acc;
  }, {} as Record<string, (e: any) => void>);

  return <div {...handlers}>{children}</div>;
};
