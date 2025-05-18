export interface AccountDetails {
    accountId:            string;
    balance:              number;
    currentPage:          number;
    totalPages:           number;
    pageSize:             number;
    accountOperationDTOS: AccountOperationDTO[];
}

export interface AccountOperationDTO {
    id:          number;
    date:        Date;
    amount:      number;
    type:        string;
    description: null;
}