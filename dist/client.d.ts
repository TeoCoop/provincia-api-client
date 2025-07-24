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
            getFilters: ({ year, topicDocumentId, categoryDocumentId, search }: {
                year: any;
                topicDocumentId: any;
                categoryDocumentId: any;
                search: any;
            }) => any;
        };
        institutional: {
            getAll: () => any;
            updateInstitutional: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
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
        instrumentosSelected: {
            getById: ({ instrumentoId }: {
                instrumentoId: any;
            }) => any;
            getAll: () => any;
            createInstrumento: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateInstrumento: ({ jwtToken, instrumentoId, data }: {
                jwtToken: any;
                instrumentoId: any;
                data: any;
            }) => any;
            deleteInstrumento: ({ jwtToken, instrumentoId }: {
                jwtToken: any;
                instrumentoId: any;
            }) => any;
        };
        videoTutorial: {
            getById: ({ videoId }: {
                videoId: any;
            }) => any;
            getAll: () => any;
            createVideo: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateVideo: ({ jwtToken, videoId, data }: {
                jwtToken: any;
                videoId: any;
                data: any;
            }) => any;
            deleteVideo: ({ jwtToken, videoId }: {
                jwtToken: any;
                videoId: any;
            }) => any;
        };
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
            getAllPanel: () => any;
        };
        categoriesBlog: {
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
        areaTeam: {
            getAll: () => any;
            updateArea: ({ jwtToken, areaId, data }: {
                jwtToken: any;
                areaId: any;
                data: any;
            }) => any;
            deleteArea: ({ jwtToken, areaId }: {
                jwtToken: any;
                areaId: any;
            }) => any;
            getById: ({ areaId }: {
                areaId: any;
            }) => any;
            createArea: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        teamMember: {
            getAll: () => any;
            updateMember: ({ jwtToken, memberId, data }: {
                jwtToken: any;
                memberId: any;
                data: any;
            }) => any;
            deleteMember: ({ jwtToken, memberId }: {
                jwtToken: any;
                memberId: any;
            }) => any;
            getById: ({ memberId }: {
                memberId: any;
            }) => any;
            createMember: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        aliados: {
            getAll: () => any;
            updateAliado: ({ jwtToken, aliadoId, data }: {
                jwtToken: any;
                aliadoId: any;
                data: any;
            }) => any;
            deleteAliado: ({ jwtToken, aliadoId }: {
                jwtToken: any;
                aliadoId: any;
            }) => any;
            getById: ({ aliadoId }: {
                aliadoId: any;
            }) => any;
            createAliado: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        topicBlog: {
            getAll: () => any;
            updateTopic: ({ jwtToken, topicId, data }: {
                jwtToken: any;
                topicId: any;
                data: any;
            }) => any;
            deleteTopic: ({ jwtToken, topicId }: {
                jwtToken: any;
                topicId: any;
            }) => any;
            getById: ({ topicId }: {
                topicId: any;
            }) => any;
            createTopic: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        destacadosHome: {
            getAll: () => any;
            updateDestacado: ({ jwtToken, destacadoId, data }: {
                jwtToken: any;
                destacadoId: any;
                data: any;
            }) => any;
            deleteDestacado: ({ jwtToken, destacadoId }: {
                jwtToken: any;
                destacadoId: any;
            }) => any;
            getById: ({ destacadoId }: {
                destacadoId: any;
            }) => any;
            createDestacado: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            getPanel: () => any;
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
                jwtToken: any;
                colorId: any;
            }) => any;
            createColor: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateColor: ({ jwtToken, colorId, data }: {
                jwtToken: any;
                colorId: any;
                data: any;
            }) => any;
            getAllPalettes: () => any;
            updatePalette: ({ jwtToken, paletteId, data }: {
                jwtToken: any;
                paletteId: any;
                data: any;
            }) => any;
            deletePalette: ({ jwtToken, paletteId }: {
                jwtToken: any;
                paletteId: any;
            }) => any;
            getByIdPalette: ({ paletteId }: {
                paletteId: any;
            }) => any;
            createPalette: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        seccionAliados: {
            get: () => any;
            updateAliadosSeccion: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            deleteAliadosSeccion: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        homeBursatil: {
            getAll: () => any;
            updateHome: ({ jwtToken, homeCardId, data }: {
                jwtToken: any;
                homeCardId: any;
                data: any;
            }) => any;
            deleteHome: ({ jwtToken, homeCardId }: {
                jwtToken: any;
                homeCardId: any;
            }) => any;
            getById: ({ homeCardId }: {
                homeCardId: any;
            }) => any;
            createHome: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        contactNewsleter: {
            getById: ({ jwtToken, contactId }: {
                jwtToken: any;
                contactId: any;
            }) => any;
            getAll: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            createContact: ({ data }: {
                data: any;
            }) => any;
            updateContact: ({ jwtToken, contactId, data }: {
                jwtToken: any;
                contactId: any;
                data: any;
            }) => any;
            deleteContact: ({ jwtToken, contactId }: {
                jwtToken: any;
                contactId: any;
            }) => any;
        };
        contactAsociado: {
            getById: ({ jwtToken, asesorId }: {
                jwtToken: any;
                asesorId: any;
            }) => any;
            getAll: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            createAsesor: ({ data }: {
                data: any;
            }) => any;
            updateContact: ({ jwtToken, asesorId, data }: {
                jwtToken: any;
                asesorId: any;
                data: any;
            }) => any;
            deleteAsesor: ({ jwtToken, asesorId }: {
                jwtToken: any;
                asesorId: any;
            }) => any;
        };
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
        inversorProfile: {
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
        simulador: {
            simular: ({ data }: {
                data: any;
            }) => any;
        };
        libreria: {
            getAll: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            updateLibreriaBursatil: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
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
        upload: {
            update: ({ jwtToken, file }: {
                jwtToken: any;
                file: any;
            }) => any;
        };
        blogMedia: {
            getAll: () => any;
            updateBlogMedia: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            deleteBlogMedia: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            uploadAndUpdate: ({ jwtToken, file, name }: {
                jwtToken: any;
                file: any;
                name: any;
            }) => Promise<any>;
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
            getFilters: ({ year, topicDocumentId, categoryDocumentId, search }: {
                year: any;
                topicDocumentId: any;
                categoryDocumentId: any;
                search: any;
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
            getFilters: () => any;
            getByDocumentId: ({ foundDocumentId }: {
                foundDocumentId: any;
            }) => any;
        };
        areaTeam: {
            getAll: () => any;
            updateArea: ({ jwtToken, areaId, data }: {
                jwtToken: any;
                areaId: any;
                data: any;
            }) => any;
            deleteArea: ({ jwtToken, areaId }: {
                jwtToken: any;
                areaId: any;
            }) => any;
            getById: ({ areaId }: {
                areaId: any;
            }) => any;
            createArea: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        categoriesBlog: {
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
            getAllPanel: () => any;
        };
        homeFondos: {
            getAll: () => any;
            updateHome: ({ jwtToken, homeCardId, data }: {
                jwtToken: any;
                homeCardId: any;
                data: any;
            }) => any;
            deleteHome: ({ jwtToken, homeCardId }: {
                jwtToken: any;
                homeCardId: any;
            }) => any;
            getById: ({ homeCardId }: {
                homeCardId: any;
            }) => any;
            createHome: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        paletteAndColors: {
            getAllColor: () => any;
            getByIdColor: ({ colorId }: {
                colorId: any;
            }) => any;
            deleteColor: ({ jwtToken, colorId }: {
                jwtToken: any;
                colorId: any;
            }) => any;
            createColor: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateColor: ({ jwtToken, colorId, data }: {
                jwtToken: any;
                colorId: any;
                data: any;
            }) => any;
            getAllPalettes: () => any;
            updatePalette: ({ jwtToken, paletteId, data }: {
                jwtToken: any;
                paletteId: any;
                data: any;
            }) => any;
            deletePalette: ({ jwtToken, paletteId }: {
                jwtToken: any;
                paletteId: any;
            }) => any;
            getByIdPalette: ({ paletteId }: {
                paletteId: any;
            }) => any;
            createPalette: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
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
        teamMember: {
            getAll: () => any;
            updateMember: ({ jwtToken, memberId, data }: {
                jwtToken: any;
                memberId: any;
                data: any;
            }) => any;
            deleteMember: ({ jwtToken, memberId }: {
                jwtToken: any;
                memberId: any;
            }) => any;
            getById: ({ memberId }: {
                memberId: any;
            }) => any;
            createMember: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        inversorProfile: {
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
        topicBlog: {
            getAll: () => any;
            updateTopic: ({ jwtToken, topicId, data }: {
                jwtToken: any;
                topicId: any;
                data: any;
            }) => any;
            deleteTopic: ({ jwtToken, topicId }: {
                jwtToken: any;
                topicId: any;
            }) => any;
            getById: ({ topicId }: {
                topicId: any;
            }) => any;
            createTopic: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        videoTutorial: {
            getById: ({ videoId }: {
                videoId: any;
            }) => any;
            getAll: () => any;
            createVideo: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            updateVideo: ({ jwtToken, videoId, data }: {
                jwtToken: any;
                videoId: any;
                data: any;
            }) => any;
            deleteVideo: ({ jwtToken, videoId }: {
                jwtToken: any;
                videoId: any;
            }) => any;
        };
        nuestroEquipo: {
            getAll: () => any;
            updateInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            deleteInstitutional: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
        };
        tiposActivos: {
            getAll: () => any;
            updateActivo: ({ jwtToken, activoId, data }: {
                jwtToken: any;
                activoId: any;
                data: any;
            }) => any;
            deleteActivo: ({ jwtToken, activoId }: {
                jwtToken: any;
                activoId: any;
            }) => any;
            getById: ({ activoId }: {
                activoId: any;
            }) => any;
            createActivo: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        caracteristicasFound: {
            getAll: () => any;
            updateCaracteristica: ({ jwtToken, caracteristicaId, data }: {
                jwtToken: any;
                caracteristicaId: any;
                data: any;
            }) => any;
            deleteCaracteristica: ({ jwtToken, caracteristicaId }: {
                jwtToken: any;
                caracteristicaId: any;
            }) => any;
            getById: ({ caracteristicaId }: {
                caracteristicaId: any;
            }) => any;
            createCaracteristica: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
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
                jwtToken: any;
                infoId: any;
                data: any;
            }) => any;
            deleteInformacion: ({ jwtToken, infoId }: {
                jwtToken: any;
                infoId: any;
            }) => any;
            getById: ({ infoId }: {
                infoId: any;
            }) => any;
            createInformacion: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        informacionParaInversorFile: {
            getAll: () => any;
            updateFile: ({ jwtToken, fileId, data }: {
                jwtToken: any;
                fileId: any;
                data: any;
            }) => any;
            deleteFile: ({ jwtToken, fileId }: {
                jwtToken: any;
                fileId: any;
            }) => any;
            getById: ({ fileId }: {
                fileId: any;
            }) => any;
            createFile: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
        cuotaParte: {
            getAll: ({ numero_fondo, clase_fondo, page, pageSize }: {
                numero_fondo: any;
                clase_fondo: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
            updateCuotaParte: ({ jwtToken, cuotaParteId, data }: {
                jwtToken: any;
                cuotaParteId: any;
                data: any;
            }) => any;
            deleteCuotaParte: ({ jwtToken, cuotaParteId }: {
                jwtToken: any;
                cuotaParteId: any;
            }) => any;
            getById: ({ cuotaParteId }: {
                cuotaParteId: any;
            }) => any;
            createCuotaParte: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
            getByRange: ({ numero_fondo, clase_fondo, fecha_inicio, fecha_fin, page, pageSize, }: {
                numero_fondo: any;
                clase_fondo: any;
                fecha_inicio: any;
                fecha_fin: any;
                page?: number | undefined;
                pageSize?: number | undefined;
            }) => any;
        };
        libreria: {
            getAll: ({ jwtToken }: {
                jwtToken: any;
            }) => any;
            updateLibreriaFondos: ({ jwtToken, data }: {
                jwtToken: any;
                data: any;
            }) => any;
        };
    };
};
