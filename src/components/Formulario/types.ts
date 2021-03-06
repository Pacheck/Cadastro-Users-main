export interface IFormValues {
    nome: string;
    cpf: string;
    email: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
}

export interface IUserParams {
    userId: string;
}

export interface IFetchResponseData {
    newCep: string;
    logradouro: string;
    localidade: string;
    bairro: string;
    complemento: string;
    isFetched: boolean;
}

export interface IEndereco {
    logradouro: string;
    localidade: string;
    complemento: string;
    bairro: string;
}