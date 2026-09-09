export declare function client(options: any): {
    bursatil: {
        blog: {
            getById: ({ blogId }: {
                blogId: any;
            }) => any;
            getAll: () => any;
            createBlog: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateBlog: ({ jwtToken, blogId, data }: {
                blogId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteBlog: ({ jwtToken, blogId }: {
                blogId: any;
                jwtToken: any;
            }) => any;
            getFilters: ({ year, topicDocumentId, categoryDocumentId, search }: {
                categoryDocumentId: any;
                search: any;
                topicDocumentId: any;
                year: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        institutional: {
            getAll: () => any;
            updateInstitutional: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        product: {
            getAll: () => any;
            updateProduct: ({ jwtToken, productId, data }: {
                data: any;
                jwtToken: any;
                productId: any;
            }) => any;
            deleteProduct: ({ jwtToken, productId }: {
                jwtToken: any;
                productId: any;
            }) => any;
            getById: ({ productId }: {
                productId: any;
            }) => any;
            createProduct: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        faqs: {
            getById: ({ faqId }: {
                faqId: any;
            }) => any;
            getAll: () => any;
            createFaq: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateFaq: ({ jwtToken, faqId, data }: {
                data: any;
                faqId: any;
                jwtToken: any;
            }) => any;
            deleteFaq: ({ jwtToken, faqId }: {
                faqId: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        global: {
            getAll: () => any;
            updateGlobal: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteGlobal: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        carterasEficientes: {
            getById: ({ carteraId }: {
                carteraId: any;
            }) => any;
            getAll: () => any;
            createCartera: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateCartera: ({ jwtToken, carteraId, data }: {
                carteraId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteCartera: ({ jwtToken, carteraId }: {
                carteraId: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        instrumentosSelected: {
            getById: ({ instrumentoId }: {
                instrumentoId: any;
            }) => any;
            getAll: () => any;
            createInstrumento: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateInstrumento: ({ jwtToken, instrumentoId, data }: {
                data: any;
                instrumentoId: any;
                jwtToken: any;
            }) => any;
            deleteInstrumento: ({ jwtToken, instrumentoId }: {
                instrumentoId: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        videoTutorial: {
            getById: ({ videoId }: {
                videoId: any;
            }) => any;
            getAll: () => any;
            createVideo: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateVideo: ({ jwtToken, videoId, data }: {
                data: any;
                jwtToken: any;
                videoId: any;
            }) => any;
            deleteVideo: ({ jwtToken, videoId }: {
                jwtToken: any;
                videoId: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        categoriesVideos: {
            getById: ({ categoriesId }: {
                categoriesId: any;
            }) => any;
            getAll: () => any;
            createCategoriesVideos: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateCategoriesVideos: ({ jwtToken, categoriesId, data }: {
                categoriesId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteCategoriesVideos: ({ jwtToken, categoriesId }: {
                categoriesId: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        categoriesBlog: {
            getById: ({ categoryId }: {
                categoryId: any;
            }) => any;
            getAll: () => any;
            createCategory: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateCategory: ({ jwtToken, categoryId, data }: {
                categoryId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteCategory: ({ jwtToken, categoryId }: {
                categoryId: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        areaTeam: {
            getAll: () => any;
            updateArea: ({ jwtToken, areaId, data }: {
                areaId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteArea: ({ jwtToken, areaId }: {
                areaId: any;
                jwtToken: any;
            }) => any;
            getById: ({ areaId }: {
                areaId: any;
            }) => any;
            createArea: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        teamMember: {
            getAll: () => any;
            updateMember: ({ jwtToken, memberId, data }: {
                data: any;
                jwtToken: any;
                memberId: any;
            }) => any;
            deleteMember: ({ jwtToken, memberId }: {
                jwtToken: any;
                memberId: any;
            }) => any;
            getById: ({ memberId }: {
                memberId: any;
            }) => any;
            createMember: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        aliados: {
            getAll: () => any;
            updateAliado: ({ jwtToken, aliadoId, data }: {
                aliadoId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteAliado: ({ jwtToken, aliadoId }: {
                aliadoId: any;
                jwtToken: any;
            }) => any;
            getById: ({ aliadoId }: {
                aliadoId: any;
            }) => any;
            createAliado: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        topicBlog: {
            getAll: () => any;
            updateTopic: ({ jwtToken, topicId, data }: {
                data: any;
                jwtToken: any;
                topicId: any;
            }) => any;
            deleteTopic: ({ jwtToken, topicId }: {
                jwtToken: any;
                topicId: any;
            }) => any;
            getById: ({ topicId }: {
                topicId: any;
            }) => any;
            createTopic: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        destacadosHome: {
            getAll: () => any;
            updateDestacado: ({ jwtToken, destacadoId, data }: {
                data: any;
                destacadoId: any;
                jwtToken: any;
            }) => any;
            deleteDestacado: ({ jwtToken, destacadoId }: {
                destacadoId: any;
                jwtToken: any;
            }) => any;
            getById: ({ destacadoId }: {
                destacadoId: any;
            }) => any;
            createDestacado: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        foundsForBursatil: {
            get: () => any;
        };
        paletteAndColors: {
            getAllColor: () => any;
            getByIdColor: ({ colorId }: {
                colorId: any;
            }) => any;
            deleteColor: ({ jwtToken, colorId }: {
                colorId: any;
                jwtToken: any;
            }) => any;
            createColor: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateColor: ({ jwtToken, colorId, data }: {
                colorId: any;
                data: any;
                jwtToken: any;
            }) => any;
            getAllPalettes: () => any;
            updatePalette: ({ jwtToken, paletteId, data }: {
                data: any;
                jwtToken: any;
                paletteId: any;
            }) => any;
            deletePalette: ({ jwtToken, paletteId }: {
                jwtToken: any;
                paletteId: any;
            }) => any;
            getByIdPalette: ({ paletteId }: {
                paletteId: any;
            }) => any;
            createPalette: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        homeBursatil: {
            getAll: () => any;
            updateHome: ({ jwtToken, homeCardId, data }: {
                data: any;
                homeCardId: any;
                jwtToken: any;
            }) => any;
            deleteHome: ({ jwtToken, homeCardId }: {
                homeCardId: any;
                jwtToken: any;
            }) => any;
            getById: ({ homeCardId }: {
                homeCardId: any;
            }) => any;
            createHome: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        contactNewsleter: {
            getById: ({ jwtToken, contactId }: {
                contactId: any;
                jwtToken: any;
            }) => any;
            getAll: ({ jwtToken, page, pageSize }: {
                jwtToken: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
            createContact: ({ data }: {
                data: any;
            }) => any;
            updateContact: ({ jwtToken, contactId, data }: {
                contactId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteContact: ({ jwtToken, contactId }: {
                contactId: any;
                jwtToken: any;
            }) => any;
        };
        contactAsociado: {
            getById: ({ jwtToken, asesorId }: {
                asesorId: any;
                jwtToken: any;
            }) => any;
            getAll: ({ jwtToken, page, pageSize }: {
                jwtToken: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
            createAsesor: ({ data }: {
                data: any;
            }) => any;
            updateContact: ({ jwtToken, asesorId, data }: {
                asesorId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteAsesor: ({ jwtToken, asesorId }: {
                asesorId: any;
                jwtToken: any;
            }) => any;
        };
        test: {
            getAll: () => any;
            updateTest: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            deleteTest: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        questionTest: {
            getAll: () => any;
            updatedQuestion: ({ jwtToken, questionId, data }: {
                data: any;
                jwtToken: any;
                questionId: any;
            }) => any;
            deleteCuestion: ({ jwtToken, questionId }: {
                jwtToken: any;
                questionId: any;
            }) => any;
            getById: ({ questionId }: {
                questionId: any;
            }) => any;
            createQuestion: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        inversorProfile: {
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
        simulador: {
            simular: ({ data }: {
                data: any;
            }) => any;
        };
        libreria: {
            getAll: ({ jwtToken, page, pageSize }: {
                jwtToken: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
            updateFile: ({ jwtToken, data, fileId }: {
                data: any;
                fileId: any;
                jwtToken: any;
            }) => any;
            createFile: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteFile: ({ jwtToken, fileId }: {
                fileId: any;
                jwtToken: any;
            }) => any;
            getById: ({ jwtToken, fileId }: {
                fileId: any;
                jwtToken: any;
            }) => any;
        };
        authBursatil: {
            auth: ({ user }: {
                user: any;
            }) => any;
            login: ({ user, access_token }: {
                access_token: any;
                user: any;
            }) => any;
            verifyTotp: ({ user, access_token }: {
                access_token: any;
                user: any;
            }) => any;
        };
    };
    general: {
        upload: {
            update: ({ jwtToken, file }: {
                file: any;
                jwtToken: any;
            }) => any;
        };
        blogMedia: {
            getAll: ({ jwtToken, page, pageSize }: {
                jwtToken: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
            updateFile: ({ jwtToken, data, fileId }: {
                data: any;
                fileId: any;
                jwtToken: any;
            }) => any;
            deleteFile: ({ jwtToken, fileId }: {
                fileId: any;
                jwtToken: any;
            }) => any;
            getById: ({ jwtToken, fileId }: {
                fileId: any;
                jwtToken: any;
            }) => any;
            createFile: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
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
                data: any;
                jwtToken: any;
            }) => any;
            updateBlog: ({ jwtToken, blogId, data }: {
                blogId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteBlog: ({ jwtToken, blogId }: {
                blogId: any;
                jwtToken: any;
            }) => any;
            getFilters: ({ year, topicDocumentId, categoryDocumentId, search }: {
                categoryDocumentId: any;
                search: any;
                topicDocumentId: any;
                year: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        institutional: {
            getAll: () => any;
            updateInstitutional: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            deleteInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        faqs: {
            getById: ({ faqId }: {
                faqId: any;
            }) => any;
            getAll: () => any;
            createFaq: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateFaq: ({ jwtToken, faqId, data }: {
                data: any;
                faqId: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            deleteFaq: ({ jwtToken, faqId }: {
                faqId: any;
                jwtToken: any;
            }) => any;
        };
        founds: {
            getById: ({ foundId }: {
                foundId: any;
            }) => any;
            getAll: () => any;
            createFound: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateFound: ({ jwtToken, foundId, data }: {
                data: any;
                foundId: any;
                jwtToken: any;
            }) => any;
            deleteFound: ({ jwtToken, foundId }: {
                foundId: any;
                jwtToken: any;
            }) => any;
            getFilters: (caracteristicaDocumentId: any, tipoActivoDocumentId: any, valueInversorId: any) => any;
            getByDocumentId: ({ foundDocumentId }: {
                foundDocumentId: any;
            }) => any;
            getOnlyNameAndNumber: () => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            getMoneda: () => any;
        };
        areaTeam: {
            getAll: () => any;
            updateArea: ({ jwtToken, areaId, data }: {
                areaId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteArea: ({ jwtToken, areaId }: {
                areaId: any;
                jwtToken: any;
            }) => any;
            getById: ({ areaId }: {
                areaId: any;
            }) => any;
            createArea: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        categoriesBlog: {
            getById: ({ categoryId }: {
                categoryId: any;
            }) => any;
            getAll: () => any;
            createCategory: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateCategory: ({ jwtToken, categoryId, data }: {
                categoryId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteCategory: ({ jwtToken, categoryId }: {
                categoryId: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        categoriesVideos: {
            getById: ({ categoriesId }: {
                categoriesId: any;
            }) => any;
            getAll: () => any;
            createCategoriesVideos: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateCategoriesVideos: ({ jwtToken, categoriesId, data }: {
                categoriesId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteCategoriesVideos: ({ jwtToken, categoriesId }: {
                categoriesId: any;
                jwtToken: any;
            }) => any;
            getAllPanel: () => any;
        };
        homeFondos: {
            getAll: () => any;
            updateHome: ({ jwtToken, homeCardId, data }: {
                data: any;
                homeCardId: any;
                jwtToken: any;
            }) => any;
            deleteHome: ({ jwtToken, homeCardId }: {
                homeCardId: any;
                jwtToken: any;
            }) => any;
            getById: ({ homeCardId }: {
                homeCardId: any;
            }) => any;
            createHome: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: (jwtToken: any) => any;
        };
        paletteAndColors: {
            getAllColor: () => any;
            getByIdColor: ({ colorId }: {
                colorId: any;
            }) => any;
            deleteColor: ({ jwtToken, colorId }: {
                colorId: any;
                jwtToken: any;
            }) => any;
            createColor: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateColor: ({ jwtToken, colorId, data }: {
                colorId: any;
                data: any;
                jwtToken: any;
            }) => any;
            getAllPalettes: () => any;
            updatePalette: ({ jwtToken, paletteId, data }: {
                data: any;
                jwtToken: any;
                paletteId: any;
            }) => any;
            deletePalette: ({ jwtToken, paletteId }: {
                jwtToken: any;
                paletteId: any;
            }) => any;
            getByIdPalette: ({ paletteId }: {
                paletteId: any;
            }) => any;
            createPalette: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
        };
        questionTest: {
            getAll: () => any;
            updatedQuestion: ({ jwtToken, questionId, data }: {
                data: any;
                jwtToken: any;
                questionId: any;
            }) => any;
            deleteCuestion: ({ jwtToken, questionId }: {
                jwtToken: any;
                questionId: any;
            }) => any;
            getById: ({ questionId }: {
                questionId: any;
            }) => any;
            createQuestion: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        teamMember: {
            getAll: () => any;
            updateMember: ({ jwtToken, memberId, data }: {
                data: any;
                jwtToken: any;
                memberId: any;
            }) => any;
            deleteMember: ({ jwtToken, memberId }: {
                jwtToken: any;
                memberId: any;
            }) => any;
            getById: ({ memberId }: {
                memberId: any;
            }) => any;
            createMember: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        inversorProfile: {
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
        test: {
            getAll: () => any;
            updateTest: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteTest: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        topicBlog: {
            getAll: () => any;
            updateTopic: ({ jwtToken, topicId, data }: {
                data: any;
                jwtToken: any;
                topicId: any;
            }) => any;
            deleteTopic: ({ jwtToken, topicId }: {
                jwtToken: any;
                topicId: any;
            }) => any;
            getById: ({ topicId }: {
                topicId: any;
            }) => any;
            createTopic: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        videoTutorial: {
            getById: ({ videoId }: {
                videoId: any;
            }) => any;
            getAll: () => any;
            createVideo: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            updateVideo: ({ jwtToken, videoId, data }: {
                data: any;
                jwtToken: any;
                videoId: any;
            }) => any;
            deleteVideo: ({ jwtToken, videoId }: {
                jwtToken: any;
                videoId: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        nuestroEquipo: {
            getAll: () => any;
            updateNuestroEquipo: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteNuestroEquipo: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        tiposActivos: {
            getAll: () => any;
            updateActivo: ({ jwtToken, activoId, data }: {
                activoId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteActivo: ({ jwtToken, activoId }: {
                activoId: any;
                jwtToken: any;
            }) => any;
            getById: ({ activoId }: {
                activoId: any;
            }) => any;
            createActivo: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        caracteristicasFound: {
            getAll: () => any;
            updateCaracteristica: ({ jwtToken, caracteristicaId, data }: {
                caracteristicaId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteCaracteristica: ({ jwtToken, caracteristicaId }: {
                caracteristicaId: any;
                jwtToken: any;
            }) => any;
            getById: ({ caracteristicaId }: {
                caracteristicaId: any;
            }) => any;
            createCaracteristica: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        simulador: {
            simular: ({ data }: {
                data: any;
            }) => any;
        };
        informacionParaInversor: {
            getAll: () => any;
            updateInformacion: ({ jwtToken, infoId, data }: {
                data: any;
                infoId: any;
                jwtToken: any;
            }) => any;
            deleteInformacion: ({ jwtToken, infoId }: {
                infoId: any;
                jwtToken: any;
            }) => any;
            getById: ({ infoId }: {
                infoId: any;
            }) => any;
            createInformacion: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        informacionParaInversorFile: {
            getAll: () => any;
            updateFile: ({ jwtToken, fileId, data }: {
                data: any;
                fileId: any;
                jwtToken: any;
            }) => any;
            deleteFile: ({ jwtToken, fileId }: {
                fileId: any;
                jwtToken: any;
            }) => any;
            getById: ({ fileId }: {
                fileId: any;
            }) => any;
            createFile: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        cuotaParte: {
            getAll: ({ our_found, clase_fondo, page, pageSize }: {
                clase_fondo: any;
                our_found: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
            updateCuotaParte: ({ jwtToken, cuotaParteId, data }: {
                cuotaParteId: any;
                data: any;
                jwtToken: any;
            }) => any;
            deleteCuotaParte: ({ jwtToken, cuotaParteId }: {
                cuotaParteId: any;
                jwtToken: any;
            }) => any;
            getById: ({ cuotaParteId }: {
                cuotaParteId: any;
            }) => any;
            createCuotaParte: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getByRange: ({ our_found, clase_fondo, fecha_inicio, fecha_fin, page, pageSize, }: {
                clase_fondo: any;
                fecha_fin: any;
                fecha_inicio: any;
                our_found: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
            getTestingPermisosPanel: ({ jwtToken, our_found, clase_fondo, page, pageSize, }: {
                clase_fondo: any;
                jwtToken: any;
                our_found: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
        };
        libreria: {
            getAll: ({ jwtToken, page, pageSize }: {
                jwtToken: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
            updateFile: ({ jwtToken, data, fileId }: {
                data: any;
                fileId: any;
                jwtToken: any;
            }) => any;
            createFile: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteFile: ({ jwtToken, fileId }: {
                fileId: any;
                jwtToken: any;
            }) => any;
            getById: ({ jwtToken, fileId }: {
                fileId: any;
                jwtToken: any;
            }) => any;
        };
        destacadoPopUp: {
            getAll: (isPublic: any) => any;
            updateDestacado: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            getAllPanel: ({ isPublic, jwtToken }: {
                isPublic: any;
                jwtToken: any;
            }) => any;
        };
        authFondos: {
            auth: ({ user }: {
                user: any;
            }) => any;
            login: ({ user, access_token }: {
                access_token: any;
                user: any;
            }) => any;
            verifyTotp: ({ user, access_token }: {
                access_token: any;
                user: any;
            }) => any;
        };
        heroAndDestacados: {
            getFromFront: () => any;
            getPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            updateDestacado: ({ jwtToken, destacadoId, data }: {
                data: any;
                destacadoId: any;
                jwtToken: any;
            }) => any;
        };
        dinamicLanding: {
            getAll: () => any;
            getAllPanel: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            updateLanding: ({ jwtToken, data, ladingId }: {
                data: any;
                jwtToken: any;
                ladingId: any;
            }) => any;
            createLanding: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteLanding: ({ jwtToken, ladingId, data }: {
                data: any;
                jwtToken: any;
                ladingId: any;
            }) => any;
        };
        motivoConsulta: {
            getAll: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            updateMotivo: ({ jwtToken, documentId, data }: {
                data: any;
                documentId: any;
                jwtToken: any;
            }) => any;
            createMotivo: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteMotivo: ({ jwtToken, documentId, data }: {
                data: any;
                documentId: any;
                jwtToken: any;
            }) => any;
            getFront: () => any;
        };
        form: {
            getAll: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            updateForm: ({ jwtToken, documentId, data }: {
                data: any;
                documentId: any;
                jwtToken: any;
            }) => any;
            createForm: ({ jwtToken, data }: {
                data: any;
                jwtToken: any;
            }) => any;
            deleteForm: ({ jwtToken, documentId, data }: {
                data: any;
                documentId: any;
                jwtToken: any;
            }) => any;
        };
    };
};
