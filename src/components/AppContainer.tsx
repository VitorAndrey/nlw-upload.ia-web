import { GlobalContextProvider } from "./context/GlobalContext";

type AppContainerProps = {
  children: React.ReactNode;
};

export function AppContainer({ children }: AppContainerProps) {
  return (
    <GlobalContextProvider>
      <div className="min-h-screen flex flex-col">{children}</div>
    </GlobalContextProvider>
  );
}
