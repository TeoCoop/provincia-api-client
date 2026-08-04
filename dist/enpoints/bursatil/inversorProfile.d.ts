export = inverterProfile;
declare function inverterProfile({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateProfile: ({ jwtToken, profileId, data }: {
        data: any;
        jwtToken: any;
        profileId: any;
    }) => any;
    deleteProfile: ({ jwtToken, profileId }: {
        jwtToken: any;
        profileId: any;
    }) => any;
    getById: ({ profileId }: {
        profileId: any;
    }) => any;
    createProfile: ({ jwtToken, data }: {
        data: any;
        jwtToken: any;
    }) => any;
    getResult: ({ value }: {
        value: any;
    }) => any;
    getAllPanel: ({ jwtToken }: {
        jwtToken: any;
    }) => any;
};
