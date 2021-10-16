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
    // console.log(updateUser)
    lastTransaction += 1;
    updateTransaction[lastTransaction] = {
        amount,
        paid_by,
        owes,
        desc
    }
    updateTransaction.last = lastTransaction;
    if (groupName === 'No group') {
        updateUser[paid_by] = updateUser[paid_by] ?? {}
        console.log("owe",owes)
        owes.forEach(name=>{
            updateUser[paid_by] = { ...updateUser[paid_by],
                [name]: updateUser[paid_by][name] ?? [],
                owes: updateUser[paid_by].owes ?? []
            }
            updateUser[paid_by] = {
                ...updateUser[paid_by],
                [name]: [...updateUser[paid_by][name], lastTransaction],      
            }

            updateUser[name] = updateUser[name] ?? {};
            updateUser[name] = {
                ...updateUser[name],
                owes: updateUser[name].owes ?? []
            }
            updateUser[name] = {
                ...updateUser[name],
                owes: [...updateUser[name].owes, paid_by]
            }
        })
    }
    else {
        updateGroup[groupName] = {
            transaction: [...updateGroup[groupName].transaction, lastTransaction],
            users: [...updateGroup[groupName].users]
        }
    }
    console.log("Update Data", updateUser, updateTransaction, updateGroup)
}

export const settler = (userName) => {

    if (updateTransaction === undefined) {
        console.log("unpdate empty")
        updateTransaction = transaction;
        updateGroup = group;
        updateUser = user;
    }

    //Lent
    for (let oweTo in updateUser[userName]) {
        for (let transactionId of updateUser[userName][oweTo]) {
            delete updateTransaction[transactionId]
        }
    }
    console.log(updateUser[userName])
    //Owe
    updateUser[userName].owes.forEach(name => {
        updateUser[name][userName].forEach(transactionId => {
            if (updateTransaction[transactionId].owes.length === 1) {
                delete updateTransaction[transactionId]
            } else {
                updateTransaction[transactionId].owes = updateTransaction[transactionId].owes.filter(name => name !== userName)
            }
        })
        delete updateUser[name][userName];
        updateUser[name].owes=updateUser[name].owes.filter(name=> name !== userName)
    });
    delete updateUser[userName];
    console.log("Deleted User", updateUser);
    console.log("Transaction", updateTransaction)
    // for (let group in updateGroup) {
    //     if (updateGroup[group].users.includes(user)) {
    //         for (let transactionId of updateGroup[group].transaction) {
    //             if (updateTransaction[transactionId].paid_by === user) {
    //                 delete updateTransaction[transactionId]
    //             }
    //             else if (updateTransaction[transactionId].owes.includes(user)) {
    //                 updateTransaction[transactionId].owes =
    //                     updateTransaction[transactionId].owes.
    //                         filter((friends) => friends !== user)
    //             }
    //         }
    //     }
    // }
}