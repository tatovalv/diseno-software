# Caso 3

# Group name - Jami Pura Vida

Marcelo Gomez
Luis Masis
Isaac Rojas
Juan Carlos Valverde


# Definición de la Arquitectura

## Introducción

La plataforma Data Pura Vida es una iniciativa diseñada para crear un ecosistema nacional de datos que permita a instituciones públicas, empresas privadas y ciudadanos compartir, acceder y utilizar información de manera fácil, segura y eficiente. Este documento describe la arquitectura técnica base del sistema, detallando sus componentes clave (como bases de datos, interfaces y protocolos de seguridad) y cómo estos se integran para garantizar que los datos sean interoperables (compatibles entre diferentes sistemas), protegidos contra riesgos y accesibles para quienes los necesiten. El objetivo es sentar las bases de una infraestructura que impulse la transparencia, la innovación y la toma de decisiones basada en evidencia, beneficiando a todo el país.

## Objetivos de la Arquitectura

- Establecer una visión técnica clara para todos los actores involucrados.
- Asegurar escalabilidad, trazabilidad, seguridad y mantenibilidad desde el diseño.
- Definir los componentes principales del sistema y sus responsabilidades.
- Proveer una guía para futuras decisiones técnicas.

## Componentes principales

| Componente                             | Descripción                             |
|----------------------------------------|-----------------------------------------|
| Portal Web Público	                 | Interfaz de acceso para usuarios registrados y visitantes. Incluye módulos de registro, compra de datasets, dashboards e interacción con IA.|
| Capa de Autenticación	                 | Maneja verificación de identidad (biometría, MFA, IP), login y gestión de sesiones seguras.|
| Backend API                            | Expone lógica de negocio, procesamiento de datos, control de acceso, pagos, trazabilidad y manejo de usuarios.|
| Motor de Carga ETDL + IA	             | Ejecuta procesos de extracción, transformación, limpieza, modelado y carga usando IA para detectar errores, duplicados y relaciones entre datos.|
| Data Lake		                         | Almacenamiento de datasets estructurados y semiestructurados, versionados y cifrados.|
| Portal Administrativo (Backoffice)	 | Herramienta interna para operadores autorizados. Gestiona usuarios, roles, auditorías, monitoreo, llaves de seguridad y reportes.|
| Módulos de IA		                     | Ejecutan validación documental, prompting para visualizaciones inteligentes y sugerencias de uso de datasets.|
| Sistema de Seguridad	                 | Aplica cifrado en tránsito y en reposo, manejo de llaves (incluyendo llaves tripartitas) y control de accesos por roles y contexto.|

## Diagrama de Contenedores

![imagen](Recursos/diagrama_contenedores_data_pura_vida.png)

### Tecnologías sugeridas por contenedor

| Contenedor                             | Tecnologías sugeridas                   |
|----------------------------------------|-----------------------------------------|
| Portal Web	                         | React, Next.js, AWS Amplify             |
| API Gateway	                         | Amazon API Gateway                      |
| Backend API	                         | Node.js con NestJS / FastAPI / Spring Boot |
| Autenticación	                         | Amazon Cognito + MFA                    |
| ETDL + IA	                             | AWS Glue, Lambda, Textract, Comprehend  |
| Data Lake		                         | Amazon S3, Glue Catalog, Lake Formation, DynamoDB |
| Seguridad 	                         | AWS KMS, Secrets Manager, Shield, WAF   |
| Backoffice	                         | React + shadcn/ui + RBAC modular        |

## Riesgos técnicos iniciales identificados

1. Complejidad de integraciones entre componentes con IA
Mitigación propuesta: Diseñar APIs intermedias desacopladas

2. Manejo de llaves criptográficas tripartitas	
Mitigación propuesta: Uso de custodios distribuidos con mecanismo de quorum

3. Cumplimiento normativo y legal		
Mitigación propuesta: Integración temprana con asesoría legal para auditoría

4. Seguridad de datos en ambientes técnicos	
Mitigación propuesta: Políticas Zero Trust + cifrado forzado en todas las capas

# Diseño de Llave Criptográfica Tripartita
Las llaves tripartitas en el contexto de este sistema van a ser de utilidad para proteger las claves criptográficas generadas distribuyendo una parte a Data Pura Vida y las otras dos a personas, entidades, etc. definidas por el usuario.

El sistema propuesto para implementar esta llave utiliza AWS KMS y CloudHSM para la administración de las claves simétricas y asimétricas creadas y el algoritmo [SSS](https://www.geeksforgeeks.org/shamirs-secret-sharing-algorithm-cryptography/) (Shamir's Secret Sharing) para la división e implementación de la llave, este algoritmo divide la clave en la cantidad de partes que se deseen (en este caso van a ser tres) y asegura que se necesiten al menos dos o incluso las tres partes para reconstruir la clave. En este caso se van a tener que utilizar dos partes por razones de redundancia.

El diagrama siguiente puede ayudar a entender el funcionamiento de esta llave de una mejor manera.
![imagen](Recursos/LlaveTDiagrama.png)

Las ventajas que proporciona el uso de esta llave es la mencionada redundancia ya que, si se pierde una parte, el sistema sigue funcionando y también mitiga riesgos de compromiso por una sola parte. Este sistema no asegura que exista complejidad en la gestión de las partes o que exista un riesgo de ataque si dos partes cometen un fallo o se ve violentada su seguridad (esto último podría evitarse obligando a ser necesarias las tres parte de la llave). 

# Aseguramiento del Cumplimiento Normativo y de Estándares
Para cumplir con los estándares internacionales y legislaciones nacionales, se propone la implementación de logs, de alertas obligatorias y de un mecanismo de auditoria para asegurar el apego a estos estándares y legislaciones.

### Estructura de logs 
Esta estructura de logs va a utilizar las tecnologías de AWS de CloudWatch (para el almacenamiento de los logs), AWS Kinesis Firehose (para la recopilación y análisis de datos en tiempo real), Lambda (para enriquecimiento de los logs) y opcionalmente S3 (por si se quiere un almacenamiento a largo plazo de los logs).

La estructura que van a seguir los logs a implementar es descrita en la siguiente tabla:

| Evento/s                                              | Campos del log                                             |        
|-------------------------------------------------------|------------------------------------------------------------| 
| Logins exitosos/fallidos, cambios de credenciales     | Timestamp, ID del usuario, método autenticación, resultado | 
| Acceso a Datos (Consultas, lecturas etc.)             | Timestamp, ID del usuario, dataset, campos accedidos       | 
| Creación/edición/eliminación de datos                 | Timestamp, ID del usuario, campo antes/después             |
| Intentos de vulneración, cambios de configuración     | Timestamp, IP, acción, sistema afectado                    |
| Consentimientos, solicitudes de ejerción  de derechos | Timestamp, ID del usuario, tipo solicitud, respuesta       |

### Mecanismos de Alerta Obligatorios
Las alertas estructuradas en la tabla siguiente van a ser utilizadas para mantener un mínimo de control sobre posibles acciones sospechosas que pueden ocurrir en el sistema:

| Detonante                      | Acción                            | Notificación | Tiempo de Respuesta |      
|--------------------------------|-----------------------------------|--------------|---------------------|  
| +3 intentos fallidos de acceso | Bloqueo temporal más notificación | SOC, CISO    | 15 minutos          |
|Acceso a >100 registros PII     | Revisión manual                   | DPO          | 24 horas            |  
|Modificación sin justificación  | Reversión automática              | Admins DB    | 30 minutos          |
|Patrón de acceso inusual        | Análisis comportamiento           | SIEM Team    | 1 hora              |
> SOC: Security Operations Center
> 
> CISO: Chief Information Security Officer
> 
> DPO: Data Protection Officer
> 
> SIEM: Security Information and Event Management 

> ** Estos roles y departamentos no exactamente pueden existir en data pura vida pero 

### Mecanismo de Auditoría
El mecanismo implementa AWS Config para detectar automáticamente configuraciones no compatibles, evaluar el cumplimiento de los múltiples estándares normativos que se tienen, generar evidencia auditable e implementar mecanismos de remediación automática (buscar detectar y solucionar problemas). También se implementa AWS Athena para reportes automáticos ya que esta herramienta es capaz de analizar grandes cantidades de datos con cierta facilidad y flexibilidad.

Aparte, este mecanismo contempla la retención de logs según su antigüedad con CloudWatch para retención de logs menores a 6 meses y S3 para los logs más antiguos e importantes.

<!-- Leyes/Estandares cumplidos
Ley 8968 (Art 16, Art 17, Art 19, Arts 21-30)
ISO 27001 (A.9.4.2, A.12.4.3, A.12.4)
GDPR (Art 5(2), Arts 15-22, Art 30, Art 35)
OECD Principle 8
NIST Cybersecurity Framework DE.CM-4 y DE.AE-3
PCI DSS Req 10
Ley 81 Art. 5
-->

# Restricción de Acceso Técnico a Datos Sensibles
Se debe garantizar que ningún personal técnico, de devops, ingeniero de datos etc. tenga ingreso a los datos sin una debida autorización, para eso se diseñó un sistema que combina 6 factores clave:
* **Cifrado de datos**
* **Control de acceso basado en atributos**
* **Proxy de datos seguros**
* **Elevación de privilegios Just-in-Time**
* **Segregación de ambientes**
* **Monitoreo y auditoría**
  
### Cifrado de Datos
El cifrado de datos fue detallado en una sección anterior, pero como resumen este... TBD

### Control de acceso basado en atributos
Este control obliga a que cada solicitud incluya MFA, justificación de acceso y roles de acceso específicos además de que los roles técnicos tienen explícitamente prohibido el acceso a datos planos.

### Proxy de datos seguros
Este intermediario cuenta con varias capas: capa de validación (verifica permisos y las solicitudes que entran), capa de transformación (aplica enmascaramiento y filtrado según criterios definidos) y capa de auditoría (registra cada operación antes de ejecutarla) y dentro de sus características claves es que este nunca expone conexiones directas y aplica reglas de minimización (muestra solo lo necesario).

### Elevación de privilegios Just-in-Time
Este factor contiene 4 pasos clave:
1. Solicitud: El técnico justifica la necesidad con ticket aprobado.

2. Aprobación: Requiere confirmación de un responsable.

3. Concesión: Credenciales temporales válidas por un límite de tiempo definido.

4. Monitoreo: Se extraen datos en tiempo real que son supervisados.

### Segregación de ambientes
Este factor cosiste en dividir el ambiente de trabajo en **ambiente de producción** donde el acceso es restringido y solo puede ser accedido mediante proxys, **ambiente de desarrollo** donde se tienen datos que son anonimizados además de redes aisladas con controles estrictos.

### Monitoreo y auditoría
Este factor cuenta con varias tecnologías de AWS GuardDuty y AWS Macie que detectan comportamientos anómalos e identifica exposición de datos sensibles.

_______________________________________________________________

## Control de Versiones y Deltas para Cada Dataset

A medida que la plataforma *JAMI Pura Vida* recibe más y más datasets, es importante tener una estrategia clara para controlar sus versiones, ahorrar espacio y mantener la trazabilidad de todo lo que ocurre con los datos.

Esta tarea tiene como objetivo definir cómo vamos a manejar las diferentes versiones de un mismo dataset, y cómo registrar solamente los cambios (deltas) que ocurren entre una versión y otra. De esta forma evitamos almacenar archivos completos cada vez que se actualiza algo, lo que nos ayuda a reducir el espacio utilizado, pero sin perder el historial de los datos.

Además, todo este proceso debe quedar bien documentado, de modo que siempre podamos saber qué versión se usó, qué cambió, quién hizo el cambio (si aplica), y cuándo.

### Propuesta de solución

La idea es trabajar con un modelo mixto que combine:

1.	 Snapshots o versiones completas del dataset (cuando se crea por primera vez o cada cierto tiempo), y

2. Archivos delta, que registran únicamente lo que cambió entre una versión y otra (por ejemplo: datos nuevos, editados o eliminados).

### Manejo de versiones

Cada vez que se sube un dataset por primera vez, se guarda como una versión completa. A partir de ahí, se puede trabajar con cargas incrementales, donde solo se guarda lo que cambió desde la última versión.

Para organizarlas, se pueden usar carpetas dentro de S3 con nombres que indiquen la versión o la fecha:

```sh
/dataset=usuarios/version=2025-02-03/
/dataset=usuarios/version=2025-05-06-delta/
```

Para llevar un control claro de cada versión o delta que se cargue en el sistema, se usará una tabla llamada DatasetVersionLog, donde se registra todo lo relacionado con esa versión: qué tipo fue, cuántos registros tiene, quién la cargó, si hubo errores, la ruta del archivo en S3, etc.

Esta tabla nos permite reconstruir la historia completa de cualquier dataset, detectar errores rápidamente, y tener trazabilidad tanto técnica como legal si es necesario. Se va a guardar un registro por cada carga que se haga (ya sea una versión completa o un delta), con información clave para identificar qué cambió, cuándo y en qué condiciones.

### Estructura de la tabla DatasetVersionLog

| Columna           | Tipo de Dato           | Descripción                      |
|-----------------|----------------|---------------------------------------|
| dataset_id | String | Nombre o identificador del dataset afectado (ej: empleados, salud_poblacional). |
| version_id | String (fecha o UUID) | Identificador único de la versión (ej: 2024-06-01, 20240605-delta). |
| version_type | String | "snapshot" o "delta", según el tipo de carga. |
| timestamp | Datetime | Fecha y hora en que se cargó esa versión. |
| operation_type | String | "insert", "update", "delete" o "mixed". |
| record_count | Int | Cantidad de registros procesados en esta versión. |
| executed_by | String | Usuario, sistema o proceso que hizo la carga. |
| surce_file_path | String | Ruta del archivo en S3 asociado a la versión. |
| hash | String (SHA256) | Hash del archivo para validar integridad. |
| status | String | "success", "error" o "partial". |
| error_messagge (opcional) | String | Mensaje de error si la carga falló. |
| notes (opcional) | String | Campo libre para comentarios adicionales. |

### ¿Cómo se detectan los deltas?

La detección de cambios se puede hacer de dos formas:

a) Usando columnas de control

Cada dataset puede tener campos como:

- last_updated_timestamp: para saber si un registro fue actualizado.
- operation_type: para saber si fue un insert, update o delete.

b) Comparando versiones

Si el dataset no trae esas columnas, se puede comparar la nueva versión contra la anterior, y ver:

-	Qué registros aparecen nuevos.
-	Cuáles tienen diferencias.
-	Cuáles ya no están.

Esto se puede automatizar con herramientas como AWS Glue, que permite comparar datos con scripts, o incluso con consultas en Redshift si los datasets están registrados.

### Aplicación de cambios (merge)

Una vez identificados los cambios, se aplican al dataset principal, por ejemplo con un comando `MERGE INTO`, que:

-	Inserta los registros nuevos.
-	Actualiza los que cambiaron.
-	Elimina los que ya no deberían estar.

Este proceso mantiene la integridad de los datos y evita duplicaciones o errores por cargas repetidas.


### Diagrama de flujo

![imagen](Recursos/Deltas.drawio.png)
 
### Trazabilidad y registros

Para mantener un buen control de todo el proceso, se pueden registrar los siguientes datos por versión:

- Fecha de carga.
-	Hash del archivo.
-	Registros totales.
-	Tipo de operación (completa o delta).
-	Resultado del procesamiento (exitoso o con errores).

Esta información se puede guardar en una tabla en `DynamoDB` o en archivos en `S3`, y los logs del proceso se pueden enviar a `CloudWatch`.

### Puntos altos de este enfoque

-	Ahorra espacio porque no se guardan archivos completos innecesarios.
-	Mejora el rendimiento al trabajar con datos más livianos.
-	Mantiene trazabilidad, ya que se puede reconstruir cualquier versión del dataset si es necesario.
- Facilita auditorías y debugging.

_______________________________________________

## Definición del Motor de Carga ETDL Inteligente con IA

Para manejar de forma eficiente los distintos datasets que ingresan a la plataforma *JAMI Pura Vida*, se propone el diseño de un motor ETDL inteligente que permita no solo cargar los datos, sino también asegurar su calidad, contexto y trazabilidad.

Este motor sigue una estructura modular con etapas de extracción, transformación, detección de contexto y modelado, integrando IA para analizar los metadatos y el contenido de los datos. Como parte central del diseño, se incorpora el patrón Reactivo, que permite que el sistema detecte y reaccione automáticamente ante nuevos datasets, rediseñando el modelo de datos cuando sea necesario.

El objetivo es reducir al mínimo las intervenciones manuales, aprovechar la inteligencia artificial para tomar decisiones sobre el esquema de datos, y mantener siempre un registro claro de todo lo que ocurre en el proceso.

### Objetivo general de esta nueva tarea

Diseñar los módulos y el flujo del motor ETDL inteligente con IA, asegurando calidad de datos (consistencia, completitud, limpieza), trazabilidad (saber qué se hizo, cuándo y por qué) y aprovechar IA para decisiones automáticas durante el modelado.

### Estructura general del Motor ETDL Inteligente

![imagen](Recursos/ETDL.drawio.png)

#### 1. ExtractionModule

Se encarga de recibir datasets desde múltiples fuentes (archivos, APIs, bases de datos). Su función es desacoplar la ingesta del resto del flujo, y garantizar que los datos lleguen completos.

Tecnologías: Amazon S3, AWS Glue, AWS DMS.

#### 2. TransformationModule

Aquí se ejecutan las tareas tradicionales de limpieza y transformación: validación de tipos, eliminación de duplicados, estandarización de formatos, y normalización de campos. Este paso garantiza calidad básica antes de pasar a IA.

Tecnologías: AWS Glue, AWS Lambda.

#### 3. ContextDetectionModule

Este módulo utiliza IA para identificar el contexto semántico de los datos. Analiza nombres de columnas, metadatos, ejemplos de valores y estructuras comunes. Sirve como base para el modelado inteligente.

Tecnologías: Amazon Comprehend, Textract.

#### 4. IntelligentModelingModule

Es el núcleo del sistema inteligente. Reacciona ante nuevos datasets y, con ayuda del LLM, detecta si deben fusionarse, vincularse, renombrarse o generar relaciones con datos existentes. Utiliza el patrón Reactivo porque responde a cambios en el estado del datalake sin intervención manual.

#### Metáfora del mundo real del patrón

Sistema inmunológico humano

Así como el cuerpo humano detecta cambios en su entorno interno (virus, bacterias) y reacciona automáticamente activando defensas, el patrón reactivo en este sistema actúa ante la llegada de nuevos datasets, analiza sus características y toma acciones inmediatas como:

-	Reorganizar relaciones entre datos existentes.
-	Unir datasets que tienen campos comunes (como si detectara ADN similar).
-	Agregar columnas donde se necesitan más detalles.
-	Optimizar el modelo actual de forma automática sin intervención manual.

#### Explicación funcional del Reactive Pattern en este caso

El agente reactivo:

1.	Espera pasivamente a que nuevos datasets ingresen al datalake.

2.	Reacciona inmediatamente al evento de inserción mediante un pipeline automático.

3.	Utiliza metadatos y análisis semántico del contenido para decidir:

    -	Si debe hacer merge entre datasets.
    -	Si hay columnas que deben unirse o renombrarse.
    -	Si se deben establecer relaciones y generar llaves foráneas.
    -	Si deben crearse índices o transformar el modelo de datos existente.

4.	Aplica las transformaciones y reestructura el esquema sin intervención humana directa.

#### Diagrama del patrón reactivo personalizado

![imagen](Recursos/ReactivePattern.drawio.png)

#### Componentes del patrón

| Componente     | Función      | 
|----------------------|----------------|
| DatasetListener | Detecta la llegada de nuevos datasets en S3/Glue |
| SchemaAnalyzer | Extrae y analiza los metadatos + semántica de columnas |
| AIReactor (LLM Handler) | Consulta al LLM o motor IA con prompt estructurado |
| SchemaRewriter | Aplica cambios al modelo de datos |
| ModelStore | Registra la nueva versión del modelo optimizado |
| ActionLogger | Guarda todas las decisiones y transformaciones para trazabilidad |

#### Inputs

-	Dataset cargado (Excel, CSV, JSON)
-	Metadatos declarados (tipo de columnas, relaciones sugeridas)
-	Historial de datasets existentes

#### Result Output

-	Modelo de datos transformado: actualizado, optimizado, versionado
-	Acciones registradas en logs (para auditoría y reversión)
-	Nuevas relaciones entre datasets reflejadas en Glue Catalog o Redshift

#### Interacción con el LLM / Servicio de IA

Ocurre dentro del componente AIReactor, que genera prompts con la siguiente estructura:

```sh
"Recibiste un nuevo dataset con las siguientes columnas: [...]. 
Ya existen otros datasets con columnas similares: [...]. 
Analiza si debe realizarse un merge, agregar columnas, renombrar, 
crear relaciones o índices. Responde con acciones estructuradas."
```

Este componente puede usar Amazon Bedrock o SageMaker Endpoint personalizado si se entrena un modelo propio.

#### 5. LoadModule

Solo si el modelado fue exitoso, los datos se cargan al datalake (Data Lake formal) usando los esquemas actualizados. Esta operación puede incluir escritura en formato columnar, compresión, y control de versiones.

Tecnologías: Amazon S3, AWS Glue, Redshift (opcional).

#### 6. TraceabilityLogger

Se encarga de registrar todo lo que sucede: desde el origen del dataset, hasta cada transformación y decisión tomada por el LLM. Provee trazabilidad completa para auditoría, debugging y control de calidad.

Tecnologías: AWS CloudWatch Logs, DynamoDB.
_________________________________________________________________

## Arquitectura del Motor de Prompts para Consultas Inteligentes

Uno de los objetivos más innovadores del proyecto *JAMI Pura Vida* es permitir a los usuarios consultar datos por medio de lenguaje natural, sin necesidad de escribir código o armar consultas técnicas.

Para eso, se plantea el diseño de un motor de prompts, que sirva como puente entre lo que el usuario pide con sus palabras y las visualizaciones que necesita ver. Es decir, un sistema capaz de traducir una pregunta como “Mostrame el crecimiento mensual de nuevas empresas registradas en el GAM” en un dashboard generado automáticamente, respetando siempre los permisos de acceso que tenga ese usuario.

Este motor debe ser flexible, seguro y capaz de conectarse a la base de datos o datalake según corresponda, procesar la información, y generar visualizaciones que respondan directamente al prompt.

### Arquitectura general del Motor de Prompts

El motor está compuesto por distintos módulos que trabajan juntos para convertir un prompt en una visualización válida y útil:

![imagen](Recursos/Prompts.drawio.png)
 
Se va a implementar un patrón de agentes, en este caso el Patrón Planner-Executor. Este patrón se utiliza dando un enfoque en donde las tareas complejas se dividen en dos etapas claras; **planificación y ejecución**.

En el contexto de *JAMI Pura Vida*, el patrón Planner-Executor permite que el motor de prompts reciba una consulta en lenguaje natural, genere un plan seguro y autorizado (planning), y luego lo convierta en una visualización útil, cumpliendo con las reglas de seguridad y acceso definidas (execution).

### 1. PromptAgent (Agente coordinador)

Es el núcleo del motor. Es quien recibe el prompt del usuario y coordina todo lo que pasa después. No interpreta el prompt directamente, pero sabe a quién debe enviárselo y en qué orden deben ejecutarse los pasos. También es responsable de enviarle al usuario la visualización final.

Ejemplo:
 Recibe el mensaje:

 ```sh
 “Quiero ver el crecimiento mensual de empresas en Heredia”.
```

→ Llama al PromptPlanner, después al SecurityValidator, luego al QueryExecutor, etc.

### 2. PromptPlanner (Planificador del prompt)

Este componente lee el texto del usuario e interpreta su intención. Su trabajo es convertir el lenguaje natural en un “plan de acción”, que normalmente incluye:

•	Qué datos buscar.

•	Qué filtros aplicar (ej. región, fechas).

•	Qué métrica usar (ej. conteo, promedio).

•	Qué tipo de visualización puede representar mejor ese resultado.


El PromptPlanner puede generar un plan tipo:

```sh
{
  "dataset": "empresas",
  "filtro": "provincia = 'Heredia'",
  "agrupado_por": "mes",
  "métrica": "cantidad_registros",
  "visualización": "gráfico de líneas"
}
```

### 3. SecurityValidator (Validador de seguridad y permisos)

Antes de ejecutar cualquier consulta, el plan debe pasar por una validación de seguridad. Este módulo:

•	Verifica si el usuario tiene acceso al dataset solicitado.

•	Revisa si los filtros (por región, institución o nivel de detalle) son válidos.

•	Bloquea o ajusta el plan si hay riesgos (por ejemplo, datos sensibles, columnas restringidas).


Ejemplo:

 Un ciudadano pide ver “datos individuales de ingresos”.
 
 → El SecurityValidator detecta que eso no está permitido y modifica el plan para mostrar solamente promedios agrupados.
 
### 4. QueryExecutor (Ejecutor de consulta)

Este componente transforma el plan aprobado en una consulta real (por ejemplo, SQL o consulta en Athena), la ejecuta y devuelve los resultados.

•	Si hay errores en la ejecución, los reporta.

•	Si hay mucha información, puede aplicar paginación o resumir.

•	Se conecta a las fuentes: S3, Redshift, DynamoDB, etc.


Ejemplo:

 A partir del plan, genera esta consulta:

```sh 
SELECT mes, COUNT(*) as total
FROM empresas
WHERE provincia = 'Heredia'
GROUP BY mes
ORDER BY mes ASC;
```

### 5. VisualizationBuilder (Constructor de visualización)

Toma los resultados crudos (tabla, números, agrupaciones) y decide automáticamente qué tipo de gráfico o componente visual mostrar al usuario.

•	Usa lógica basada en el tipo de dato (tiempo, categorías, números).

•	Puede generar gráficos de líneas, barras, tortas, tablas ordenadas, mapas, etc.

•	Se asegura de que la visualización sea clara, útil y entendible.


Ejemplo:

 Si los datos tienen fechas en orden, genera un gráfico de líneas.
 
 Si hay categorías, genera barras o torta.

### 6. PromptResponseEngine (Motor de respuesta)

Este módulo empaqueta todo el resultado (visualización, metadatos, contexto) y lo entrega al usuario, normalmente dentro de la interfaz de la aplicación.

•	También puede incluir la explicación de qué datos se usaron, de qué fuente, y cómo se calculó el resultado.

•	Si hubo ajustes en el prompt por seguridad, puede informarle al usuario.


Ejemplo:

 El usuario pidió algo y se devuelve:

```sh 
"Gráfico generado con datos de empresas registradas en Heredia, agrupadas por mes. Última actualización: mayo 2024."
```

### Seguridad y control de accesos

Uno de los aspectos más importantes en un sistema que permite acceder a datos mediante lenguaje natural es asegurarse de que cada usuario solo vea lo que le corresponde, sin importar qué tan específica o ambigua sea la consulta que haga.

El motor de prompts implementa seguridad en distintos niveles:

1.	Validación por rol y perfil: Antes de ejecutar cualquier consulta, se consulta el rol del usuario (por ejemplo: ciudadano, analista, institución pública) y se define qué datasets puede ver, qué columnas están disponibles y a qué nivel de detalle puede acceder.


2.	Catálogo de datos controlado: El modelo de lenguaje no tiene acceso libre a todas las tablas. Solo puede trabajar con un catálogo de datos documentado, que define qué columnas y tablas están disponibles para cada tipo de usuario.


3.	Filtrado automático según contexto: Incluso si un usuario puede acceder a un dataset, el sistema puede aplicar automáticamente filtros adicionales (como restringirlo a su provincia, cantón o institución) para respetar las políticas internas de acceso.


4.	Auditoría y trazabilidad: Cada prompt, consulta generada y respuesta visual se registra con metadatos como usuario, fecha, origen, tipo de acceso y resultado. Esto permite revisar o auditar cualquier consulta posterior.


5.	Bloqueo y reformulación de prompts sensibles: Si un prompt intenta acceder a datos restringidos (por ejemplo: “mostrame ingresos por persona en mi distrito”), el sistema puede reformular automáticamente la consulta o negarla, manteniendo siempre la trazabilidad del intento.
