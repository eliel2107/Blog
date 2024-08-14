import { useEffect } from "react";

const Callback: React.FC = () => {
  useEffect(() => {
    console.log("Callback recebido");
  }, []);

  return <div>Processando callback...</div>;
};

export default Callback;
