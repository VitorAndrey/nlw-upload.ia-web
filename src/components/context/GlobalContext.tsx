import {
  ChangeEvent,
  FormEvent,
  ReactNode,
  createContext,
  useState,
} from "react";
import { useCompletion } from "ai/react";

interface AddressContextType {
  handleSelectedPrompt: (template: string) => void;
  handleSelectedTemperature: (template: number) => void;
  handleSelectedVideo: (template: string) => void;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  selectedTemperature: number;
  selectedVideo: string;
  completion: string;
  isLoading: boolean;
  input: string;
}

export const GlobalContext = createContext({} as AddressContextType);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedTemperature, setSelectedTemperature] = useState(0.5);

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    api: "http://localhost:3333/ai/complete",
    body: {
      videoId: selectedVideo,
      temperature: selectedTemperature,
    },
    headers: {
      "Content-type": "application/json",
    },
  });

  function handleSelectedPrompt(template: string) {
    setInput(template);
    console.log(template);
  }

  function handleSelectedTemperature(temperature: number) {
    setSelectedTemperature(temperature);
    console.log(temperature);
  }

  function handleSelectedVideo(video: string) {
    setSelectedVideo(video);
    console.log(video);
  }

  return (
    <GlobalContext.Provider
      value={{
        handleSelectedTemperature,
        handleSelectedPrompt,
        selectedTemperature,
        handleSelectedVideo,
        handleInputChange,
        selectedVideo,
        handleSubmit,
        completion,
        isLoading,
        input,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
