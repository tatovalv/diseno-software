// Interface for form response processing strategy
interface IFormResponseProcessor {
    processResponse(response: FormResponse): void;
}

// Abstract class for form responses
abstract class FormResponse {
    surveyId: string;
    responseData: any;
    
    constructor(surveyId: string, data: any) {
        this.surveyId = surveyId;
        this.responseData = data;
    }
}

// Singleton base class for processors
abstract class SingletonProcessor implements IFormResponseProcessor {
    private static instances: Map<string, SingletonProcessor> = new Map();

    protected constructor() {}

    static getInstance<T extends SingletonProcessor>(this: new () => T): T {
        const className = this.name;
        if (!SingletonProcessor.instances.has(className)) {
            SingletonProcessor.instances.set(className, new this());
        }
        return SingletonProcessor.instances.get(className) as T;
    }

    abstract processResponse(response: FormResponse): void;
}

// Observer interface for survey completion
interface ISurveyCompletionObserver {
    onSurveyCompleted(surveyId: string, results: any): void;
}

// Abstract Factory for creating processors
abstract class ProcessorFactory {
    abstract createProcessor(responseType: string): IFormResponseProcessor;
} 