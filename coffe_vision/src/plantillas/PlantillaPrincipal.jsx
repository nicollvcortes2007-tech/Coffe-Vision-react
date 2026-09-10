// import Navegacion from "../components/navegacion/Navegacion";

function PlantillaPrincipal({ children }) {
  return (
    <div className="plantilla-principal">
      {/* <Navegacion /> */}
      <main>{children}</main>
    </div>
  );
}

export default PlantillaPrincipal;
