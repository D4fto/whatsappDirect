import { LinkGeneratorProvider } from "./LinkGeneratorContext";

export function Providers({ children }) {
  return (
    <LinkGeneratorProvider>
      {children}
    </LinkGeneratorProvider>

  );
}