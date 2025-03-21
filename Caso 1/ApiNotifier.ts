// API Observer implementations
class SurveyApiNotifier implements ISurveyCompletionObserver {
    private static instance: SurveyApiNotifier;
    private apiEndpoints: Map<string, string>;

    private constructor() {
        this.apiEndpoints = new Map([
            ['SurveyA', 'https://api.surveya.com/results'],
            ['SurveyB', 'https://api.surveyb.com/results']
        ]);
    }

    static getInstance(): SurveyApiNotifier {
        if (!SurveyApiNotifier.instance) {
            SurveyApiNotifier.instance = new SurveyApiNotifier();
        }
        return SurveyApiNotifier.instance;
    }

    async onSurveyCompleted(surveyId: string, results: any): Promise<void> {
        const endpoint = this.apiEndpoints.get(surveyId);
        if (!endpoint) {
            throw new Error(`No API endpoint found for survey: ${surveyId}`);
        }

        try {
            // Async API call
            await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(results)
            });
            console.log(`Results sent to API for survey: ${surveyId}`);
        } catch (error) {
            console.error(`Error sending results to API: ${error}`);
        }
    }
} 