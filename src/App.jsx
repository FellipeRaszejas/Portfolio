import { useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";
import Card from "./components/ui/Card/Card";
import SectionTitle from "./components/ui/SectionTitle/SectionTitle";
import Input from "./components/ui/Input/Input";
import Modal from "./components/ui/Modal/Modal";

function App() {
  return (
    <>
      <Button>Contato</Button>
      <Card>
        <h2>Meu Card</h2>
        <p>Conteúdo do card.</p>
      </Card>
      <SectionTitle>Titulo da Sessão</SectionTitle>
      <Input label="Insira seu nome" type="text" name="nome" place="fun" />
      <Modal>
        <h1>Modal</h1>
      </Modal>
    </>
  );
}

export default App;
