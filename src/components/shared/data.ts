import { Award, Clock, Factory, Plus, Cog, Hammer, Wrench, Building2, MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

export const NAV = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export const SERVICES = [
  {
    icon: Cog,
    title: "Venta de Equipos y Repuestos",
    items: [
      "Winches de arrastre / izaje (Joy, Ingersoll Rand)",
      "Palas Neumáticas y Locomotoras",
      "Chancadoras Cónicas y de Quijadas",
      "Ventiladores industriales",
      "Repuestos Symons, Telsmith, Sandvik",
    ],
  },
  {
    icon: Hammer,
    title: "Fabricación y Maquinado",
    items: [
      "Celdas de flotación, Zarandas, Alimentadores",
      "Molinos de bolas y de barras",
      "Carros mineros y Fajas transportadoras",
      "Ductos y Estructuras metálicas",
    ],
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Reparación",
    items: [
      "Bombas de vacío, agua y relaves",
      "Winches, Reductores, Calderos",
      "Gatas hidráulicas",
      "Alineamiento y nivelación de precisión",
    ],
  },
  {
    icon: Building2,
    title: "Proyectos Integrales",
    items: [
      "Diseño, instalación y puesta en marcha de plantas",
      "Cianuración y plantas de agregados",
      "Ingeniería y asesoramiento técnico",
      "Montaje electromecánico integral",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Diseño, Fabricación y Montaje de Plantas de Cianuración",
    client: "Minera Mollehuaca",
    tag: "Proyectos Integrales",
    code: "PRJ-001",
    img: "/images/plantasmollehuaca.jpg",
  },
  {
    title: "Diseño y Fabricación de Tanques Agitadores para Cianuración",
    client: "Minera Mollehuaca",
    tag: "Fabricación",
    code: "PRJ-002",
    img: "/images/tanquesmollehuaca.jpg",
  },
  {
    title: "Fabricación, Montaje y Alineamiento de Molinos de Bolas",
    client: "Minera Mollehuaca",
    tag: "Montaje y Alineamiento",
    code: "PRJ-003",
    img: "/images/molinosmollehuaca.jpg",
  },
  {
    title: "Reparación y Mantenimiento de Bombas SRL",
    client: "Minera Mollehuaca",
    tag: "Reparación",
    code: "PRJ-004",
    img: "/images/bombasrlmollehuaca.jpg",
  },
];

export const CONTACTS = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Talambo 127, San Miguel — Lima, Perú",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "922 286 991",
    href: "tel:+51922286991",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "grupovmringenieros@gmail.com",
    href: "mailto:grupovmringenieros@gmail.com",
  },
];

