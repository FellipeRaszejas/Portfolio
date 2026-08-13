import { useState } from "react";
import './Modal.css'
function Modal({ children }) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
    {/* forma baseada no estado anterior (para aprendizado)
      setAberto (prev = !prev)
      Atualizando para o oposto do valor atual
      */}
      <button className="modal-btn" onClick={() => setAberto(true)}>
        Modal Exemplos
      </button>

      {aberto && (
        <div className="modal">
          <div className="modal-card">{children}</div>
          <button className="modal-btn" onClick={() =>setAberto(false)}>Fechar</button>
        </div>
      )}
    </>
  );
}
export default Modal;
