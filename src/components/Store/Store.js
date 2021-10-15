let updateTransaction = undefined;
let updateGroup = undefined;
let updateUser = undefined;
let lastTransaction = 0;

export const transaction = updateTransaction ?? require('../../data/transaction.json');
export const group = updateGroup ?? require('../../data/group.json');
export const user = updateUser ?? require('../../data/user.json');

export const dataStore = (amount, paid_by, owes, desc, groupName) => {

    if (updateTransaction === undefined) {
        console.log("unpdate empty")
        lastTransaction = +transaction.last
        updateTransaction = transaction;
        updateGroup = group;
        updateUser = user;
    }
    
    lastTransaction += 1;
    updateTransaction[lastTransaction] = {
        amount,
        paid_by,
        owes,
        desc
    }
    updateTransaction.last=lastTransaction;
    if (groupName === 'No group') {
        for (let name of owes) {
            updateUser[paid_by]= updateUser[paid_by] ?? {}
            updateUser[paid_by] = {
                [name]: updateUser[paid_by].name ?? [],
                owes: updateUser[paid_by].owes ?? []
            }
            updateUser[paid_by] = {
                [name]: [...updateUser[paid_by][name], lastTransaction]
            }

            updateUser[name] = updateUser[name] ?? {};
            updateUser[name] = {
                owes: updateUser[name].owes ?? []
            }
            updateUser[name] = {
                owes: [...updateUser[name].owes, paid_by]
            }
        }
    }
    else {
        updateGroup[groupName] = {
            transaction: [...updateGroup[groupName].transaction, lastTransaction],
            users: [...updateGroup[groupName].users]
        }
    }

}