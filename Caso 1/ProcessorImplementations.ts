// Concrete Form Response types
class SurveyAResponse extends FormResponse {
    constructor(surveyId: string, data: any) {
        super(surveyId, data);
    }
}

class SurveyBResponse extends FormResponse {
    constructor(surveyId: string, data: any) {
        super(surveyId, data);
    }
}

// Concrete Processor implementations (Singleton + Strategy)
class SurveyAProcessor extends SingletonProcessor {
    processResponse(response: FormResponse): void {
        // Process Survey A specific logic
        console.log(`Processing Survey A response: ${response.surveyId}`);
    }
}

class SurveyBProcessor extends SingletonProcessor {
    processResponse(response: FormResponse): void {
        // Process Survey B specific logic
        console.log(`Processing Survey B response: ${response.surveyId}`);
    }
}

// Concrete Factory
class ConcreteProcessorFactory extends ProcessorFactory {
    private static instance: ConcreteProcessorFactory;
    private processorMap: Map<string, new () => SingletonProcessor>;

    private constructor() {
        super();
        this.processorMap = new Map([
            ['SurveyA', SurveyAProcessor],
            ['SurveyB', SurveyBProcessor]
        ]);
    }

    static getInstance(): ConcreteProcessorFactory {
        if (!ConcreteProcessorFactory.instance) {
            ConcreteProcessorFactory.instance = new ConcreteProcessorFactory();
        }
        return ConcreteProcessorFactory.instance;
    }

    createProcessor(responseType: string): IFormResponseProcessor {
        const ProcessorClass = this.processorMap.get(responseType);
        if (!ProcessorClass) {
            throw new Error(`No processor found for type: ${responseType}`);
        }
        return ProcessorClass.getInstance();
    }
} 