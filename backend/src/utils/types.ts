//Defining router types

export type RouteHandler = (req: Request) => Response | Promise<Response>;

export type MethodMap = {
    GET?: RouteHandler;
    POST?: RouteHandler;
    PUT?: RouteHandler;
    DELETE?: RouteHandler;
    PATCH?: RouteHandler;
}

export type RouteMap = {
    [path: string]: RouteHandler | MethodMap
}

//Defining data types

export interface Quest {
    id: string;
    title: string;
    description: string;
    type: "main" | "daily" | "secondary" | "thirdparty";
    isCompleted: boolean;
    rewards: Reward[];
}

export interface Reward {
    type: "item" | "currency" | "experience";
    amount: number;
    itemId?: string; // Only for item type
}

export interface QuestCreatePayload {
    title: string;
    description: string;
    type: "main" | "daily" | "secondary" | "thirdparty";
    rewards: Reward[];
}

export interface QuestUpdatePayload {
    title?: string;
    description?: string;
    type?: "main" | "daily" | "secondary" | "thirdparty";
    isCompleted?: boolean;
    rewards?: Reward[];
}

export interface ErrorResponse {
    message: string;
    code: number;
} 