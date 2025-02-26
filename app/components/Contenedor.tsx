
import CardPresentacion from "./CardPresentacion";
import Header from "./Header";
import InfoCard from "./InfoCard";
function Contenedor() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-scree mb-5">
        <Header />
        <div className="container p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Columna de presentación */}
            <div className="flex flex-col items-center">
              <CardPresentacion />
            </div>

            {/* Información en formato responsive */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard
                title="Bio"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet mauris enim, vel condimentum risus eget rhoncus, vitae. Viverra pulvinar cras eu ac sed nunc dui. Risus pharetra, lacus interdum quam. Egestas aliquam dui at proin. Amet, pharetra, scelerisque molestie nibh porttitor sem malesuada cursus eget. Orci."
                isList={false}
              />
              <InfoCard
                title="Personality"
                content={["Hardworking", "Smart", "Expressive", "Thoughtful"]}
                isList={true}
              />
              <InfoCard
                title="Pain points"
                content={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ]}
                isList={true}
              />
              <InfoCard
                title="Goals"
                content={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                ]}
                isList={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Contenedor;
