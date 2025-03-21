// Main processing system that coordinates everything
class FormProcessingSystem {
    private processorFactory: ProcessorFactory;
    private apiNotifier: ISurveyCompletionObserver;
    private surveyResponses: Map<string, FormResponse[]>;

    constructor() {
        this.processorFactory = ConcreteProcessorFactory.getInstance();
        this.apiNotifier = SurveyApiNotifier.getInstance();
        this.surveyResponses = new Map();
    }

    async processResponse(response: FormResponse): Promise<void> {
        // Get the appropriate processor
        const processorType = response.constructor.name.replace('Response', '');
        const processor = this.processorFactory.createProcessor(processorType);

        // Process the response
        processor.processResponse(response);

        // Store the response
        if (!this.surveyResponses.has(response.surveyId)) {
            this.surveyResponses.set(response.surveyId, []);
        }
        this.surveyResponses.get(response.surveyId)?.push(response);

        // Check if survey is complete and notify API
        await this.checkSurveyCompletion(response.surveyId);
    }

    private async checkSurveyCompletion(surveyId: string): Promise<void> {
        // In a real implementation, you would have logic to determine if all responses are received
        const isComplete = true; // Simplified for example

        if (isComplete) {
            const results = this.surveyResponses.get(surveyId);
            await this.apiNotifier.onSurveyCompleted(surveyId, results);
        }
    }
} 