import { LinkGeneratorProvider } from "./LinkGeneratorContext";
import { ContactListProvider } from "./ContactListContext";

export function Providers({ children }) {
  return (
    <ContactListProvider>
      <LinkGeneratorProvider>
        {children}
      </LinkGeneratorProvider>
    </ContactListProvider>

  );
}