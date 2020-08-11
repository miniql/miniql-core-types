//
// Represents a resolver for a nested entity.
//
export interface INestedEntityResolver {
    //
    // The name of the global entity resolver for this nested entity relates to (if any).
    // When this omitted the nested entity name is used as the name of the global entity resolver.
    // 
    from?: string;

    //
    // User-defined function that can get retreive a set of entities related to the parent entity.
    //
    invoke: (parent: any, args: any, context: any) => Promise<any>;
}

//
// Represents a set of resolvers for nested entities.
//
export interface INestedEntityResolvers {
    //
    // Each nested entity requires a resolver to retrieve entities from the parent entity.
    //
    [entityTypeName: string]: INestedEntityResolver;
}

//
// Represents a resolver for this type of entity.
//
export interface IEntityQueryResolver {
    //
    // User-defined function that can get or update an entity or set of entities.
    //
    invoke: (args: any, context: any) => Promise<any>;

    //
    // User-defined nested entity resolvers.
    //
    nested?: INestedEntityResolvers;
}

//
// Represents a query resolver. 
// This is a MiniQL backend.
// An object that finds entities.
//
export interface IQueryOperationResolver {
    //
    // Each entity requires a resolver to retrieve or update the entities of this type.
    //
    [entityTypeName: string]: IEntityQueryResolver;
};

//
// Represents a query resolver.
//
export interface IQueryResolver {
    // 
    // Each query can choose its type of operation (eg get or update).
    //
    [operationName: string]: IQueryOperationResolver;
}
