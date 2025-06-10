export = inverterProfile;
declare function inverterProfile({ client }: {
    client: any;
}): {
    getAll: () => any;
    updateProfile: ({ jwtToken, profileId, data }: {
        jwtToken: any;
        profileId: any;
        data: any;
    }) => any;
    deleteProfile: ({ jwtToken, profileId }: {
        jwtToken: any;
        profileId: any;
    }) => any;
    getById: ({ profileId }: {
        profileId: any;
    }) => any;
    createProfile: ({ jwtToken, data }: {
        jwtToken: any;
        data: any;
    }) => any;
    getResult: ({ value }: {
        value: any;
    }) => any;
};
