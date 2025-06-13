export = simuladorFondos;
declare function simuladorFondos({ client }: {
    client: any;
}): {
    simular: ({ data }: {
        data: any;
    }) => any;
};
