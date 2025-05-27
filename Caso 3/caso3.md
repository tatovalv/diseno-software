# Caso 3

# Group name - Jami Pura Vida
Marcelo Gomez
Isaac Rojas
Juan Carlos Valverde
Luis Masis

# Introducción

La plataforma Data Pura Vida es una iniciativa diseñada para crear un ecosistema nacional de datos que permita a instituciones públicas, empresas privadas y ciudadanos compartir, acceder y utilizar información de manera fácil, segura y eficiente. Este documento describe la arquitectura técnica base del sistema, detallando sus componentes clave (como bases de datos, interfaces y protocolos de seguridad) y cómo estos se integran para garantizar que los datos sean interoperables (compatibles entre diferentes sistemas), protegidos contra riesgos y accesibles para quienes los necesiten. El objetivo es sentar las bases de una infraestructura que impulse la transparencia, la innovación y la toma de decisiones basada en evidencia, beneficiando a todo el país.

# Objetivos de la Arquitectura

- Establecer una visión técnica clara para todos los actores involucrados.
- Asegurar escalabilidad, trazabilidad, seguridad y mantenibilidad desde el diseño.
- Definir los componentes principales del sistema y sus responsabilidades.
- Proveer una guía para futuras decisiones técnicas.

# Componentes principales

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

# Diagrama de Contenedores

![imagen](Recursos/diagrama_contenedores_data_pura_vida.png)

## Tecnologías sugeridas por contenedor

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

# Riesgos técnicos iniciales identificados

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

> CISO: Chief Information Security Officer

> DPO: Data Protection Officer

> SIEM: Security Information and Event Management 

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