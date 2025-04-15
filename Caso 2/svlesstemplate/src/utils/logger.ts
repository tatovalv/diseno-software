//import { datadogLogs } from '@datadog/browser-logs'; // Hypothetical Datadog SDK

//Logger implementation for AWS CloudWatch with Stategy Pattern
//This logger uses JSON format for structured logging
interface LoggerStrategy {
    log(message: string, metadata?: Record<string, unknown>): void;
    error(message: string, metadata?: Record<string, unknown>): void;
    warn(message: string, metadata?: Record<string, unknown>): void;
}

class CloudWatchLogger implements LoggerStrategy {
    log(message: string, metadata: Record<string, unknown> = {}): void {
        console.log(JSON.stringify({ level: 'INFO', message, ...metadata }));
    }

    error(message: string, metadata: Record<string, unknown> = {}): void {
        console.error(JSON.stringify({ level: 'ERROR', message, ...metadata }));
    }

    warn(message: string, metadata: Record<string, unknown> = {}): void {
        console.warn(JSON.stringify({ level: 'WARN', message, ...metadata }));
    }
}

// Not implemented, but can be used a similar pattern for Datadog or any other logging service
class DatadogLogger implements LoggerStrategy {
    log(message: string, metadata: Record<string, unknown> = {}): void {
      //datadogLogs.logger.info(message, metadata);
    }
  
    error(message: string, metadata: Record<string, unknown> = {}): void {
      //datadogLogs.logger.error(message, metadata);
    }
  
    warn(message: string, metadata: Record<string, unknown> = {}): void {
      //datadogLogs.logger.warn(message, metadata);
    }
  }

// Logger class that uses the strategy pattern to allow for different logging strategies
class Logger {
    private strategy: LoggerStrategy;

    constructor(strategy: LoggerStrategy = new CloudWatchLogger()) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: LoggerStrategy): void {
        this.strategy = strategy;
    }

    public info(message: string, metadata?: Record<string, unknown>): void {
        this.strategy.log(message, metadata);
    }

    public error(message: string, metadata?: Record<string, unknown>): void {
        this.strategy.error(message, metadata);
    }

    public warn(message: string, metadata?: Record<string, unknown>): void {
        this.strategy.warn(message, metadata);
    }
}

// The logger that will be used is declared in the .env file (in this case the logger used is going to be CloudWatch)
export const logger = new Logger(
    process.env.LOGGER_TYPE === 'DATADOG' 
      ? new DatadogLogger()  
      : new CloudWatchLogger()  
  );