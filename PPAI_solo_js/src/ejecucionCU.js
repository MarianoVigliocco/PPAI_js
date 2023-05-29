import GestorRespuestaOperador from "../models/gestor";
import Llamada from "../models/llamada";
import subOpcionLlamada from "../models/subopcionLlamada";
import Cliente from "../models/cliente";
import Validacion from "../models/validacion";
import OpcionValidacion from "../models/opcionvalidacion";
import PantallaRespuestaOperador from "../models/pantallaRespuestaOperador";
import Estado from "../models/estado";
import CambioEstado from "../models/cambioestado";

const pantallaOperador = new PantallaRespuestaOperador()

const estado1 = new Estado("Iniciada")
const estado2 = new Estado("En curso")
const estado3 = new Estado("Finalizada")

const cambioEstado1 = new CambioEstado("9:17:44", estado1)

const validacion_1 = new Validacion("100110", "Seleccione el nombre de su primer perro", 1, [opcion1_val1, opcion2_val1, opcion3_val1])
const opcion1_val1 = new OpcionValidacion(false, "Tobi")
const opcion2_val1 = new OpcionValidacion(true, "Blocky")
const opcion3_val1 = new OpcionValidacion(false, "Floppy")
const validacion_2 = new Validacion("110100", "Seleccione el nombre de su escuela secundaria", 2, [opcion1_val2, opcion2_val2, opcion3_val2])
const opcion1_val2 = new OpcionValidacion(false, "ISMC")
const opcion2_val2 = new OpcionValidacion(false, "ISMM")
const opcion3_val2 = new OpcionValidacion(true, "ESCMB")
const validacion_3 = new Validacion("101110", "Seleccione la direccion de su primera casa", 3, [opcion1_val3, opcion2_val3, opcion3_val3])
const opcion1_val3 = new OpcionValidacion(false, "Salta 1155")
const opcion2_val3 = new OpcionValidacion(true, "Jujuy 3975")
const opcion3_val3 = new OpcionValidacion(false, "Mendoza 180")

const cliente_llamada = new Cliente("20255987", "Juan Perez", "3518888888")

const subOpcion_selecc = new subOpcionLlamada("SubOpcion 3", "5", [validacion_1, validacion_2, validacion_3])

const llamada_actual = new Llamada(null, null, null, null, null, cliente_llamada, subOpcion, "Opcion 1", [cambioEstado1], "Categoria 3")

const gestor = new GestorRespuestaOperador(llamada_actual, "Categoria 3", "Opcion 1", subOpcion_selecc)

// Ejecucion del C.U (sin considerar la pantalla)
gestor.RegistrarRespuestaOperador()