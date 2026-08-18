import { useState } from "react";
import "./App.css";
import "./styles/variables.css";
import "./styles/global.css";
import Button from "./components/ui/Button/Button";
import Card from "./components/ui/Card/Card";
import SectionTitle from "./components/ui/SectionTitle/SectionTitle";
import Input from "./components/ui/Input/Input";
import Modal from "./components/ui/Modal/Modal";
import Select from "./components/ui/Select/Select";
import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Education from "./features/Education";

function App() {
  return (
    <>
      {/* <Button>Contato</Button>
      <Card>
        <h2>Meu Card</h2>
        <p>Conteúdo do card.</p>
      </Card>
      <SectionTitle>Titulo da Sessão</SectionTitle>
      <Input label="Insira seu nome" type="text" name="nome" place="fun" />
      <Modal>
        <h1>Modal</h1>
      </Modal>
      <Select>
        <option value="one">Opção</option>
        <option value="two">Opção</option>
        <option value="three">Opção</option>
      </Select> */}
      <Hero />
      <Navbar />
      <Education />
    </>
  );
}

export default App;
