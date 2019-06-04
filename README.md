# Organa

Laboratoria está buscando una manera eficiente de enterarse quienes asistieron al área de trabajo cada día. Hasta ahora se ha llevado una asistencia manual pero sabemos que toma tiempo valioso.

La idea de este proyecto es solucionar el registro de asistencia con una aplicación web.

La solución que proponemos consiste en usar una webcam para leer  [códigos QR](https://es.wikipedia.org/wiki/C%C3%B3digo_QR)  que identifiquen a cada estudiante que va llegando y se almacene en una base de datos por día.

Como primera iteración consideramos que pueda guardar la asistencia y pueda mostrar en una interface cuántas estudiantes asistieron ese día y cuantas inasistencias hubieron.

## Registro de asistencia, tardanza y falta

La coordinadora de desarrollo personal de Laboratoria lleva manualmente el registro de la asistencia de cada alumna en un archivo de una hoja de excel que va marcando con alguna de las siguientes 5 opciones:

 - X= *asistencia* 
 - T= *tardanza* 
 - F= *falta* 
 - TJ= *tardanza justificada* 
 - FJ= *falta justificada*

El horario para que se tome como retardo comienza a las 8:11am, en caso de falta es a partir de las 12pm. Dentro del archivo hay fórmulas que por día muestran el **TOTAL** de: cuantas estudiantes tienen asistencia, tardanza, etc.

Cuando son *faltas sin justificar* se marcan en amarillo. Las tardanzas justificadas son cuando la alumna tiene tardanza pero la razón no es justificable (levantarse tarde por ejemplo) y en este caso se pone tardanza pero no ‘aplica’.

La coordinadora de desarrollo personal cuenta con la información de cada alumna: nombre, correo, código de alumna y la asistencia. 

El documento donde se lleva el control de  las asistencias -también se encuentran los coaches- y al registrar las faltas y tardanzas justificadas, cuando ella no está en el área de trabajo, aparece quien de los coaches incluyó el comentario de la falta y/o tardanza.

## ¿Que se registra en las tardanzas y faltas?

En cada caso se registra diferente información:

-   Tardanza Justificada: la hora que llegó, a quién aviso y el motivo.
-   Tardanza Injustificada: la alumna llegó tarde y no aviso.
-   Falta: la estudiante no avisó a nadie y en este caso, se debe checar para hablarlo con ella.


## Diseño de la interfaz


### Prototipo de baja fidelidad

[Primera iteración](../images/first-ite.png)
[Segunda iteración I](../images/second-ite.png)
[Segunda iteración II](..images/second-iter.png)



### Prototipo de alta fidelidad 

En el siguiente enlace, se puede encontrar el diseño de *Organa*.

[Figma prototipo](https://www.figma.com/proto/O5AtKvib1waYHbzyH6CwygEt/Organa?node-id=6:514&viewport=-999,64,0.26451224088668823&scaling=scale-down)

### Componentes 
Después de conocer las instancias que contendría la webapp, se hizó una lista de los componentes necesarios.
- [Componentes general](../images/components-general.png)
- [Lista de componentes](../images/components-list.png)
- [Árbol de componentes](../images/components-tree.png)
