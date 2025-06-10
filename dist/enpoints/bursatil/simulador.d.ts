export = simuladorRendimiento;
declare function simuladorRendimiento({ client }: {
    client: any;
}): {
    simular: ({ data }: {
        data: any;
    }) => any;
};
