const productos = [
  {
    id: 1,
    nombre: "ASUS TUF Gaming X670 e-Plus",
    categoria: "Motherboard",
    imagen: "/src/assets/ASUS_TUF_Gaming_X670_e-Plus.jpg",
    precio: 649998.99,
    stock: 4,
    detalle:
      "EXCELENTE DISEÑO TÉRMICO - El rendimiento sin restricciones de las placas base ASUS está garantizado por un diseño térmico innovador y optimizado para garantizar la mejor estabilidad de la CPU, el chipset y la SSD y las bajas temperaturas bajo aplicaciones de carga completa y rendimiento de juegos.",
    detalle1:
      "CONECTIVIDAD - Las placas base ASUS permiten la mejor experiencia de conexión con velocidades de transferencia de datos increíbles a través de la red, el almacenamiento y la conectividad WIFI de próxima generación.",
    detalle2:
      "PERSONALIZACIÓN - Las placas base ASUS incluyen varios software útiles e intuitivos para ayudar a los usuarios a controlar todos los aspectos de la placa base y proporcionar un efecto de iluminación personalizable con una estética excepcional para adaptarse a su personalidad única.",
  },
  {
    id: 2,
    nombre: "ASUS ROG Strix B650e-f",
    categoria: "Motherboard",
    imagen: "/src/assets/ASUS_ROG_Strix_B650e-f.jpg",
    precio: 238500.99,
    stock: 7,
    detalle:
      "RANURA PCIE ® Q-RELEASE - Un botón físico desbloquea el pestillo de seguridad de la primera ranura PCIe con una sola pulsación, lo que simplifica en gran medida el proceso de desconexión de una tarjeta PCIe de la placa base cuando llega el momento de actualizar a una nueva GPU u otro dispositivo compatible.",
    detalle1:
      "M.2 Q-LATCH - El innovador Q-Latch facilita la instalación o extracción de una SSD de una ranura M.2. El diseño emplea un mecanismo de bloqueo simple para asegurar la unidad, eliminando la necesidad de un tornillo tradicional.",
    detalle2:
      "BIOS FLASHBACK™ - BIOS FlashBack™ es una forma segura y sencilla de actualizar el BIOS. Simplemente suelte el archivo BIOS (UEFI) en una memoria USB con formato FAT32, conéctelo al puerto USB BIOS FlashBack y presione el botón. Las actualizaciones incluso se pueden realizar sin tener memoria o una CPU instalada.",
  },
  {
    id: 3,
    nombre: "AMD Ryzen 9 7950x",
    categoria: "Procesador",
    imagen: "/src/assets/AMD_Ryzen_9_7950x.jpg",
    precio: 404519.99,
    stock: 11,
    detalle:
      "Bienvenido a la nueva era del rendimiento. La serie AMD Ryzen 7000 saca a relucir la velocidad descomunal de “Zen 4” y su potencia pura para que los jugadores y creadores puedan procesar cualquier juego o flujo de trabajo que se cruce en su camino.",
    detalle1:
      "Cuando tu PC usa el procesador de escritorio más avanzado del mundo que existe para jugadores, te puedes concentrar en lo que verdaderamente importa: ganar en el campo de batalla digital. No importa si quieres jugar los últimos lanzamientos o revivir un clásico: los procesadores AMD Ryzen de la serie 7000 te dan una potencia de juego arrasadora con los núcleos “Zen 4” de alto rendimiento. Con hasta 16 núcleos, 32 subprocesos, velocidades turbo máximas de 5,7 GHz y caché de hasta 80 MB, los procesadores AMD Ryzen serie 7000 ofrecen un rendimiento que lo cambia todo.",
    detalle2:""
  },
  {
    id: 4,
    nombre: "AMD Ryzen 5 5600x",
    categoria: "Procesador",
    imagen: "/src/assets/AMD_Ryzen_5_5600x.jpg",
    precio: 162394.99,
    stock: 5,
    detalle:
      "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.",
    detalle1:
      "Núcleos: el corazón del procesador - En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.",
    detalle2:
    "Máxima potencia - Al estar desbloqueado, podrás realizar overclocking y así aumentar la frecuencia de funcionamiento y optimizar el rendimiento de tu equipo. Personalizalo a tu gusto y disfrutá de tus videojuegos o hacé que la renderización de imágenes sea más ágil. ¡Descubrí el abanico de posibilidades que esta función te ofrece!"
  },
  {
    id: 5,
    nombre: "AMD ASUS RX 6700XT",
    categoria: "Placa_de_Video",
    imagen: "/src/assets/AMD_ASUS_RX_6700XT.jpg",
    precio: 339999.99,
    stock: 3,
    detalle:
      "Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.",
    detalle1:
      "Velocidad en cada lectura - Como cuenta con 2560 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.",
    detalle2:
    "Calidad de imagen - Criterio fundamental a la hora de elegir una placa de video, su resolución de 2560x1440 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."
  },
  {
    id: 6,
    nombre: "EVGA FTW3 RTX 3070 Ultra Gaming",
    categoria: "Placa_de_Video",
    imagen: "/src/assets/EVGA_FTW3_RTX_3070_Ultra_Gaming.jpg",
    precio: 330100.99,
    stock: 9,
    detalle:
      "Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.",
    detalle1:
      "Velocidad en cada lectura - Cuenta con 5888 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos.",
    detalle2:
    "Calidad de imagen - Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración."
  },
];

export default productos;