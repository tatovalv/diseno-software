# *JAMI Pura Vida*

## Integrantes
Marcelo Gómez

Luis Masis

Isaac Rojas

Juan Carlos Valverde


# Introducción

La plataforma Data Pura Vida es una iniciativa diseñada para crear un ecosistema nacional de datos que permita a instituciones públicas, empresas privadas y ciudadanos compartir, acceder y utilizar información de manera fácil, segura y eficiente. Este documento describe la arquitectura técnica base del sistema, detallando sus componentes clave (como bases de datos, interfaces y protocolos de seguridad) y cómo estos se integran para garantizar que los datos sean interoperables (compatibles entre diferentes sistemas), protegidos contra riesgos y accesibles para quienes los necesiten. El objetivo es sentar las bases de una infraestructura que impulse la transparencia, la innovación y la toma de decisiones basada en evidencia, beneficiando a todo el país.

# Plan de Ejecución

![imagen](Recursos/PlanEjecucion.png)

# Milestones

| Hito | Fecha | Descripción |
|:-|:-|:-|
| Inicio del Proyecto	 | 	10 junio 2025 | Lanzamiento oficial del proyecto, asignación de equipo y definición detallada de requerimientos. |
| Gobernanza y Seguridad Definidas | 12 Julio 2025 | Diseño completo de políticas de autenticación, control de acceso, trazabilidad y gobernanza de llaves. |
| Infraestructura Lista | 2 agosto 2025 | Configuración de entornos Dev, QA y Prod con arquitectura serverless y contenedores en AWS. |
| Backoffice y API Base Desarrollados	 | 6 Setiembre 2025 | Desarrollo funcional del portal interno con gestión de operadores, llaves y registros. |
| Motor de Carga y Validación Integrado	 | 27 Setiembre 2025 | Integración del sistema para ingestión, validación, monitoreo y segmentación de datasets. |
| Pruebas de Seguridad Completadas	 | 11 octubre 2025 | Validación exhaustiva de accesos, cifrado, reversibilidad, trazabilidad y detección de anomalías. |
| Lanzamiento Inicial del Sistema	 | 25 octubre 2025 | Versión productiva operativa con primeros usuarios registrados y flujos activos en producción. |

## Milestone 1: Inicio del Proyecto 

| KPI                                 | Objetivo                          | Recolección / Cálculo                                      |
|-------------------------------------|-----------------------------------|-------------------------------------------------------------|
| % de roles contratados              | > 90% antes de la semana 2        | Revisión de onboarding en sistema de RRHH / Notion          |
| Kickoff ejecutado                   | 1 reunión formal                  | Acta de reunión + participación documentada                 |
| Documento de alcance validado       | Aprobado por stakeholders         | Control de versiones + firma de aprobación digital          |

---

## Milestone 2: Gobernanza y Seguridad Definidas

| KPI                                 | Objetivo                          | Recolección / Cálculo                                      |
|-------------------------------------|-----------------------------------|-------------------------------------------------------------|
| Política de acceso publicada        | Documento completo en repositorio | Archivo versión final en Git + revisión legal               |
| Modelos RBAC implementados          | Definición en arquitectura        | Validación en repo de infraestructura (CloudFormation/CDK)  |
| % avance en matriz de roles         | 100%                              | Checklist de roles vs funcionalidades                       |

---

## Milestone 3: Infraestructura Lista

| KPI                                 | Objetivo                          | Recolección / Cálculo                                      |
|-------------------------------------|-----------------------------------|-------------------------------------------------------------|
| Tiempo medio de despliegue (Dev)    | < 15 minutos                      | Medición desde GitHub Actions o AWS CodePipeline            |
| Infraestructura 100% como código    | 100%                              | Auditoría en repositorio IAC (infraestructura como código)  |
| Ambientes disponibles (Dev, QA, Prod)| 3 funcionando                     | Verificación de endpoints y entornos accesibles             |

---

## Milestone 4: Backoffice y API Base Desarrollados

| KPI                                 | Objetivo                          | Recolección / Cálculo                                      |
|-------------------------------------|-----------------------------------|-------------------------------------------------------------|
| % de endpoints funcionales          | >= 80% del MVP definidos          | Test de integración automatizados (Postman / Jest)          |
| Cobertura de pruebas API            | > 70%                             | Reportes de cobertura de testing (e.g., Jest / Istanbul)    |
| Backoffice navegable (mínimo)       | UI visible + login funcional      | QA interna + screenshots                                   |

---

## Milestone 5: Motor de Carga y Validación Integrado

| KPI                                 | Objetivo                          | Recolección / Cálculo                                      |
|-------------------------------------|-----------------------------------|-------------------------------------------------------------|
| Archivos procesados correctamente  | > 95% de pruebas                  | Logs de Glue / Lambda / S3                                 |
| Tiempo promedio de carga            | < 2 min por archivo estándar      | Métricas CloudWatch o Prometheus                           |
| % datasets rechazados con razón clara| 100%                              | Logs + dashboard de rechazo con motivo visible             |

---

## Milestone 6: Pruebas de Seguridad Completadas

| KPI                                 | Objetivo                          | Recolección / Cálculo                                      |
|-------------------------------------|-----------------------------------|-------------------------------------------------------------|
| Vulnerabilidades críticas abiertas  | 0                                 | Reportes de AWS Inspector / OWASP                          |
| Pruebas de penetración ejecutadas   | Al menos 1 ciclo completo         | Evidencia de informe y recomendaciones integradas           |
| Alertas configuradas                | ≥ 5 alertas clave                 | AWS GuardDuty + Security Hub + CloudWatch Alarms            |

---

## Milestone 7: Lanzamiento Inicial del Sistema

| KPI                                 | Objetivo                          | Recolección / Cálculo                                      |
|-------------------------------------|-----------------------------------|-------------------------------------------------------------|
| Uptime durante la primera semana    | ≥ 99.5%                           | AWS CloudWatch Logs + Status Checks                         |
| Consultas exitosas a API            | ≥ 95%                             | Métricas de API Gateway                                     |
| Usuarios registrados                | ≥ 50 organizaciones o individuos  | Tabla de usuarios en RDS / DynamoDB                         |
| Dashboards construidos              | ≥ 20 por usuarios reales          | Métricas de frontend + trazas de uso en base de datos       |

---

# Estructura del Equipo

| Rol                       | Responsabilidades                                                                 |
|---------------------------|------------------------------------------------------------------------------------|
| Líder de Proyecto         | Coordinación general del equipo, reportes, cronograma y relación con stakeholders |
| Arquitecto de Software    | Diseño de gobernanza, infraestructura, seguridad y visión técnica integral        |
| DevOps Engineer           | Gestión de CI/CD, ambientes, monitoreo, seguridad, e infraestructura como código  |
| Backend Developer         | Implementación de APIs, control de acceso, cifrado, auditoría                     |
| Frontend Developer        | Desarrollo del backoffice, formularios y dashboards internos                      |
| Especialista en Seguridad | Cifrado, políticas de acceso, manejo de llaves, cumplimiento normativo            |
| QA Engineer               | Automatización de pruebas, validaciones funcionales y de seguridad                |
| Analista de Datos         | Diseño de modelos de datos, metadatos, trazabilidad, visualización                |
| Gestor Legal/Regulatorio  | Apoyo en contratos, cumplimiento con leyes de datos y documentación legal         |

# Recursos del Proyecto
| Recurso                     | Uso                                                                 |
|-----------------------------|----------------------------------------------------------------------|
| AWS Services                | Hosting, ejecución, escalado, seguridad y almacenamiento             |
| GitHub / GitLab             | Gestión del repositorio de código, issues y CI/CD pipelines         |
| Herramientas de Comunicación| Slack / Teams para colaboración entre roles                         |
| Documentación Técnica       | Confluence / Notion / Google Docs para specs y decisiones técnicas  |
| Monitoreo y Logging         | AWS CloudWatch, CloudTrail, GuardDuty, Grafana (opcional)            |
| Herramientas de IA          | Textract, Glue, SageMaker para validación inteligente y flujos ETL  |

# Stack de Principios Recomendado para Data Pura Vida

| Categoría        | Práctica Prioritaria                                                                 |
|------------------|---------------------------------------------------------------------------------------|
| Seguridad     | OWASP adaptado + Zero Trust aplicado a infraestructura y lógica de negocio          |
| Modularidad   | Principios SOLID en servicios + Arquitectura Hexagonal para backend desacoplado     |
| Código mantenible | Clean Code con funciones específicas, nombres claros y lógica separada           |
| DevOps & CI/CD | Twelve-Factor App adaptado a AWS Lambda, API Gateway, S3, Secrets Manager          |
| Auditoría & Gobierno | Registros estructurados, reversibilidad explícita y trazabilidad de acciones |


# Arquitectura Global

## Definición de la Arquitectura

### Objetivos de la Arquitectura

- Establecer una visión técnica clara para todos los actores involucrados.
- Asegurar escalabilidad, trazabilidad, seguridad y mantenibilidad desde el diseño.
- Definir los componentes principales del sistema y sus responsabilidades.
- Proveer una guía para futuras decisiones técnicas.

### Componentes principales

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

### Componentes Arquitectónicos y Tecnologías AWS Native Sugeridas

| Componente                             | Propósito                             | Tecnología Propuesta                  |
|----------------------------------------|---------------------------------------|---------------------------------------|
| Portal Web Público & Backoffice	     | Registro, dashboards, compra de datos, monitoreo | ReactJS + Tailwind CSS + Recharts + AWS Amplify |
| Capa de Autenticación    	             | Verificación biométrica, MFA, sesión segura | Amazon Cognito + JWT + AWS IAM + WAF |
| API Gateway	                         | Exposición controlada de servicios backend | Amazon API Gateway |
| Backend API                   	     | Procesamiento, control de acceso, pagos, auditoría | Node.js + TypeScript + Zod/Joi + AWS Lambda |
| Carga Inteligente (ETDL + IA) 	     | Limpieza, modelado, delta automático, duplicados | AWS Glue + Amazon Textract + Comprehend + SageMaker |
| Data Lake                     	     | Almacenamiento de archivos (CSV, JSON, Excel) | Amazon S3 + Glue Catalog + Lake Formation |
| Base de Datos Relacional      	     | Dashboards, usuarios, logs | Amazon Aurora Serverless v2 (opcional: DynamoDB para casos simples) |
| Base de Datos NoSQL           	     | Tokens, metadatos, control de límites | Amazon DynamoDB |
| Gestión de Seguridad           	     | Criptografía, llaves tripartitas, RBAC contextual | AWS KMS + Secrets Manager + GuardDuty + Security Hub |
| DevOps & QA                      	     | CI/CD, monitoreo, infraestructura como código | GitHub Actions + AWS CDK + CloudWatch + CloudTrail |
| Servicios Externos               	     | Notificaciones, pagos, correos | Stripe / BAC APIs + Twilio + Amazon SES |


------------------------------------------------

## Diagrama de Contenedores

![imagen](Recursos/DiagramaContenedores-Actualizado-DataPuraVida.png)

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

## Diseño de arquitectura desde la vista de capas (alta) hasta la vista de clases/patrones (baja)

### Diseño Arquitectónico: Vista de Capas y Patrones de Clases

La arquitectura de Data Pura Vida se organiza en una estructura de capas lógica y desacoplada, siguiendo una aproximación **Clean Architecture** con inspiración en la **Arquitectura Hexagonal**, para mantener la independencia entre las reglas de negocio y los detalles de implementación.

#### Vista de Capas (Alta)

1. **Capa de Presentación (Frontend):**
   - Framework: ReactJS + Tailwind.
   - Funcionalidad: renderización de dashboards, formularios, exploración de datos y backoffice.
   - Comunicación vía API REST/GraphQL.
   - Protección mediante OAuth2 y JWT.

2. **Capa de Aplicación (Orquestación):**
   - Implementada en Node.js (NestJS) o AWS Lambda.
   - Contiene los casos de uso (use-cases) y lógica de orquestación (validación, control de flujo, reglas del dominio).
   - Utiliza patrones como **Command**, **Observer** y **Factory** según necesidad.

3. **Capa de Dominio (Reglas de Negocio):**
   - Entidades del sistema: Usuario, Dataset, Llave, Registro de auditoría, etc.
   - Uso de **Value Objects**, **Aggregates** y **Domain Services**.
   - Lenguaje ubicuo reflejado en nombres y estructuras.

4. **Capa de Infraestructura (Adaptadores):**
   - Conexiones con bases de datos (PostgreSQL, DynamoDB), datalake (S3), servicios de IA (Textract, Comprehend), y notificaciones externas (SES, Twilio).
   - Manejo de persistencia, colas, cache y API externa.
   - Uso de patrones como **Adapter**, **Proxy**, **Repository** y **Service Locator**.

### Vista de Clases y Patrones (Baja)

- **UsuarioService** (Aplicación):
  - Métodos: `registrarUsuario()`, `asignarLlave()`, `activarCuenta()`.
  - Interactúa con `UsuarioRepository` y `CifradoService`.

- **DatasetValidator** (Dominio):
  - Patrones aplicados: **Strategy** para reglas de validación dinámicas.

- **AutenticacionMiddleware** (Infraestructura):
  - Patrones: **Chain of Responsibility** para aplicar MFA, prueba de vida, verificación geográfica.

- **PromptPlanner → PromptExecutor** (IA):
  - Patrón: **Planner-Executor** para separar análisis semántico de ejecución de consultas.

- **Reactor ETDL** (Carga inteligente):
  - Patrón: **Reactive Pattern** + **Event-Driven** para procesar entradas de datos automáticamente con decisiones inteligentes.

## Riesgos técnicos iniciales identificados

1. Complejidad de integraciones entre componentes con IA
Mitigación propuesta: Diseñar APIs intermedias desacopladas

2. Manejo de llaves criptográficas tripartitas	
Mitigación propuesta: Uso de custodios distribuidos con mecanismo de quorum

3. Cumplimiento normativo y legal		
Mitigación propuesta: Integración temprana con asesoría legal para auditoría

4. Seguridad de datos en ambientes técnicos	
Mitigación propuesta: Políticas Zero Trust + cifrado forzado en todas las capas

-------------------------------------------------------------------------------------------------

## Modelo de Gobernanza de Seguridad y Accesos

1. Autenticación y verificación de identidad

| Elemento                               | Implementación propuesta                |
|----------------------------------------|-----------------------------------------|
| Registro inicial	                     | Validación con cédula, biometría, prueba de vida e IP de Costa Rica             |
| Login	                                 | Usuario + contraseña + Autenticación Multifactor (MFA)                      |
| Validación reforzada	                 | En caso de transacciones sensibles, requerir doble MFA o token por app |
| Identificación de dispositivos	     | Huella de navegador/IP, posibilidad de marcar IP como fija o temporal                   |

Tecnología recomendada: Amazon Cognito + AWS WAF para bloqueo por IP + Amazon GuardDuty para anomalías.

2. Modelo de Control de Acceso (RBAC + Contexto)

Definición de Roles Base:

| Rol                                    | Permisos principales               |
|----------------------------------------|-----------------------------------------|
| Usuario Básico	                     | Visualizar datasets públicos, gestionar perfil y crear dashboards personales.            |
| Proveedor de Datos	                 | Subir, editar y configurar datasets; definir reglas de acceso y monetización.                      |
| Comprador de Datos	                 | Acceder a datasets adquiridos, consumirlos vía dashboards, gestionar límites. |
| Administrador de Entidad	             | Gestionar organización, usuarios asociados, llaves y autorizaciones.                   |
| Auditor Interno       	             | Visualizar logs, métricas, y generar reportes de actividad por usuario.                   |
| Operador (Backoffice) 	             | Validar registros, gestionar flujos de carga, revisar accesos y generar reportes.                   |
| Superadmin del sistema	             | Control total: gestionar entidades, revocar accesos, regenerar llaves, visualizar todo.                   |

2.1 Guía de *How To* crear un rol en Cognito

* Acceder a la consola de AWS Cognito y selecciona tu User Pool.
* Dirifirse a la sección "Grupos" y haz clic en "Crear grupo".
* Asignar un nombre descriptivo al grupo (ejemplo: data-analyst ) y definir las políticas de permisos asociadas al grupo usando AWS IAM.
* Asociar usuarios existentes o nuevos al grupo creado.

Ejemplo de política IAM para acceso de (solo lectura) a S3:
```json
{
  "Version": "XXXX-XX-XX",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::datapuravida-datalake/*"]
    }
  ]
}
```

Contexto Adicional de Acceso:

| Contexto evaluado                      | Ejemplo de regla aplicada               |
|----------------------------------------|-----------------------------------------|
| Ubicación geográfica                   | Registro solo desde Costa Rica; acceso externo con IP declarada.            |
| Dispositivo / IP  	                 | Se restringe acceso a ciertas funciones desde IPs públicas o redes no confiables.       |
| Frecuencia de uso 	                 | Mecanismo de rate limiting si un usuario excede el uso permitido. |
| Tipo de operación     	             | Operaciones sensibles como descifrado requieren autenticación reforzada.                  |

Motor de políticas contextualizadas puede ser implementado con AWS Identity Center + reglas personalizadas vía Lambda.

1. Restricción de Accesos a Nivel de Datos
El modelo de seguridad incluye segmentación de acceso granular basada en entidad, usuario y nivel de autorización. Para garantizar un control completo sobre la visibilidad y trazabilidad de cada dataset, se definen campos mínimos obligatorios que deben estar presentes en todos los datasets cargados en la plataforma.

Campos requeridos en todos los datasets para aplicar reglas de gobernanza:

| Campo                      | Descripción               | Tipo de control asociado |
|----------------------------|---------------------------|--------------------------|
| organizacion_id            | Identificador único de la organización propietaria del dato  | Control de visibilidad por entidad (Row-Level Security) |
| user_id  	                 | Identificador del usuario que cargó o tiene permiso sobre el dato | Auditoría, filtrado por responsable, trazabilidad individual |
| share_id 	                 | Identificador del grupo o token de compartición (grupo de acceso compartido o modelo de monetización) | Control de compartición, licencias de acceso, métricas de uso compartido |

Estos campos deben ser incluidos en los metadatos del dataset y deben respetarse incluso si los datos están cifrados o seudonimizados.

Reglas aplicadas con estos campos:
-	Visualización controlada por organizacion_id: Un usuario solo puede consultar filas cuyo organizacion_id pertenezca a su entidad o esté explícitamente autorizado.
-	Filtrado por user_id en dashboards y reportes de actividad para mostrar solo datos subidos o autorizados por el usuario.
-	Permisos derivados de share_id permiten compartir datos entre organizaciones con control temporal, volumétrico o por frecuencia.

Ejemplo de política de acceso
```sql
WHERE organizacion_id IN (autorizadas_por_usuario_actual)
  AND (share_id IS NULL OR share_id IN (tokens_autorizados))
```

## Diagrama de control de acceso por datos

![imagen](Recursos/DiagramaControlAccesoDatos.png)

4.  Llaves criptográficas y gobernanza de acceso

Tipos de Llaves:

| Tipo de Llave                          | Uso               |
|----------------------------------------|-----------------------------------------|
| Llave simétrica (AES)                  | Cifrado rápido de columnas de datos o archivos.            |
| Llave asimétrica (RSA)                 | Validación de autenticidad y firma de documentos.                     |
| Llave tripartita  	                 | Llave dividida en 3 partes. Se requieren 2 de 3 partes para uso. |

Gestión de Llaves Tripartitas
-	Se genera una llave única por organización.
-	Las tres partes se entregan a:
    o	La organización registrada
    o	El custodio técnico (puede ser Ministerio, Hacienda, etc.)
    o	La plataforma Data Pura Vida (bajo acceso controlado)
-	Uso requiere autorización múltiple (2 de 3).
-	Se usan módulos de seguridad de hardware (HSM) o servicios como AWS KMS Custom Key Store para proteger fragmentos.

5. Auditoría y monitoreo
-	Cada evento crítico (lectura, escritura, creación, descifrado, eliminación) se registra.
-	Se generan reportes de actividad por usuario, IP, entidad, dataset y acción.
-	Accesos a funciones restringidas quedan auditados con trazabilidad total.
-	Sistema de alertas por comportamiento sospechoso o intentos de acceso inválidos.

6. Matriz Roles y Permisos

![imagen](Recursos/MatrizRolesPermisos.png)

7. Roles y Condiciones Contextuales

![imagen](Recursos/RolesCondicionesContextuales.png)

--------------------------------------------------------------------------------------------------------------------------------------------

## Diseño de Infraestructura y Deploy Multinivel (Dev, QA, Prod)

### Entornos definidos

Se trabajará con tres entornos principales:

| Entorno                    | Propósito               | Visibilidad | Accesos |
|----------------------------|---------------------------|--------------------------|--------------------------|
| Desarrollo (Dev)           | Desarrollo activo, pruebas unitarias, prototipos.  | Interno (equipo técnico) | Acceso libre con auditoría |
| Calidad (QA) 	             | Pruebas funcionales, automatizadas y de integración. | Interno (QA y Dev) | Acceso validado por IP/MFA |
| Producción (Prod) 	     | Sistema en vivo operando para usuarios reales. | Externo (usuarios reales) | Acceso limitado y monitorizado |

### Diseño de Infraestructura por entorno
#### Estructura común
Cada entorno tendrá su propia infraestructura separada:

| Componente | Tecnología / Propuesta |
|------------|----------------------|
| Microservicios / Contenedores | AWS ECS Fargate o EKS (Kubernetes) |
| Almacenamiento estático | Amazon S3 (carpetas separadas por entorno) |
| Bases de datos | Amazon RDS, con separación física y lógica |
| Datalake | Amazon S3 + Glue + Lake Formation |
| Backend API | API Gateway + Lambda o ECS Services |
| Autenticación y seguridad | Cognito, IAM Roles, WAF, Secrets Manager |
| Logs y auditoría | CloudWatch, CloudTrail, GuardDuty, Security Hub |

### Flujo de despliegue y promoción
#### Pipeline de CI/CD

| Etapa | Acción |
|-------|---------|
| Commit | Desarrollador sube cambios |
| Build | Generación automática de contenedores / artefactos |
| Test en Dev | Pruebas unitarias e integración en entorno aislado |
| Deploy a QA | Validación funcional, automatizada y manual por QA |
| Deploy a Producción | Promoción con revisión manual, monitoreo activo |

Herramientas sugeridas: GitHub Actions / GitLab CI / AWS CodePipeline

#### Guía de *How to* añadir un nuevo entorno de pruebas al pipeline de GitHub Actions.

* Crear un archivo de configuración para el entorno (ejemplo `env.test.json` con variables específicas del entorno de pruebas).

* Actualizar el workflow de GitHub Actions `.github/workflows/deploy.yml` y agregar un nuevo job para el entorno de pruebas:

* Agregar variables y secretos en GitHub (en Settings -> Secrets and variables -> Actions y agrega las credenciales necesarias).

* Probar el pipeline y verificar que este ejecuta las pruebas y despliega correctamente al entorno de pruebas.

#### Control de versiones y trazabilidad
	
Cada despliegue debe llevar:

-	Código hash o número de versión
-	Registro de cambios (changelog)
-	Validación previa en QA

	Todas las promociones se registran con trazabilidad completa.

#### Control de acceso y seguridad    
| Capa | Medidas aplicadas |
|------|------------------|
| Dev | Acceso abierto para desarrolladores con logs |
| QA | Acceso controlado, datos sintéticos y cifrados |
| Producción | Acceso restringido, monitoreo y MFA obligatorio |
| Red | Control por listas blancas y segmentación de VPCs |
| Datos sensibles | Siempre cifrados en tránsito y reposo |

### Auditoría y monitoreo
-	Logs por entorno capturados vía CloudWatch + CloudTrail
-	Alertas configuradas en QA y Producción
-	Producción monitoreada con métricas clave:
o	Tiempo de respuesta
o	Errores
o	Uso de recursos
-	Seguridad reforzada en Producción con GuardDuty + Security Hub

## Diagrama del flujo CI/CD simplificado
![imagen](Recursos/DiagramaFLujoCICD.png)

## Configuración de Scripts de Deployment – GitHub Actions
Para cada entorno definido (Dev, QA, Producción), se emplearán pipelines automatizados de CI/CD mediante GitHub Actions. A continuación, se describen los archivos base de configuración YAML utilizados para orquestar los despliegues por entorno.

1. Archivo: `.github/workflows/deploy-dev.yml`
- Ejecutado en push a rama `develop`
- Corre pruebas unitarias
- Despliega automáticamente a entorno Dev (ECS / Lambda)
- Incluye logging en CloudWatch y notificación opcional

2. Archivo: `.github/workflows/deploy-qa.yml`
- Ejecutado en push a rama `release/qa`
- Corre pruebas integradas y de regresión
- Despliega a entorno QA con validaciones predefinidas

3. Archivo: `.github/workflows/deploy-prod.yml`
- Ejecutado manualmente vía GitHub Actions
- Requiere aprobación (manual trigger)
- Despliega solo si QA fue exitoso
- Integra monitoreo con GuardDuty y CloudTrail post-deploy

Ejemplo de configuración mínima:

```yaml
name: Deploy to Dev
on:
  push:
    branches: [develop]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm install
    - name: Run tests
      run: npm test
    - name: Deploy to AWS Lambda
      uses: appleboy/lambda-action@master
      with:
        aws_access_key_id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws_secret_access_key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        function_name: data-pura-vida-dev
        zip_file: dist/lambda.zip
```
--------------------------------------------------------------------------------------------------------------------------------------------------------

# Datos, Datalakes e Interoperabilidad

## Diseño del Modelo de Datalake Híbrido (Estructurado/Semi)

El ecosistema Data Pura Vida requiere una plataforma de almacenamiento de datos que sea capaz de soportar un volumen masivo de registros estructurados y semiestructurados, garantizando alta disponibilidad, seguridad, escalabilidad y control detallado de los datos. Para cumplir con estos requerimientos, se propone el diseño de un Datalake híbrido basado en servicios administrados de AWS, que integre tecnologías de procesamiento inteligente y políticas de seguridad avanzadas.

Modelo de Arquitectura del Datalake Híbrido

### 1. Almacenamiento de Datos

El núcleo del datalake será Amazon S3, configurado con las siguientes características:
- Datos estructurados: Almacenados en formatos optimizados para consulta, como Parquet.
- Datos semiestructurados: Archivos JSON, CSV y XML.
- Versionado de objetos: Habilitado en S3 para recuperación de versiones anteriores de los datasets.
- Cifrado en reposo: Obligatorio usando AWS KMS con llaves tripartitas bajo esquema Shamir’s Secret Sharing (SSS).
- Políticas de retención: Configuración de ciclos de vida para manejo de datos históricos.
- Particionamiento de datos: Prefijos por entidad y fecha (`dataset_name/year=YYYY/month=MM/day=DD/`).

### 2. Catalogación y Metadata

AWS Glue Catalog proporcionará el registro centralizado de todos los datasets, con soporte de esquemas flexibles para datos semiestructurados. Se incluirá metadata enriquecida con descripciones, etiquetas, relaciones y políticas de acceso.

Adicionalmente, DynamoDB almacenará metadatos operacionales como timestamps de carga, control de versiones, relaciones entre datasets y estados de validación.

**Ejemplo de metadata en DynamoDB:**
| Campo | Tipo | Comentario |
|:-|:-|:-|
| dataset_name | STRING | Nombre del dataset |
| version | INT | Versión actual |
| last_updated_timestamp | TIMESTAMP | Última actualización |
| record_count | BIGINT | Cantidad de registros |
| primary_key | STRING | Campo de llave primaria |
| foreign_keys | JSON | Llaves foráneas asociadas |
| validation_status | STRING | Estado de validación (VALIDATED/FAILED) |


### 3. Gobernanza y Seguridad de Datos

AWS Lake Formation será utilizado para control de acceso granular basado en roles (RBAC) y políticas de control a nivel de columna y fila (RLS). La autenticación de usuarios se realizará mediante Amazon Cognito con soporte de MFA.

Todo tráfico interno entre microservicios y procesos ETL será protegido mediante mTLS para reforzar la política Zero Trust, y TLS 1.3 será obligatorio para todas las transferencias de datos.

Accesos serán controlados mediante proxies seguros, con elevación de privilegios Just-in-Time, y auditados vía AWS CloudTrail.

### 4. Procesamiento y Cargas Delta

AWS Glue ETL será responsable de los procesos de carga, limpieza, transformación y detección de cambios incrementales (deltas).

Se identificarán registros nuevos, modificados y eliminados comparando snapshots históricos. Se utilizarán columnas de control como `last_updated_timestamp` y `operation_type` (INSERT, UPDATE, DELETE).

Ejemplo de lógica de actualización:
```sql
MERGE INTO compras_target AS T
USING compras_delta AS D
ON T.compra_id = D.compra_id
WHEN MATCHED THEN UPDATE SET ...
WHEN NOT MATCHED THEN INSERT ...
```

### 5. Relación entre Datasets

Se implementará un sistema de relaciones virtuales entre datasets.

Ejemplos de definición de datasets:

Dataset: Usuarios


| Campo | Tipo de Dato | Longitud | Comentario |
|:-|:-|:-|:-|
| user_id | STRING | 36 | UUID v4 |
| nombre | STRING | 255 | Nombre completo |
| correo | STRING | 320 | Email |
| fecha_nacimiento | DATE | - | Fecha de nacimiento |
| creado_en | TIMESTAMP | - | Fecha de creación del registro |
| actualizado_en | TIMESTAMP | - | Última actualización |
| estado | STRING | 10 | ACTIVO/INACTIVO |
| version | INT | - | Versionado |



**Claves:**

-user_id: clave primaria.

Dataset: Compras

| Campo | Tipo de Dato | Longitud | Comentario |
|:-|:-|:-|:-|
| compra_id | STRING | 36 | UUID v4 |
| user_id | STRING | 36 | Relación a Usuarios |
| monto | DECIMAL(10,2) | - | Monto de la compra |
| fecha_compra | TIMESTAMP | - | Fecha de compra |
| producto | STRING | 255 | Descripción del producto |
| version | INT | - | Versionado |

Relación virtual:
- `Usuarios (1) -> Compras (N)`, representada en Glue Catalog y DynamoDB.

### 6. Monitoreo y Auditoría

AWS CloudWatch y AWS CloudTrail serán utilizados para el monitoreo de operaciones de carga, accesos y consultas. AWS Config validará continuamente el cumplimiento de políticas de cifrado y retención de datos.

**Diagrama Conceptual** 


![imagen](Recursos/DiagramaConceptualDataLake.png)



### 7. Configuraciones Técnicas Esenciales en S3

Para asegurar que Amazon S3 funcione como núcleo seguro y eficiente del datalake, se aplicarán las siguientes configuraciones:

a) Bucket Policies y Seguridad
- Bloqueo de acceso público habilitado en todos los buckets.
- Política de bucket restrictiva, solo accesible vía roles IAM específicos y desde servicios autorizados (Glue, Lambda).
- Habilitación de Object Lock para datasets críticos, evitando eliminaciones accidentales.
- Logs de acceso activados y enviados a un bucket separado de auditoría.

b) Cifrado en reposo
- Se usará AWS KMS con llaves gestionadas por cliente.
- Las llaves estarán protegidas bajo un esquema tripartito (SSS), como ya definido.

c) Cifrado en tránsito
- Obligatorio usar TLS 1.3 para todas las interacciones con S3.
- Solo se aceptan conexiones desde servicios dentro de la VPC autorizada.

d) Organización y Versionado
- Estructura jerárquica estricta: s3://data-pura-vida/{entidad}/{dataset}/{YYYY}/{MM}/{DD}/
- Versionado obligatorio para permitir rollback de datasets.

e) Ciclo de vida y retención
- Regla 1: Archivar automáticamente a Glacier después de 180 días.
- Regla 2: Eliminar versiones antiguas después de 365 días (excepto si están marcadas como preservadas por políticas legales).

### 8. Configuraciones Técnicas de AWS Glue

a) Catálogo de Datos (Glue Data Catalog)
- Definición de bases de datos lógicas por entidad o fuente.
- Tablas creadas a partir de S3 (conformadas por Parquet, JSON, CSV).
- Etiquetas por tabla: sensibilidad, origen, propietario, restricciones.

b) Crawlers
- Configurados por entidad/dataset.
- Frecuencia de ejecución: diaria para datasets activos, semanal para históricos.
- Asociados automáticamente al Data Catalog con esquema inferido o predefinido (según el tipo de dato).
- Restricción de ejecución por tags y IAM Role específico.

c) Scripts ETL Glue
- Lenguaje: PySpark (vía Glue Studio).
- Contienen lógica de delta con last_updated_timestamp.
- Guardan bitácora en DynamoDB (ID de ejecución, estatus, errores, registros procesados).

d) Control de calidad y validaciones
- Aplicación automática de reglas:
  - Columnas obligatorias presentes
  - Valores únicos en llaves primarias
  - Conversión de tipos automática (por IA o regla fija)
- Logs de errores enviados a S3 y a CloudWatch.

e) Permisos
- Glue solo ejecuta bajo un IAM Role restringido con permisos explícitos a:
  - Lectura/escritura en S3
  - Escribir en DynamoDB
  - Escribir logs en CloudWatch
- Permisos auditados y rotados trimestralmente.


Este diseño refuerza la seguridad desde el almacenamiento hasta la carga de datos, mediante cifrado en reposo con AWS KMS (llaves tripartitas), control de acceso granular con Lake Formation (RLS + RBAC), y transporte cifrado con TLS 1.3. Además, incorpora inteligencia artificial en varias etapas: Textract y Comprehend permiten validar documentos y metadatos automáticamente, mientras que el motor reactivo detecta deltas y estructura los datos sin intervención humana. Si bien este enfoque ofrece alta trazabilidad, escalabilidad y control, introduce complejidad en la administración de versiones y relaciones entre datasets. Esto se mitiga con la separación de metadatos operacionales en DynamoDB y la automatización de Glue Crawlers y scripts ETL.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------------------------------------------------------------------

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

Una vez identificados los cambios, se aplican al dataset principal, por ejemplo, con un comando `MERGE INTO`, que:

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

-----------------------------------------------------------------------------------------------------------------------------------------------------------

## Especificación de Interfaces de Ingesta de Datos Externos
Como arquitecto de software, quiero definir los formatos, protocolos y contratos para recibir datos desde archivos, APIs, bases SQL/NoSQL o conexiones directas, para habilitar la interoperabilidad. Este documento especifica cómo se aplicarán estos principios en la plataforma Data Pura Vida.

### 1. Ingesta desde Archivos
- Formatos Aceptados: CSV, JSON, Excel (XLSX).
- Validación automática usando AWS Glue.
- Carga a Amazon S3 en buckets versionados y cifrados.
- Metadata requerida: nombre, descripción, fecha, esquema de columnas.
- Validación de duplicados y estructura mediante flujos ETDL (AWS Glue Jobs).
- Contrato: Cada archivo debe tener un manifest.json que describa los campos y tipos de datos esperados.
### 2. Ingesta vía APIs
- APIs RESTful expuestas a través de Amazon API Gateway.
- Formato de intercambio: JSON.
- Seguridad: OAuth2 + JWT emitido por Amazon Cognito.
- Versionamiento de APIs: /v1/, /v2/.
- Límite de tasa (throttling) por IP para prevenir abuso.
- Validación de datos de entrada usando AWS Lambda + TypeScript (Zod).
### 3. Ingesta desde Bases SQL/NoSQL
- Bases SQL: PostgreSQL.
- Bases NoSQL: DynamoDB.
- Conexión segura mediante VPN o AWS PrivateLink.
- Ingesta mediante AWS DMS (Database Migration Service) para cargas iniciales y diferenciales.
- Contrato de sincronización: Esquemas y tablas deben contener claves primarias o claves particionadas (en NoSQL).
- Transformación: Procesos ETDL ajustan los datos para integrarlos en el Data Lake.
### 4. Conexiones Directas
- Se permiten conexiones directas controladas solo bajo modelos Push desde sistemas externos.
- Integración mediante AWS EventBridge o SQS.
- Validación estricta de eventos entrantes (formato, origen, integridad).
- Seguridad basada en IAM Roles y políticas de mínimo privilegio.


####  Aplicación en Data Pura Vida
Todas las rutas de ingesta definidas serán monitoreadas y auditadas por AWS CloudTrail y AWS CloudWatch.
Los datos ingresados se almacenarán cifrados en Amazon S3, gestionados mediante Lake Formation para control de acceso.
La interoperabilidad será garantizada transformando todos los datos a formatos estándar (Apache Parquet) en el Data Lake.
Cada dataset ingresado debe cumplir los contratos de metadatos y pasar por validaciones automáticas de estructura y contenido antes de estar disponible en la plataforma.
La autenticación y control de acceso seguirá las políticas implementadas con Amazon Cognito, JWT y AWS IAM.

### 5. Ejemplos de Configuración de Data Sources

A continuación, se presentan ejemplos reales de cómo se definen los metadatos de datasets que ingresan al sistema, tanto en formato JSON como en una tabla tipo.

Ejemplo de Manifest JSON

```json
{
  "dataset_name": "compras_mensuales",
  "description": "Registros de compras mensuales realizadas por usuarios",
  "schema": [
    { "name": "compra_id", "type": "string" },
    { "name": "user_id", "type": "string" },
    { "name": "fecha_compra", "type": "timestamp" },
    { "name": "monto", "type": "decimal(10,2)" }
  ],
  "primary_key": ["compra_id"],
  "partition_by": ["fecha_compra"],
  "sensitivity_level": "medio"
}
```

### Ejemplo de Tabla de Metadatos

| Campo             | Tipo de Dato           | Obligatorio   | Descripción                         |
|:------------------|:-----------------------|:--------------|:------------------------------------|
| dataset_name      | STRING                 | Sí            | Nombre único del dataset            |
| description       | STRING                 | Sí            | Descripción del contenido           |
| schema            | JSONB                  | Sí            | Lista de columnas con tipo de dato  |
| primary_key       | ARRAY<STRING>          | Sí            | Claves primarias                    |
| partition_by      | ARRAY<STRING>          | No            | Campos usados para particionamiento |
| sensitivity_level | ENUM (bajo/medio/alto) | Sí            | Nivel de sensibilidad del contenido |
| ingestion_type    | ENUM (file/api/db)     | Sí            | Tipo de fuente de datos             |
| last_updated      | TIMESTAMP              | No            | Fecha de última modificación        |

El diseño de estas interfaces prioriza la interoperabilidad y la automatización segura. La autenticación OAuth2 con JWT y el uso de mTLS garantizan la integridad de los datos recibidos desde APIs, archivos o bases remotas. Además, se aplica inteligencia artificial en el motor ETDL para validar semánticamente estructuras y contenido de los datasets entrantes, identificando duplicidades y errores. Esta arquitectura permite escalar de manera segura, mitigando el riesgo de ingestiones erróneas con validaciones automáticas y monitoreo activo por servicio.


-------------------------------------------------------------------------------------------------------------------------------------------

# Seguridad, Cumplimiento y Cifrado

## Política de Cifrado en Reposo y en Tránsito para Data Pura Vida
### Relación con la Arquitectura General
La presente política es consistente con la arquitectura técnica definida para la plataforma Data Pura Vida. En especial:
- Data Lake (Amazon S3): Cifrado en reposo utilizando AWS SSE-KMS, protegiendo datasets estructurados y semiestructurados.
- Base de Datos Transaccional (PostgreSQL en Amazon RDS): Cifrado activado con llaves gestionadas por AWS KMS.
- DynamoDB: Cifrado automático de datos con AWS KMS.
- Servicios de seguridad: Se utilizará AWS CloudHSM para el manejo avanzado de llaves y AWS Secrets Manager para almacenamiento seguro de credenciales.
- Sistema de Seguridad: Aplicación de control de accesos basado en roles (RBAC) y atributos (ABAC) soportados por Amazon Cognito.

### Cifrado de Datos en Reposo
Ámbitos de Aplicación
Data Lake (Amazon S3): Uso de SSE-KMS para cifrado automático de objetos.
PostgreSQL (Amazon RDS): Cifrado activado en instancia.
DynamoDB: Cifrado con llaves gestionadas por KMS.
Field-Level Encryption: Solo campos sensibles (PII) serán cifrados para optimizar performance.
Amazon Macie: Identificación automática de datos sensibles.
Gestión de Llaves Criptográficas
Llave Tripartita:
Generación: AWS KMS genera la llave maestra.
División: Shamir’s Secret Sharing (SSS) en 3 partes.
Almacenamiento:
  - Parte 1: AWS Secrets Manager.
  - Parte 2 y 3: Custodios externos validados (representante legal y contralor independiente).
Recuperación:
  - Mínimo 2 partes requeridas.
  - Funciones AWS Lambda con credenciales temporales para uso en memoria.
Aplicación:
  - Reconstrucción temporal para desencriptar datasets sensibles.
  - Eliminación inmediata de material sensible post-operación.

### Cifrado de Datos en Tránsito
Ámbitos de Aplicación
Comunicación entre usuarios y plataforma: HTTPS/TLS 1.2+.
Comunicación entre microservicios: mTLS (mutual TLS).
Transferencias externas: Protocolos seguros (SFTP, HTTPS).
Tecnologías y Herramientas
Amazon API Gateway: Protección de APIs.
AWS WAF: Firewall de aplicaciones web.
Amazon Cognito: Autenticación OAuth2, MFA.
AWS ACM: Certificados SSL/TLS gestionados.
Control de Acceso
Modelo Zero Trust: Validación continua de identidad y contexto.
Just-in-Time Access: Credenciales temporales.
Logging: AWS CloudWatch para registros de acceso y operaciones.

### Cumplimiento Normativo
| Normativa     | Práctica Aplicada                                                   | Implementación en Código/Plataforma                              |
|:--------------|:--------------------------------------------------------------------|:-----------------------------------------------------------------|
| Ley 8968 (CR) | Registro y gestión de consentimientos explícitos.                   | API /consent; almacenar timestamp, usuario, tipo en PostgreSQL.  |
| GDPR          | Derecho al olvido.                                                  | Endpoint DELETE /user/{id}; borrado físico en BD y audit logs.   |
| ISO/IEC 27001 | Registro de accesos, control estricto de roles, auditoría continua. | AWS CloudTrail para logs de acceso; roles RBAC en Cognito y IAM. |

#### Código Ejemplo para Gestión de Consentimiento
![imagen](Recursos/Código_Ejemplo_Gestión_Consentimiento.png)

#### Código Ejemplo para Derecho al Olvido
![imagen](Recursos/Código_Ejemplo_Derecho_Olvido.png)

### Principios Fundamentales de la Política
- Cifrado Obligatorio: Datos sensibles cifrados en reposo y tránsito.
- Rotación de Llaves: Conforme a estándares internacionales.
- Justificación de Accesos: Basado en roles y atributos.
- Minimización de Exposición: Mínimo acceso necesario.
- Auditoría Continua: Registros y monitoreo constante.


### Configuración en AWS y Evidencia Visual
#### Amazon S3 – Cifrado en Reposo (SSE-KMS)
Ubicación: S3 > Bucket > Propiedades > Cifrado
- Activar cifrado del lado del servidor (SSE-KMS)
- Seleccionar o crear una llave KMS personalizada o gestionada por AWS
- Aplicar la política a todos los objetos nuevos


![imagen](Recursos/1.png)

#### Amazon RDS – PostgreSQL
Ubicación: RDS > Crear base de datos > Configuración de almacenamiento
- Habilitar cifrado al crear la instancia
- Seleccionar llave KMS


![imagen](Recursos/2.png)

#### DynamoDB – Cifrado
Ubicación: DynamoDB > Tablas > Propiedades > Encryption
- Tipo de cifrado: AWS managed CMK (SSE-KMS)


![imagen](Recursos/3.png)

#### AWS KMS – Llave Tripartita
Ubicación: AWS KMS > Claves
- Crear una nueva llave simétrica
- Configurar acceso por políticas IAM específicas


![imagen](Recursos/4.png)

#### Secrets Manager – Almacenamiento de partes de llave
Ubicación: Secrets Manager > Crear secreto
- Guardar una de las partes generadas por Shamir’s Secret Sharing


![imagen](Recursos/5.png)

#### API Gateway + ACM – Cifrado en Tránsito
Ubicación: API Gateway > Dominios personalizados
- Vincular certificado SSL generado en ACM
- Forzar HTTPS-only


![imagen](Recursos/6.png)


#### CloudTrail y CloudWatch – Auditoría y Logs
Ubicación: CloudTrail > Trails / CloudWatch > Log Groups
- Verificar habilitación en todas las regiones
- Configurar retención de logs y métricas


![imagen](Recursos/7_1.jpg)


![imagen](Recursos/7.2.png)

#### Cognito & IAM – Control de Acceso
Ubicación: Cognito > User Pools / IAM > Roles y políticas
- Habilitar MFA y segmentación de grupos
- Aplicar políticas de acceso basadas en atributos (ABAC)


La política está alineada con las mejores prácticas de seguridad y cumplimiento normativo, incluyendo la implementación de cifrado extremo a extremo, llaves tripartitas distribuidas, y protocolos seguros como TLS 1.3. Se emplean herramientas como Macie para identificar datos sensibles en buckets, y CloudTrail para auditar el acceso. Aunque la gestión distribuida de llaves puede ser operativamente compleja, se mitiga mediante custodios designados, quorum mínimo y automatización de recuperación y rotación de llaves con AWS Secrets Manager y STS. 

-------------------------------------------------------------------------

## Diseño de Llave Criptográfica Tripartita
Las llaves tripartitas en el contexto de este sistema van a ser de utilidad para proteger las claves criptográficas generadas distribuyendo una parte a Data Pura Vida y las otras dos a personas, entidades, etc. definidas por el usuario.

El sistema propuesto para implementar esta llave utiliza AWS KMS y CloudHSM para la administración de las claves simétricas y asimétricas creadas y el algoritmo [SSS](https://www.geeksforgeeks.org/shamirs-secret-sharing-algorithm-cryptography/) (Shamir's Secret Sharing) para la división e implementación de la llave, este algoritmo divide la clave en la cantidad de partes que se deseen (en este caso van a ser tres) y asegura que se necesiten al menos dos o incluso las tres partes para reconstruir la clave. En este caso se van a tener que utilizar dos partes por razones de redundancia.

El diagrama siguiente puede ayudar a entender el funcionamiento de esta llave de una mejor manera.
![imagen](Recursos/LlaveTDiagrama.png)

Las ventajas que proporciona el uso de esta llave es la mencionada redundancia ya que, si se pierde una parte, el sistema sigue funcionando y también mitiga riesgos de compromiso por una sola parte. Este sistema no asegura que exista complejidad en la gestión de las partes o que exista un riesgo de ataque si dos partes cometen un fallo o se ve violentada su seguridad (esto último podría evitarse obligando a ser necesarias las tres parte de la llave).

-----------------------------------------------------------------------------------------------------

## Aseguramiento del Cumplimiento Normativo y de Estándares
Para cumplir con los estándares internacionales y legislaciones nacionales, se implementaron una serie de logs, alertas obligatorias y un mecanismo de auditoria para asegurar el apego a estos estándares y legislaciones.

### Estructura de logs 
Esta estructura de logs va a utilizar las tecnologías de AWS de CloudWatch (para el almacenamiento de los logs), AWS Kinesis Firehose (para la recopilación y análisis de datos en tiempo real), Lambda (para enriquecimiento de los logs con la [powertool](https://aws-amazon-com.translate.goog/blogs/opensource/simplifying-serverless-best-practices-with-lambda-powertools/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc) *Logger*) y opcionalmente S3 (por si se quiere un almacenamiento a largo plazo de los logs).
La estructura de los logs a utilizar es la siguiente (estos campos cambian según el evento):

```python
log_entry = {
    'timestamp': datetime.datetime.utcnow().isoformat() + 'Z',
    'eventId': str(uuid.uuid4()),
    'userId': self._get_user_id(),
    'eventType': event_type,
    'sourceIP': self._get_ip(),
    'details': details,
    'complianceTags': self._get_compliance_tags(event_type)
}
```

Los eventos del sistema a registrar y los campos de este están descritos en la siguiente tabla:

| Evento/s                                              | Campos del log                                             |        
|-------------------------------------------------------|------------------------------------------------------------| 
| Logins exitosos/fallidos, cambios de credenciales     | Timestamp, ID del usuario, Tipo de evento, método autenticación, resultado | 
| Acceso a Datos (Consultas, lecturas etc.)             | Timestamp, ID del usuario, Tipo de evento, dataset, campos accedidos       | 
| Creación/edición/eliminación de datos                 | Timestamp, ID del usuario, Tipo de evento, campo antes/después             |
| Intentos de vulneración, cambios de configuración     | Timestamp, IP, Tipo de evento, acción, sistema afectado                    |
| Consentimientos, solicitudes de ejerción de derechos | Timestamp, ID del usuario, Tipo de evento, tipo solicitud, respuesta       |

### Mecanismos de Alerta Obligatorios
Las alertas estructuradas en la tabla siguiente van a ser utilizadas para mantener un mínimo de control sobre posibles acciones sospechosas que pueden ocurrir en el sistema:

| Detonante                      | Acción                            | Tiempo de respuesta máximo|      
|--------------------------------|-----------------------------------|---------------------|  
| +3 intentos fallidos de acceso | Bloqueo temporal más notificación | 15 minutos          |
|Acceso a >100 registros PII     | Revisión manual                   | 24 horas            |  
|Modificación sin justificación  | Reversión automática              | 30 minutos          |
|Patrón de acceso inusual        | Análisis comportamiento           | 1 hora              |

Estas alertas usan la powertool *Metrics* de Lambda para crear la alerta cuando el detonante ocurre haciendo llegar esta o estas a la persona o equipo encargado de la seguridad.

### Mecanismo de Auditoría
El mecanismo implementa AWS Config para detectar automáticamente configuraciones no compatibles, evaluar el cumplimiento de los múltiples estándares normativos que se tienen, generar evidencia auditable e implementar mecanismos de remediación automática (buscar detectar y solucionar problemas). También se implementa AWS Athena para reportes automáticos ya que esta herramienta es capaz de analizar grandes cantidades de datos con cierta facilidad y flexibilidad.

Aparte, este mecanismo contempla la retención de logs según su antigüedad con CloudWatch para retención de logs menores a 6 meses y S3 para los logs más antiguos e importantes.


<!-- Leyes/Estándares cumplidos
Ley 8968 (Art 16, Art 17, Art 19, Arts 21-30)
ISO 27001 (A.9.4.2, A.12.4.3, A.12.4)
GDPR (Art 5(2), Arts 15-22, Art 30, Art 35)
OECD Principle 8
NIST Cybersecurity Framework DE.CM-4 y DE.AE-3
PCI DSS Req 10
Ley 81 Art. 5
-->

---------------------------------------------------------

## Restricción de Acceso Técnico a Datos Sensibles
Se debe garantizar que ningún personal técnico, de devops, ingeniero de datos etc. tenga ingreso a los datos sin una debida autorización, para eso se diseñó un sistema que combina 6 factores clave:
* **Cifrado de datos**
* **Control de acceso basado en atributos**
* **Proxy de datos seguros**
* **Elevación de privilegios Just-in-Time**
* **Segregación de ambientes**
* **Monitoreo y auditoría**
  
### Cifrado de Datos
El cifrado de datos fue detallado en una sección anterior, pero como resumen este... TBD (esperando a que esa sección este hecha en su completitud)

### Control de acceso basado en atributos
Este control utiliza IAM para crear políticas para restringir estrictamente el acceso a los datos en el data lake si no se cumplen unas ciertas condiciones. La política es de tipo "Deny" lo que significa que explícitamente niega ciertas acciones a menos que se cumplan todas las condiciones especificadas. Las condiciones a cumplir en este control son las de restricción geográfica es decir que solo se pueden realizar operaciones dentro del país, que el usuario este autenticado con MFA y que el usuario posee una etiqueta especifica que otorgue acceso y coincida con su ARN (identificador único del usuario).

Estas políticas pueden verse de esta manera mediante configuraciones de AWS IAM como la siguiente:

```python
abac_policy = {
    "Version": "2025-XX-XX",
    "Statement": [
        {
            "Effect": "Deny",
            "Action": [
                "s3:GetObject",
                "glue:GetTable",
                "athena:GetQueryResults"
            ],
            "Resource": "*",
            "Condition": {
                "NotIpAddress": {
                    "aws:SourceIp": [
                        "190.57.0.0/16",  # Rango principal de Costa Rica
                        "201.222.0.0/16", 
                        "200.107.0.0/16"  
                    ]
                }
                "Null": {
                    "aws:MultiFactorAuthPresent": "false"
                },
                "ForAnyValue:StringNotLike": {
                    "aws:PrincipalTag/DataAccess": "${aws:PrincipalArn}"
                }
            }
        }
    ]
}
```

### Proxy de datos seguros
Este componente va a actuar como un intermediario entre el sistema y el datalake, cuenta con varias capas que realizan cada una su función: capa de validación (verifica permisos y las solicitudes que entran), capa de transformación (aplica enmascaramiento y filtrado según criterios definidos) y capa de auditoría (registra cada operación antes de ejecutarla) y dentro de sus características claves es que este nunca expone conexiones directas y aplica reglas de minimización (muestra solo lo necesario).

### Elevación de privilegios Just-in-Time
Este factor utiliza AWS Security Token Service (AWS STS) para crear credenciales temporales con privilegios específicos contiene 4 pasos clave:
1. Solicitud: El técnico justifica la necesidad con ticket aprobado (esto se hace fuera del factor, por ejemplo, mediante la creación de un ticket solicitando acceso).

2. Aprobación: Requiere confirmación de un responsable.

3. Concesión: Credenciales temporales válidas por un límite de tiempo definido.

4. Monitoreo: Se extraen datos en tiempo real que son supervisados.
Ejemplos de cómo crear este componente se pueden encontrar en la [documentación oficial de AWS STS.](https://docs.aws.amazon.com/es_es/IAM/latest/UserGuide/service_code_examples_sts.html)

### Segregación de ambientes
Este factor cosiste en dividir el ambiente de trabajo en **ambiente de producción** donde el acceso es restringido y solo puede ser accedido mediante proxys, **ambiente de desarrollo** donde se tienen datos que son anonimizados además de redes aisladas con controles estrictos.

### Monitoreo y auditoría
Este factor cuenta con las tecnología de AWS GuardDuty que va a ser usado como detector de amenazas, este analiza en segundo plano patrones de acceso a datalake, llamadas a APIs inusuales o comportamientos extraños de roles. Cuando ocurre un evento sospechoso notifica al equipo de seguridad y registra el incidente para investigación, también es importante tener en cuenta que estas respuestas se podrían automatizar con Lambda y demás.

También se tiene en cuenta la tecnología de AWS Macie que va a servir para descubrir automáticamente datos sensibles y alertar sobre posibles exposiciones de datos críticos, esto se logra mediante jobs como por ejemplo el que se encuentra aquí abajo el cual es encargado de detectar formatos como: cédulas, tarjetas crédito, emails, etc.

```python
macie.create_classification_job(
    jobType='SCHEDULED', # También puede ser 'ONE_TIME'
    name='DPVida-Data-Classification',
    s3JobDefinition={
        'bucketDefinitions': [
            {
                'accountId': '123456789012',
                'buckets': ['dpvida-prod-data']
            }
        ],
        'scoping': {
            'excludes': {
                'and': [
                    {
                        'tagScopeTerm': {
                            'tagKey': 'DataClassification',
                            'tagValues': ['Public'] #Omite datos marcados como públicos
                        }
                    }
                ]
            }
        }
    }
)
```

----------------------

# Visualización y Monitoreo

## Sistema de Métricas, Consumo y Alertas
El sistema de módulos planteados a continuación busca proporcionar una visión completa del sistema comenzando por la métricas más críticas con la posibilidad de agregar las que se necesiten según se considere necesario. 

Dentro de las especificaciones técnicas dentro del sistema se encuentra la frecuencia de muestreo se tienen 15 segundos para las métricas clave, 1 minuto para demás métricas operacionales y 1 hora para los historiales. En materia de retención de datos se van a tener los datos más actuales a 7 días de su extracción, los de corto plazo a 30 días y los de largo plazo de estos 30 días en adelante. Se pueden tomar en cuenta otros módulos como módulos para la gestión del ciclo de vida de los datos o para seguridad, pero estos no van a ser explicados en detalle.

Los módulos claves del sistema son los siguientes:

### 1. Módulos de Recolección de Métricas

#### 1.1. Módulo de Telemetría de Datos
Este módulo es el encargado de recoger métricas como el volumen de datos procesados (GB/día), tasa de transferencia (MB/seg), latencia en pipelines de ETL y los tiempos de respuesta por API. Esto es posible mediante AWS CloudWatch con Prometheus.

#### 1.2. Módulo de Auditoría de Accesos
Este módulo recoge datos y métricas como intentos de acceso fallidos, patrones de consulta sospechosos y uso de credenciales temporales esto mediante tecnologías como AWS CloudTrail.

### 2. Módulos de Procesamiento y Análisis

#### 2.1. Módulo de Detección de Anomalías
Este módulo es el encargado de seguir que se siga el "comportamiento normal" modelado y de alertar en tiempo real las desviaciones esto a gracias a Amazon Lookout for Metrics que detecta anomalías en métricas e identifica su causa de manera automática.

#### 2.2. Módulo de Rendimiento Operativo
Este módulo consiste en desbordas de métricas como disponibilidad del sistema (uptime), capacidad de almacenamiento utilizada y rendimiento de consultas. Estos dashboards pueden ser fácilmente implementados usando plantillas o creándolos desde cero con tecnologías como Grafana o AWS QuickSight

### 3. Módulos de Visualización y Alertas
Este módulo va a contar con ciertos dashboards, widgets, gráficos etc. que van a servir para visualizar la salud del sistema, monitorear el uso de recursos y crear alertas si se presenta un problema de seguridad.

### 4. Guía *How to* crear un nuevo dashboard en Grafana para monitoreo de ETL.

* Identifica el evento o proceso a monitorear, por ejemplo, cantidad de registros procesados.

* Modificar el código para enviar métricas a CloudWatch**  
Ejemplo en Python:
````python
import boto3

cloudwatch = boto3.client('cloudwatch')

def lambda_handler(event, context):
    # ... lógica ETL ...
    cloudwatch.put_metric_data(
        Namespace='DataPuraVida/ETL',
        MetricData=[
            {
               'MetricName': 'RegistrosProcesados',
               'Value': cantidad_registros,
               'Unit': 'Count'
            },
        ]
    )
````

* Verificar la métrica en la consola de CloudWatch 

-----------------------------------------------------------

## Arquitectura del Portal de BackOffice

## Funciones clave del portal

| Funcionalidad             | Descripción                                                                 |
|--------------------------|------------------------------------------------------------------------------|
| Gestión de registros     | Validar o rechazar solicitudes de registro de usuarios y entidades.         |
| Gestión de llaves        | Generar, dividir, revocar o reasignar llaves simétricas, asimétricas y tripartitas. |
| Monitoreo de cargas      | Visualizar flujos de datos, estados, errores, volumen y métricas de integridad. |
| Auditoría de operaciones | Consultar logs detallados de quién hizo qué, cuándo y con qué efecto.       |
| Reversibilidad           | Permitir anular, revertir o rehacer acciones críticas si se justifica.      |
| Gestión de roles y permisos | Asignar perfiles a operadores, definir visibilidad y niveles de aprobación. |
| Generación de reportes   | Crear reportes detallados para análisis técnico o cumplimiento normativo.   |


## Arquitectura del sistema

### Componentes principales

| Componente         | Descripción técnica                                                               |
|--------------------|------------------------------------------------------------------------------------|
| Autenticación      | Integración con Amazon Cognito (MFA + RBAC)                                       |
| Backend API        | Exposición de servicios administrativos vía endpoints protegidos (REST o GraphQL) |
| Base de Datos      | PostgreSQL o DynamoDB con acceso segmentado por tipo de acción                    |
| Registro de logs   | CloudWatch Logs + CloudTrail para auditoría interna                               |
| Orquestación       | Lambda Functions o microservicios para tareas reversibles o asíncronas            |
| Panel de métricas  | Dashboards internos con métricas (CloudWatch, Prometheus, Grafana si aplica)     |

### Guía de *How to* como agregar un nuevo dashboard al portal de backoffice

* Acceder al repositorio del portal administrativo y clonar o abrir el proyecto en el entorno de desarrollo.

* Crear un nuevo componente de dashboard implementando la lógica y visualización de datos según los requerimientos.

* Integrar el dashboard en la navegación y conectar el dashboard a la API (asegurándose de manejar la autenticación y autorización).  

* Probar el dashboard verificando que los datos se muestren correctamente y que los permisos sean los adecuados.

## Control de acceso (RBAC)

| Rol del operador        | Permisos asignados                                                               |
|-------------------------|----------------------------------------------------------------------------------|
| Validador               | Aprobar/rechazar registros nuevos                                                |
| Administrador de llaves | Gestionar llaves, ver custodios, auditar firmas                                 |
| Auditor                 | Consultar logs, generar reportes de actividad                                    |
| Supervisor              | Editar configuraciones, activar/desactivar flujos de integración                 |
| Superadmin              | Ver y hacer todo; incluido revertir operaciones pasadas                          |

Los permisos están jerarquizados y condicionados al contexto de cada entidad (ej: solo puedo ver datos de mi jurisdicción).


## Reversibilidad y control de errores

- Toda acción crítica tendrá una referencia de operación única.
- Se registrarán acciones con:
  - Quién la ejecutó
  - Fecha y hora exacta
  - Resultado del proceso
- Las operaciones reversibles deben:
  - Tener lógica de deshacer (rollback, soft delete, estado anterior)
  - Contar con confirmación de 2 operadores o autorización de un supervisor

### Diseño de la Bitácora de Reversibilidad y Control de Errores

| Campo                    | Tipo de dato             | Descripción                                                                 |
|--------------------------|--------------------------|-----------------------------------------------------------------------------|
| `operation_id`           | UUID / Texto             | Identificador único de la operación.                                        |
| `timestamp`              | FechaHora (ISO 8601)     | Fecha y hora exacta en que se ejecutó la operación.                         |
| `executed_by_user_id`    | Texto / UUID             | ID del usuario que ejecutó la acción.                                       |
| `user_role`              | Texto                    | Rol del usuario al momento de la acción.                                    |
| `user_ip`                | IP (Texto)               | Dirección IP desde la cual se ejecutó la operación.                         |
| `entity_context`         | Texto                    | Entidad u organización asociada al contexto de la acción.                   |
| `operation_type`         | Enum                     | Tipo de acción (CREATE, UPDATE, DELETE, REVERT, APPROVE, REJECT).           |
| `operation_target`       | Texto                    | Objeto afectado (usuario, dataset, llave, configuración, etc.).             |
| `target_id`              | Texto / UUID             | ID o referencia del objeto afectado.                                        |
| `previous_state`         | JSON (opcional)          | Estado anterior al cambio (para permitir reversión).                        |
| `new_state`              | JSON (opcional)          | Estado posterior al cambio.                                                 |
| `is_reversible`          | Booleano                 | Indica si la operación puede revertirse.                                    |
| `reversal_token`         | UUID / Texto (opcional)  | Token para reversión, si aplica.                                            |
| `reversed_by_user_id`    | Texto / UUID (opcional)  | Usuario que realizó la reversión (si ocurrió).                              |
| `reversed_timestamp`     | FechaHora (opcional)     | Fecha y hora en que se revirtió la operación.                               |
| `requires_supervisor_auth`| Booleano                | Si requiere doble validación o autorización de supervisor.                  |
| `reason_or_comment`      | Texto                    | Motivo u observación registrada por el operador.                            |
| `status`                 | Enum                     | Estado final de la operación (SUCCESS, FAILED, REVERTED, PENDING).          |
| `audit_signature`        | Texto (hash o firma)     | Firma digital para asegurar la integridad del registro.                     |

## Auditoría y trazabilidad

- Logs almacenados con nivel de detalle:
  - Usuario, IP, acción, resultado, motivo
- Todas las operaciones serán auditables vía filtros por fecha, tipo y resultado.
- Se rastrearán cambios de configuración, llaves, permisos y accesos.
- Los logs se podrán visualizar desde el portal y exportar con autorización.
- Los reportes de trazabilidad podrán descargarse en formato PDF o CSV con firma digital.

## Diagrama Arquitectura Portal Backoffice
![imagen](Recursos/DiagramaArquitecturaPortalBackOffice.png)

-----------------------------------------------------------------

## Arquitectura del Motor de Prompts para Consultas Inteligentes

Uno de los objetivos más innovadores del proyecto *JAMI Pura Vida* es permitir a los usuarios consultar datos por medio de lenguaje natural, sin necesidad de escribir código o armar consultas técnicas.

Para eso, se plantea el diseño de un motor de prompts, que sirva como puente entre lo que el usuario pide con sus palabras y las visualizaciones que necesita ver. Es decir, un sistema capaz de traducir una pregunta como “Muéstrame el crecimiento mensual de nuevas empresas registradas en el GAM” en un dashboard generado automáticamente, respetando siempre los permisos de acceso que tenga ese usuario.

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


5.	Bloqueo y reformulación de prompts sensibles: Si un prompt intenta acceder a datos restringidos (por ejemplo: “muéstrame ingresos por persona en mi distrito”), el sistema puede reformular automáticamente la consulta o negarla, manteniendo siempre la trazabilidad del intento.

-------------------------------------------------------------

## Diseño de Restricciones de Visualización Sin Exportación

Como arquitecto, quiero definir cómo el sistema visualiza datos (dashboards, IA, consultas), asegurando que no se puedan exportar ni extraer bajo ningún medio no autorizado.
### Contexto del Proyecto
En la plataforma Data Pura Vida, los usuarios podrán visualizar datos a través de dashboards interactivos. NO debe permitirse exportar datos en ningún formato (Excel, CSV, JSON, imagen, PDF) ni extraer la data directa o indirectamente.
### Restricciones Aplicadas en el Diseño
1. Restricciones a Nivel de Frontend
- Tecnología: React + Recharts + TailwindCSS
- Dashboards renderizados sin opción de exportación.
- Deshabilitación de botones de descarga.
- Bloqueo de clic derecho y combinaciones Ctrl+P, Ctrl+S.
- Prevención de impresión de pantalla mediante políticas de navegador seguro.
2. Restricciones a Nivel de Backend
- Tecnología: Node.js + API Gateway + Lambda
- Sin endpoints que devuelvan datasets crudos.
- API Gateway con throttling y whitelist de IPs.
- Responses controladas: sólo objetos agregados para renderización.
3. Restricciones a Nivel de Data Lake
- Tecnología: Amazon S3 + Lake Formation + DynamoDB
- Dataset cifrado.
- Políticas de Lake Formation: solo lectura, no download.
- Row Level Security (RLS) aplicado.
4. Restricciones de Capa de Seguridad
- Amazon WAF: Protección contra automatización (scrapers).
- AWS Shield: Protección contra DDoS.

5. Restricciones de Monitoreo y Detección de Exfiltración
- AWS Macie: Detección de patrones inusuales de acceso.
- CloudTrail + GuardDuty: Registro de todas las actividades y alertas automáticas.


### Diseño de Tablas y Restricciones Específicas
Tabla: dashboard_views
| Campo              | Tipo        | Restricciones                                |
|:-------------------|:------------|:---------------------------------------------|
| view_id            | UUID        | PRIMARY KEY                                  |
| usuario_id         | UUID        | FOREIGN KEY → usuarios(usuario_id)           |
| dataset_id         | UUID        | FOREIGN KEY → datasets(dataset_id)           |
| tipo_visualizacion | VARCHAR(50) | (tabla, gráfico_linea, gráfico_barras, etc.) |
| configuracion      | JSONB       | Configuración de la visualización            |
| fecha_creacion     | TIMESTAMP   | DEFAULT now(), NOT NULL                      |


Notas:
- 'configuracion' incluye solo las instrucciones de cómo renderizar: agregaciones, filtros aplicados, tipo de gráfico, etc.
- No se almacena ni expone data raw en frontend o backend.
Reglas Adicionales (Policies)
- No permitir exportar dashboards.
- No acceso a APIs de descarga.
- Prohibición de 'Content-Disposition: attachment' en headers.

### Integración y Configuración del Reportador (Amazon QuickSight)

En lugar de construir manualmente todas las restricciones de visualización desde el frontend, se ha decidido utilizar Amazon QuickSight como herramienta de visualización integrada. Este reportador permite aplicar configuraciones específicas para asegurar que los dashboards cumplan con las políticas de no exportación ni extracción de datos.

### Configuración Aplicada en QuickSight

#### Tipo de usuario: 
Se limita a Readers (lectores), sin permisos de edición ni descarga.

#### Permisos a nivel de dataset: 
configurados en Lake Formation, solo permiten lectura controlada (con RLS) y no permiten exportación.

#### Controles de exportación deshabilitados:
  - Se desactiva la opción de “Export to CSV” y “Export to Excel”.
  - Se bloquea la opción de “Download as PDF” y “Print”.
#### Protección de visualizaciones:
  - Las visualizaciones se embeben en el portal con permisos temporales usando embedding with row-level security (RLS).
  - No se incluye menú de opciones de descarga en el iframe embebido.
#### Auditoría y alertas:
  - Las visualizaciones se auditan mediante CloudTrail y alertas configuradas en CloudWatch y Macie para detectar comportamientos inusuales.

La estrategia implementada asegura que los usuarios solo puedan visualizar los datos dentro de la plataforma, sin posibilidad de exportarlos o reproducirlos por medios tradicionales. Se utilizan dashboards embebidos sin controles de descarga, protección reforzada con RLS, JWT temporales, y monitoreo con Macie para detectar patrones sospechosos. Aunque esta medida maximiza la protección contra la fuga de datos, podría percibirse como restrictiva. Se compensa mediante métricas de uso, explicaciones de seguridad y visualizaciones generadas automáticamente por IA que cumplen con las políticas de acceso sin comprometer la experiencia del usuario.

------------------------------------------------------------------------------------------

## Integraciones claras con sistemas externos: APIs, llaves, protocolos de autenticación (OAuth2, JWT), esquemas de clase

### Integraciones con Sistemas Externos y Mecanismos de Autenticación

El ecosistema Data Pura Vida contempla múltiples integraciones seguras con servicios externos y protocolos estándar.

#### APIs externas utilizadas

| Integración          | Función                                | Protocolo      | Autenticación         |
|----------------------|----------------------------------------|----------------|------------------------|
| Stripe / SINPE APIs  | Procesamiento de pagos por datasets    | REST           | API Key + Webhook firmado |
| Twilio               | Notificaciones de aprobación, alertas  | REST           | Token bearer           |
| Amazon SES           | Envío de correos                       | SMTP / SDK     | IAM Role               |
| Datasets externos    | Sincronización de datos (INEC, Hacienda, etc.) | REST / Push   | OAuth2, Token delegados   |

#### Autenticación y Autorización

- **Protocolo base:** OAuth2.0 con flujos adaptados a usuarios públicos, institucionales y técnicos.
- **Tokens:** JWT firmados con claves rotadas automáticamente y validados vía AWS Cognito y Lambda.
- **Roles y atributos:** RBAC + ABAC (via Amazon IAM).
- **Gestión de llaves:**
  - Llaves simétricas: AES256 generadas con AWS KMS.
  - Llaves asimétricas: RSA para firmas y tokens.
  - Llaves tripartitas: mediante Shamir’s Secret Sharing con partes distribuidas entre custodios.

#### Ejemplo de Esquema de Clase: Token de Acceso

```typescript
class AccessToken {
  token: string;
  issuedAt: Date;
  expiresAt: Date;
  userId: string;
  roles: string[];
  scopes: string[];
  signature: string;

  isValid(): boolean {
    return Date.now() < this.expiresAt.getTime();
  }
}

```

-------------------------------------------------------------------------

## Servicios Críticos: Configuración, Monitoreo, Alta Disponibilidad y Fallback

| Dominio                         | Servicio / Componente Crítico                    | Monitoreo                                | Alta Disponibilidad (HA)                                       | Fallback o Recuperación                                     |
|----------------------------------|--------------------------------------------------|------------------------------------------|----------------------------------------------------------------|--------------------------------------------------------------|
| Autenticación y Seguridad   | Amazon Cognito                                   | CloudWatch Metrics + CloudTrail Logs     | Multi-AZ + replicación automática                               | Reintentos automáticos / login alternativo (email/token)    |
|                                  | AWS WAF + GuardDuty                              | Alertas por IP sospechosa / tráfico anómalo | Global Cloud WAF + integración GuardDuty                        | Bloqueo automático + whitelisting manual                    |
|                                  | AWS IAM / Secrets Manager                        | Logs de uso + rotación automática        | Disponibilidad regional + redundancia de clave                  | Política de recuperación de secretos                        |
| API Gateway & Backend       | Amazon API Gateway + AWS Lambda                  | Latencia, error rate, logs CloudWatch    | Distribución regional + concurrencia con fallback por región    | Circuit breaker + reintentos con backoff exponencial       |
|                                  | Servicios Node.js + Express                      | Métricas de salud / logs / trazas X-Ray  | Balanceo por región / ECS o Lambda Multi-AZ                     | Health checks y failover automatizado                      |
| Carga y Validación de Datos | AWS Glue + Lambda ETDL                           | Fallos de transformación / tiempos lentos| Glue multi-worker + Lambda concurrente                         | Reejecución automática + colas de reintento (SQS + DLQ)     |
|                                  | Validación semántica con AI (SageMaker)         | Accuracy, tasa de fallos, tiempos        | Multi-endpoint en SageMaker Hosting                             | Fallback a validación manual o heurística                  |
| Almacenamiento y Acceso     | Amazon S3 (Data Lake)                            | Accesos, tamaños, errores de I/O         | Replicación cross-region + Multi-AZ buckets                     | Versionado habilitado + recuperación de versiones previas  |
|                                  | PostgreSQL / Aurora                              | Query errors, slow logs, CPU, RAM        | Aurora con read-replicas y failover automático                  | Snapshots + restore programado                             |
|                                  | DynamoDB                                         | Consumo RCU/WCU, throttling              | Multi-AZ, on-demand backup                                      | Fallback a caché o endpoint alternativo                    |
| Interfaz y Backoffice       | Frontend React (Amplify Hosting / S3 static)     | Uptime, errores de JS, tráfico           | Multi-CDN (CloudFront) + cache distribuido                      | Página estática de error + modo lectura degradado          |
|                                  | Backoffice administrativo                        | Trazas, errores de acceso, integridad logs| Deploy separado con failover por entorno                       | Acceso de solo lectura para soporte                        |
| Pagos y transacciones       | Stripe / SINPE APIs                              | Fallas de API, rechazos                  | Balanceo + rutas secundarias por fallback                       | Reintento con backoff y alerta manual                      |
| Alertas y Logs              | CloudWatch + CloudTrail + Security Hub           | Logs centralizados, alertas proactivas   | Replicación logs / dashboards multientorno                      | Retención extendida + exportación a S3                     |
| CI/CD        | GitHub Actions / AWS CodePipeline                | Estado de pipelines, pasos fallidos      | Jobs paralelos + runners de backup                             | Reejecución manual y automática de jobs fallidos           |

--------------------------------------------------------------

## Evaluación de riesgos
Esta evaluación de riesgos va a ser realizada con la metodología de ISO 31000, se van a identificar, evaluar y proponer un tratamiento a estos riesgos potenciales del sistema, se debe de tener en cuenta que estos riesgos mencionados no son ni van a ser los únicos que se pueden presentar en el sistema y que siempre se pueden extraer más si se hace un análisis más profundo de estos.

### Identificación de riesgos
| ID| Riesgo                                         | Descripción                                                   | Fuente/Amenaza                              | Impacto Potencial                                 |     
|---|------------------------------------------------|---------------------------------------------------------------|---------------------------------------------|----------------------------------------------------|  
|R1 |Violación de llaves tripartitas                 |Acceso no autorizado o reconstrucción indebida de la llave     |Robo o colusión entre partes                 |Acceso a datos sensibles                            |
|R2 |Pérdida de partes de la llave tripartita        |Imposibilidad de reconstruir la llave si se pierden 2 partes   |Error humano, fallo de custodia              |Pérdida de acceso a datos críticos                  |
|R3 |Acceso no autorizado a datos sensibles          |Acceso indebido a datos por personal técnico o externo         |Fallo del sistema de restricción             |Violación de privacidad                             |
|R4 |Fallo en mecanismos de auditoría/logs           |Logs incompletos, alterados o no generados                     |Fallo técnico, mala configuración            |Incumplimiento normativo, falta de trazabilidad     |
|R5 |Ataques a la infraestructura cloud              |Ataque DDoS, explotación de vulnerabilidades                   |Atacantes externos                           |Caída de servicios, fuga de datos                   |
|R6 |Configuración incorrecta de políticas de IAM    |Permisos excesivos, políticas mal aplicadas                    |Error humano, mala gestión                   |Acceso indebido a datos sensibles                   |
|R7 |Fuga de datos por el servicio de IA o dashboards|Exportación indirecta de datos sensibles vía visualizaciones   |Uso malicioso, IA mal configurada            |Violación de confidencialidad, uso indebido de datos|
|R8 |Incumplimiento de leyes/normativas              |Falta de controles, evidencia o procesos                       |Desconocimiento, mala implementación         |Multas, cierre de operaciones, daño reputacional    |
|R9 |Pérdida de logs o datos históricos              |Eliminación accidental o corrupción de logs/datos              |Fallo técnico, error humano                  |Imposibilidad de auditoría, pérdida de evidencia    |
|R10|Fallo en mecanismos de alerta                   |Alertas no generadas o no atendidas a tiempo                   |Fallo técnico, saturación, mala configuración|Incidentes no detectados, escalamiento de daños     |

### Análisis de Riesgos

| ID  | Probabilidad | Impacto | Nivel de Riesgo | Justificación                                                                                       |
|-----|--------------|---------|-----------------|-----------------------------------------------------------------------------------------------------|
| R1  | Baja         | Alto    | Alto            | Custodia distribuida, pero riesgo si hay colusión entre las otras 2 partes                          |
| R2  | Baja         | Alto    | Medio           | Redundancia (2 de 3 partes), pero hay riesgo si se pierden 2                                        |
| R3  | Media        | Alto    | Alto            | Controles robustos, pero riesgo por acciones de mismos trabajadores                                 |
| R4  | Baja         | Medio   | Medio           | Logs automatizados, pero riesgo por fallo técnico                                                   |
| R5  | Baja         | Alto    | Medio           | Cloud seguro, pero que se den ataques avanzados es posible                                          |
| R6  | Media        | Alto    | Alto            | Políticas que pueden incurrir en errores humanos                                                    |
| R7  | Baja         | Medio   | Medio           | Se tienen restricciones, pero hay riesgo que alguna política o restricción no funcione como debería |
| R8  | Baja         | Alto    | Medio           | Cumplimiento planificado, pero hay probabilidad de cambios legales                                 |
| R9  | Baja         | Medio   | Bajo            | Se poseen buenos planes de backups y retención, pero es posible un error humano                     |
| R10 | Media        | Medio   | Medio           | Se posee un sistema automatizado, pero existe riesgo de saturación o fallo                          |

### Tratamiento de riesgos 
| ID  | Controles/Mitigaciones                                                                                                |
|-----|-----------------------------------------------------------------------------------------------------------------------|
| R1  | Monitoreo constante de accesos o cambio a modelo donde se ocupen las 3 partes si se dan muchos problemas de seguridad |
| R2  | Procedimientos de backup de partes, monitoreo de integridad de partes                                                 |
| R3  | Proxy seguro, monitoreo continuo, segregación de ambientes y otras estrategias anteriormente mencionadas              |
| R4  | Logs inmutables, auditoría periódica, alertas de fallo de logging                                                     |
| R5  | DDoS protection, monitoreo de amenazas y plan de respuesta a incidentes                                               |
| R6  | Revisión periódica de políticas IAM/ABAC                                                                              |
| R7  | Limitar exportaciones, monitoreo de patrones de acceso, revisión de prompts IA                                        |
| R8  | Auditoría de cumplimiento, capacitación legal al equipo encargado                                                     |
| R9  | Backups automáticos y retención en S3                                                                                 |
| R10 | Pruebas de alertas, redundancia en canales de notificación y monitoreo de efectividad de alertas                      |

---------------------------------------------------------------------

## Customer Journeys y Service Design

Estos customers journeys consideran:

- El contexto del usuario

- Las etapas por las que pasa

- Sus acciones

- Sus emociones

- Sus puntos de contacto con la plataforma

- Los problemas o fricciones que enfrenta

- Las oportunidades de mejora

Para el Service Design se diseña un Blueprints, el cual considera:

- Acciones del usuario

- Acciones visibles del sistema

- Acciones internas del sistema

- Soporte técnico o herramientas involucradas

- Puntos de dolor (pain points)

### 1. Registro de nueva entidad pública

![imagen](Recursos/Registro.png)
![imagen](Recursos/BP-Registro.png)

### 2. Subida de un nuevo dataset desde una entidad 

![imagen](Recursos/NuevoDataset.png)
![imagen](Recursos/BP-NuevoDataset.png)

### 3. Consulta ciudadana con IA (prompt-to-dashboard) 

![imagen](Recursos/Consulta.png)
![imagen](Recursos/BP-Consulta.png)
