type TRepoData = {
    id: number;
    url_deploy: string;
    url_repo: string;
    img: string;
    name: string;
    description: string;
};

export const repositoriesDatabase: Array<TRepoData> = [
    {
        id: 1,
        url_deploy: "https://kenziehub-lovat-tau.vercel.app/",
        url_repo: "https://github.com/lucasvabrantes/kenziehub",
        img: "https://dsm01pap006files.storage.live.com/y4mbhBysvofb9lKCoH99c_wI38Kx5ogfkn6JQE2_cwn4_XiEUUJNuJVMte117z8qDRu8WAi5SaDb55dX-YqMsOD1d3uslJiuY4vwA9-Yb-iqT2ABHSj1SaISS2hxMmkrXONUvu_6UUnD5FhKKmJuPell6hThvwCJTgN-gR2lRaFu4IEadEYF_e7yAjZjWFBDgsRlMMRpml0E5UqBU1WKPBgjzhkOEj8E85X2n_LfvMczjk?encodeFailures=1&width=595&height=305",
        name: "KenzieHub",
        description:
            "Plataforma construída com ReactJs, Styled-Components, Zod, React-Toastify e Axios. Permite ao usuário, cadastrar-se, logar, cadastrar tecnologias e seu respectivo nível de conhecimento, podendo também deletá-las e atualizá-las.",
    },
    {
        id: 2,
        url_deploy:
            "https://kenzie-academy-brasil-developers-react-entrega-s3-5f8fl93eq.vercel.app/",
        url_repo: "https://github.com/lucasvabrantes/hamburgueria-kenzie",
        img: "https://dsm01pap006files.storage.live.com/y4mUY1dRxHe1fsvFEEaOuYTkUM5GRIL99F3DOOiYYr8tDKwMMqY7Gsiuzp_2mYZfJcvsHJSr7Y0hcDyNeunmoEGHjsBZHGuNQEDmaF7cgCRrkEibLNAa75Oqne49lfaLsDcrkosjJfx86IUmmr3K60WAzcaJuxLrprWlC8eS4puoOBBJ_bQLApZM3gAPsDxzVm3HtMI1Qwxez0mf6WP-SE3rFmq1btZzxsMJlQ31604tu8?encodeFailures=1&width=2380&height=1220",
        name: "Hamburgueria Kenzie",
        description:
            "Página de uma hamburgueria, na qual é possível adicionar produtos no carrinho de compras, remover individualmente, remover todos de uma vez. Ademais, há opção de buscar o produto pelo seu nome ou da categoria a qual pertence.",
    },
    {
        id: 3,
        url_deploy:
            "https://kenzie-academy-brasil-developers-react-entrega-s1-nfzmm9bcj.vercel.app/",
        url_repo: "https://github.com/lucasvabrantes/Nu-Kenzie",
        img: "https://dsm01pap006files.storage.live.com/y4mWhukYxyz889TI6GwSscbayLJZcuFrQrY3ltjeAc7xjtrb6TG89NvoVfjricAqruFrkcCEaZLHIOWYe3ac-v7xxB_mWNuK58TvPOXcfS03OBxDUGBq4VCcPgEp1NWXdN0yYOF8tQe_LHy3tJhDU4ATy_jneD2Z7QBp7NX_p02iGbDftkI16pcM8JboBwstjwHyCrYB5dog9gxc-7gWUPCrZeWi7XNbTOtbuFUEfEi7F0?encodeFailures=1&width=2380&height=1220",
        name: "Nu Kenzie",
        description:
            "Basicamente, trata-se de uma aplicação totalmente responsiva, na qual é possível adicionar valores, sendo estes, ou uma despesa, ou uma entrada. Também é possível excluir uma transação individualmente da lista de resumo financeiro. ",
    },
];
