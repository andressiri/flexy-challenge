# [<img src="src/assets/flexy-logo.svg" alt="Flexy logo" width="50"/>](https://flexy.com.ar/) Flexy challenge

## Explicación del proyecto

Se intentó cumplir con la consigna de una manera tal en la que pueda mostrar lo que soy capaz de aportar al equipo de Flexy, buscando expresar mi motivación por escribir código escalable, robusto, modular y reutilizable. En principio algunas soluciones podrían considerarse un "overkill" de la tarea, pero fueron realizadas con la intención mencionada. Así, además de buscar la copia al nivel pixel perfect del figma proporcionado, se llevó adelante una pequeña aplicación de front siguiendo en la mayor medida posible los principios S.O.L.I.D o teniendo en cuenta algunos patrones de diseño como los componentes de mayor orden (Higher Order Components) o ideas en relación al patrón de diseño "Builder" adaptado a React y Typescript. De esta forma se pretendió enseñar otras habilidades extra al maquetado, un buen manejo del ruteo o de las peticiones a una API sin necesidad de agregar librerias para hacerlo, entre otras cosas.

## Imágenes del proyecto

Se adjuntan primero las imágenes más importantes, correspondientes a la pantalla de registro en las resoluciones establecidas en el figma (1643 x 950 y 375 x 812), y luego desplegables imagenes secundarias.

![Pantalla de registro 1643 x 950](/assets/register1643x950.png)

![Pantalla de registro 375 x 812](/assets/register375x812.png)

<details>

  <summary>Más imágenes</summary>

![Errores en el registro](/assets//erroresRegister.png)

![Usuario ya existente](/assets/usuarioYaExistente.png)

![Login con mismos estilos](/assets/loginManteniendoEstilos.png)

![Inicio y drawer desplegado](/assets/inicioYDrawer.png)

![Pantalla intermedia](/assets/pantallaIntermedia.png)

</details>

## Instalación en local

Para instalar esta aplicación y probarla en desarrollo necesitas tener instaladas en tu computadora versiones actualizadas de `Node.js`, `NPM` y `Git` para poder:

1. Crear e ir a un nuevo directorio.
2. Inicializar un nuevo repositorio con el comando `git init`.
3. Obtener este repositorio remoto con el comando `git pull https://github.com/andressiri/flexy-challenge`.
4. Instalar las dependencias del directorio raíz con el comando `npm install`.
5. Correr el comando `npm run dev` que inicializará la aplicación en el puerto 3000.

### Aclaración

El registro de usuarios está hecho de manera rudimentaria en el estado de la aplicación, ya que es meramente de prueba, por lo que al salir de la página se perderán los usuarios registrados.
