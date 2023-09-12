type AppContainerProps = {
  children: React.ReactNode;
};

export function AppContainer({ children }: AppContainerProps) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}
