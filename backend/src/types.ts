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