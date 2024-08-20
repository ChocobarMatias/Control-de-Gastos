import GastosVehiculos from "../GastosVehiculos"
import ImpuestosDomiciliario from "../ImpuestosDomiciliario"
import TarjetasCredito from "../TarjetasCredito"
import Conectividad from "../Conectividad"
import Educacion from "../Educacion"
import DeudaAPagar from "../DeudaAPagar"
import DeudaACobrar from "../DeudaACobrar"


const Main = () => {
  return (
    <>
      <TarjetasCredito/>
      <ImpuestosDomiciliario/>
      <Conectividad/>
      <Educacion/>
      <GastosVehiculos/>
      <DeudaAPagar/>
      <DeudaACobrar/>
    </>
  )
}

export default Main
