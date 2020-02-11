# Documento de Descripción de Arquitectura
Equipo: TeamLinked
Integrantes: 
- Iván René Delgado Gonzalez
- Andres Duván Chaves Mosquera 
- Gabriel David Aguirre Arias
- Albert Yarid Perez Cárdenas 
- Daniel Angulo Suescun 
- Juan Sebastián Páez Arroyo 
- Juan David Gaitán Forero

## Índice general

 1. Introducción
	 1. Nombre del sistema de software
	 2. Descripción del sistema de software
 2. Requisitos Funcionales
 3. Requisitos No Funcionales
	 1. Lenguajes y Frameworks
	 2. Estilo y/o patrones de arquitectura
	 3. Plataforma (contenedores)
	 4. Otros
 4. Diseño arquitectónico con descripción por vista
	 1. Vista de Descomposición
	 2. Vista de capas
	 3. Vista de componentes y conectores
	 4. Vista de despliegue
	 5. Vistas de modelos de datos
		 1. Microservicio: Gestión de Usuarios
		 2. Microservicio: Gestión de Ofertas de Empleo
		 3. Microservicio: Gestión de Redes de Contacto
		 4. Microservicio: Gestión de Foros
		 5. Microservicio: Gestión de Chat 

## Introducción
### Nombre del sistema de software
TeamLinked: La red social para encontrar y publicar empleo.
### Descripción del sistema de software
TeamLinked es una red social y una aplicación web creada con el propósito de ayudar a los usuarios a encontrar empleo y publicar ofertas. Como una red social, permite a quienes la usan publicar información por medio de sus perfiles y los de su organización. Facilita la tarea de los equipos de recursos humanos al brindar un canal único por el cual los empleadores pueden ver el curriculum de sus usuarios, además recibir las hojas de vida de los postulantes. Permite a los usuarios crear redes en las que estén personas con sus mismos intereses laborales. Todo un conjunto de herramientas que le perite a los empleadores encontrar la persona más adecuada para cada vacante en sus organizaciones y a las personas que buscan empleo, encontrar el que mejor se adapte a sus necesidades.

## Requisitos Funcionales
De acuerdo con lo requerido por el dueño de producto, se definieron los siguientes requisitos funcionales descritos como historias de usuario:
1. US01: Como usuario, quiero poder enviar y recibir mensajes de otro usuarios uno a uno para comunicarme con otros.
2. US02: Como usuario, quiero poder enlazar mi cuenta con la de otros usuarios para conocer nuevas ofertas y tener acceso a sus publicaciones.
3. US03: Como usuario, quiero poder buscar personas y organizaciones para poder tener acceso a información laboral de mi interés que ellos puedan proveer en sus perfiles.
4. US04: Como usuario, quiero poder publicar las ofertas de mi organización para que otros usuarios se postulen.
5. US05: Como usuario, quiero poder mantener una cuenta en la cual tener mis habilidades laborales, títulos y en general mi hoja de vida completa.
6. US06: Como usuario, quiero poder recibir y visualizar notificaciones, para estar enterado de lo que pasa con las ofertas que publico y a las que me postulo.
7. US07: Como usuario, quiero poder ver las ofertas de trabajo disponibles, para poder aplicar a ellas.
8. US08: Como usuario quiero poder observar las publicaciones de los usuarios de mi red, para estar al tanto de oportunidades laborales e información que me sea de ayuda.
9. US09: Como usuario, quiero poder realizar publicaciones, darles like y hacer comentarios, para poder interactuar con otros usuarios en la plataforma.
10. US10: Como usuario y usando la página de mi organización quiero poder mantener y actualizar la información de mi compañía y organización. 
11. US11: Como usuario, quiero poder asignar, cambiar y eliminar etiquetas ("tags") a mi cuenta para dar a conocer mis intereses.

## Requisitos No Funcionales
### Lenguajes y Frameworks
El sistema se construirá sobre la arquitectura de microservicios. Se han definido los siguientes microservicios, lenguajes y frameworks:

| Microservicio     | Lenguaje | Framework |
| --------------- | ----------- | ----- |
| Gestión de Usuarios     | JavaScript   | Express.js |
| Gestión de Ofertas de Empleo | Python  | Django | 
| Gestión de Redes de Contacto   | JavaScript | Express.js |
| Gestión de Foros | Python | Django |
| Gestión de Chat | JavaScript | Node.js |

El sistema también cuenta con una interfaz de usuario, y un API Gateway que junta las APIs de los microservicios individuales y se comunica con la interfaz de usuario:

| Elemento | Lenguajes | Framework |
| ----- | ----- | ----- |
| Interfaz gráfica (Front End) | JavaScript, HTML y CSS | React |
| API Gateway | JavaScript | Node.js |

### Estilo y/o patrones de arquitectura
- Microservicios: Patrón arquitectónico que permite desarrollar cada funcionalidad de la solución de software en un microservicio simple e independiente. Ésto permite que cada micorservicio pueda ser elaborado en un lenguaje diferente y que sea administrado por un equipo de desarrollo pequeño. Cada micorservicio es capaz de tener su propio almacenamiento de datos. La comunicación es llevada a cabo por medio de un API. En la aplicación se ha construído con base en cinco microservicios para la gestión de usuarios, de ofertas de empleo, de foros, de redes de contacto y de chat. 
- Modelo Vista-Controlador: Este patrón se utiliza para separar las características del software en modelos, vistas y controladores. El modelo representa un objeto que transporta datos. También puede tener lógica para actualizar el controlador si sus datos cambian. La vista representa la visualización de los datos que contiene el modelo. El controlador actúa tanto en el modelo como en la vista. Controla el flujo de datos en el objeto modelo y actualiza la vista cada vez que cambian los datos. Mantiene la vista y el modelo separados. En la aplicación los fameworks Node.js y Django usan el modelo vista-controlador, por lo que todos los microservicios están construidos bajo ese patrón. 
- REST: Es un estilo arquitectónico basado en cliente servidor que está construido con el fin de de permitir cierto conjunto de operaciones (GET, POST, PUT, DELETE) para comunicar componentes vía http. En la aplicación, cada uno de los microservicios expone APIs independientes que son utilizadas para ejecutar las operaciones de crear, actualizar, leer y eliminar.
### Plataforma (contenedores)
- Docker: Docker es una herramienta diseñada para facilitar la creación, implementación y ejecución de aplicaciones mediante el uso de contenedores. Los contenedores permiten a un desarrollador empaquetar una aplicación con todas las partes que necesita y enviarla como un paquete. En la aplicación cada uno de los microservicios está empaquetado en un contenedor y administrado por una plataforma Rancher. 
- Rancher: Rancher es una plataforma de software de código abierto que permite a las organizaciones ejecutar y administrar Docker y Kubernetes en producción.
### Otros
1. Cada microservicio tiene una base de datos propia. 
2. De las cinco bases de datos (una por cada microservicio), cuatro serán relacionales y una NoSQL. 
3. El API Gateway debe estar construido de manera que haga uso del lenguaje de consulta GraphQL.
4. La comunicación se hará solo mediante el API Gateway. No habrá otra forma de comunicación entre el frontend y los microservicios (backend). 
5. El front end será una aplicación web responsive, de fácil acceso en equipos móviles y de escritorio. 
6. La aplicación maneja autenticación con LDAP y manejo de tokens de sesión para seguridad. Además, maneja DNS para ocultar la dirección IP en la que se encuentra alojada. 
7. La aplicación maneja escalamiento horizontal para mejorar su desempeño y capacidad de carga. Posee balanceadores de carga para la aplicación web de front end, el API Gateway, y cada uno de los microservicios, y todos los componentes (la aplicación de front end, el API Gateway, cada microservicio, y cada base de datos) están duplicados tres veces cada uno, para un total de cuatro copias de cada elemento en la mayor cantidad de carga de la aplicación. 
8. Dado el escalamiento de la aplicación, las bases de datos se encuentran replicadas, por lo que todas las transacciones y datos son iguales entre los servicios replicados.

## Diseño arquitectónico con descripción por vista
### Vista de descomposición
Diagrama que evidencia las funcionalidades de la solución de software, es decir, lo que el sistema debe proporcionar a los usuarios.

![Vista de descomposición](https://cdn.discordapp.com/attachments/532072055190061069/674012910460076044/Descomposicion.png)

- Módulo de Usuarios: Módulo que gestiona toda la lógica relacionada con la gestión de los perfiles de usuario. El módulo contiene los siguientes submódulos:
	- Administración de cuentas de usuario: Submódulo que permite la creación, eliminación y actualización de usuarios.
	- Consulta Usuario: Submódulo que permite la consulta de un usuario por medio del identificador único generado al crear el registro. 
- Módulo de Ofertas de Empleo: Módulo que gestiona toda la lógica relacionada con la gestión de las ofertas de empleo. El módulo contiene los siguientes submódulos: 
	- Administración de ofertas: Submódulo que permite la generación de una nueva oferta, y la modificación y eliminación de ofertas, relacionadas con un perfil de usuario. 
	- Consulta Oferta: Submódulo que permite la consulta de una oferta y mostrar las ofertas publicadas por un usuario. 
- Módulo de Redes: Módulo que gestiona la creación de redes de usuarios dentro de la aplicación. El módulo contiene los siguientes submódulos: 
	- Edición de Etiqueta: Submódulo que permite la actualización de etiquetas de un usuario con el fin de asociar su cuenta con otros usuarios que compartan una o varias etiquetas. 
	- Asociación de Usuarios: Submódulo que permite al usuario enviar y recibir solicitudes para hacer parte de la misma red. 
- Módulo de Foros: Módulo que gestiona toda la lógica relacionada con la gestión de las publicaciones que pueden comentar otras personas. El módulo contiene los siguientes submódulos: 
	- Administración de foros: Submódulo que permite crear una publicación en la que otros usuarios puedan participar con sus propios mensajes, eliminar publicaciones, y modificar la información en publicaciones. 
- Módulo de Chats: Módulo que gestiona toda la lógica relacionada con la gestión de la comunicación instantánea entre usuarios. El módulo contiene los siguientes submódulos: 
	- Envío Mensaje: Submódulo que permite el envío de un mensaje instantáneo a otro usuario. 
	- Consulta Mensaje: Submódulo que permite consultar los mensajes de un usuario. 
	- Eliminar Conversación: Submódulo que permite eliminar toda una conversación con otro usuario.
	
### Vista de capas
El diagrama presenta la forma en la que se organizan los subsistemas por medio de una jerarquía que está representada por capas. Cada capa proporciona una interfaz que le permite interactuar con otras capas.

![Vista de capas](https://cdn.discordapp.com/attachments/532072055190061069/674015224055201815/Capas.png)

Niveles: 
- Presentación: Nivel en el que se sitúan las capas encargadas de la presentación de la información y la interacción con el usuario. Posee un balanceador de carga. 
- Lógica de negocio: Nivel que contiene todas las capas relacionadas con el manejo de los datos de acuerdo a la lógica del negocio y tomándolos de la capa inferior para posteriormente presentarlos al usuario. Posee seis balanceadores de carga, uno entre la capa de presentación y el API Gateway, y cinco para cada uno de los cinco microservicios. 
- Datos: Nivel encargado de almacenar todos los datos con los que opera la aplicación. 

Capas: 
- Wa_lb: Balanceador de carga de la aplicación web de front end. 
- View: Capa por medio de la cual se mostrarán los datos al usuario. 
- Business Logic: Capa encargada de administrar los componentes visuales. 
- Integration Layer: Capa que se encarga de recibir los datos que son enviados desde el API Gateway 
- Api_lb: Balanceador de carga del API Gateway. 
- Schema: Capa que administra los type-defs, los resolvers y el server que utiliza GraphQL para definir la estructura de las peticiones. 
- Us_lb, of_lb, re_lb, fo_lb, ch_lb: Balanceadores de carga de cada uno de los microservicios. 
- Routes: Capa que recibe las peticiones enviadas al Identificador de Recursos Uniforme (URI) y las gestiona con la capa Controller. 
- Controller: Capa encargada de pedir los datos al modelo y enviarlos a la capa superior. 
- Model: Capa que gestiona la estructura de los datos. Cada microservicio tendrá un modelo. 
- Database: Capa que contiene los datos.

### Vista de componentes y conectores

![Vista de componentes y conectores](https://cdn.discordapp.com/attachments/532072055190061069/674012967645347860/Compcon.PNG)

Componentes:
- wa-lb: Balanceador de carga de la aplicación web. 
- teamlinked-wa: Componente encargado de interactuar con el usuario final. 
- api-lb: Balanceador de carga del API Gateway 
- teamlinked-api: Recibe las consultas y las distribuye entre los diferentes microservicios con el fin de administrar una interfaz de programación de aplicaciones para exponer puntos de enlace HTTP de los miCrear, implementar y administrar una interfaz de programación de aplicaciones (API) de REST para exponer puntos de enlace HTTP del backendscroservicios. 
- us-lb: Balanceador de carga del microservicio de usuarios. 
- usuarios-ms: Componente encargado de gestionar la información y las acciones desarrolladas sobre los perfiles de usuario. 
- of-lb: Balanceador de carga del microservicio de ofertas. 
- ofertas-ms: Componente encargado de gestionar la información y las acciones desarrolladas sobre las ofertas de empleo. 
- re-lb: Balanceador de carga del microservicio de redes. 
- redes-ms: Componente encargado de gestionar los vínculos entre usuarios. 
- fo-lb: Balanceador de carga del microservicio de foros. 
- foros-ms: Componente encargado de gestionar la creación, consulta, edición y eliminación de foros. 
- ch-lb: Balanceador de carga del microservicio de chats. 
- chat-ms: Componente encargado de gestionar la mensajería instantanea. 
- MS - Login: Componente auxiliar que procesa peticiones recibidas desde front end antes de enviarlas a LDAP. 
- LDAP: Componente de seguridad.

Conectores: 
- GraphQL: Conector que provee una interfaz entre el cliente y los microservicios para manipular y extraer información. 
- rest: Conector encargado de administrar las peticiones REST de los microservicios. 
- HTTP: Conector que gestiona la transferencia de información por medio de rutas URL.

### Vista de despliegue
Diagrama que describe la disposición física de los componentes de software, en el que cada un de dichos componentes se despliega en un entorno de ejecución particular. A continuación se muestran cuatro diagramas, uno por nodo, puesto que los nodos no están duplicados totalmente, y hay diferencias en los microservicios duplicados.

![Nodo 1](https://cdn.discordapp.com/attachments/532072055190061069/674016625825021984/deploynode1.png)

![Nodo 2](https://cdn.discordapp.com/attachments/532072055190061069/674016630996598814/deploynode2.png)

![Nodo 3](https://cdn.discordapp.com/attachments/532072055190061069/674016636189278223/deploynode3.png)

![Nodo 4](https://cdn.discordapp.com/attachments/532072055190061069/674016641356660746/deploynode4.png)

Software:
- Express.js: Framework utilizado con Node.js, basado en javascript usado en los microservicios de Gestión de Usuarios, Gestión de Redes de Contacto y Chat. 
- Django: Framework basado en el lenguaje de programación Python, utilizado en los microservicios de Gestión de Foros y Gestión de Ofertas de Empleo. 
- MongoDB: Base de datos no relacional para los microserviios de chat y de redes de contacto. 
- MySQL: Es la base de datos relacional usada para los microservicios Gestión de Usuarios, Gestión de Ofertas de Empleo y Gestión de Foros

Entorno:
- rancher-node: Es el nodo encargado de contener todas las instancias de los microservicios, las bases de datos, el api gateway y el proxy. A su vez este es contenido dentro del ambiente Rancher-server, que permite desplegar los microservicios por medio de la tecnología docker.

### Vistas de modelos de datos
#### Microservicio: Gestión de Usuarios
El modelo está compuesto por seis entidades. La primera, usuarios, contiene toda la información del perfil del usuario. Está relacionada con otra entidad tags, que contiene todas las etiquetas; producto de esta relación muchos a muchos, deriva usuarios_to_tags. Además tiene otra entidad, organizaciones, que maneja la información de las organizaciones y se relaciona con las entidades usuarios y tags; debido a esto, da lugar a nuevas entidades usuarios_organizaciones y organizaciones_tags

![usuarios](https://cdn.discordapp.com/attachments/532072055190061069/674018014068342803/usuarios.PNG)

#### Microservicio: Gestión de Ofertas de Empleo
El modelo está compuesto por tres entidades. La entidad usuarios, solo tiene el id del usuario y con base en eso, se gestionan los datos de este microservicio. Otra entidad llamada ofertas-empleo contiene toda la información de la oferta. Se hace necesaria una entidad intermedia para las aplicaciones, dicha entidad es ofertasEmpleo_Aplicadas.

![ofertas](https://cdn.discordapp.com/attachments/532072055190061069/674018012617113600/ofertas.PNG)

#### Microservicio: Gestión de Redes de Contacto
Modelo de base no relacional. Una sola tabla contiene las etiquetas por medio de las cuales se realizan las recomendaciones y asociaciones.

![red](https://cdn.discordapp.com/attachments/532072055190061069/674018008854691840/red.PNG)

#### Microservicio: Gestión de Foros
Modelo de tres entidades. Una entidad Usuario que solo tiene el id del mismo. Publicaciones, que contiene todos los datos del foro o publicación y una entidad intermedia para los comentarios.

![foros](https://cdn.discordapp.com/attachments/532072055190061069/674018016102580234/foros.PNG)

#### Microservicio: Gestión de Chat.
Base de datos no relacional. Una sola tabla con toda la información necesaria.

![chat](https://cdn.discordapp.com/attachments/532072055190061069/674018015037358081/chat.PNG)