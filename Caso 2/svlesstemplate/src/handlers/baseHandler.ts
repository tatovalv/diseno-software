import type {APIGatewayEvent} from 'aws-lambda';
import type {Middleware} from '../middleware/middlewares';

// This is the base class for all handlers. It is responsible for executing the middleware chain and then calling the execute method
export abstract class BaseHandler {
    private middlewareChain: Middleware[];

    constructor(middlewareChain: Middleware[]) {
        this.middlewareChain = middlewareChain;
    }

    // It processes all middleware and then calls the main logic (execute method)
    async run(event: APIGatewayEvent){
        const context: any = {event};

        // Track all the chains ultil all middleware are executed
        let processedEvent = -1;
        const next = async ()=> {
            processedEvent++;
            if(processedEvent < this.middlewareChain.length) {
                await this.middlewareChain[processedEvent].execute(context, next);
            }
        };

        await next();
        return this.execute(context);
    }

    protected abstract execute(context: any): Promise<any>;
}