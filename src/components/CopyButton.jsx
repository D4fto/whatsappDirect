import { useState } from "react";
import styles from "./CopyButton.module.css";

export default function CopyButton({
  str,
  message = <span className={styles.message}>Copiado com sucesso</span>,
}) {
  const [messageVisible, setMessageVisible] = useState(false);

  async function copy() {
    // Se a string for vazia não copia
    if (str.length === 0) {
      return;
    }
    // Copia o texto para a área de transferência
    await navigator.clipboard.writeText(str);
    if (messageVisible) {
      return;
    }
    setMessageVisible(true);
    // Seta um timer para após 2 segundo parar de exibir a mensagem de sucesso
    setTimeout(() => setMessageVisible(false), 2000);
  }

  return (
    <button className={styles.copyButton} onClick={copy}>
      {/* Caso o estado de messageVisible seja true, mosta a menagem de sucesso */}
      {messageVisible && message}
      <i className="bi bi-copy"></i>
    </button>
  );
}
