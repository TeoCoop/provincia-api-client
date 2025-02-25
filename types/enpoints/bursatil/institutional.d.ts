export = institutional;

declare function institutional({ client }: { client: any }): {
  getAll: ({ jwtToken }: { jwtToken: any }) => any;
  editInstitutional: ({
    jwtToken,
    data,
  }: {
    jwtToken: any;
    data: InstitutionalData;
  }) => any;
  deleteInstitutional: ({ jwtToken }: { jwtToken: any }) => any;
};

type InstitutionalData = {
  mision: string;
  vision: string;
  values: string;
  team: Team[];
  code_of_conduct: number[];
  directory: Directory[];
};

type Team = {
  nameArea: string;
  member: Member[];
};

type Member = {
  name: string;
  role: string;
  image: { id: number };
  description: string;
};

type Directory = {
  name: string;
  role: string;
  image: { id: number };
  description: string;
};
