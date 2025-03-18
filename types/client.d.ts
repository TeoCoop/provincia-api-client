export function client(options: any): {
    bursatil: {
        blog: {
            getById: ({ blogId }: {
                blogId: any;
            }) => any;
            getAll: () => any;
            createBlog: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateBlog: ({ jwtToken, blogId, data }: {
                jwtToken: any;
                blogId: any;
                data: any;
            }) => any;
            deleteBlog: ({ jwtToken, blogId }: {
                jwtToken: any;
                blogId: any;
            }) => any;
        };
        institutional: {
            getAll: () => any;
            updateInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            deleteInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        product: {
            getAll: () => any;
            updateProduct: ({ jwtToken, productId, data }: {
                jwtToken: any;
                productId: any;
                data: any;
            }) => any;
            deleteProduct: ({ jwtToken, productId }: {
                jwtToken: any;
                productId: any;
            }) => any;
            getById: ({ productId }: {
                productId: any;
            }) => any;
            createProduct: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        accountOppening: {
            getById: ({ accountId }: {
                accountId: any;
            }) => any;
            getAll: () => any;
            createAccount: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateAccount: ({ jwtToken, accountId, data }: {
                jwtToken: any;
                accountId: any;
                data: any;
            }) => any;
            deleteAccount: ({ jwtToken, accountId }: {
                jwtToken: any;
                accountId: any;
            }) => any;
        };
        faqs: {
            getById: ({ faqId }: {
                faqId: any;
            }) => any;
            getAll: () => any;
            createFaq: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateFaq: ({ jwtToken, faqId, data }: {
                jwtToken: any;
                faqId: any;
                data: any;
            }) => any;
            deleteFaq: ({ jwtToken, faqId }: {
                jwtToken: any;
                faqId: any;
            }) => any;
        };
        global: {
            getAll: () => any;
            updateGlobal: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            deleteGlobal: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        carterasEficientes: {
            getById: ({ carteraId }: {
                carteraId: any;
            }) => any;
            getAll: () => any;
            createCartera: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateCartera: ({ jwtToken, carteraId, data }: {
                jwtToken: any;
                carteraId: any;
                data: any;
            }) => any;
            deleteCartera: ({ jwtToken, carteraId }: {
                jwtToken: any;
                carteraId: any;
            }) => any;
        };
        videoTutorial: any;
        categoriesVideos: {
            getById: ({ categoriesId }: {
                categoriesId: any;
            }) => any;
            getAll: () => any;
            createCategoriesVideos: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateCategoriesVideos: ({ jwtToken, categoriesId, data }: {
                jwtToken: any;
                categoriesId: any;
                data: any;
            }) => any;
            deleteCategoriesVideos: ({ jwtToken, categoriesId }: {
                jwtToken: any;
                categoriesId: any;
            }) => any;
        };
    };
    auth: {
        auth: ({ user }: {
            user: any;
        }) => any;
        login: ({ user }: {
            user: any;
        }) => any;
        verifyTotp: ({ user }: {
            user: any;
        }) => any;
    };
    general: {
        test: {
            getAll: () => any;
            updateTest: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            deleteTest: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        questionTest: {
            getAll: () => any;
            updatedQuestion: ({ jwtToken, questionId, data }: {
                jwtToken: any;
                questionId: any;
                data: any;
            }) => any;
            deleteCuestion: ({ jwtToken, questionId }: {
                jwtToken: any;
                questionId: any;
            }) => any;
            getById: ({ questionId }: {
                questionId: any;
            }) => any;
            createQuestion: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
    };
    fondos: {
        blog: {
            getById: ({ blogId }: {
                blogId: any;
            }) => any;
            getAll: () => any;
            createBlog: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateBlog: ({ jwtToken, blogId, data }: {
                jwtToken: any;
                blogId: any;
                data: any;
            }) => any;
            deleteBlog: ({ jwtToken, blogId }: {
                jwtToken: any;
                blogId: any;
            }) => any;
        };
        institutional: {
            getAll: () => any;
            updateInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            deleteInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        category: {
            getById: ({ categoryId }: {
                categoryId: any;
            }) => any;
            getAll: () => any;
            createCategory: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateCategory: ({ jwtToken, categoryId, data }: {
                jwtToken: any;
                categoryId: any;
                data: any;
            }) => any;
            deleteCategory: ({ jwtToken, categoryId }: {
                jwtToken: any;
                categoryId: any;
            }) => any;
        };
        faqs: {
            getById: ({ faqId }: {
                faqId: any;
            }) => any;
            getAll: () => any;
            createFaq: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateFaq: ({ jwtToken, faqId, data }: {
                jwtToken: any;
                faqId: any;
                data: any;
            }) => any;
            deleteFaq: ({ jwtToken, faqId }: {
                jwtToken: any;
                faqId: any;
            }) => any;
        };
        founds: {
            getById: ({ foundId }: {
                foundId: any;
            }) => any;
            getAll: () => any;
            createFound: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateFound: ({ jwtToken, foundId, data }: {
                jwtToken: any;
                foundId: any;
                data: any;
            }) => any;
            deleteFound: ({ jwtToken, foundId }: {
                jwtToken: any;
                foundId: any;
            }) => any;
        };
        global: {
            getAll: () => any;
            updateGlobal: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            deleteGlobal: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
    };
};
