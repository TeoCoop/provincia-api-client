export = blog;

declare function blog({ client }: { client: any }): {
  getById: ({ jwtToken, blogId }: { jwtToken: any; blogId: any }) => any;
  getAll: ({ jwtToken }: { jwtToken: any }) => any;
  createBlog: ({ jwtToken, data }: { jwtToken: any; data: BlogData }) => any;
  updateBlog: ({
    jwtToken,
    blogId,
    data,
  }: {
    jwtToken: any;
    blogId: any;
    data: BlogData;
  }) => any;
  deleteBlog: ({ jwtToken, blogId }: { jwtToken: any; blogId: any }) => any;
};

type BlogData = {
  content: string;
  image: number[];
  title: string;
  public: boolean;
};
